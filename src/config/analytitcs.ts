export const ANALYTICS_CONFIG = {
    GA_MEASUREMENT_ID: process.env.REACT_APP_GA_MEASUREMENT_ID || '',
    // Otras configuraciones como:
    DEBUG_MODE: process.env.NODE_ENV === 'development',
    EXCLUDED_PATHS: ['/privacy-policy', '/terms-and-privacy'],
  };