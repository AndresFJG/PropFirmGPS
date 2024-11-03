import React from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

interface TopFirm {
  id: string;
  name: string;
  logo: string;
  maxAccountSize: string;
  discount: {
    percentage: string;
    description: string;
  };
  websiteUrl: string;
  slug: string;
}

const TopFirmStrip: React.FC = () => {
  const topFirms: TopFirm[] = [
    {
      id: '1',
      name: 'Topstep',
      logo: '/images/firms/topstep-logo.png',
      maxAccountSize: '150,000',
      discount: {
        percentage: '60%',
        description: 'Automatically Applied at Checkout'
      },
      websiteUrl: 'https://topstep.com',
      slug: 'topstep-review'
    },
    {
      id: '2',
      name: 'FTMO',
      logo: '/images/firms/ftmo-logo.png',
      maxAccountSize: '200,000',
      discount: {
        percentage: '45%',
        description: 'Use code: PROFIRMGPS'
      },
      websiteUrl: 'https://ftmo.com',
      slug: 'ftmo-review'
    },
    // Más firmas...
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Top Proprietary Trading Firms
      </h2>

      <div className="space-y-4">
        {topFirms.map((firm) => (
          <div 
            key={firm.id}
            className="bg-purple-800/30 rounded-xl overflow-hidden backdrop-blur-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-center p-6">
              {/* Logo y Nombre */}
              <div className="md:w-1/4 flex items-center space-x-4">
                <img 
                  src={firm.logo}
                  alt={firm.name}
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-xl font-bold text-white">
                  {firm.name}
                </h3>
              </div>

              {/* Información de Account Size */}
              <div className="md:w-1/4 text-center my-4 md:my-0">
                <p className="text-gray-300 text-sm">Account size up to:</p>
                <p className="text-2xl font-bold text-[#04a8c2]">
                  ${firm.maxAccountSize}
                </p>
              </div>

              {/* Información de Descuento */}
              <div className="md:w-1/4 text-center my-4 md:my-0">
                <div className="bg-green-500/20 rounded-lg px-4 py-2 inline-block">
                  <p className="text-green-400 font-bold text-lg">
                    {firm.discount.percentage} Off
                  </p>
                  <p className="text-gray-300 text-sm">
                    {firm.discount.description}
                  </p>
                </div>
              </div>

              {/* Botones */}
              <div className="md:w-1/4 flex flex-col space-y-2">
                <a
                  href={firm.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-2 bg-[#04a8c2] text-white rounded-lg hover:bg-[#038ba1] transition-colors duration-200"
                >
                  Visitar Sitio
                  <FaExternalLinkAlt className="ml-2 text-sm" />
                </a>
                
                <Link
                  to={`/firma/${firm.slug}`}
                  className="flex items-center justify-center px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition-colors duration-200"
                >
                  Ver Detalles
                  <FaInfoCircle className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Barra de Progreso o Indicador */}
            <div className="h-1 bg-gradient-to-r from-purple-600 via-[#04a8c2] to-purple-600" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFirmStrip; 