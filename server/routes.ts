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

      // Extract lead data for backup
      const leadData = {
        timestamp: new Date().toISOString(),
        name: req.body.name,
        email: req.body.email,
        phone: req.body.personal_phone,
        company: req.body.company,
        utm_data: {
          source: req.body.cf_utm_source,
          medium: req.body.cf_utm_medium,
          campaign: req.body.cf_utm_campaign,
          content: req.body.cf_utm_content,
          term: req.body.cf_utm_term
        },
        session_id: req.body.cf_session_id,
        page_url: req.body.cf_url_pagina
      };

      // Always save lead data as backup (in case RD Station fails)
      console.log('💾 [BACKUP] Salvando lead localmente:', leadData);

      // Forward the request to RD Station API
      const response = await fetch('https://api.rd.services/platform/conversions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body)
      });

      const responseText = await response.text();
      console.log(`📥 [RD STATION PROXY] Resposta da API (${response.status}):`, responseText.substring(0, 200) + (responseText.length > 200 ? '...' : ''));

      if (!response.ok) {
        console.error('❌ [RD STATION PROXY] Erro na API RD Station:', response.status);
        
        // Log possible configuration issues
        if (response.status === 400 || response.status === 401 || response.status === 403) {
          console.error('🔑 [CONFIG ERROR] Possível problema de autenticação/configuração:');
          console.error('   - Verifique se o token_rdstation está correto');
          console.error('   - Verifique se o conversion_identifier existe no RD Station');
          console.error('   - Token atual:', req.body.token_rdstation);
          console.error('   - Conversion ID atual:', req.body.conversion_identifier);
        }
        
        return res.status(response.status).json({
          error: 'Erro ao enviar para RD Station',
          details: response.status === 500 ? 'Erro interno do RD Station' : 'Erro de configuração',
          status: response.status,
          lead_saved_locally: true
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
      res.json({ ...result, lead_saved_locally: true });

    } catch (error) {
      console.error('❌ [RD STATION PROXY] Erro interno:', error);
      res.status(500).json({
        error: 'Erro interno do servidor',
        details: error instanceof Error ? error.message : 'Erro desconhecido',
        lead_saved_locally: true
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
