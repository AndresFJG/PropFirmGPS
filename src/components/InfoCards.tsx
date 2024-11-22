import React from 'react';
import '../index.css'
import '../styles/InfoCards.css';

const InfoCards: React.FC = () => {
  const cards = [
    {
      icon: '📊',
      title: 'Análisis de Mercado',
      description: 'Acceda a análisis detallados y comparativas de los principales brokers y plataformas de trading en un solo lugar.'
    },
    {
      icon: '🎯',
      title: 'Trading Personalizado',
      description: 'Encuentre el broker que mejor se adapte a su estilo de trading, objetivos de inversión y nivel de experiencia.'
    },
    {
      icon: '⚖️',
      title: 'Evaluaciones Objetivas',
      description: 'Revisiones imparciales y detalladas de brokers, respaldadas por datos y experiencia real de traders.'
    },
    {
      icon: '💹',
      title: 'Comparativa de Comisiones',
      description: 'Análisis transparente de spreads, comisiones y costos operativos para maximizar su rentabilidad.'
    },
    {
      icon: '📱',
      title: 'Plataformas de Trading',
      description: 'Evaluación completa de plataformas de trading, herramientas de análisis y recursos disponibles.'
    },
    {
      icon: '🔒',
      title: 'Seguridad y Regulación',
      description: 'Información detallada sobre licencias, regulación y medidas de protección de fondos de cada broker.'
    },
    {
      icon: '📈',
      title: 'Recursos Educativos',
      description: 'Acceso a materiales formativos, webinars y herramientas para mejorar sus habilidades de trading.'
    },  
    {
      icon: '🔔',
      title: 'Alertas de Mercado',
      description: 'Manténgase informado sobre cambios importantes en el mercado, nuevas regulaciones y oportunidades de trading.'
    },
    
  ];

  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-8 bg-[#131722] font-inter">
      <div className="w-full max-w-5xl mx-auto mb-32 pt-16 h-auto">
        <div className="text-center space-y-6 relative">
          <div className="overflow-hidden flex items-center justify-center">
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#d1d4dc] text-center typewriter-text inline-block font-poppins"
              style={{
                whiteSpace: 'normal',
                lineHeight: '1.2',
              }}
            >
              <span className="text-[#2962ff]">Su Portal Integral</span> de{' '}
              <span className="bg-gradient-to-r from-[#2962ff] to-[#2979ff] text-transparent bg-clip-text">
                Análisis de Brokers
              </span>
            </h1>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2962ff] to-[#2979ff] mx-auto rounded-full"></div>
          <p className="text-[#787b86] text-sm sm:text-base max-w-2xl mx-auto opacity-0 animate-fadeIn font-inter"
             style={{ animationDelay: '0.5s', animationDuration: '0.5s', animationFillMode: 'forwards', animationTimingFunction: 'ease-in-out' }}>
            Descubra las mejores oportunidades en el mundo del trading con nuestro análisis experto
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-[90rem] mx-auto px-4 md:px-8 lg:px-12 mt-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card bg-gradient-to-br from-[#1e222d] to-[#131722] rounded-3xl
                       flex flex-col items-center text-center gap-4
                       transform transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-2xl
                       hover:from-[#2a2e39] hover:to-[#1e222d]
                       animate-fadeIn backdrop-blur-sm
                       border border-[#2a2e39]/30 hover:border-[#2962ff]/30
                       font-inter"
            style={{
              padding: '1rem',
              borderRadius: '24px',
              width: '100%',
              minHeight: '280px',
              maxHeight: '300px',
              boxShadow: '0 10px 30px -5px rgba(41, 98, 255, 0.1)',
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="text-3xl sm:text-4xl mb-1 text-[#2962ff] transform transition-transform duration-300 
                          hover:scale-125 hover:rotate-6 p-3 rounded-full 
                          bg-gradient-to-br from-[#2962ff]/10 to-transparent">
              {card.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#d1d4dc] hover:text-[#2962ff] 
                         transition-colors duration-300 tracking-wide font-poppins">
              {card.title}
            </h3>
            <p className="text-[#787b86] text-sm sm:text-base leading-relaxed transition-colors duration-300 
                       group-hover:text-[#d1d4dc] font-inter">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default InfoCards;

