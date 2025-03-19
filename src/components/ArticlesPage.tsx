import React, { useState } from 'react';
import { useArticles } from '../hooks/useArticles';
import { FaChevronDown } from 'react-icons/fa';
import MarketAnalysisModal from './MarketAnalysisModal';
import ArticleSummaryModal from './ArticleSummaryModal';
import { Article } from '../types/Article';

// Interface
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
  const { articles } = useArticles();
  const [visibleArticles, setVisibleArticles] = useState(5);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [showArticleSummary, setShowArticleSummary] = useState(false);
  const [showMarketAnalysis, setShowMarketAnalysis] = useState(false);

  const handleArticleClick = (article: Article) => {
    const articleWithUrl = {
      ...article,
      url: article.links.website
    };
    setSelectedArticle(articleWithUrl);
    setShowArticleSummary(true);
  };

  const handleMarketAnalysisClick = (article: Article) => {
    const articleWithUrl = {
      ...article,
      url: article.links.website
    };
    setSelectedArticle(articleWithUrl);
    setShowMarketAnalysis(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#131722]">
      {/* Header mejorado */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-poppins bg-gradient-to-r from-[#2962ff] to-[#2979ff] text-transparent bg-clip-text mb-4">
          Market Insights
        </h1>
        <p className="text-[#787b86] text-lg font-inter">
          Las últimas noticias y análisis del mercado financiero
        </p>
      </div>

      <div className="space-y-6">
        {articles.slice(0, visibleArticles).map((article) => (
          <div 
            key={article.id}
            className="bg-gradient-to-br from-[#1e222d] via-[#1e222d] to-[#2962ff]/5 
                     rounded-2xl overflow-hidden shadow-lg 
                     hover:shadow-[#2962ff]/20 
                     transition-all duration-300 
                     border border-[#2a2e39] hover:border-[#2962ff]/30 
                     hover:bg-gradient-to-br hover:from-[#1e222d] hover:via-[#1e222d] hover:to-[#2962ff]/10
                     h-auto md:h-[400px]"
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Imagen Principal */}
              <div className="md:w-1/3 relative h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-[#131722] via-[#131722]/50 to-transparent opacity-60 z-10" />
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
                    <span className="px-3 py-1 bg-[#2962ff]/10 backdrop-blur-sm rounded-full 
                                   text-sm text-[#d1d4dc] border border-[#2962ff]/20
                                   hover:bg-[#2962ff]/20 transition-all duration-300">
                      {article.date}
                    </span>
                    <span className="px-3 py-1 bg-[#2962ff]/10 backdrop-blur-sm rounded-full 
                                   text-sm text-[#d1d4dc] border border-[#2962ff]/20
                                   hover:bg-[#2962ff]/20 transition-all duration-300">
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contenido Central */}
              <div className="md:w-1/3 p-4 md:p-6 flex flex-col justify-between 
                            border-r border-[#2a2e39] h-full
                            bg-gradient-to-b from-transparent via-transparent to-[#2962ff]/5">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-[#d1d4dc] mb-3 line-clamp-2 
                               hover:text-[#2962ff] transition-colors duration-200 font-poppins">
                    {article.title}
                  </h2>
                  <div className="text-[#787b86] text-sm leading-relaxed mb-4 line-clamp-4 font-inter">
                    {article.description}
                  </div>
                </div>

                <div className="mt-auto">
                  <MarketSentimentIndicator symbol={getMarketSymbol(article)} />
                </div>
              </div>

              {/* Tarjeta Lateral */}
              <div className="md:w-1/3 p-4 md:p-6 bg-gradient-to-br from-[#131722] via-[#131722] to-[#2962ff]/5 
                            h-full flex flex-col justify-between">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-lg overflow-hidden 
                                bg-gradient-to-br from-[#1e222d] to-[#2962ff]/5
                                p-2 border border-[#2a2e39] 
                                hover:border-[#2962ff]/30
                                transition-all duration-300
                                flex items-center justify-center">
                    <img
                      src={article.firmLogo}
                      alt={`${article.firmName} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#d1d4dc] font-poppins">
                      {article.firmName}
                    </h3>
                    <p className="text-sm text-[#787b86] font-inter">Financial News Provider</p>
                  </div>
                </div>

                <div className="space-y-3 mt-auto">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleArticleClick(article);
                    }}
                    className="block w-full py-2.5 px-4 
                             bg-gradient-to-r from-[#2962ff] to-[#2979ff]
                             text-white text-center rounded-lg 
                             hover:from-[#2979ff] hover:to-[#2962ff]
                             transition-all duration-300 transform hover:-translate-y-0.5 
                             shadow-lg hover:shadow-[#2962ff]/25 text-sm font-medium font-inter
                             cursor-pointer"
                  >
                    Leer Artículo Completo
                  </button>
                  
                  <button
                    onClick={() => handleMarketAnalysisClick(article)}
                    className="block w-full py-2.5 px-4 
                             bg-gradient-to-r from-[#1e222d] to-[#2a2e39]
                             text-[#d1d4dc] text-center rounded-lg 
                             hover:from-[#2a2e39] hover:to-[#1e222d]
                             transition-all duration-300 border border-[#2a2e39] 
                             hover:border-[#2962ff]/30 text-sm font-medium font-inter"
                  >
                    Análisis de Mercado
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botón de cargar más con gradiente */}
      {visibleArticles < articles.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleArticles(prev => prev + 5)}
            className="group flex items-center space-x-2 px-6 py-3 
                     bg-gradient-to-r from-[#2962ff] to-[#2979ff]
                     text-white rounded-xl 
                     hover:from-[#2979ff] hover:to-[#2962ff]
                     transition-all duration-300 transform hover:-translate-y-1 
                     shadow-lg hover:shadow-[#2962ff]/25 font-inter"
          >
            <span>Cargar más noticias</span>
            <FaChevronDown className="group-hover:translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      )}

      {/* Modales */}
      {showArticleSummary && selectedArticle && (
        <ArticleSummaryModal
          article={selectedArticle}
          onClose={() => {
            setShowArticleSummary(false);
            setSelectedArticle(null);
          }}
        />
      )}

      {showMarketAnalysis && selectedArticle && (
        <MarketAnalysisModal 
          article={selectedArticle} 
          onClose={() => {
            setShowMarketAnalysis(false);
            setSelectedArticle(null);
          }} 
        />
      )}
    </div>
  );
};

export default ArticlesPage;