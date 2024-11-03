import React from 'react';
import { Link } from 'react-router-dom';

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

const ArticlesPage: React.FC = () => {
  // Ejemplo de datos - después podrías moverlos a una API o archivo separado
  const articles: Article[] = [
    {
      id: '1',
      title: 'FTMO aumenta el profit split al 90%',
      description: 'FTMO ha anunciado cambios significativos en su estructura de reparto de beneficios, aumentando el profit split del 80% al 90% para todos los traders que superen la evaluación. Esta actualización incluye mejoras en las condiciones de trading y nuevas características para la plataforma...',
      mainImage: '/images/ftmo-article.jpg',
      firmLogo: '/images/ftmo-logo.png',
      firmName: 'FTMO',
      date: '15 Mar 2024',
      readTime: '5 min',
      links: {
        website: 'https://ftmo.com',
        review: '/review/ftmo'
      }
    },
    // Más artículos...
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Últimas Noticias</h1>
      
      <div className="space-y-8">
        {articles.map((article) => (
          <div 
            key={article.id}
            className="bg-purple-800/30 rounded-lg overflow-hidden backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* Imagen Principal */}
              <div className="md:w-1/3">
                <img
                  src={article.mainImage}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  style={{ minHeight: '300px' }}
                />
              </div>

              {/* Contenido Central */}
              <div className="md:w-1/3 p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-sm text-gray-300">{article.date}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-300">{article.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4">
                  {article.title}
                </h2>
                
                <p className="text-gray-300 mb-4">
                  {article.description}
                </p>
              </div>

              {/* Tarjeta Lateral */}
              <div className="md:w-1/3 bg-purple-900/50 p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={article.firmLogo}
                    alt={`${article.firmName} logo`}
                    className="w-12 h-12 rounded-full"
                  />
                  <h3 className="text-xl font-semibold text-white">
                    {article.firmName}
                  </h3>
                </div>

                <div className="space-y-4">
                  <a
                    href={article.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 bg-[#04a8c2] text-white text-center rounded-lg hover:bg-[#038ba1] transition-colors duration-200"
                  >
                    Visitar Sitio Web
                  </a>
                  
                  <Link
                    to={article.links.review}
                    className="block w-full py-3 px-4 bg-purple-700 text-white text-center rounded-lg hover:bg-purple-600 transition-colors duration-200"
                  >
                    Ver Review Completo
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-purple-700">
                  <p className="text-sm text-gray-300">
                    ¿Quieres saber más sobre {article.firmName}? 
                    Revisa nuestra review detallada con toda la información que necesitas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;