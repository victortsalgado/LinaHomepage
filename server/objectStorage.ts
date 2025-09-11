import { Storage, File } from "@google-cloud/storage";
import { Response } from "express";
import { randomUUID } from "crypto";
import {
  ObjectAclPolicy,
  ObjectPermission,
  canAccessObject,
  getObjectAclPolicy,
  setObjectAclPolicy,
} from "./objectAcl";

const REPLIT_SIDECAR_ENDPOINT = "http://127.0.0.1:1106";

// The object storage client is used to interact with the object storage service.
export const objectStorageClient = new Storage({
  credentials: {
    audience: "replit",
    subject_token_type: "access_token",
    token_url: `${REPLIT_SIDECAR_ENDPOINT}/token`,
    type: "external_account",
    credential_source: {
      url: `${REPLIT_SIDECAR_ENDPOINT}/credential`,
      format: {
        type: "json",
        subject_token_field_name: "access_token",
      },
    },
    universe_domain: "googleapis.com",
  },
  projectId: "",
});

export class ObjectNotFoundError extends Error {
  constructor() {
    super("Object not found");
    this.name = "ObjectNotFoundError";
    Object.setPrototypeOf(this, ObjectNotFoundError.prototype);
  }
}

// The object storage service is used to interact with the object storage service.
export class ObjectStorageService {
  constructor() {}

  // Gets the public object search paths.
  getPublicObjectSearchPaths(): Array<string> {
    const pathsStr = process.env.PUBLIC_OBJECT_SEARCH_PATHS || "";
    const paths = Array.from(
      new Set(
        pathsStr
          .split(",")
          .map((path) => path.trim())
          .filter((path) => path.length > 0)
      )
    );
    if (paths.length === 0) {
      throw new Error(
        "PUBLIC_OBJECT_SEARCH_PATHS not set. Create a bucket in 'Object Storage' " +
          "tool and set PUBLIC_OBJECT_SEARCH_PATHS env var (comma-separated paths)."
      );
    }
    return paths;
  }

  // Gets the private object directory.
  getPrivateObjectDir(): string {
    const dir = process.env.PRIVATE_OBJECT_DIR || "";
    if (!dir) {
      throw new Error(
        "PRIVATE_OBJECT_DIR not set. Create a bucket in 'Object Storage' " +
          "tool and set PRIVATE_OBJECT_DIR env var."
      );
    }
    return dir;
  }

  // Search for a public object from the search paths.
  async searchPublicObject(filePath: string): Promise<File | null> {
    for (const searchPath of this.getPublicObjectSearchPaths()) {
      const fullPath = `${searchPath}/${filePath}`;

      // Full path format: /<bucket_name>/<object_name>
      const { bucketName, objectName } = parseObjectPath(fullPath);
      const bucket = objectStorageClient.bucket(bucketName);
      const file = bucket.file(objectName);

      // Check if file exists
      const [exists] = await file.exists();
      if (exists) {
        return file;
      }
    }

    return null;
  }

  // Downloads an object to the response.
  async downloadObject(file: File, res: Response, cacheTtlSec: number = 3600) {
    try {
      // Get file metadata
      const [metadata] = await file.getMetadata();
      // Get the ACL policy for the object.
      const aclPolicy = await getObjectAclPolicy(file);
      const isPublic = aclPolicy?.visibility === "public";
      // Set appropriate headers
      res.set({
        "Content-Type": metadata.contentType || "application/octet-stream",
        "Content-Length": metadata.size,
        "Cache-Control": `${
          isPublic ? "public" : "private"
        }, max-age=${cacheTtlSec}`,
      });

      // Stream the file to the response
      const stream = file.createReadStream();

      stream.on("error", (err) => {
        console.error("Stream error:", err);
        if (!res.headersSent) {
          res.status(500).json({ error: "Error streaming file" });
        }
      });

      stream.pipe(res);
    } catch (error) {
      console.error("Error downloading file:", error);
      if (!res.headersSent) {
        res.status(500).json({ error: "Error downloading file" });
      }
    }
  }

  // Gets the upload URL for an object entity.
  async getObjectEntityUploadURL(): Promise<string> {
    const privateObjectDir = this.getPrivateObjectDir();
    if (!privateObjectDir) {
      throw new Error(
        "PRIVATE_OBJECT_DIR not set. Create a bucket in 'Object Storage' " +
          "tool and set PRIVATE_OBJECT_DIR env var."
      );
    }

    const objectId = randomUUID();
    const fullPath = `${privateObjectDir}/uploads/${objectId}`;

    const { bucketName, objectName } = parseObjectPath(fullPath);

    // Sign URL for PUT method with TTL
    return signObjectURL({
      bucketName,
      objectName,
      method: "PUT",
      ttlSec: 900,
    });
  }

