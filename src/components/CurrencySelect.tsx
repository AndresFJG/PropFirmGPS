// src/components/CurrencyList.tsx
import React from 'react';

interface Currency {
  code: string;
  name: string;
}

interface CurrencySelectProps {
  currencies: Currency[];
  onSelect: (currencyCode: string, index: number) => void; // Callback para manejar la selección
  selectedCurrencies: string[]; // Array para las divisas seleccionadas
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({ currencies, onSelect, selectedCurrencies }) => {
  return (
    <div className="mb-6">
      <label className="block text-[#d1d4dc] mb-2">Selecciona dos divisas:</label>
      {selectedCurrencies.map((currencyCode, index) => (
        <select
          key={index}
          value={currencyCode}
          onChange={(e) => onSelect(e.target.value, index)}
          className="w-full p-2 mb-4 rounded-lg bg-[#1e222d] border border-[#2a2e39] text-[#d1d4dc] focus:border-[#2962ff] focus:outline-none transition duration-200 ease-in-out"
        >
          <option value="">-- Selecciona una divisa --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name} ({currency.code})
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

export default CurrencySelect;