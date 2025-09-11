import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  ObjectStorageService,
  ObjectNotFoundError,
} from "./objectStorage";

export async function registerRoutes(app: Express): Promise<Server> {
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

  const httpServer = createServer(app);

  return httpServer;
}
