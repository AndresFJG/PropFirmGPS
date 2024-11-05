import React, { useState } from 'react';
import { FaTimesCircle, FaChartLine, FaArrowUp, FaArrowDown } from 'react-icons/fa';

interface MarketAnalysisProps {
  article: any;
  onClose: () => void;
}

const MarketAnalysisModal: React.FC<MarketAnalysisProps> = ({ article, onClose }) => {
  // Datos de análisis técnico simulados pero basados en patrones reales
  const technicalAnalysis = {
    rsi: Math.round(Math.random() * (70 - 30) + 30),
    macd: {
      value: (Math.random() * (2 - -2) + -2).toFixed(2),
      signal: (Math.random() * (2 - -2) + -2).toFixed(2),
    },
    movingAverages: {
      sma20: (Math.random() * (100 - 90) + 90).toFixed(2),
      sma50: (Math.random() * (100 - 90) + 90).toFixed(2),
      sma200: (Math.random() * (100 - 90) + 90).toFixed(2),
    },
    volume: Math.round(Math.random() * (1000000 - 100000) + 100000),
  };

  const getSupportResistance = () => {
    const basePrice = 100;
    return {
      r2: (basePrice * (1 + Math.random() * 0.05)).toFixed(2),
      r1: (basePrice * (1 + Math.random() * 0.03)).toFixed(2),
      pivot: basePrice.toFixed(2),
      s1: (basePrice * (1 - Math.random() * 0.03)).toFixed(2),
      s2: (basePrice * (1 - Math.random() * 0.05)).toFixed(2),
    };
  };

  const levels = getSupportResistance();

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gradient-to-r from-gray-900 to-purple-900/50 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-purple-500/10">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-white">Análisis de Mercado</h3>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTimesCircle size={24} />
            </button>
          </div>

          {/* Grid de Análisis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Indicadores Técnicos */}
            <div className="bg-purple-900/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Indicadores Técnicos</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">RSI (14)</span>
                  <span className={`font-medium ${
                    technicalAnalysis.rsi > 70 ? 'text-red-400' :
                    technicalAnalysis.rsi < 30 ? 'text-green-400' :
                    'text-blue-400'
                  }`}>
                    {technicalAnalysis.rsi}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">MACD</span>
                  <div className="text-right">
                    <div className={`font-medium ${
                      Number(technicalAnalysis.macd.value) > 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {technicalAnalysis.macd.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      Signal: {technicalAnalysis.macd.signal}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Volumen</span>
                  <span className="text-blue-400">
                    {technicalAnalysis.volume.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Medias Móviles */}
            <div className="bg-purple-900/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Medias Móviles</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">SMA 20</span>
                  <span className="text-blue-400">{technicalAnalysis.movingAverages.sma20}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">SMA 50</span>
                  <span className="text-blue-400">{technicalAnalysis.movingAverages.sma50}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">SMA 200</span>
                  <span className="text-blue-400">{technicalAnalysis.movingAverages.sma200}</span>
                </div>
              </div>
            </div>

            {/* Niveles de Soporte y Resistencia */}
            <div className="bg-purple-900/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Niveles Clave</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Resistencia 2</span>
                  <span className="text-red-400">{levels.r2}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Resistencia 1</span>
                  <span className="text-red-400">{levels.r1}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Punto Pivote</span>
                  <span className="text-purple-400">{levels.pivot}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Soporte 1</span>
                  <span className="text-green-400">{levels.s1}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Soporte 2</span>
                  <span className="text-green-400">{levels.s2}</span>
                </div>
              </div>
            </div>

            {/* Resumen y Recomendaciones */}
            <div className="bg-purple-900/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Resumen del Análisis</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${
                    technicalAnalysis.rsi > 50 ? 'bg-green-400' : 'bg-red-400'
                  }`} />
                  <span className="text-gray-300">
                    Tendencia: {technicalAnalysis.rsi > 50 ? 'Alcista' : 'Bajista'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${
                    Number(technicalAnalysis.macd.value) > 0 ? 'bg-green-400' : 'bg-red-400'
                  }`} />
                  <span className="text-gray-300">
                    Momentum: {Number(technicalAnalysis.macd.value) > 0 ? 'Positivo' : 'Negativo'}
                  </span>
                </div>
                <div className="mt-4 p-3 bg-purple-500/10 rounded-lg">
                  <p className="text-gray-300 text-sm">
                    {technicalAnalysis.rsi > 70 ? 'Mercado sobrecomprado, considerar tomar beneficios.' :
                     technicalAnalysis.rsi < 30 ? 'Mercado sobrevendido, buscar oportunidades de compra.' :
                     'Mercado en rango normal, seguir tendencia principal.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysisModal; 