import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // RD Station proxy route to avoid CORS issues
  app.post('/api/rdstation', async (req, res) => {
    try {
      console.log('📤 [RD STATION PROXY] Recebendo dados do formulário:', req.body);

      // Forward the request to RD Station API
      const response = await fetch('https://api.rd.services/platform/conversions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body)
      });

      const responseText = await response.text();
      console.log(`📥 [RD STATION PROXY] Resposta da API (${response.status}):`, responseText);

      if (!response.ok) {
        console.error('❌ [RD STATION PROXY] Erro na API:', response.status, responseText);
        return res.status(response.status).json({
          error: 'Erro ao enviar para RD Station',
          details: responseText,
          status: response.status
        });
      }

      // Try to parse response as JSON, fall back to text if it fails
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (e) {
        result = { message: responseText };
      }

      console.log('✅ [RD STATION PROXY] Lead enviado com sucesso!', result);
      res.json(result);

    } catch (error) {
      console.error('❌ [RD STATION PROXY] Erro interno:', error);
      res.status(500).json({
        error: 'Erro interno do servidor',
        details: error instanceof Error ? error.message : 'Erro desconhecido'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
