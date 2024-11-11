import React, { useState } from 'react';

const ProfitCalculator: React.FC = () => {
  const [initialCapital, setInitialCapital] = useState<number>(0);
  const [monthlyReturn, setMonthlyReturn] = useState<number>(0);
  const [months, setMonths] = useState<number>(12);
  const [compounding, setCompounding] = useState<boolean>(true);

  const calculateProfit = () => {
    if (compounding) {
      return initialCapital * Math.pow(1 + (monthlyReturn / 100), months);
    } else {
      const monthlyProfit = initialCapital * (monthlyReturn / 100);
      return initialCapital + (monthlyProfit * months);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-[#d1d4dc] mb-6 font-poppins">
        Calculadora de Beneficios
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-[#787b86] text-sm font-medium mb-2">
            Capital Inicial ($)
          </label>
          <input
            type="number"
            value={initialCapital}
            onChange={(e) => setInitialCapital(Number(e.target.value))}
            className="w-full bg-[#131722] border border-[#2a2e39] rounded-lg px-4 py-2
                     text-[#d1d4dc] focus:border-[#2962ff] focus:outline-none
                     transition-colors duration-200"
          />
        </div>

        <div>
          <label className="block text-[#787b86] text-sm font-medium mb-2">
            Retorno Mensual (%)
          </label>
          <input
            type="number"
            value={monthlyReturn}
            onChange={(e) => setMonthlyReturn(Number(e.target.value))}
            className="w-full bg-[#131722] border border-[#2a2e39] rounded-lg px-4 py-2
                     text-[#d1d4dc] focus:border-[#2962ff] focus:outline-none
                     transition-colors duration-200"
          />
        </div>

        <div>
          <label className="block text-[#787b86] text-sm font-medium mb-2">
            Período (meses)
          </label>
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full bg-[#131722] border border-[#2a2e39] rounded-lg px-4 py-2
                     text-[#d1d4dc] focus:border-[#2962ff] focus:outline-none
                     transition-colors duration-200"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={compounding}
            onChange={(e) => setCompounding(e.target.checked)}
            className="w-4 h-4 text-[#2962ff] bg-[#131722] border-[#2a2e39] rounded
                     focus:ring-[#2962ff] focus:ring-offset-0"
          />
          <label className="text-[#787b86] text-sm font-medium">
            Interés Compuesto
          </label>
        </div>

        <div className="mt-6 p-6 bg-[#131722] rounded-lg border border-[#2a2e39]">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[#787b86]">Capital Final:</span>
              <span className="text-[#2962ff] font-bold">
                ${calculateProfit().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#787b86]">Beneficio Total:</span>
              <span className="text-green-500 font-bold">
                ${(calculateProfit() - initialCapital).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitCalculator; 