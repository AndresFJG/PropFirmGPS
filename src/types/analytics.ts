import ReactGA from 'react-ga4';
import { ANALYTICS_CONFIG } from '../config/analytitcs';

export const initGA = () => {
  if (!ANALYTICS_CONFIG.GA_MEASUREMENT_ID) {
    if (ANALYTICS_CONFIG.DEBUG_MODE) {
      console.warn('GA_MEASUREMENT_ID no encontrado');
    }
    return;
  }

  ReactGA.initialize(ANALYTICS_CONFIG.GA_MEASUREMENT_ID, {
    testMode: process.env.NODE_ENV !== 'production',
    gtagOptions: { debug_mode: ANALYTICS_CONFIG.DEBUG_MODE }
  });
};

export const logPageView = (path?: string) => {
  if (ANALYTICS_CONFIG.EXCLUDED_PATHS.includes(path || window.location.pathname)) {
    return;
  }
  ReactGA.send({ hitType: "pageview", page: path || window.location.pathname });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event(category, {
    action,
    label,
  });
};

export const logUserTiming = (category: string, variable: string, value: number) => {
  ReactGA.event(category, {
    metric_name: variable,
    value: value,
    metric_value: value,
  });
};

export const logError = (error: Error, componentStack?: string) => {
  console.error('Logging error:', error);
  
  ReactGA.event('error', {
    error_message: error.message,
    error_stack: error.stack || 'No stack trace available',
    error_component: componentStack || 'No component stack available',
    url: window.location.href,
    timestamp: new Date().toISOString(),
    fatal: true
  });
};