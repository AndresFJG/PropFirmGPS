import { useState, useEffect } from 'react';

interface MarketSentiment {
  sentiment: 'Bullish' | 'Bearish' | 'Neutral';
  score: number;
  change: number;
  strength: 'High' | 'Medium' | 'Low';
}

export const useMarketSentiment = (symbol: string) => {
  const [sentiment, setSentiment] = useState<MarketSentiment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSentiment = async () => {
      try {
        const FINNHUB_API_KEY = 'cskmnihr01qhc8s4i2ggcskmnihr01qhc8s4i2h0';
        
        // Obtener datos de sentimiento de mercado
        const response = await fetch(
          `https://finnhub.io/api/v1/news-sentiment?symbol=${symbol}&token=${FINNHUB_API_KEY}`
        );

        if (!response.ok) {
          throw new Error('Error fetching market sentiment');
        }

        const data = await response.json();

        // Calcular el sentimiento basado en los datos
        const sentimentScore = data.sentiment.bullishPercent - data.sentiment.bearishPercent;
        
        const getSentiment = (score: number): 'Bullish' | 'Bearish' | 'Neutral' => {
          if (score > 10) return 'Bullish';
          if (score < -10) return 'Bearish';
          return 'Neutral';
        };

        const getStrength = (score: number): 'High' | 'Medium' | 'Low' => {
          const absScore = Math.abs(score);
          if (absScore > 30) return 'High';
          if (absScore > 15) return 'Medium';
          return 'Low';
        };

        setSentiment({
          sentiment: getSentiment(sentimentScore),
          score: sentimentScore,
          change: data.sentiment.change,
          strength: getStrength(sentimentScore)
        });

      } catch (err) {
        console.error('Error fetching sentiment:', err);
        setError('Error al cargar el sentimiento del mercado');
      } finally {
        setLoading(false);
      }
    };

    fetchSentiment();
    
    // Actualizar cada 5 minutos
    const interval = setInterval(fetchSentiment, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [symbol]);

  return { sentiment, loading, error };
}; 