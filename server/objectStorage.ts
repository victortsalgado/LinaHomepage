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
    const ext = fileName.toLowerCase().substring(fileName.lastIndexOf('.'));
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

  // Cataloga todas as imagens existentes no projeto local
  async catalogLocalImages(): Promise<{
    totalImages: number;
    byCategory: Record<string, string[]>;
    byLocation: Record<string, string[]>;
    migrationPlan: Record<string, { files: string[], targetFolder: string }>;
  }> {
    const fs = await import('fs/promises');
    const path = await import('path');
    
    const imagesByCategory: Record<string, string[]> = {
      logos: [],
      icons: [],
      backgrounds: [],
      products: [],
      clients: [],
      figma_assets: [],
      generated_images: [],
      home_banners: [],
      valores: [],
      outros: []
    };

    const imagesByLocation: Record<string, string[]> = {
      'client/public/assets': [],
      'client/public/figmaAssets': [],
      'client/src/assets': [],
      'attached_assets': []
    };

    const allImages: string[] = [];

    // Função para escanear diretório recursivamente
    const scanDirectory = async (dirPath: string, basePath: string = '') => {
      try {
        const items = await fs.readdir(dirPath, { withFileTypes: true });
        
        for (const item of items) {
          const fullPath = path.join(dirPath, item.name);
          const relativePath = basePath ? `${basePath}/${item.name}` : item.name;
          
          if (item.isDirectory()) {
            await scanDirectory(fullPath, relativePath);
          } else if (this.isImageFile(item.name)) {
            // CORRIGIDO: Usar path.relative corretamente para evitar duplicação de segmentos
            const absolutePath = path.join(dirPath, item.name);
            const fullRelativePath = path.relative(process.cwd(), absolutePath);
            allImages.push(fullRelativePath);
            
            // Categorizar por localização
            const locationKey = Object.keys(imagesByLocation).find(loc => 
              fullRelativePath.startsWith(loc)
            ) || 'outros';
            imagesByLocation[locationKey].push(fullRelativePath);
            
            // Categorizar por tipo de imagem
            const category = this.categorizeImageForMigration(item.name, fullRelativePath);
            imagesByCategory[category].push(fullRelativePath);
          }
        }
      } catch (error) {
        console.log(`Diretório ${dirPath} não encontrado ou inacessível`);
      }
    };

    // Escanear diretórios principais
    const dirsToScan = [
      path.join(process.cwd(), 'client/public/assets'),
      path.join(process.cwd(), 'client/public/figmaAssets'),
      path.join(process.cwd(), 'client/src/assets'),
      path.join(process.cwd(), 'attached_assets')
    ];

    for (const dir of dirsToScan) {
      await scanDirectory(dir);
    }

    // Criar plano de migração
    const migrationPlan = this.createMigrationPlan(imagesByCategory);

    return {
      totalImages: allImages.length,
      byCategory: imagesByCategory,
      byLocation: imagesByLocation,
      migrationPlan
    };
  }

  // Categoriza imagem para migração baseado no nome e caminho
  private categorizeImageForMigration(fileName: string, filePath: string): string {
    const lowerName = fileName.toLowerCase();
    const lowerPath = filePath.toLowerCase();

    // Logos e branding
    if (lowerName.includes('logo') || lowerName.includes('lina') || 
        lowerPath.includes('mastercard') || lowerName.includes('bradesco') ||
        lowerName.includes('caixa') || lowerName.includes('safra') ||
        lowerName.includes('sicoob') || lowerName.includes('stone')) {
      return 'logos';
    }

    // Ícones e produtos
    if (lowerName.includes('icone') || lowerName.includes('icon') || 
        lowerName.includes('datalink') || lowerName.includes('linapay') ||
        lowerName.includes('linajsr')) {
      return 'icons';
    }

    // Banners e backgrounds de home
    if (lowerName.includes('banner') || lowerName.includes('bg') || 
        lowerName.includes('home_bg') || lowerName.includes('ilustra_banner')) {
      return 'home_banners';
    }

    // Assets do Figma
    if (lowerPath.includes('figmaassets') || lowerPath.includes('figma')) {
      return 'figma_assets';
    }

    // Imagens geradas
    if (lowerPath.includes('generated_images') || lowerName.includes('3d_') || 
        lowerName.includes('fintech_') || lowerName.includes('visualization')) {
      return 'generated_images';
    }

    // Valores da empresa
    if (lowerName.includes('valores_lina') || lowerName.includes('compromisso') ||
        lowerName.includes('evolucao') || lowerName.includes('paixao')) {
      return 'valores';
    }

    // Clientes e parceiros
    if (lowerName.includes('client') || lowerName.includes('cloudwalk') ||
        lowerName.includes('icatu') || lowerName.includes('hdi')) {
      return 'clients';
    }

    // Produtos e mockups
    if (lowerName.includes('mockup') || lowerName.includes('produto') ||
        lowerName.includes('datalink_') || lowerName.includes('linapay_')) {
      return 'products';
    }

    return 'outros';
  }

  // Cria plano de migração organizando categorias em pastas do App Storage
  private createMigrationPlan(imagesByCategory: Record<string, string[]>): Record<string, { files: string[], targetFolder: string }> {
    return {
      logos: {
        files: imagesByCategory.logos,
        targetFolder: 'home/logos'
      },
      icons: {
        files: imagesByCategory.icons,
        targetFolder: 'home/icones'
      },
      home_banners: {
        files: imagesByCategory.home_banners,
        targetFolder: 'home/banners'
      },
      products: {
        files: imagesByCategory.products,
        targetFolder: 'home/produtos'
      },
      clients: {
        files: imagesByCategory.clients,
        targetFolder: 'home/clientes'
      },
      valores: {
        files: imagesByCategory.valores,
        targetFolder: 'home/valores'
      },
      figma_assets: {
        files: imagesByCategory.figma_assets,
        targetFolder: 'home/figma'
      },
      generated_images: {
        files: imagesByCategory.generated_images,
        targetFolder: 'home/generated'
      },
      outros: {
        files: imagesByCategory.outros,
        targetFolder: 'home/outros'
      }
    };
  }

  // Migra uma imagem local para o App Storage
  async migrateImageToStorage(localPath: string, targetFolder: string, fileName?: string): Promise<string> {
    const fs = await import('fs/promises');
    const path = await import('path');

    try {
      // CORRIGIDO: Verificar se PRIVATE_OBJECT_DIR está configurado com validação melhorada
      let privateObjectDir: string;
      try {
        privateObjectDir = this.getPrivateObjectDir();
      } catch (error) {
        throw new Error('App Storage não está configurado. Configure o bucket no painel Object Storage para habilitar a migração.');
      }

      // CORRIGIDO: Garantir que o caminho local é absoluto
      const absoluteLocalPath = path.resolve(localPath);
      
      // Verificar se o arquivo existe antes de tentar lê-lo
      try {
        await fs.access(absoluteLocalPath);
      } catch {
        throw new Error(`Arquivo não encontrado: ${localPath}`);
      }

      // Define o nome do arquivo no destino
      const finalFileName = fileName || path.basename(absoluteLocalPath);
      const targetPath = `${targetFolder}/${finalFileName}`;
      
      // Constrói o caminho completo no object storage
      const fullObjectPath = `${privateObjectDir}/${targetPath}`;
      
      const { bucketName, objectName } = parseObjectPath(fullObjectPath);
      const bucket = objectStorageClient.bucket(bucketName);
      const file = bucket.file(objectName);

      // CORRIGIDO: Usar fs.promises.readFile em vez de readFileSync
      const fileBuffer = await fs.readFile(absoluteLocalPath);
      
      // Faz upload do arquivo
      await file.save(fileBuffer, {
        metadata: {
          contentType: this.getContentType(finalFileName)
        }
      });

      console.log(`Imagem migrada: ${localPath} -> ${targetPath}`);
      return targetPath;
    } catch (error) {
      console.error(`Erro ao migrar imagem ${localPath}:`, error);
      throw error;
    }
  }

  // Executa migração completa baseada no plano
  async executeMigration(migrationPlan: Record<string, { files: string[], targetFolder: string }>): Promise<{
    success: string[];
    failed: { file: string, error: string }[];
    total: number;
  }> {
    const results = {
      success: [] as string[],
      failed: [] as { file: string, error: string }[],
      total: 0
    };

    for (const [category, plan] of Object.entries(migrationPlan)) {
      console.log(`Migrando categoria: ${category} (${plan.files.length} arquivos)`);
      
      for (const filePath of plan.files) {
        results.total++;
        
        try {
          const targetPath = await this.migrateImageToStorage(filePath, plan.targetFolder);
          results.success.push(`${filePath} -> ${targetPath}`);
        } catch (error) {
          results.failed.push({
            file: filePath,
            error: error instanceof Error ? error.message : String(error)
          });
        }
      }
    }

    return results;
  }

  // Obtém o tipo MIME baseado na extensão do arquivo
  private getContentType(fileName: string): string {
    const ext = fileName.toLowerCase().split('.').pop();
    const mimeTypes: Record<string, string> = {
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'gif': 'image/gif',
      'svg': 'image/svg+xml',
      'webp': 'image/webp'
    };
    return mimeTypes[ext || ''] || 'application/octet-stream';
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