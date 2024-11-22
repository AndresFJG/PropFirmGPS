import React from 'react';

interface TradingViewWidgetProps {
  currency1: string;
  currency2: string;
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({ currency1, currency2 }) => {
  // Construir la URL del iframe usando las divisas seleccionadas
  const widgetUrl = `https://s.tradingview.com/widgetembed/?frameElementId=tradingview_76d87&symbol=${currency1}&interval=D&hidesidetoolbar=1&hidetoptoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&hideideas=1&theme=dark&style=1&timezone=exchange&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=es&utm_source=&utm_medium=widget&utm_campaign=chart&utm_term=${currency1}`;

  return (
    <div className="max-w-full">
      <h3 className="text-2xl font-bold text-[#d1d4dc] mb-6 font-poppins">
        Análisis Técnico
      </h3>
      
      <div className="w-full h-[400px] md:h-[600px] bg-[#131722] rounded-lg border border-[#2a2e39] overflow-hidden">
        <iframe
          src={widgetUrl}
          style={{ width: '100%', height: '100%' }}
          frameBorder="0"
          allowTransparency={true}
          scrolling="no"
        />
      </div>
    </div>
  );
};

export default TradingViewWidget; 