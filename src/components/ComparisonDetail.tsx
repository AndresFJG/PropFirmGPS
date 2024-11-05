import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaCheck, FaTimes, FaInfoCircle, FaTrophy } from 'react-icons/fa';

interface ComparisonMetric {
  category: string;
  metrics: {
    name: string;
    firm1Value: string | number;
    firm2Value: string | number;
    winner: 'firm1' | 'firm2' | 'tie';
    icon?: React.ReactNode;
  }[];
}

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Encabezado */}
      <div className="flex items-center justify-center space-x-8 mb-12">
        <div className="text-center">
          <img 
            src={comparisonData.firm1.logo}
            alt={comparisonData.firm1.name}
            className="w-24 h-24 object-contain mb-4"
          />
          <h2 className="text-2xl font-bold text-white">
            {comparisonData.firm1.name}
          </h2>
        </div>

        <div className="text-3xl font-bold text-[#04a8c2]">VS</div>

        <div className="text-center">
          <img 
            src={comparisonData.firm2.logo}
            alt={comparisonData.firm2.name}
            className="w-24 h-24 object-contain mb-4"
          />
          <h2 className="text-2xl font-bold text-white">
            {comparisonData.firm2.name}
          </h2>
        </div>
      </div>

      {/* Tabla de Comparación */}
      <div className="space-y-8">
        {comparisonData.metrics.map((category, idx) => (
          <div key={idx} className="bg-purple-800/30 rounded-xl overflow-hidden backdrop-blur-sm">
            <div className="bg-purple-900/50 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">
                {category.category}
              </h3>
            </div>

            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-300 border-b border-purple-700/50">
                    <th className="text-left py-3">Característica</th>
                    <th className="text-center py-3">{comparisonData.firm1.name}</th>
                    <th className="text-center py-3">{comparisonData.firm2.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {category.metrics.map((metric, index) => (
                    <tr 
                      key={index}
                      className="border-b border-purple-700/30 last:border-0"
                    >
                      <td className="py-4 flex items-center space-x-2">
                        {metric.icon}
                        <span>{metric.name}</span>
                      </td>
                      <td className={`text-center py-4 ${
                        metric.winner === 'firm1' ? 'text-green-400' : ''
                      }`}>
                        <div className="flex items-center justify-center space-x-2">
                          {metric.winner === 'firm1' && (
                            <FaCheck className="text-green-400" />
                          )}
                          <span>{metric.firm1Value}</span>
                        </div>
                      </td>
                      <td className={`text-center py-4 ${
                        metric.winner === 'firm2' ? 'text-green-400' : ''
                      }`}>
                        <div className="flex items-center justify-center space-x-2">
                          {metric.winner === 'firm2' && (
                            <FaCheck className="text-green-400" />
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
      <div className="mt-12 bg-purple-800/30 rounded-xl p-6 backdrop-blur-sm">
        <h3 className="text-xl font-semibold text-white mb-4">
          Conclusión
        </h3>
        <p className="text-gray-300">
          Aquí va un resumen detallado de la comparación...
        </p>
      </div>
    </div>
  );
};

export default ComparisonDetail;