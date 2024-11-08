import React, { useEffect } from 'react';
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

const HeroSection: React.FC = () => {
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

      // Crear el objeto de configuración
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

      // Asignar la configuración como un atributo de datos
      const widgetContainer = container.querySelector('.tradingview-widget-container__widget');
      if (widgetContainer) {
        widgetContainer.setAttribute('data-widget-config', JSON.stringify(config));
      }

      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      container.appendChild(script);
    };

    // Cargar el widget con un pequeño retraso
    const timeoutId = setTimeout(loadWidget, 100);

    return () => {
      clearTimeout(timeoutId);
      const container = document.getElementById('tradingview-widget');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      {/* Hero Content */}
      <div className="relative min-h-[60vh] flex items-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("/trading-background.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-[#131722] bg-opacity-90"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-6xl font-bold leading-tight text-[#d1d4dc]">
              Trading Profesional
              <span className="block text-[#2962ff] mt-2">A Tu Alcance</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Descubre y compara las mejores firmas de trading propietario. 
              Inicia tu camino hacia la libertad financiera con las herramientas correctas.
            </p>
            <div className="flex gap-6 justify-center mt-8">
              <Link 
                to="/comparaciones" 
                className=" border-2 border-[#2962ff] hover:bg-[#2962ff] text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all inline-block"
              >
                Comparar Firmas
              </Link>
              <Link 
                to="/recursos" 
                className="border-2 border-white hover:bg-white hover:text-[#2962ff]  text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all inline-block"
              >
                Recursos Gratuitos
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Widget Container */}
      <div className="bg-black border-t border-b border-gray-800">
        <div 
          id="tradingview-widget"
          style={{ 
            height: '42px',
            width: '100%',
            position: 'relative',
            overflow: 'hidden'
          }}
        />
      </div>

      <div className="h-1 bg-gradient-to-b from-black/20 to-transparent"></div>
    </>
  );
};

export default HeroSection;