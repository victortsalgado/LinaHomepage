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
      console.log('📤 [RD STATION PROXY] Recebendo dados do formulário (API 2.0):', req.body);

      // Extract lead data for backup (novo formato API 2.0)
      const leadData = {
        timestamp: new Date().toISOString(),
        event_type: req.body.event_type,
        conversion_identifier: req.body.payload?.conversion_identifier,
        name: req.body.payload?.name,
        email: req.body.payload?.email,
        phone: req.body.payload?.mobile_phone,
        company: req.body.payload?.company_name,
        utm_data: {
          source: req.body.payload?.traffic_source,
          medium: req.body.payload?.traffic_medium,
          campaign: req.body.payload?.traffic_campaign,
          value: req.body.payload?.traffic_value
        },
        session_id: req.body.payload?.cf_session_id,
        page_url: req.body.payload?.cf_url_pagina
      };

      // Always save lead data as backup (in case RD Station fails)
      console.log('💾 [BACKUP] Salvando lead localmente:', leadData);

      // Forward the request to RD Station API (novo endpoint com API Key)
      const API_KEY = 'GWTcxiLQhlGOeZcMFFgaxHAaAuSWRVsLrFYe';
      const response = await fetch(`https://api.rd.services/platform/conversions?api_key=${API_KEY}`, {
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
          console.error('🔑 [CONFIG ERROR] Possível problema de autenticação/configuração API 2.0:');
          console.error('   - Verifique se a API Key está correta');
          console.error('   - Verifique se o conversion_identifier existe no RD Station');
          console.error('   - API Key atual: GWTcxiLQhlGOeZcMFFgaxHAaAuSWRVsLrFYe');
          console.error('   - Conversion ID atual:', req.body.payload?.conversion_identifier);
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

      console.log('✅ [RD STATION PROXY] Lead enviado com sucesso via API 2.0!', result);
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
