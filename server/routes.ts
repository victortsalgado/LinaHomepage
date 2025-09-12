import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  ObjectStorageService,
  ObjectNotFoundError,
} from "./objectStorage";
import { createClient } from '@sanity/client';

// Sanity client para proxy
const sanityClient = createClient({
  projectId: 'dw34kfrg',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

export async function registerRoutes(app: Express): Promise<Server> {

  // Sanity proxy routes
  app.get('/api/sanity/page/:slug', async (req, res) => {
    try {
      const { slug } = req.params;
      const query = `
        *[_type == "page" && slug.current == $slug][0]{
          _id,
          title,
          slug,
          sections[]{
            _type,
            _type == "heroSection" => {
              title,
              subtitle,
              backgroundImage{
                asset->{
                  _ref,
                  url
                }
              },
              ctaText,
              ctaLink
            },
            _type == "textSection" => {
              title,
              content,
              textAlign
            },
            _type == "imageSection" => {
              title,
              image{
                asset->{
                  _ref,
                  url
                }
              },
              alt,
              caption
            }
          }
        }
      `;
      
      const page = await sanityClient.fetch(query, { slug });
      res.json(page);
    } catch (error) {
      console.error('Error fetching page from Sanity:', error);
      res.status(500).json({ error: 'Failed to fetch page' });
    }
  });

  app.get('/api/sanity/pages', async (req, res) => {
    try {
      const query = `
        *[_type == "page"]{
          _id,
          title,
          slug
        }
      `;
      
      const pages = await sanityClient.fetch(query);
      res.json(pages);
    } catch (error) {
      console.error('Error fetching pages from Sanity:', error);
      res.status(500).json({ error: 'Failed to fetch pages' });
    }
  });

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // This endpoint is used to serve public assets.
  // IMPORTANT: always provide this endpoint.
  app.get("/public-objects/:filePath(*)", async (req, res) => {
    const filePath = req.params.filePath;
    const objectStorageService = new ObjectStorageService();
    try {
      const file = await objectStorageService.searchPublicObject(filePath);
      if (!file) {
        return res.status(404).json({ error: "File not found" });
      }
      objectStorageService.downloadObject(file, res);
    } catch (error) {
      console.error("Error searching for public object:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  // This endpoint is used to serve local assets as fallback
  // when object storage is not fully configured
  app.get("/local-assets/:filePath(*)", async (req, res) => {
    const filePath = req.params.filePath;
    const path = await import('path');
    const fs = await import('fs');
    
    // Security: only allow serving from specific directories
    const allowedPaths = [
      'client/public/assets',
      'client/public/figmaAssets', 
      'client/src/assets'
    ];
    
    let fullPath = null;
    for (const basePath of allowedPaths) {
      const testPath = path.join(process.cwd(), basePath, filePath);
      if (fs.existsSync(testPath) && testPath.startsWith(path.join(process.cwd(), basePath))) {
        fullPath = testPath;
        break;
      }
    }
    
    if (!fullPath) {
      return res.status(404).json({ error: "File not found" });
    }

    try {
      res.sendFile(fullPath);
    } catch (error) {
      console.error("Error serving local asset:", error);
      res.status(500).json({ error: "Error serving file" });
    }
  });

  // This endpoint is used to get the upload URL for an object entity.
  app.post("/api/objects/upload", async (req, res) => {
    const objectStorageService = new ObjectStorageService();
    const uploadURL = await objectStorageService.getObjectEntityUploadURL();
    res.json({ uploadURL });
  });

  // An endpoint for getting images organized by categories
  app.get("/api/images/categories", async (req, res) => {
    try {
      const objectStorageService = new ObjectStorageService();
      const categories = await objectStorageService.listImagesByCategory();
      res.json(categories);
    } catch (error) {
      console.error("Error listing images by category:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // An endpoint for getting the folder structure from App Storage
  app.get("/api/folders", async (req, res) => {
    try {
      const objectStorageService = new ObjectStorageService();
      const folderStructure = await objectStorageService.listFoldersAndFiles();
      res.json(folderStructure);
    } catch (error) {
      console.error("Error listing folders and files:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // An endpoint for getting images organized by their actual folders
  app.get("/api/images/folders", async (req, res) => {
    try {
      const objectStorageService = new ObjectStorageService();
      const imagesByFolders = await objectStorageService.listImagesByFolders();
      res.json(imagesByFolders);
    } catch (error) {
      console.error("Error listing images by folders:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // An endpoint for cataloging all local images in the project
  app.get("/api/images/catalog", async (req, res) => {
    try {
      const objectStorageService = new ObjectStorageService();
      const catalog = await objectStorageService.catalogLocalImages();
      res.json(catalog);
    } catch (error) {
      console.error("Error cataloging local images:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // An endpoint for executing the migration of local images to App Storage
  app.post("/api/images/migrate", async (req, res) => {
    try {
      const objectStorageService = new ObjectStorageService();
      
      // CORRIGIDO: Verificar se o App Storage está configurado
      try {
        objectStorageService.getPrivateObjectDir();
      } catch (error) {
        return res.status(400).json({ 
          error: "App Storage não configurado",
          message: "Configure o bucket no painel Object Storage para habilitar a migração",
          details: error instanceof Error ? error.message : "Erro desconhecido"
        });
      }
      
      // Get the catalog and migration plan
      const catalog = await objectStorageService.catalogLocalImages();
      
      // Execute the migration
      console.log(`Starting migration of ${catalog.totalImages} images...`);
      const results = await objectStorageService.executeMigration(catalog.migrationPlan);
      
      res.json({
        message: "Migration completed",
        results,
        catalog: {
          totalImages: catalog.totalImages,
          categoriesCount: Object.keys(catalog.byCategory).reduce((acc, key) => {
            acc[key] = catalog.byCategory[key].length;
            return acc;
          }, {} as Record<string, number>)
        }
      });
    } catch (error) {
      console.error("Error executing migration:", error);
      res.status(500).json({ error: "Migration failed: " + (error instanceof Error ? error.message : String(error)) });
    }
  });

  // An endpoint for executing partial migration (specific categories)
  app.post("/api/images/migrate/category", async (req, res) => {
    try {
      const { categories } = req.body;
      
      if (!categories || !Array.isArray(categories)) {
        return res.status(400).json({ error: "Categories array is required" });
      }

      const objectStorageService = new ObjectStorageService();
      
      // CORRIGIDO: Verificar se o App Storage está configurado
      try {
        objectStorageService.getPrivateObjectDir();
      } catch (error) {
        return res.status(400).json({ 
          error: "App Storage não configurado",
          message: "Configure o bucket no painel Object Storage para habilitar a migração",
          details: error instanceof Error ? error.message : "Erro desconhecido"
        });
      }
      
      const catalog = await objectStorageService.catalogLocalImages();
      
      // Filter migration plan to only include specified categories
      const filteredPlan: Record<string, { files: string[], targetFolder: string }> = {};
      for (const category of categories) {
        if (catalog.migrationPlan[category]) {
          filteredPlan[category] = catalog.migrationPlan[category];
        }
      }
      
      if (Object.keys(filteredPlan).length === 0) {
        return res.status(400).json({ error: "No valid categories found" });
      }

      console.log(`Starting partial migration for categories: ${categories.join(', ')}`);
      const results = await objectStorageService.executeMigration(filteredPlan);
      
      res.json({
        message: `Partial migration completed for categories: ${categories.join(', ')}`,
        results,
        categories: categories
      });
    } catch (error) {
      console.error("Error executing partial migration:", error);
      res.status(500).json({ error: "Partial migration failed: " + (error instanceof Error ? error.message : String(error)) });
    }
  });

  // An example endpoint for updating the model state after an object entity is uploaded (banner image in this case).
  app.put("/api/banner-images", async (req, res) => {
    if (!req.body.bannerImageURL) {
      return res.status(400).json({ error: "bannerImageURL is required" });
    }

    try {
      const objectStorageService = new ObjectStorageService();
      const objectPath = objectStorageService.normalizeObjectEntityPath(
        req.body.bannerImageURL,
      );

      // ... update DB with the banner image object path ...

      res.status(200).json({
        objectPath: objectPath,
      });
    } catch (error) {
      console.error("Error setting banner image:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Endpoints para migração para Sanity
  app.post("/api/sanity/migrate", async (req, res) => {
    try {
      const { SanityMigrationService } = await import("./objectStorage");
      const sanityService = new SanityMigrationService();
      
      console.log("🚀 Starting migration to Sanity...");
      const results = await sanityService.migrateAllImagesToSanity();
      
      res.json({
        message: "Migration to Sanity completed",
        results,
        summary: {
          total: results.total,
          successful: results.success.length,
          failed: results.failed.length,
          categoriesCount: results.byCategory
        }
      });
    } catch (error) {
      console.error("Error migrating to Sanity:", error);
      res.status(500).json({ 
        error: "Sanity migration failed: " + (error instanceof Error ? error.message : String(error)) 
      });
    }
  });

  // Endpoint para listar assets do Sanity
  app.get("/api/sanity/assets", async (req, res) => {
    try {
      const { SanityMigrationService } = await import("./objectStorage");
      const sanityService = new SanityMigrationService();
      
      const assets = await sanityService.listSanityAssets();
      
      res.json(assets);
    } catch (error) {
      console.error("Error listing Sanity assets:", error);
      res.status(500).json({ 
        error: "Failed to list Sanity assets: " + (error instanceof Error ? error.message : String(error)) 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
