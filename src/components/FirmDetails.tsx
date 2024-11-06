import React from 'react';
import { Firm } from '../backend/types';
import '../index.css';

interface FirmDetailsProps {
  firm: Firm;
}

const FirmDetails: React.FC<FirmDetailsProps> = ({ firm }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg mt-4 text-white max-h-[80vh] overflow-y-auto shadow-lg">
      {/* Sección de resumen de la firma */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <div className="grid grid-cols-1 rounded-lg lg:grid-cols-4 gap-4">
          {[
            { label: 'Precio', value: firm['PRICE'] },
            { label: 'Cuenta', value: firm['ACCOUNT SIZE'] },
            { label: 'Objetivo', value: firm['PROFIT TARGET'] },
            { label: 'Pérdida diaria', value: firm['MAX. DAILY LOSS'] },
            { label: 'Pérdida total', value: firm['MAX. TOTAL DRAWDOWN'] },
            { label: 'Comisión', value: firm['COMMISION PER ROUND LOT (FOREX)'] },
            { label: 'Ratio', value: firm['PROFIT TARGET TO DRAWDOWN RATIO'] },
            { label: 'Calificación', value: `⭐ ${firm['Trust Pilot Rating']}` },
          ].map((item, index) => (
            <div
              key={index}
              className="p-3 bg-gray-700 flex flex-col items-center rounded-lg border-b border-gray-600"
            >
              <p className="text-xs font-semibold text-gray-400">{item.label}</p>
              <p className="text-sm font-bold mt-1">{item.value || 'N/A'}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Detalles completos de la firma */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'Fase 1 Objetivo de beneficios', value: firm['Phase 1 Profit Target'] },
          { title: 'Fase 2 Objetivo de beneficios', value: firm['Phase 2 Profit Target'] },
          { title: 'Pérdida máxima diaria', value: firm['Max Daily Loss'] },
          { title: 'Pérdida máxima total', value: firm['Max Total Drawdown'] },
          { title: 'Tipo de reembolso', value: firm['Daily Drawdown Reset Type'] },
          { title: 'Método de reducción', value: firm['Drawdown Method'] },
          { title: 'Días mínimos de negociación', value: firm['Minimun Trading Days'] },
          { title: 'Días máximos de negociación', value: firm['Maximun Trading Days'] },
          { title: 'Regla de 2 categorías', value: firm['Stop-loss Required'] ? 'Sí' : 'No' },
          { title: 'Ratio entre el objetivo de beneficio y la reducción', value: firm['Profit Target to Drawdown Ratio'] },
          { title: 'Tasa de descuento', value: firm['Comissions (Forex)'] },
          { title: 'Apalancamiento', value: firm['Leverage'] },
          { title: 'Tarifa de reembolso', value: firm['Refund Fee'] },
          { title: 'Escala', value: firm['Scaling'] },
          { title: 'Asesores expertos', value: firm['Expert Advisors (EA) are allowed'] ? 'Sí' : 'No' },
          { title: 'Comercio de copias', value: firm['Copy Trading'] },
          { title: 'Comercio de noticias', value: firm['News Trading'] },
          { title: 'Fin de semana', value: firm['Weekend Holding'] },
          { title: 'Cierre automático en Target', value: firm['Auto-close at Target'] },
          { title: 'Bloqueador de reducción', value: firm['Drawdown Blocker'] },
          { title: 'Frecuencia de pago', value: firm['Payout Frequency'] },
          { title: 'Asignación máxima (sin escalar)', value: firm['Max Allocation (without scaling)'] },
          { title: 'Intercambiar cuentas gratuitas', value: firm['Swap Free Accounts'] },
          { title: 'Tecnología', value: firm['Technology'] },
          { title: 'Corredor', value: firm['Broker'] },
          { title: 'Plataforma(s) de negociación', value: firm['Trading Platforms'] },
          { title: 'Calificación piloto de confianza', value: firm['Trust Pilot Rating'] },
          { title: 'Establecido', value: firm['Established'] },
          { title: 'País', value: firm['Country'] },
          { title: 'Puntos de fidelidad', value: firm['Loyalty Points'] },
        ].map((detail, index) => (
          <div
            key={index}
            className="py-2 border-b border-gray-600 flex justify-between items-center"
          >
            <p className="text-sm font-semibold">{detail.title}:</p>
            <p className="text-sm">{detail.value || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirmDetails;
