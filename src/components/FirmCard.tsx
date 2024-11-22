// src/components/FirmCard.tsx
interface FirmDetails {
    'Profirm Name': string;
    'CEO': string;
    'ESTABLISHED': string;
    'COUNTRY': string;
    'BROKER': string;
    'PLATFORM': string;
    'TRUST PILOT': string;
    'PAYMENT METHODS': string;
    'PAYOUT METHODS': string;
    'INSTRUMENTS': string;
    'LEVERAGE': string;
    'COMMISSIONS': string;
    'DEMO ACCOUNT': string;
  }
  
  const FirmCard: React.FC<{ firm: FirmDetails }> = ({ firm }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl">
        <div className="space-y-4">
          {/* Encabezado */}
          <div className="border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800">{firm['Profirm Name']}</h2>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 text-gray-600">{firm['TRUST PILOT']}</span>
            </div>
          </div>
  
          {/* Información básica */}
          <div className="grid grid-cols-2 gap-4">
            <InfoItem label="CEO" value={firm['CEO']} />
            <InfoItem label="Establecido" value={firm['ESTABLISHED']} />
            <InfoItem label="País" value={firm['COUNTRY']} />
            <InfoItem label="Broker" value={firm['BROKER']} />
          </div>
  
          {/* Plataformas */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Plataformas</h3>
            <p className="text-gray-600">{firm['PLATFORM']}</p>
          </div>
  
          {/* Métodos de pago */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Métodos de Pago</h3>
            <p className="text-gray-600">{firm['PAYMENT METHODS']}</p>
          </div>
  
          {/* Métodos de retiro */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Métodos de Retiro</h3>
            <p className="text-gray-600">{firm['PAYOUT METHODS']}</p>
          </div>
  
          {/* Instrumentos */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Instrumentos</h3>
            <p className="text-gray-600">{firm['INSTRUMENTS']}</p>
          </div>
  
          {/* Apalancamiento */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Apalancamiento</h3>
            <p className="text-gray-600">{firm['LEVERAGE']}</p>
          </div>
  
          {/* Comisiones */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Comisiones</h3>
            <p className="text-gray-600">{firm['COMMISSIONS']}</p>
          </div>
  
          {/* Demo Account */}
          {firm['DEMO ACCOUNT'] && (
            <div className="border-t pt-4">
              <h3 className="font-semibold text-gray-700 mb-2">Cuenta Demo</h3>
              <p className="text-gray-600">{firm['DEMO ACCOUNT']}</p>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div>
      <span className="font-semibold text-gray-700">{label}:</span>
      <span className="ml-2 text-gray-600">{value}</span>
    </div>
  );
  
  export default FirmCard;