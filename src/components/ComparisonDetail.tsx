import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaCheck, FaTrophy, FaExchangeAlt } from 'react-icons/fa';

const ComparisonDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    console.log('Slug:', slug);
  }, [slug]);

  // Estos datos vendrían de tu backend o archivo de datos
  const comparisonData = {
    firm1: {
      name: 'FTMO',
      logo: '/images/firms/ftmo-logo.png',
    },
    firm2: {
      name: 'MyForexFunds',
      logo: '/images/firms/myforexfunds-logo.png',
    },
    metrics: [
      {
        category: 'Condiciones de Trading',
        metrics: [
          {
            name: 'Profit Split',
            firm1Value: '90%',
            firm2Value: '85%',
            winner: 'firm1',
            icon: <FaTrophy className="text-yellow-400" />
          },
          // Más métricas...
        ]
      },
      // Más categorías...
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#131722]">
      {/* Header con gradiente */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-poppins bg-gradient-to-r from-[#2962ff] to-[#2979ff] text-transparent bg-clip-text mb-4">
          Comparación Detallada
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#2962ff] to-[#2979ff] mx-auto rounded-full"></div>
      </div>

      {/* Encabezado de Comparación */}
      <div className="flex items-center justify-center space-x-12 mb-12">
        <div className="text-center">
          <div className="w-24 h-24 bg-[#1e222d] rounded-xl p-4 mb-4
                         border border-[#2a2e39] hover:border-[#2962ff]/30
                         transition-all duration-300">
            <img 
              src={comparisonData.firm1.logo}
              alt={comparisonData.firm1.name}
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#d1d4dc] font-poppins">
            {comparisonData.firm1.name}
          </h2>
        </div>

        <div className="flex items-center justify-center w-16 h-16 rounded-full 
                      bg-[#2962ff]/10 border border-[#2962ff]/20">
          <FaExchangeAlt className="text-[#2962ff] text-2xl" />
        </div>

        <div className="text-center">
          <div className="w-24 h-24 bg-[#1e222d] rounded-xl p-4 mb-4
                         border border-[#2a2e39] hover:border-[#2962ff]/30
                         transition-all duration-300">
            <img 
              src={comparisonData.firm2.logo}
              alt={comparisonData.firm2.name}
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#d1d4dc] font-poppins">
            {comparisonData.firm2.name}
          </h2>
        </div>
      </div>

      {/* Tabla de Comparación */}
      <div className="space-y-8">
        {comparisonData.metrics.map((category, idx) => (
          <div key={idx} className="bg-[#1e222d] rounded-xl overflow-hidden
                                  border border-[#2a2e39] hover:border-[#2962ff]/30
                                  transition-all duration-300">
            <div className="bg-gradient-to-r from-[#2962ff]/10 to-transparent px-6 py-4
                          border-b border-[#2a2e39]">
              <h3 className="text-xl font-semibold text-[#d1d4dc] font-poppins">
                {category.category}
              </h3>
            </div>

            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="text-[#787b86] border-b border-[#2a2e39]">
                    <th className="text-left py-3 font-poppins">Característica</th>
                    <th className="text-center py-3 font-poppins">{comparisonData.firm1.name}</th>
                    <th className="text-center py-3 font-poppins">{comparisonData.firm2.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {category.metrics.map((metric, index) => (
                    <tr 
                      key={index}
                      className="border-b border-[#2a2e39]/30 last:border-0
                               hover:bg-[#2962ff]/5 transition-colors duration-200"
                    >
                      <td className="py-4 flex items-center space-x-2 text-[#d1d4dc] font-inter">
                        {metric.icon}
                        <span>{metric.name}</span>
                      </td>
                      <td className={`text-center py-4 ${
                        metric.winner === 'firm1' ? 'text-[#2962ff]' : 'text-[#d1d4dc]'
                      } font-inter`}>
                        <div className="flex items-center justify-center space-x-2">
                          {metric.winner === 'firm1' && (
                            <FaCheck className="text-[#2962ff]" />
                          )}
                          <span>{metric.firm1Value}</span>
                        </div>
                      </td>
                      <td className={`text-center py-4 ${
                        metric.winner === 'firm2' ? 'text-[#2962ff]' : 'text-[#d1d4dc]'
                      } font-inter`}>
                        <div className="flex items-center justify-center space-x-2">
                          {metric.winner === 'firm2' && (
                            <FaCheck className="text-[#2962ff]" />
                          )}
                          <span>{metric.firm2Value}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Conclusión */}
      <div className="mt-12 bg-[#1e222d] rounded-xl overflow-hidden
                     border border-[#2a2e39] hover:border-[#2962ff]/30
                     transition-all duration-300">
        <div className="bg-gradient-to-r from-[#2962ff]/10 to-transparent px-6 py-4
                       border-b border-[#2a2e39]">
          <h3 className="text-xl font-semibold text-[#d1d4dc] font-poppins">
            Conclusión
          </h3>
        </div>
        <div className="p-6">
          <p className="text-[#787b86] font-inter leading-relaxed">
            Aquí va un resumen detallado de la comparación...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonDetail;