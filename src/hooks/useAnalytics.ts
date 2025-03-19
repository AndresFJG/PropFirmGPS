import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, logPageView, logEvent, logUserTiming } from '../types/analytics';

export const useAnalytics = () => {
  const location = useLocation();

  // Inicializar GA
  useEffect(() => {
    initGA();
  }, []);

  // Trackear cambios de página
  useEffect(() => {
    logPageView(location.pathname);
  }, [location.pathname]);

  // Función memoizada para trackear eventos
  const trackEvent = useCallback((category: string, action: string, label?: string) => {
    logEvent(category, action, label);
  }, []);

  // Función memoizada para trackear tiempos
  const trackTiming = useCallback((category: string, variable: string, value: number) => {
    logUserTiming(category, variable, value);
  }, []);

  return {
    trackEvent,
    trackTiming,
  };
};