  // Gets the object entity file from the object path.
  async getObjectEntityFile(objectPath: string): Promise<File> {
    if (!objectPath.startsWith("/objects/")) {
      throw new ObjectNotFoundError();
    }

    const parts = objectPath.slice(1).split("/");
    if (parts.length < 2) {
      throw new ObjectNotFoundError();
    }

    const entityId = parts.slice(1).join("/");
    let entityDir = this.getPrivateObjectDir();
    if (!entityDir.endsWith("/")) {
      entityDir = `${entityDir}/`;
    }
    const objectEntityPath = `${entityDir}${entityId}`;
    const { bucketName, objectName } = parseObjectPath(objectEntityPath);
    const bucket = objectStorageClient.bucket(bucketName);
    const objectFile = bucket.file(objectName);
    const [exists] = await objectFile.exists();
    if (!exists) {
      throw new ObjectNotFoundError();
    }
    return objectFile;
  }

  normalizeObjectEntityPath(
    rawPath: string,
  ): string {
    if (!rawPath.startsWith("https://storage.googleapis.com/")) {
      return rawPath;
    }
  
    // Extract the path from the URL by removing query parameters and domain
    const url = new URL(rawPath);
    const rawObjectPath = url.pathname;
  
    let objectEntityDir = this.getPrivateObjectDir();
    if (!objectEntityDir.endsWith("/")) {
      objectEntityDir = `${objectEntityDir}/`;
    }
  
    if (!rawObjectPath.startsWith(objectEntityDir)) {
      return rawObjectPath;
    }
  
    // Extract the entity ID from the path
    const entityId = rawObjectPath.slice(objectEntityDir.length);
    return `/objects/${entityId}`;
  }

  // Tries to set the ACL policy for the object entity and return the normalized path.
  async trySetObjectEntityAclPolicy(
    rawPath: string,
    aclPolicy: ObjectAclPolicy
  ): Promise<string> {
    const normalizedPath = this.normalizeObjectEntityPath(rawPath);
    if (!normalizedPath.startsWith("/")) {
      return normalizedPath;
    }

    const objectFile = await this.getObjectEntityFile(normalizedPath);
    await setObjectAclPolicy(objectFile, aclPolicy);
    return normalizedPath;
  }

  // Checks if the user can access the object entity.
  async canAccessObjectEntity({
    userId,
    objectFile,
    requestedPermission,
  }: {
    userId?: string;
    objectFile: File;
    requestedPermission?: ObjectPermission;
  }): Promise<boolean> {
    return canAccessObject({
      userId,
      objectFile,
      requestedPermission: requestedPermission ?? ObjectPermission.READ,
    });
  }

  // Lista todas as imagens públicas organizadas por categorias
  async listImagesByCategory(): Promise<Record<string, string[]>> {
    const categories: Record<string, string[]> = {
      logos: [],
      icons: [],
      backgrounds: [],
      products: [],
      clients: [],
      generated: [],
      figma: [],
      outros: []
    };

    try {
      // Try object storage first
      const publicPaths = this.getPublicObjectSearchPaths();
      for (const searchPath of publicPaths) {
        const { bucketName, objectName: prefix } = parseObjectPath(searchPath);
        const bucket = objectStorageClient.bucket(bucketName);
        
        const [files] = await bucket.getFiles({ prefix });
        
        for (const file of files) {
          const fileName = file.name;
          
          // Filtrar diretórios marcadores (terminam com "/")
          if (fileName.endsWith('/')) {
            continue;
          }
          
          // Categoriza as imagens baseado no nome e caminho
          const fileNameLower = fileName.toLowerCase();
          const category = this.categorizeImage(fileNameLower);
          if (categories[category]) {
            categories[category].push(fileName);
          }
        }
      }
    } catch (error) {
      console.error("Object storage not configured, using fallback to local assets:", error instanceof Error ? error.message : String(error));
      
      // Fallback: scan local public assets
      return this.listLocalImages();
    }

    return categories;
  }

