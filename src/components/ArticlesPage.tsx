import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useArticles } from '../hooks/useArticles';
import { FaChevronDown, FaChartLine, FaTimesCircle } from 'react-icons/fa';
import MarketAnalysisModal from './MarketAnalysisModal';

// Interfaces
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

interface MarketSentimentProps {
  symbol: string;
}

// Componente MarketSentimentIndicator
const MarketSentimentIndicator: React.FC<MarketSentimentProps> = ({ symbol }) => {
  const [sentiment] = useState({
    value: Math.random() * 100,
    trend: Math.random() > 0.5 ? 'up' : 'down',
    strength: Math.random() > 0.5 ? 'High' : 'Medium'
  });

  const getSentimentColor = (value: number) => {
    if (value > 60) return 'text-green-400';
    if (value < 40) return 'text-red-400';
    return 'text-yellow-400';
  };

  const getSentimentText = (value: number) => {
    if (value > 60) return 'Bullish';
    if (value < 40) return 'Bearish';
    return 'Neutral';
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Sentimiento del Mercado</span>
        <span className={`font-semibold ${getSentimentColor(sentiment.value)}`}>
          {getSentimentText(sentiment.value)}
        </span>
      </div>
      <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
        <div 
          className={`absolute left-0 h-full bg-gradient-to-r ${
            sentiment.value > 60 ? 'from-green-400 to-blue-500' :
            sentiment.value < 40 ? 'from-red-400 to-pink-500' :
            'from-yellow-400 to-orange-500'
          } transition-all duration-500`}
          style={{ width: `${sentiment.value}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-400">
        <span>Fuerza: {sentiment.strength}</span>
        <span>Score: {sentiment.value.toFixed(1)}</span>
      </div>
    </div>
  );
};

// Función para obtener el símbolo del mercado
const getMarketSymbol = (article: Article): string => {
  const title = article.title.toLowerCase();
  const description = article.description.toLowerCase();
  const content = title + ' ' + description;

  const symbolMap: { [key: string]: string } = {
    'forex': 'FOREX:EURUSD',
    'eur': 'FOREX:EURUSD',
    'gbp': 'FOREX:GBPUSD',
    'jpy': 'FOREX:USDJPY',
    'usd': 'FOREX:EURUSD',
    'bitcoin': 'CRYPTO:BTCUSD',
    'btc': 'CRYPTO:BTCUSD',
    'ethereum': 'CRYPTO:ETHUSD',
    'eth': 'CRYPTO:ETHUSD',
    'gold': 'COMM:XAUUSD',
    'silver': 'COMM:XAGUSD',
    'oil': 'COMM:USOIL'
  };

  for (const [keyword, symbol] of Object.entries(symbolMap)) {
    if (content.includes(keyword)) {
      return symbol;
    }
  }

  return 'FOREX:EURUSD';
};

const ArticlesPage: React.FC = () => {
  const { articles, loading, error } = useArticles();
  const [visibleArticles, setVisibleArticles] = useState(5);
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header mejorado */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
          Market Insights
        </h1>
        <p className="text-gray-400 text-lg">
          Las últimas noticias y análisis del mercado financiero
        </p>
      </div>

      <div className="space-y-6">
        {articles.slice(0, visibleArticles).map((article) => (
          <div 
            key={article.id}
            className="bg-gradient-to-r from-gray-900/90 to-purple-900/50 rounded-2xl overflow-hidden backdrop-blur-sm shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 border border-purple-500/10 h-[400px]"
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Imagen Principal */}
              <div className="md:w-1/3 relative h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 z-10" />
                <img
                  src={article.mainImage}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/default-news.jpg';
                  }}
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-sm text-purple-200 border border-purple-500/20">
                      {article.date}
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm text-blue-200 border border-blue-500/20">
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contenido Central */}
              <div className="md:w-1/3 p-6 flex flex-col justify-between border-r border-purple-500/10 h-full">
                <div>
                  <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 hover:text-purple-300 transition-colors duration-200">
                    {article.title}
                  </h2>
                  <div className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">
                    {article.description}
                  </div>
                </div>

                <div className="mt-auto">
                  <MarketSentimentIndicator symbol={getMarketSymbol(article)} />
                </div>
              </div>

              {/* Tarjeta Lateral */}
              <div className="md:w-1/3 p-6 bg-purple-900/20 backdrop-blur-md h-full flex flex-col justify-between">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-2 border border-purple-500/20 flex items-center justify-center">
                    <img
                      src={article.firmLogo}
                      alt={`${article.firmName} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {article.firmName}
                    </h3>
                    <p className="text-sm text-gray-400">Financial News Provider</p>
                  </div>
                </div>

                <div className="space-y-3 mt-auto">
                  <a
                    href={article.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-purple-500/25 text-sm font-medium"
                  >
                    Leer Artículo Completo
                  </a>
                  
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="block w-full py-2.5 px-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white text-center rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300 border border-purple-500/10 text-sm font-medium"
                  >
                    Análisis de Mercado
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botón de cargar más */}
      {visibleArticles < articles.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleArticles(prev => prev + 5)}
            className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/25"
          >
            <span>Cargar más noticias</span>
            <FaChevronDown className="group-hover:translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      )}

      {/* Modal de Análisis */}
      {selectedArticle && (
        <MarketAnalysisModal 
          article={selectedArticle} 
          onClose={() => setSelectedArticle(null)} 
        />
      )}
    </div>
  );
};

export default ArticlesPage;