import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import SEO from './SEO';

interface FirmDetail {
  name: string;
  logo: string;
  rating: number;
  description: string;
  accountSizes: {
    size: string;
    price: string;
    features: string[];
  }[];
  keyFeatures: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  tradingConditions: {
    label: string;
    value: string;
  }[];
  websiteUrl: string;
}

interface FirmDetailProps {
  // tus props aquí
}

const FirmDetailComponent: React.FC<FirmDetailProps> = () => {
  const [firmData] = useState<FirmDetail | null>(null);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const loadFirmData = async () => {
      if (slug) {
        try {
          // Cargar datos de la firma usando el slug
          // setFirmData(datos)
        } catch (error) {
          console.error('Error loading firm data:', error);
        }
      }
    };

    loadFirmData();
  }, [slug]);

  return (
    <>
      <SEO 
        title={`${slug} - Análisis Detallado | Prop Firm GPS`}
        description={`Análisis detallado de ${slug}. Descubre las condiciones, precios y características de esta prop firm de trading.`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="bg-purple-800/30 rounded-xl p-8 backdrop-blur-sm mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6">
              <img 
                src={firmData?.logo}
                alt={firmData?.name}
                className="w-24 h-24 object-contain"
              />
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  {firmData?.name}
                </h1>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i}
                        className={`${
                          i < Math.floor(firmData?.rating || 0) 
                            ? 'text-yellow-400' 
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white font-semibold">
                    {firmData?.rating}
                  </span>
                </div>
              </div>
            </div>

            <a
              href={firmData?.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 flex items-center px-6 py-3 bg-[#04a8c2] text-white rounded-lg hover:bg-[#038ba1] transition-colors duration-200"
            >
              Visitar Sitio Oficial
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Account Sizes */}
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">
              Tamaños de Cuenta Disponibles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {firmData?.accountSizes.map((account, index) => (
                <div 
                  key={index}
                  className="bg-purple-800/30 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-[#04a8c2] mb-2">
                    {account.size}
                  </div>
                  <div className="text-xl text-white mb-4">
                    {account.price}
                  </div>
                  <ul className="space-y-2">
                    {account.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <FaCheckCircle className="text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Trading Conditions */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Condiciones de Trading
            </h2>
            <div className="bg-purple-800/30 rounded-xl p-6 backdrop-blur-sm">
              {firmData?.tradingConditions.map((condition, index) => (
                <div 
                  key={index}
                  className="flex justify-between py-3 border-b border-purple-700/30 last:border-0"
                >
                  <span className="text-gray-300">{condition.label}</span>
                  <span className="text-white font-semibold">{condition.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Características Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {firmData?.keyFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-purple-800/30 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-4 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FirmDetailComponent; 