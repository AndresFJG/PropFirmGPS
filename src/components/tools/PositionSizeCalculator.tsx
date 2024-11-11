import React, { useState } from 'react';

const PositionSizeCalculator: React.FC = () => {
  const [accountSize, setAccountSize] = useState<number>(0);
  const [riskPercentage, setRiskPercentage] = useState<number>(1);
  const [entryPrice, setEntryPrice] = useState<number>(0);
  const [stopLoss, setStopLoss] = useState<number>(0);
  const [positionSize, setPositionSize] = useState<number | null>(null);

  const calculatePosition = () => {
    if (!accountSize || !riskPercentage || !entryPrice || !stopLoss) {
      alert('Por favor, complete todos los campos');
      return;
    }

    const riskAmount = accountSize * (riskPercentage / 100);
    const priceDifference = Math.abs(entryPrice - stopLoss);
    const calculatedSize = riskAmount / priceDifference;
    setPositionSize(calculatedSize);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-[#d1d4dc] mb-6 font-poppins">
        Calculadora de Tamaño de Posición
      </h3>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#787b86] text-sm font-medium mb-2">
              Tamaño de la Cuenta ($)
            </label>
            <input
              type="number"
              value={accountSize}
              onChange={(e) => setAccountSize(Number(e.target.value))}
              className="w-full bg-[#131722] border border-[#2a2e39] rounded-lg px-4 py-2
                       text-[#d1d4dc] focus:border-[#2962ff] focus:outline-none
                       transition-colors duration-200"
              placeholder="10000"
            />
          </div>
          
          <div>
            <label className="block text-[#787b86] text-sm font-medium mb-2">
              Riesgo (%)
            </label>
            <input
              type="number"
              value={riskPercentage}
              onChange={(e) => setRiskPercentage(Number(e.target.value))}
              className="w-full bg-[#131722] border border-[#2a2e39] rounded-lg px-4 py-2
                       text-[#d1d4dc] focus:border-[#2962ff] focus:outline-none
                       transition-colors duration-200"
              placeholder="1"
            />
          </div>

          <div>
            <label className="block text-[#787b86] text-sm font-medium mb-2">
              Precio de Entrada
            </label>
            <input
              type="number"
              value={entryPrice}
              onChange={(e) => setEntryPrice(Number(e.target.value))}
              className="w-full bg-[#131722] border border-[#2a2e39] rounded-lg px-4 py-2
                       text-[#d1d4dc] focus:border-[#2962ff] focus:outline-none
                       transition-colors duration-200"
              placeholder="1.2345"
            />
          </div>

          <div>
            <label className="block text-[#787b86] text-sm font-medium mb-2">
              Stop Loss
            </label>
            <input
              type="number"
              value={stopLoss}
              onChange={(e) => setStopLoss(Number(e.target.value))}
              className="w-full bg-[#131722] border border-[#2a2e39] rounded-lg px-4 py-2
                       text-[#d1d4dc] focus:border-[#2962ff] focus:outline-none
                       transition-colors duration-200"
              placeholder="1.2300"
            />
          </div>
        </div>

        <button
          onClick={calculatePosition}
          className="w-full bg-gradient-to-r from-[#2962ff] to-[#2979ff]
                   text-white font-medium py-3 px-4 rounded-lg
                   hover:from-[#2979ff] hover:to-[#2962ff]
                   transition-all duration-300 shadow-lg
                   hover:shadow-[#2962ff]/25"
        >
          Calcular
        </button>

        {positionSize !== null && (
          <div className="mt-6 p-6 bg-[#131722] rounded-lg border border-[#2a2e39]">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#787b86]">Tamaño de Posición:</span>
                <span className="text-[#2962ff] font-bold">{positionSize.toFixed(2)} unidades</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#787b86]">Riesgo Total:</span>
                <span className="text-[#2962ff] font-bold">
                  ${(accountSize * (riskPercentage / 100)).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PositionSizeCalculator; 