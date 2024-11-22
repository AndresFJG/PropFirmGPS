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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#131722]">
      {/* Header con gradiente */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-poppins bg-gradient-to-r from-[#2962ff] to-[#2979ff] text-transparent bg-clip-text mb-4">
          Compara las Mejores Firmas
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#2962ff] to-[#2979ff] mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {comparisons.map((comparison) => (
          <div 
            key={comparison.id}
            className="bg-gradient-to-br from-[#1e222d] via-[#1e222d] to-[#2962ff]/5
                     rounded-xl overflow-hidden
                     border border-[#2a2e39] hover:border-[#2962ff]/30
                     shadow-lg hover:shadow-[#2962ff]/20
                     transform hover:-translate-y-1
                     transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                {/* Firma 1 */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 bg-[#131722] rounded-lg p-2 
                                border border-[#2a2e39] hover:border-[#2962ff]/30
                                transition-all duration-300">
                    <img 
                      src={comparison.firm1.logo}
                      alt={comparison.firm1.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-semibold text-[#d1d4dc] font-poppins">
                    {comparison.firm1.name}
                  </span>
                </div>

                {/* Icono de VS */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full 
                              bg-[#2962ff]/10 border border-[#2962ff]/20">
                  <FaExchangeAlt className="text-[#2962ff] text-xl" />
                </div>

                {/* Firma 2 */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 bg-[#131722] rounded-lg p-2 
                                border border-[#2a2e39] hover:border-[#2962ff]/30
                                transition-all duration-300">
                    <img 
                      src={comparison.firm2.logo}
                      alt={comparison.firm2.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-semibold text-[#d1d4dc] font-poppins">
                    {comparison.firm2.name}
                  </span>
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="text-[#787b86] text-sm font-inter">
                  {comparison.firm1.shortDescription} vs {comparison.firm2.shortDescription}
                </p>
              </div>

              <Link
                to={`/comparacion/${comparison.slug}`}
                className="flex items-center justify-center w-full py-3 px-4 
                         bg-gradient-to-r from-[#2962ff] to-[#2979ff]
                         text-white rounded-lg 
                         hover:from-[#2979ff] hover:to-[#2962ff]
                         transition-all duration-300 transform hover:-translate-y-0.5
                         shadow-lg hover:shadow-[#2962ff]/25
                         font-inter group"
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