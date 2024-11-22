import React from 'react';
import '../index.css'

interface Firm {
  id: number;
  name: string;
  accountSizes: string[];
  drawdown: string;
  profitSplit: string;
  rating: number;
}

interface FirmListingProps {
  firms: Firm[];
}

const FirmListing: React.FC<FirmListingProps> = ({ firms }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {firms.map((firm) => (
        <div key={firm.id} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">{firm.name}</h3>
          <p><strong>Tamaños de cuenta:</strong> {firm.accountSizes.join(', ')}</p>
          <p><strong>Drawdown:</strong> {firm.drawdown}</p>
          <p><strong>Reparto de beneficios:</strong> {firm.profitSplit}</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 mr-1">★</span>
            <span>{firm.rating.toFixed(1)}</span>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Más detalles
          </button>
        </div>
      ))}
    </div>
  );
};

export default FirmListing;