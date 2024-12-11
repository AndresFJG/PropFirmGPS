import React from 'react';
import { FaTimes, FaShare, FaClock, FaCalendar } from 'react-icons/fa';
import { Article } from '../types/Article';

interface ArticleSummaryModalProps {
  article: Article;
  onClose: () => void;
}

const ArticleSummaryModal: React.FC<ArticleSummaryModalProps> = ({ article, onClose }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.description,
          url: article.links.website
        });
      } catch (error) {
        console.error('Error al compartir:', error);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#131722]/95 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-[#1e222d] rounded-xl w-full max-w-sm md:max-w-4xl max-h-[90vh] overflow-hidden shadow-xl">
        {/* Header con imagen */}
        <div className="relative h-48 md:h-64">
          <img
            src={article.mainImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e222d] to-transparent" />
          
          {/* Botones de acción */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg bg-[#131722]/50 text-white hover:bg-[#2962ff]/80 
                       transition-all duration-200 w-10 h-10 flex items-center justify-center"
            >
              <FaShare className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#131722]/50 text-white hover:bg-red-500/80 
                       transition-all duration-200 w-10 h-10 flex items-center justify-center"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* Info del artículo */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center space-x-3">
              <img
                src={article.firmLogo}
                alt={article.firmName}
                className="w-10 h-10 rounded-lg bg-white/10 p-1 backdrop-blur-sm"
              />
              <div>
                <h3 className="text-white font-medium">{article.firmName}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <span className="flex items-center">
                    <FaCalendar className="mr-2 h-3 w-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center">
                    <FaClock className="mr-2 h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Título y etiquetas */}
        <div className="px-4 py-4 border-b border-[#2a2e39]">
          <h2 className="text-lg md:text-xl font-bold text-white mb-3">{article.title}</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs md:text-sm bg-[#2962ff]/10 text-[#2962ff]">
              Análisis de Mercado
            </span>
            <span className="px-3 py-1 rounded-full text-xs md:text-sm bg-[#131722] text-gray-300">
              Resumen
            </span>
          </div>
        </div>

        {/* Contenido del resumen */}
        <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-24rem)]">
          <div className="space-y-6">
            {/* Descripción principal */}
            <div className="text-gray-300 leading-relaxed">
              {article.description}
            </div>

            {/* Puntos clave */}
            <div className="bg-[#131722] rounded-xl p-4 space-y-3">
              <h3 className="text-white font-semibold">Puntos clave del análisis:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Análisis detallado del mercado actual
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Tendencias y proyecciones
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Recomendaciones específicas
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Datos y estadísticas relevantes
                </li>
              </ul>
            </div>

            {/* Nota adicional */}
            <div className="text-sm text-gray-400 italic">
              Este es un resumen del análisis completo proporcionado por {article.firmName}. 
              Para acceder al análisis detallado, consulta la plataforma.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSummaryModal;