import React from 'react';
import { Firm } from '../backend/types';
import '../index.css';

interface FirmDetailsProps {
  firm: Firm;
}

const FirmDetails: React.FC<FirmDetailsProps> = ({ firm }) => {
  return (
    <div className="bg-gradient-to-br from-[#131722] via-[#1e222d] to-[#2962ff]/10 p-8 rounded-2xl max-h-[80vh] overflow-y-auto
                    scrollbar-thin scrollbar-thumb-[#2962ff]/20 scrollbar-track-[#1e222d]
                    shadow-2xl border border-[#2a2e39] hover:border-[#2962ff]/30
                    transition-all duration-300">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold font-poppins bg-gradient-to-r from-[#2962ff] to-[#2979ff] text-transparent bg-clip-text">
          Detalles de la Firma
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#2962ff] to-[#2979ff] mx-auto rounded-full mt-4"></div>
      </div>

      {/* Sección de resumen */}
      <div className="bg-gradient-to-br from-[#1e222d] via-[#1e222d] to-[#2962ff]/5 p-6 rounded-xl mb-8 
                    border border-[#2a2e39] hover:border-[#2962ff]/30 
                    transition-all duration-300
                    shadow-lg hover:shadow-[#2962ff]/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Precio', value: firm['PRICE'], icon: '💰' },
            { label: 'Cuenta', value: firm['ACCOUNT SIZE'], icon: '💼' },
            { label: 'Objetivo', value: firm['PROFIT TARGET'], icon: '🎯' },
            { label: 'Pérdida diaria', value: firm['MAX. DAILY LOSS'], icon: '📉' },
            { label: 'Pérdida total', value: firm['MAX. TOTAL DRAWDOWN'], icon: '⚠️' },
            { label: 'Comisión', value: firm['COMMISION PER ROUND LOT (FOREX)'], icon: '💱' },
            { label: 'Ratio', value: firm['PROFIT TARGET TO DRAWDOWN RATIO'], icon: '📊' },
            { label: 'Calificación', value: `⭐ ${firm['Trust Pilot Rating']}`, icon: '🏆' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#131722] via-[#131722] to-[#2962ff]/5 p-4 rounded-xl 
                       border border-[#2a2e39] hover:border-[#2962ff]/30 
                       transition-all duration-300
                       hover:shadow-lg hover:shadow-[#2962ff]/10
                       hover:bg-gradient-to-br hover:from-[#131722] hover:via-[#1e222d] hover:to-[#2962ff]/10"
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl bg-[#2962ff]/10 p-2 rounded-lg">{item.icon}</span>
                <div>
                  <p className="text-[#787b86] text-xs font-medium font-inter">{item.label}</p>
                  <p className="text-[#d1d4dc] font-semibold font-inter mt-1">{item.value || 'N/A'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detalles completos */}
      <div className="bg-gradient-to-br from-[#1e222d] via-[#1e222d] to-[#2962ff]/5 rounded-xl 
                    border border-[#2a2e39] overflow-hidden
                    hover:border-[#2962ff]/30 transition-all duration-300
                    shadow-lg hover:shadow-[#2962ff]/10">
        <div className="bg-gradient-to-r from-[#2962ff]/10 via-[#2962ff]/5 to-transparent 
                     px-6 py-4 border-b border-[#2a2e39]">
          <h3 className="text-xl font-semibold text-[#d1d4dc] font-poppins">
            Características Detalladas
          </h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
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
              className="py-3 border-b border-[#2a2e39]/30 last:border-b-0
                       hover:bg-gradient-to-r hover:from-[#2962ff]/5 hover:to-transparent 
                       transition-all duration-200
                       px-4 rounded-lg group"
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
      <div className="mt-8 text-center">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#2962ff]/20 to-transparent mb-4"></div>
        <p className="text-[#787b86] text-sm font-inter">
          Última actualización: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default FirmDetails;
