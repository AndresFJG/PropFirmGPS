import React from 'react';
import { Link } from 'react-router-dom';
import { FaExchangeAlt, FaArrowRight } from 'react-icons/fa';

interface ComparisonPair {
  id: string;
  firm1: {
    name: string;
    logo: string;
    shortDescription: string;
  };
  firm2: {
    name: string;
    logo: string;
    shortDescription: string;
  };
  slug: string;
}

const ComparisonCards: React.FC = () => {
  const comparisons: ComparisonPair[] = [
    {
      id: '1',
      firm1: {
        name: 'FTMO',
        logo: '/images/firms/ftmo-logo.png',
        shortDescription: 'Líder en el mercado con alto profit split',
      },
      firm2: {
        name: 'MyForexFunds',
        logo: '/images/firms/myforexfunds-logo.png',
        shortDescription: 'Evaluación rápida y condiciones flexibles',
      },
      slug: 'ftmo-vs-myforexfunds'
    },
    // Más comparaciones...
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Compara las Mejores Firmas
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {comparisons.map((comparison) => (
          <div 
            key={comparison.id}
            className="bg-purple-800/30 rounded-xl overflow-hidden backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                {/* Firma 1 */}
                <div className="flex flex-col items-center space-y-2">
                  <img 
                    src={comparison.firm1.logo}
                    alt={comparison.firm1.name}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="font-semibold text-white">
                    {comparison.firm1.name}
                  </span>
                </div>

                {/* Icono de VS */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-700/50">
                  <FaExchangeAlt className="text-[#04a8c2] text-xl" />
                </div>

                {/* Firma 2 */}
                <div className="flex flex-col items-center space-y-2">
                  <img 
                    src={comparison.firm2.logo}
                    alt={comparison.firm2.name}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="font-semibold text-white">
                    {comparison.firm2.name}
                  </span>
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="text-gray-300 text-sm">
                  {comparison.firm1.shortDescription} vs {comparison.firm2.shortDescription}
                </p>
              </div>

              <Link
                to={`/comparacion/${comparison.slug}`}
                className="flex items-center justify-center w-full py-3 px-4 bg-[#04a8c2] text-white rounded-lg hover:bg-[#038ba1] transition-colors duration-200 group"
              >
                Ver Comparación Detallada
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonCards;