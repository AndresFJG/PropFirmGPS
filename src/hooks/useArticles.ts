import { useState, useEffect } from 'react';

interface Article {
  id: string;
  title: string;
  description: string;
  mainImage: string;
  firmLogo: string;
  firmName: string;
  date: string;
  readTime: string;
  links: {
    website: string;
    review: string;
  };
}

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const FINNHUB_API_KEY = 'cskmnihr01qhc8s4i2ggcskmnihr01qhc8s4i2h0';
        
        // Obtener noticias de múltiples categorías
        const categories = ['forex', 'crypto', 'general'];
        const allArticles: any[] = [];

        for (const category of categories) {
          const response = await fetch(
            `https://finnhub.io/api/v1/news?category=${category}&token=${FINNHUB_API_KEY}`
          );

          if (!response.ok) {
            throw new Error(`Error fetching ${category} news`);
          }

          const data = await response.json();
          allArticles.push(...data);
        }

        // Filtrar artículos duplicados y de la misma empresa
        const uniqueArticles = Array.from(
          new Map(
            allArticles
              // Primero ordenamos por fecha para mantener los más recientes
              .sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime())
              // Luego agrupamos por empresa y título similar
              .map(article => {
                const key = `${article.source}-${article.headline.substring(0, 50)}`;
                return [key, article];
              })
          ).values()
        );

        // Formatear artículos
        const formattedArticles = uniqueArticles
          .map(article => ({
            id: article.id.toString(),
            title: cleanHtmlText(article.headline),
            description: cleanHtmlText(article.summary),
            mainImage: article.image || '/images/default-news.jpg',
            firmLogo: getFirmLogo(article.source),
            firmName: article.source,
            date: new Date(article.datetime * 1000).toLocaleDateString('es-ES'),
            readTime: `${Math.ceil(cleanHtmlText(article.summary).split(' ').length / 200)} min`,
            links: {
              website: article.url,
              review: '#'
            }
          }))
          // Filtrar artículos sin contenido relevante
          .filter(article => 
            article.title.length > 10 && 
            article.description.length > 50 &&
            !article.title.includes('404') &&
            !article.title.toLowerCase().includes('error')
          )
          // Limitar a 10 artículos
          .slice(0, 10);

        console.log('Artículos únicos cargados:', formattedArticles.length);
        setArticles(formattedArticles);

      } catch (err) {
        console.error('Error al cargar noticias:', err);
        setError('Error al cargar las noticias');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
};

// Función auxiliar para limpiar texto HTML
const cleanHtmlText = (text: string): string => {
  // Eliminar etiquetas HTML
  let cleanText = text.replace(/<[^>]*>/g, '');
  
  // Eliminar URLs y referencias
  cleanText = cleanText.replace(/\b(https?:\/\/)?[a-z0-9-]+(\.[a-z0-9-]+)+\S*/gi, '');
  cleanText = cleanText.replace(/This article was written by.*$/, '');
  
  // Limpiar espacios y caracteres especiales
  cleanText = cleanText.replace(/\s+/g, ' ').trim();
  cleanText = cleanText.replace(/[^\x20-\x7E]/g, '');
  
  return cleanText;
};

// Función auxiliar para obtener logos de empresas
const getFirmLogo = (source: string): string => {
  const logos: { [key: string]: string } = {
    'Reuters': '/images/firms/reuters-logo.png',
    'Bloomberg': '/images/firms/bloomberg-logo.png',
    'CNBC': '/images/firms/cnbc-logo.png',
    'Financial Times': '/images/firms/ft-logo.png',
    'MarketWatch': '/images/firms/marketwatch-logo.png',
    'Forbes': '/images/firms/forbes-logo.png',
    'The Wall Street Journal': '/images/firms/wsj-logo.png',
    'Business Insider': '/images/firms/bi-logo.png'
  };
  
  return logos[source] || '/images/default-firm-logo.png';
}; 