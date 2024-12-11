import React, { useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { FaCalculator, FaChartLine, FaBalanceScale, FaPercent } from 'react-icons/fa';
import TradingViewWidget from './tools/TradingViewWidget';

interface TradingToolsProps {
  setSelectedCurrency: React.Dispatch<React.SetStateAction<string>>;
}

const TradingTools: React.FC<TradingToolsProps> = ({ setSelectedCurrency }) => {
  const location = useLocation();
  const [selectedCurrency, setSelectedCurrencyLocal] = useState<string>('EURUSD');
  const [showCurrencySelector, setShowCurrencySelector] = useState<boolean>(false);

  const tools = [
    { 
      id: 'calculadoras', 
      path: '/herramientas/calculadoras',
      icon: FaCalculator, 
      label: 'Calculadoras',
      description: 'Calcula el tamaño de posición y gestión de riesgo'
    },
    { 
      id: 'analisis', 
      path: '/herramientas/analisis',
      icon: FaChartLine, 
      label: 'Análisis Técnico',
      description: 'Gráficos en tiempo real y análisis técnico'
    },
    { 
      id: 'riesgo', 
      path: '/herramientas/riesgo',
      icon: FaBalanceScale, 
      label: 'Gestión de Riesgo',
      description: 'Calcula y gestiona el riesgo de tus operaciones'
    },
    { 
      id: 'beneficios', 
      path: '/herramientas/beneficios',
      icon: FaPercent, 
      label: 'Calculadora de Beneficios',
      description: 'Calcula tus beneficios potenciales'
    }
  ];

  const currencies = [
    { code: 'EURUSD', name: 'EUR/USD' },
    { code: 'USDJPY', name: 'USD/JPY' },
    { code: 'GBPUSD', name: 'GBP/USD' },
    { code: 'AUDUSD', name: 'AUD/USD' },
    { code: 'USDCHF', name: 'USD/CHF' },
    { code: 'NZDUSD', name: 'NZD/USD' },
    { code: 'USDCAD', name: 'USD/CAD' },
    { code: 'AUDCAD', name: 'AUD/CAD' },
    { code: 'AUDNZD', name: 'AUD/NZD' },
    { code: 'AUDJPY', name: 'AUD/JPY' },
    { code: 'CADJPY', name: 'CAD/JPY' },
    { code: 'CHFJPY', name: 'CHF/JPY' },
    { code: 'EURNZD', name: 'EUR/NZD' },
    { code: 'EURCAD', name: 'EUR/CAD' },
    { code: 'EURGBP', name: 'EUR/GBP' },
    { code: 'GBPCAD', name: 'GBP/CAD' },
    { code: 'GBPJPY', name: 'GBP/JPY' },
    { code: 'GBPCHF', name: 'GBP/CHF' },
    { code: 'NZDCAD', name: 'NZD/CAD' },
    { code: 'NZDJPY', name: 'NZD/JPY' },
    { code: 'NZDCHF', name: 'NZD/CHF' },
  ];

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrency = event.target.value;
    setSelectedCurrency(newCurrency);
    setSelectedCurrencyLocal(newCurrency);
  };

  React.useEffect(() => {
    setShowCurrencySelector(location.pathname === '/herramientas/analisis');
  }, [location.pathname]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-[#d1d4dc] mb-8 font-poppins text-center">
        Herramientas de Trading
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            to={tool.path}
            className={`flex flex-col p-6 rounded-xl transition-all duration-300
                       ${location.pathname === tool.path
                         ? 'bg-[#2962ff]/10 border-[#2962ff] text-[#d1d4dc]'
                         : 'bg-[#1e222d] border-[#2a2e39] text-[#787b86]'
                       } border hover:border-[#2962ff]/50 hover:bg-[#2962ff]/5`}
            onClick={() => {
              if (tool.id === 'analisis') {
                setShowCurrencySelector(true);
              } else {
                setShowCurrencySelector(false);
              }
            }}
          >
            
            <div className="flex items-center space-x-3 mb-2">
              <tool.icon className={`text-2xl ${location.pathname === tool.path ? 'text-[#2962ff]' : ''}`} />
              <span className="font-medium">{tool.label}</span>
            </div>
            <p className="text-sm opacity-75">{tool.description}</p>
          </Link>
        ))}
      </div>
        {showCurrencySelector && (
        <div className="mb-6">
          <label htmlFor="currency-select" className="block text-[#d1d4dc] mb-2">Selecciona una divisa:</label>
          <select
            id="currency-select"
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            className="w-full p-2 rounded-lg bg-[#1e222d] border border-[#2a2e39] text-[#d1d4dc] focus:border-[#2962ff] focus:outline-none transition duration-200 ease-in-out"
          >
            {currencies.map(currency => (
              <option key={currency.code} value={currency.code}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="bg-[#1e222d] p-6 rounded-xl border border-[#2a2e39]">
        <Outlet />
        
      </div>
    </div>
  );
};

export default TradingTools;