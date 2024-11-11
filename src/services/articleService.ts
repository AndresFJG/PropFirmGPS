import axios from 'axios';

export const fetchArticleSummary = async (url: string): Promise<string> => {
  try {
    // Usar un proxy CORS para evitar problemas de acceso
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
    const response = await axios.get(proxyUrl);
    
    if (!response.data.contents) {
      throw new Error('No se pudo obtener el contenido');
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(response.data.contents, 'text/html');

    // Selectores comunes para contenido principal
    const selectors = [
      'article',
      '.article-content',
      '.post-content',
      '.entry-content',
      'main',
      '#content'
    ];

    let content = '';
    for (const selector of selectors) {
      const element = doc.querySelector(selector);
      if (element) {
        content = element.textContent || '';
        break;
      }
    }

    // Limpiar y formatear el contenido
    return content
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 1000) + '...'; // Limitar a 1000 caracteres
  } catch (error) {
    console.error('Error fetching article:', error);
    return 'No se pudo cargar el resumen del artículo.';
  }
}; 