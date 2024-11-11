import React from 'react';

const TradingViewWidget: React.FC = () => {
  return (
    <div className="max-w-full">
      <h3 className="text-2xl font-bold text-[#d1d4dc] mb-6 font-poppins">
        Análisis Técnico
      </h3>
      
      <div className="w-full h-[600px] bg-[#131722] rounded-lg border border-[#2a2e39] overflow-hidden">
        <iframe
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_76d87&symbol=EURUSD&interval=D&hidesidetoolbar=1&hidetoptoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&hideideas=1&theme=dark&style=1&timezone=exchange&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=es&utm_source=&utm_medium=widget&utm_campaign=chart&utm_term=EURUSD"
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