import { useEffect } from 'react';
import { logUserTiming } from '../types/analytics';

export const usePerformanceMetrics = () => {
  useEffect(() => {
    if ('performance' in window) {
      const metrics = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (metrics) {
        logUserTiming('Performance', 'DOM Load Time', metrics.domContentLoadedEventEnd);
        logUserTiming('Performance', 'Page Load Time', metrics.loadEventEnd);
      }
    }
  }, []);
}; 