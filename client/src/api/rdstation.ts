import { getTrackingData, type TrackingData } from '../utils/tracking';

export interface FormData {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  faturamento?: string;
  cargo?: string;
}

export interface RDStationPayload {
  conversion_identifier: string;
  token_rdstation: string;
  name: string;
  email: string;
  personal_phone: string;
  company: string;
  cf_faturamento_da_empresa?: string;
  cf_cargo_bw?: string;
  cf_utm_source: string;
  cf_utm_medium: string;
  cf_utm_campaign: string;
  cf_utm_content: string;
  cf_utm_term: string;
  cf_url_pagina: string;
  cf_referrer: string;
  cf_session_id: string;
  cf_browser: string;
  cf_resolution: string;
  client_id?: string;
  created_at: string;
}

export async function submitToRDStation(formData: FormData): Promise<any> {
  const trackingData = getTrackingData();
  
  const payload: RDStationPayload = {
    // Configuração do RD Station
    conversion_identifier: 'teste_lina-bw_lp_linapay',
    token_rdstation: '79eeb6bb9c3bc26daa788a85edb61cf7',
    
    // Dados do formulário
    name: formData.nome,
    email: formData.email,
    personal_phone: formData.telefone,
    company: formData.empresa,
    
    // Campos customizados (opcionais)
    cf_faturamento_da_empresa: formData.faturamento || '',
    cf_cargo_bw: formData.cargo || '',
    
    // Tracking automático
    cf_utm_source: trackingData.utm_source,
    cf_utm_medium: trackingData.utm_medium,
    cf_utm_campaign: trackingData.utm_campaign,
    cf_utm_content: trackingData.utm_content,
    cf_utm_term: trackingData.utm_term,
    cf_url_pagina: trackingData.url_pagina,
    cf_referrer: trackingData.referrer,
    cf_session_id: trackingData.session_id,
    cf_browser: trackingData.user_agent,
    cf_resolution: trackingData.screen_resolution,
    
    // Google Analytics
    client_id: trackingData.ga_client_id || '',
    
    // Timestamp
    created_at: new Date().toISOString(),
  };

  console.log('Enviando dados para RD Station via proxy backend:', payload);

  try {
    // Send to our backend proxy instead of directly to RD Station API
    const response = await fetch('/api/rdstation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Erro ${response.status}: ${response.statusText} - ${errorData.details || 'Erro desconhecido'}`);
    }

    const result = await response.json();
    console.log('Lead enviado com sucesso para RD Station:', result);
    return result;

  } catch (error) {
    console.error('Erro ao enviar para RD Station:', error);
    throw error;
  }
}