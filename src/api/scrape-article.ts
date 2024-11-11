import * as cheerio from 'cheerio';
import axios from 'axios';

interface ScrapeResponse {
  content: string;
  title?: string;
  description?: string;
  image?: string;
}

export const scrapeArticle = async (url: string): Promise<ScrapeResponse> => {
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    const html = response.data;
    const $ = cheerio.load(html);

    // Eliminar elementos no deseados
    $('script').remove();
    $('style').remove();
    $('nav').remove();
    $('header').remove();
    $('footer').remove();
    $('.advertisement').remove();
    $('.ads').remove();

    // Obtener el contenido principal
    let content = '';
    let title = '';
    let description = '';
    let image = '';
    
    // Selectores comunes para diferentes sitios web
    const mainSelectors = [
      'article',
      '.article-content',
      '.post-content',
      '.entry-content',
      '#main-content',
      '.content-area'
    ];

    // Buscar contenido usando diferentes selectores
    for (const selector of mainSelectors) {
      const element = $(selector);
      if (element.length > 0) {
        content = element.html() || '';
        break;
      }
    }

    // Intentar obtener el título
    title = $('h1').first().text() || 
           $('article h1').first().text() || 
           $('meta[property="og:title"]').attr('content') || '';

    // Intentar obtener la descripción
    description = $('meta[name="description"]').attr('content') || 
                 $('meta[property="og:description"]').attr('content') || '';

    // Intentar obtener la imagen principal
    image = $('meta[property="og:image"]').attr('content') || 
           $('article img').first().attr('src') || '';

    // Limpiar el contenido
    content = content
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/\s+/g, ' ')
      .trim();

    return {
      content,
      title,
      description,
      image
    };
  } catch (error) {
    console.error('Error scraping article:', error);
    throw new Error('Could not scrape article content');
  }
};

// Función auxiliar para manejar URLs relativas
export const resolveUrl = (base: string, relative: string): string => {
  try {
    return new URL(relative, base).href;
  } catch {
    return relative;
  }
}; 