  // Fallback para listar imagens locais quando object storage não está configurado
  private async listLocalImages(): Promise<Record<string, string[]>> {
    const categories: Record<string, string[]> = {
      logos: [],
      icons: [],
      backgrounds: [],
      products: [],
      clients: [],
      generated: [],
      figma: [],
      outros: []
    };

    const fs = await import('fs/promises');
    const path = await import('path');

    try {
      // Scan client/public/assets
      const publicAssetsPath = path.join(process.cwd(), 'client/public/assets');
      try {
        const publicFiles = await fs.readdir(publicAssetsPath, { recursive: true });
        for (const file of publicFiles) {
          if (typeof file === 'string' && this.isImageFile(file)) {
            const category = this.categorizeImage(file.toLowerCase());
            categories[category].push(`assets/${file}`);
          }
        }
      } catch (e) {
        // Directory might not exist, continue
      }

      // Scan client/public/figmaAssets
      const figmaAssetsPath = path.join(process.cwd(), 'client/public/figmaAssets');
      try {
        const figmaFiles = await fs.readdir(figmaAssetsPath, { recursive: true });
        for (const file of figmaFiles) {
          if (typeof file === 'string' && this.isImageFile(file)) {
            const category = this.categorizeImage(file.toLowerCase());
            categories[category].push(`figmaAssets/${file}`);
          }
        }
      } catch (e) {
        // Directory might not exist, continue
      }

      // Scan client/src/assets
      const srcAssetsPath = path.join(process.cwd(), 'client/src/assets');
      try {
        const srcFiles = await fs.readdir(srcAssetsPath, { recursive: true });
        for (const file of srcFiles) {
          if (typeof file === 'string' && this.isImageFile(file)) {
            const category = this.categorizeImage(file.toLowerCase());
            categories[category].push(`src/assets/${file}`);
          }
        }
      } catch (e) {
        // Directory might not exist, continue
      }

    } catch (error) {
      console.error("Error listing local images:", error);
    }

    return categories;
  }

