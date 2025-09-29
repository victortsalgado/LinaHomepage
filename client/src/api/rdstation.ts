import { getTrackingData, type TrackingData } from '../utils/tracking';

export interface FormData {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  faturamento?: string;
  cargo?: string;
}

export interface SubmissionOptions {
  tags?: string[];
}

export interface RDStationAPIPayload {
  event_type: string;
  event_family: string;
  payload: {
    conversion_identifier: string;
    email: string;
    name: string;
    mobile_phone: string;
    company_name: string;
    job_title?: string;
    client_tracking_id?: string;
    traffic_source: string;
    traffic_medium: string;
    traffic_campaign: string;
    traffic_value: string;
    available_for_mailing: boolean;
    tags: string[];
    cf_faturamento_da_empresa?: string;
    cf_cargo_bw?: string;
    cf_url_pagina?: string;
    cf_referrer?: string;
    cf_session_id?: string;
    cf_browser?: string;
    cf_resolution?: string;
  };
}

export async function submitToRDStation(formData: FormData, options: SubmissionOptions = {}): Promise<any> {
  const trackingData = getTrackingData();
  
  const payload: RDStationAPIPayload = {
    event_type: "CONVERSION",
    event_family: "CDP",
    payload: {
      // Identificação da conversão
      conversion_identifier: "site_lina",
      
      // Dados obrigatórios
      email: formData.email,
      name: formData.nome,
      mobile_phone: formData.telefone,
      company_name: formData.empresa,
      
      // Campos opcionais
      job_title: formData.cargo || undefined,
      client_tracking_id: trackingData.ga_client_id || undefined,
      
      // Dados de tráfego (formato correto da nova API)
      traffic_source: trackingData.utm_source || "Direct",
      traffic_medium: trackingData.utm_medium || "none",
      traffic_campaign: trackingData.utm_campaign || "no-campaign",
      traffic_value: trackingData.utm_content || trackingData.utm_term || "no-value",
      
      // Configurações
      available_for_mailing: true,
      tags: options.tags || ["lina-website", "generic-form"],
      
      // Campos customizados (prefixo cf_ mantido)
      cf_faturamento_da_empresa: formData.faturamento || undefined,
      cf_cargo_bw: formData.cargo || undefined,
      cf_url_pagina: trackingData.url_pagina || undefined,
      cf_referrer: trackingData.referrer || undefined,
      cf_session_id: trackingData.session_id || undefined,
      cf_browser: trackingData.user_agent || undefined,
      cf_resolution: trackingData.screen_resolution || undefined
    }
  };

  console.log('Enviando dados para RD Station via proxy backend (novo formato API 2.0):', payload);

  try {
    // Send to our backend proxy
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
    console.log('Lead enviado com sucesso para RD Station (API 2.0):', result);
    return result;

  } catch (error) {
    console.error('Erro ao enviar para RD Station:', error);
    throw error;
  }
}