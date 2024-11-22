import React, { useState } from 'react';

const RiskManagement: React.FC = () => {
  const [riskAmount, setRiskAmount] = useState<number>(0);
  const [winRate, setWinRate] = useState<number>(50);
  const [riskRewardRatio, setRiskRewardRatio] = useState<number>(2);

  const calculateExpectedValue = () => {
    const winProbability = winRate / 100;
    const lossProbability = 1 - winProbability;
    const reward = riskAmount * riskRewardRatio;
    return (winProbability * reward) - (lossProbability * riskAmount);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-[#d1d4dc] mb-6 font-poppins">
        Gestión de Riesgo
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-[#787b86] text-sm font-medium mb-2">
            Cantidad en Riesgo ($)
          </label>
          <input
            type="number"
            value={riskAmount}
            onChange={(e) => setRiskAmount(Number(e.target.value))}
            className="w-full bg-[#131722] border border-[#2a2e39] rounded-lg px-4 py-2
                     text-[#d1d4dc] focus:border-[#2962ff] focus:outline-none
                     transition-colors duration-200"
          />
        </div>

        <div>
          <label className="block text-[#787b86] text-sm font-medium mb-2">
            Win Rate (%)
          </label>
          <input
            type="number"
            value={winRate}
            onChange={(e) => setWinRate(Number(e.target.value))}
            className="w-full bg-[#131722] border border-[#2a2e39] rounded-lg px-4 py-2
                     text-[#d1d4dc] focus:border-[#2962ff] focus:outline-none
                     transition-colors duration-200"
          />
        </div>

        <div>
          <label className="block text-[#787b86] text-sm font-medium mb-2">
            Risk/Reward Ratio
          </label>
          <input
            type="number"
            value={riskRewardRatio}
            onChange={(e) => setRiskRewardRatio(Number(e.target.value))}
            className="w-full bg-[#131722] border border-[#2a2e39] rounded-lg px-4 py-2
                     text-[#d1d4dc] focus:border-[#2962ff] focus:outline-none
                     transition-colors duration-200"
          />
        </div>

        <div className="mt-6 p-6 bg-[#131722] rounded-lg border border-[#2a2e39]">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[#787b86]">Valor Esperado:</span>
              <span className={`font-bold ${calculateExpectedValue() >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                ${calculateExpectedValue().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#787b86]">Recompensa Potencial:</span>
              <span className="text-[#2962ff] font-bold">
                ${(riskAmount * riskRewardRatio).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskManagement; 