  // Helper para verificar se é um arquivo de imagem
  private isImageFile(fileName: string): boolean {
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];
    const ext = fileName.toLowerCase().substr(fileName.lastIndexOf('.'));
    return imageExtensions.includes(ext);
  }

  // Categoriza uma imagem baseado no nome do arquivo
  private categorizeImage(fileName: string): string {
    if (fileName.includes('logo')) return 'logos';
    if (fileName.includes('icon') || fileName.includes('ícone')) return 'icons';
    if (fileName.includes('bg') || fileName.includes('background') || fileName.includes('banner')) return 'backgrounds';
    if (fileName.includes('product') || fileName.includes('mockup')) return 'products';
    if (fileName.includes('client') || fileName.includes('bradesco') || fileName.includes('caixa') || fileName.includes('safra')) return 'clients';
    if (fileName.includes('generated_images') || fileName.includes('3d_') || fileName.includes('fintech_')) return 'generated';
    if (fileName.includes('figma')) return 'figma';
    return 'outros';
  }

  // Lista todas as pastas e arquivos no App Storage de forma organizada
  async listFoldersAndFiles(): Promise<{
    folders: string[];
    filesByFolder: Record<string, string[]>;
    allFiles: string[];
  }> {
    const folders = new Set<string>();
    const filesByFolder: Record<string, string[]> = {};
    const allFiles: string[] = [];

    try {
      const publicPaths = this.getPublicObjectSearchPaths();
      
      for (const searchPath of publicPaths) {
        const { bucketName, objectName: prefix } = parseObjectPath(searchPath);
        const bucket = objectStorageClient.bucket(bucketName);
        
        // Lista todos os arquivos com o prefixo especificado
        const [files] = await bucket.getFiles({ prefix });
        
        for (const file of files) {
          const fileName = file.name;
          
          // 1. FILTRAR DIRETÓRIOS VAZIOS: Pular marcadores de diretório que terminam com "/"
          if (fileName.endsWith('/')) {
            continue;
          }
          
          // 2. CORRIGIR NORMALIZAÇÃO: Normalizar prefixo removendo barras extras
          let normalizedPrefix = prefix || '';
          // Remove barra inicial se existir
          if (normalizedPrefix.startsWith('/')) {
            normalizedPrefix = normalizedPrefix.substring(1);
          }
          // Adiciona barra final se necessário e se não for vazio
          if (normalizedPrefix && !normalizedPrefix.endsWith('/')) {
            normalizedPrefix += '/';
          }
          
          // Remove o prefixo corretamente para obter caminho relativo
          let relativePath = fileName;
          if (normalizedPrefix && fileName.startsWith(normalizedPrefix)) {
            relativePath = fileName.substring(normalizedPrefix.length);
          }
          
          // 3. FILTRAR DIRETÓRIOS VAZIOS: Verificar se o basename está vazio ou contém apenas barras
          relativePath = relativePath.trim();
          if (!relativePath || relativePath === '/' || relativePath.endsWith('/')) {
            continue; // Pular se caminho relativo está vazio ou é apenas separadores
          }
          
          const pathParts = relativePath.split('/').filter(part => part.trim() !== '');
          
          if (pathParts.length === 0) {
            continue; // Pular se não há partes válidas no caminho
          }
          
          // Só adicionar à lista se passou por todos os filtros
          allFiles.push(fileName);
          
          // 4. MELHORAR A LÓGICA: Detectar pastas corretamente a partir dos caminhos dos arquivos
          if (pathParts.length > 1) {
            // Arquivo está em uma pasta - construir hierarquia de pastas
            let currentPath = '';
            
            // Criar todas as pastas da hierarquia (exceto a última parte que é o arquivo)
            for (let i = 0; i < pathParts.length - 1; i++) {
              currentPath += (i > 0 ? '/' : '') + pathParts[i];
              folders.add(currentPath);
              
              // Inicializar array se não existir
              if (!filesByFolder[currentPath]) {
                filesByFolder[currentPath] = [];
              }
            }
            
            // Adicionar arquivo apenas à pasta mais específica (parent direto)
            const parentFolder = pathParts.slice(0, -1).join('/');
            if (!filesByFolder[parentFolder]) {
              filesByFolder[parentFolder] = [];
            }
            filesByFolder[parentFolder].push(relativePath);
            
          } else {
            // Arquivo na raiz
            const rootKey = 'root';
            if (!filesByFolder[rootKey]) {
              filesByFolder[rootKey] = [];
            }
            filesByFolder[rootKey].push(relativePath);
            folders.add(rootKey);
          }
        }
      }
    } catch (error) {
      console.error("Erro ao listar pastas e arquivos do App Storage:", error);
      throw new Error("Não foi possível acessar o App Storage. Verifique se está configurado corretamente.");
    }

    return {
      folders: Array.from(folders).sort(),
      filesByFolder,
      allFiles: allFiles.sort()
    };
  }

  // Lista apenas as imagens organizadas por pastas reais do App Storage
  async listImagesByFolders(): Promise<Record<string, string[]>> {
    const imagesByFolder: Record<string, string[]> = {};

    try {
      const { filesByFolder } = await this.listFoldersAndFiles();
      
      // Filtra apenas arquivos de imagem para cada pasta
      for (const [folderPath, files] of Object.entries(filesByFolder)) {
        const imageFiles = files.filter(fileName => {
          const pathParts = fileName.split('/');
          const actualFileName = pathParts[pathParts.length - 1];
          return this.isImageFile(actualFileName);
        });
        
        if (imageFiles.length > 0) {
          imagesByFolder[folderPath] = imageFiles;
        }
      }
    } catch (error) {
      console.error("Erro ao listar imagens por pastas:", error);
      throw error;
    }

    return imagesByFolder;
  }
}

function parseObjectPath(path: string): {
  bucketName: string;
  objectName: string;
} {
  if (!path.startsWith("/")) {
    path = `/${path}`;
  }
  const pathParts = path.split("/");
  if (pathParts.length < 3) {
    throw new Error("Invalid path: must contain at least a bucket name");
  }

  const bucketName = pathParts[1];
  const objectName = pathParts.slice(2).join("/");

  return {
    bucketName,
    objectName,
  };
}

async function signObjectURL({
  bucketName,
  objectName,
  method,
  ttlSec,
}: {
  bucketName: string;
  objectName: string;
  method: "GET" | "PUT" | "DELETE" | "HEAD";
  ttlSec: number;
}): Promise<string> {
  const request = {
    bucket_name: bucketName,
    object_name: objectName,
    method,
    expires_at: new Date(Date.now() + ttlSec * 1000).toISOString(),
  };
  const response = await fetch(
    `${REPLIT_SIDECAR_ENDPOINT}/object-storage/signed-object-url`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to sign object URL, errorcode: ${response.status}, ` +
        `make sure you're running on Replit`
    );
  }

  const { signed_url: signedURL } = await response.json();
  return signedURL;
}