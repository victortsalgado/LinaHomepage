export interface TrackingData {
  url_pagina: string;
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  session_id: string;
  user_agent: string;
  screen_resolution: string;
  viewport_size: string;
  timezone: string;
  ga_client_id?: string;
}

export function getTrackingData(): TrackingData {
  // Capturar URL e referrer
  const urlData = {
    url_pagina: window.location.href,
    referrer: document.referrer || '',
  };

  // Capturar UTM parameters da URL
  const urlParams = new URLSearchParams(window.location.search);
  const utmData = {
    utm_source: urlParams.get('utm_source') || '',
    utm_medium: urlParams.get('utm_medium') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
    utm_content: urlParams.get('utm_content') || '',
    utm_term: urlParams.get('utm_term') || '',
  };

  // Dados do browser
  const browserData = {
    user_agent: navigator.userAgent,
    screen_resolution: `${screen.width}x${screen.height}`,
    viewport_size: `${window.innerWidth}x${window.innerHeight}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };

  // Session ID (criar se não existir)
  const sessionData = {
    session_id: getOrCreateSessionId(),
  };

  // Google Analytics (se disponível)
  const gaData = getGoogleAnalyticsData();

  return {
    ...urlData,
    ...utmData,
    ...browserData,
    ...sessionData,
    ...gaData,
  };
}

function getOrCreateSessionId(): string {
  let sessionId = localStorage.getItem('lina_session_id');
  if (!sessionId) {
    sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('lina_session_id', sessionId);
  }
  return sessionId;
}

function getGoogleAnalyticsData(): { ga_client_id?: string } {
  try {
    // Tentar GA4 primeiro
    if (typeof (window as any).gtag !== 'undefined') {
      return {
        ga_client_id: (window as any).gtag.get('client_id'),
      };
    }
    // Fallback para Universal Analytics
    if (typeof (window as any).ga !== 'undefined') {
      const tracker = (window as any).ga.getAll()[0];
      return {
        ga_client_id: tracker ? tracker.get('clientId') : undefined,
      };
    }
  } catch (error) {
    console.log('GA data not available:', error);
  }
  return {};
}