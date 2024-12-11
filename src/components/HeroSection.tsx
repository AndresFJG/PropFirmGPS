import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

declare global {
  interface Window {
    TradingView?: {
      widget?: any;
      widgetConfig?: any;
      MediumWidget?: any;
    };
  }
}

interface HeroSectionProps {
  tableRef: React.RefObject<HTMLDivElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ tableRef }) => {
  useEffect(() => {
    const loadWidget = () => {
      const container = document.getElementById('tradingview-widget');
      if (!container) return;

      container.innerHTML = `
        <div class="tradingview-widget-container">
          <div class="tradingview-widget-container__widget"></div>
        </div>
      `;

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;

      const config = {
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "Nasdaq 100"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR/USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          }
        ],
        "showSymbolLogo": true,
        "colorTheme": "dark",
        "isTransparent": false,
        "displayMode": "adaptive",
        "locale": "es"
      };

      const widgetContainer = container.querySelector('.tradingview-widget-container__widget');
      if (widgetContainer) {
        widgetContainer.setAttribute('data-widget-config', JSON.stringify(config));
      }

      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      container.appendChild(script);
    };

    const timeoutId = setTimeout(loadWidget, 100);

    return () => {
      clearTimeout(timeoutId);
      const container = document.getElementById('tradingview-widget');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  const handleScroll = () => {
    if (tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="relative min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("/LogoProp.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-[#131722] bg-opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#d1d4dc]">
              Trading Profesional
              <span className="block text-[#2962ff] mt-2">A Tu Alcance</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Descubre y compara las mejores firmas de trading propietario. 
              Inicia tu camino hacia la libertad financiera con las herramientas correctas.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Link 
                to="/" 
                onClick={handleScroll}
                className="border-2 border-[#2962ff] hover:bg-[#2962ff] text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all inline-block"
              >
                Comparar Firmas
              </Link>
              <Link 
                to="/herramientas" 
                className="border-2 border-white hover:bg-white hover:text-[#2962ff] text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all inline-block"
              >
                Recursos Gratuitos
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black border-t border-b border-gray-800">
        <div 
          id="tradingview-widget"
          className="w-full overflow-hidden h-45"
          style={{ 
            position: 'relative',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            fontSize: '0.8rem',
          }}
        />
      </div>

      <div className="h-1 bg-gradient-to-b from-black/20 to-transparent"></div>
    </>
  );
};

export default HeroSection;