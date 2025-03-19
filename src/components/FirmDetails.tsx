import React from 'react';
import { Firm } from '../backend/types';
import '../index.css';
import { logEvent } from '../types/analytics';

interface FirmDetailsProps {
  firm: Firm;
}

// Valores simulados del mercado
const simulatedMarketValues = {
  PRICE: 1000, // Valor simulado para el precio
  'ACCOUNT SIZE': 50000, // Valor simulado para el tamaño de la cuenta
  'PROFIT TARGET': 15, // Valor simulado para el objetivo de beneficios
  'MAX. DAILY LOSS': 200, // Valor simulado para la pérdida diaria máxima
  'MAX. TOTAL DRAWDOWN': 1000, // Valor simulado para la pérdida total máxima
  'COMMISION PER ROUND LOT (FOREX)': 10, // Valor simulado para la comisión
  'PROFIT TARGET TO DRAWDOWN RATIO': 1.5, // Valor simulado para el ratio
  'Trust Pilot Rating': 4.5, // Valor simulado para la calificación
  // Agrega más valores simulados según sea necesario
};

const FirmDetails: React.FC<FirmDetailsProps> = ({ firm }) => {
  const handleFirmClick = (actionType: string, detail?: string) => {
    logEvent('Firma', actionType, `${firm.name} - ${detail}`);
  };

  return (
    <div className="bg-gradient-to-br from-[#131722] via-[#1e222d] to-[#2962ff]/10 p-4 sm:p-8 rounded-2xl max-h-[80vh] overflow-y-auto
                    scrollbar-thin scrollbar-thumb-[#2962ff]/20 scrollbar-track-[#1e222d]
                    shadow-2xl border border-[#2a2e39] hover:border-[#2962ff]/30
                    transition-all duration-300">
      {/* Header */}
      <div className="text-center mb-4 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold font-poppins bg-gradient-to-r from-[#2962ff] to-[#2979ff] text-transparent bg-clip-text">
          Detalles de la Firma
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#2962ff] to-[#2979ff] mx-auto rounded-full mt-2 sm:mt-4"></div>
      </div>

      {/* Sección de resumen */}
      <div className="bg-gradient-to-br from-[#1e222d] via-[#1e222d] to-[#2962ff]/5 p-4 sm:p-6 rounded-xl mb-4 sm:mb-8 
                    border border-[#2a2e39] hover:border-[#2962ff]/30 
                    transition-all duration-300
                    shadow-lg hover:shadow-[#2962ff]/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Precio', value: firm['PRICE'] || simulatedMarketValues.PRICE, icon: '💰' },
            { label: 'Cuenta', value: firm['ACCOUNT SIZE'] || simulatedMarketValues['ACCOUNT SIZE'], icon: '💼' },
            { label: 'Objetivo', value: firm['PROFIT TARGET'] || simulatedMarketValues['PROFIT TARGET'], icon: '🎯' },
            { label: 'Pérdida diaria', value: firm['MAX. DAILY LOSS'] || simulatedMarketValues['MAX. DAILY LOSS'], icon: '📉' },
            { label: 'Pérdida total', value: firm['MAX. TOTAL DRAWDOWN'] || simulatedMarketValues['MAX. TOTAL DRAWDOWN'], icon: '⚠️' },
            { label: 'Comisión', value: firm['COMMISION PER ROUND LOT (FOREX)'] || simulatedMarketValues['COMMISION PER ROUND LOT (FOREX)'], icon: '💱' },
            { label: 'Ratio', value: firm['PROFIT TARGET TO DRAWDOWN RATIO'] || simulatedMarketValues['PROFIT TARGET TO DRAWDOWN RATIO'], icon: '📊' },
            { label: 'Calificación', value: `⭐ ${firm['Trust Pilot Rating'] || simulatedMarketValues['Trust Pilot Rating']}`, icon: '🏆' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#131722] via-[#131722] to-[#2962ff]/5 p-4 rounded-xl 
                       border border-[#2a2e39] hover:border-[#2962ff]/30 
                       transition-all duration-300
                       hover:shadow-lg hover:shadow-[#2962ff]/10
                       hover:bg-gradient-to-br hover:from-[#131722] hover:via-[#1e222d] hover:to-[#2962ff]/10"
            >
              <div className="flex items-center space-x-2">
                <span className="text-lg sm:text-xl bg-[#2962ff]/10 p-2 rounded-lg">{item.icon}</span>
                <div>
                  <p className="text-[#787b86] text-xs sm:text-sm font-medium font-inter">{item.label}</p>
                  <p className="text-[#d1d4dc] font-semibold font-inter mt-1">{item.value || 'N/A'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detalles completos */}
      <div 
        onClick={() => handleFirmClick('Ver Detalles', 'Características')}
        className="bg-gradient-to-br from-[#1e222d] via-[#1e222d] to-[#2962ff]/5 rounded-xl 
                    border border-[#2a2e39] overflow-hidden
                    hover:border-[#2962ff]/30 transition-all duration-300
                    shadow-lg hover:shadow-[#2962ff]/10"
      >
        <div className="bg-gradient-to-r from-[#2962ff]/10 via-[#2962ff]/5 to-transparent 
                     px-4 sm:px-6 py-2 sm:py-4 border-b border-[#2a2e39]">
          <h3 className="text-lg sm:text-xl font-semibold text-[#d1d4dc] font-poppins">
            Características Detalladas
          </h3>
        </div>
        <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 sm:gap-y-4">
          {[
            { title: 'Fase 1 Objetivo de beneficios', value: firm['Phase 1 Profit Target'] || 'N/A' },
            { title: 'Fase 2 Objetivo de beneficios', value: firm.profitTargetPhase2 || 'N/A' },
            { title: 'Pérdida máxima diaria', value: firm['Max Daily Loss'] || 'N/A' },
            { title: 'Pérdida máxima total', value: firm['Max Total Drawdown'] || 'N/A' },
            { title: 'Tipo de reembolso', value: firm['Daily Drawdown Reset Type'] || 'N/A' },
            { title: 'Método de reducción', value: firm['Drawdown Method'] || 'N/A' },
            { title: 'Días mínimos de negociación', value: firm['Minimun Trading Days'] || 'N/A' },
            { title: 'Días máximos de negociación', value: firm['Maximun Trading Days'] || 'N/A' },
            { title: 'Regla de 2 categorías', value: firm['Stop-loss Required'] ? 'Sí' : 'No' },
            { title: 'Ratio entre el objetivo de beneficio y la reducción', value: firm['Profit Target to Drawdown Ratio'] || 'N/A' },
            { title: 'Tasa de descuento', value: firm['Comissions (Forex)'] || 'N/A' },
            { title: 'Apalancamiento', value: firm['Leverage'] || 'N/A' },
            { title: 'Tarifa de reembolso', value: firm['Refund Fee'] || 'N/A' },
            { title: 'Escala', value: firm['Scaling'] || 'N/A' },
            { title: 'Asesores expertos', value: firm['Expert Advisors (EA) are allowed'] ? 'Sí' : 'No' },
            { title: 'Comercio de copias', value: firm['Copy Trading'] || 'N/A' },
            { title: 'Comercio de noticias', value: firm['News Trading'] || 'N/A' },
            { title: 'Fin de semana', value: firm['Weekend Holding'] || 'N/A' },
            { title: 'Cierre automático en Target', value: firm['Auto-close at Target'] || 'N/A' },
            { title: 'Bloqueador de reducción', value: firm['Drawdown Blocker'] || 'N/A' },
            { title: 'Frecuencia de pago', value: firm['Payout Frequency'] || 'N/A' },
            { title: 'Asignación máxima (sin escalar)', value: firm['Max Allocation (without scaling)'] || 'N/A' },
            { title: 'Intercambiar cuentas gratuitas', value: firm['Swap Free Accounts'] || 'N/A' },
            { title: 'Tecnología', value: firm['Technology'] || 'N/A' },
            { title: 'Corredor', value: firm['Broker'] || 'N/A' },
            { title: 'Plataforma(s) de negociación', value: firm['Trading Platforms'] || 'N/A' },
            { title: 'Calificación piloto de confianza', value: firm['Trust Pilot Rating'] || 'N/A' },
            { title: 'Establecido', value: firm['Established'] || 'N/A' },
            { title: 'País', value: firm['Country'] || 'N/A' },
            { title: 'Puntos de fidelidad', value: firm['Loyalty Points'] || 'N/A' },
          ].map((detail, index) => (
            <div
              key={index}
              className="py-2 border-b border-[#2a2e39]/30 last:border-b-0
                       hover:bg-gradient-to-r hover:from-[#2962ff]/5 hover:to-transparent 
                       transition-all duration-200
                       px-2 sm:px-4 rounded-lg group"
            >
              <div className="flex justify-between items-center">
                <p className="text-[#787b86] text-sm font-medium font-inter
                          group-hover:text-[#d1d4dc] transition-colors duration-200">
                  {detail.title}
                </p>
                <p className="text-[#d1d4dc] text-sm font-semibold font-inter
                          group-hover:text-[#2962ff] transition-colors duration-200">
                  {detail.value || 'N/A'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer con gradiente actualizado */}
      <div className="mt-4 sm:mt-8 text-center">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#2962ff]/20 to-transparent mb-4"></div>
        <p className="text-[#787b86] text-sm font-inter">
          Última actualización: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default FirmDetails;
