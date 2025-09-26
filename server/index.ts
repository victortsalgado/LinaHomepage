import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  try {
    // Verify critical environment variables are available
    const port = parseInt(process.env.PORT || '5000', 10);
    if (isNaN(port) || port <= 0) {
      throw new Error('Invalid PORT environment variable');
    }

    const server = await registerRoutes(app);

    // Add health check endpoint for deployment monitoring
    app.get('/health', (_req: Request, res: Response) => {
      res.status(200).json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        env: process.env.NODE_ENV || 'development'
      });
    });

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      // Log the error for debugging
      log(`Error ${status}: ${message}`);
      console.error(err);

      if (!res.headersSent) {
        res.status(status).json({ message });
      }
    });

    // importantly only setup vite in development and after
    // setting up all the other routes so the catch-all route
    // doesn't interfere with the other routes
    if (app.get("env") === "development") {
      // Serve static files (like logos) BEFORE Vite middleware to prevent catch-all from intercepting them
      const path = await import("path");
      const fs = await import("fs");
      const publicPath = path.resolve(import.meta.dirname, "..", "public");
      if (fs.existsSync(publicPath)) {
        app.use(express.static(publicPath));
      }
      
      await setupVite(app, server);
    } else {
      // Production mode: ensure static files are available for serveStatic
      const path = await import("path");
      const fs = await import("fs");
      
      const distPublicPath = path.resolve(import.meta.dirname, "..", "dist", "public");
      const serverPublicPath = path.resolve(import.meta.dirname, "public");
      
      // Check if dist/public exists and copy to server/public if needed
      if (fs.existsSync(distPublicPath) && !fs.existsSync(serverPublicPath)) {
        try {
          // Create server directory if it doesn't exist
          await fs.promises.mkdir(path.dirname(serverPublicPath), { recursive: true });
          // Copy files from dist/public to server/public
          await fs.promises.cp(distPublicPath, serverPublicPath, { recursive: true });
          log("Copied static files from dist/public to server/public for production");
        } catch (error) {
          log(`Warning: Failed to copy static files: ${error instanceof Error ? error.message : String(error)}`);
        }
      }
      
      serveStatic(app);
    }

    // ALWAYS serve the app on the port specified in the environment variable PORT
    // Other ports are firewalled. Default to 5000 if not specified.
    // this serves both the API and the client.
    // It is the only port that is not firewalled.
    server.listen({
      port,
      host: "0.0.0.0",
      reusePort: true,
    }, () => {
      log(`serving on port ${port}`);
    });

    // Handle server startup errors
    server.on('error', (error: Error) => {
      log(`Server error: ${error.message}`);
      process.exit(1);
    });

    // Graceful shutdown handling
    process.on('SIGTERM', () => {
      log('Received SIGTERM, shutting down gracefully');
      server.close(() => {
        log('Server closed');
        process.exit(0);
      });
    });

    process.on('SIGINT', () => {
      log('Received SIGINT, shutting down gracefully');
      server.close(() => {
        log('Server closed');
        process.exit(0);
      });
    });

  } catch (error) {
    log(`Failed to start server: ${error instanceof Error ? error.message : String(error)}`);
    process.exit(1);
  }
})().catch((error) => {
  log(`Unhandled error during server startup: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
});
