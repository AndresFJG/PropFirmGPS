import React, { useState, useEffect } from 'react';
import { Filters, FilterPanelProps} from '../backend/types';
import { FaFilter, FaChevronDown, FaTimes, FaCheck } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';
import { logEvent, logError } from '../types/analytics';

interface ActiveFilter {
  category: string;
  value: string;
}

const BrokerFilter: React.FC<{
  options: string[];
  category: keyof Filters;
  selectedValues: string[];
  onFilterClick: (e: React.MouseEvent, category: keyof Filters, value: string) => void;
}> = ({ options, category, selectedValues, onFilterClick }) => (
  <div className="w-full">
    <input 
      type="text" 
      list="brokers-list"
      placeholder="Buscar broker..."
      onChange={(e) => {
        if (e.target.value) {
          onFilterClick(e as any, category, e.target.value);
          e.target.value = '';
        }
      }}
      className="w-full px-4 py-2 rounded-lg text-sm font-medium bg-[#1e222d] text-gray-300 
                 border border-[#2a2e39] focus:outline-none focus:border-[#2962ff]"
    />
    <datalist id="brokers-list">
      {options.map((broker) => (
        <option key={broker} value={broker} />
      ))}
    </datalist>
    
    <div className="flex flex-wrap gap-2 mt-2">
      {selectedValues.map((broker) => (
        <span
          key={broker}
          className="inline-flex items-center px-3 py-2 rounded-lg text-sm bg-[#2962ff] text-white"
        >
          {broker}
          <FaTimes
            className="ml-2 cursor-pointer hover:text-gray-200"
            onClick={(e) => onFilterClick(e, category, broker)}
          />
        </span>
      ))}
    </div>
  </div>
);

const FilterPanel: React.FC<FilterPanelProps> = ({ onFilterChange, firms, currentFilters }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [localFilters, setLocalFilters] = useState<Filters>(currentFilters);

  // Asegurarnos de que localFilters se actualice cuando currentFilters cambie
  useEffect(() => {
    setLocalFilters(currentFilters);
  }, [currentFilters]);

  // Obtener valores únicos de las firms para los filtros
  const filterOptions: Record<keyof Filters, string[]> = {
    accountSizes: ['5K', '10K', '25K', '50K', '100K', '200K'],
    steps: ['1 step', '2 steps', '3 steps', 'Instant'],
    platforms: ['MT4', 'MT5', 'cTrader', 'TradingView'],
    instruments: ['Forex', 'Índices', 'Materias Primas', 'Criptomonedas', 'Futuros'],
    brokers: Array.from(new Set(firms
      .map(firm => String(firm['Broker'] || '').trim())
      .filter(Boolean)
    )),
    maxDrawdown: ['5', '10', '12'],
    // Eliminar el filtro de días de trading
    // tradingDays: ['5', '30', '60']
  };

  const handleFilterClick = (e: React.MouseEvent, category: keyof Filters, value: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      const newFilters = {
        ...localFilters,
        [category]: localFilters[category].includes(value)
          ? localFilters[category].filter(v => v !== value)
          : [...localFilters[category], value]
      };
      
      setLocalFilters(newFilters);
      onFilterChange(newFilters);
      handleFilterChange(category, value);
    } catch (error) {
      console.error('Error in filter click:', error);
      logError(error instanceof Error ? error : new Error('Error in filter click'), 'Filter Click');
    }
  };

  const handleFilterChange = (filterType: string, value: string) => {
    logEvent('Filtros', 'Cambiar Filtro', `${filterType}: ${value}`);
    // Aquí puedes agregar más lógica si es necesario
  };

  const FilterButton: React.FC<{
    value: string;
    category: keyof Filters;
    isSelected: boolean;
  }> = ({ value, category, isSelected }) => (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleFilterClick(e, category, value);
      }}
      className={`
        px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
        flex items-center justify-between gap-2 min-w-[100px]
        ${isSelected 
          ? 'bg-[#2962ff] text-white shadow-lg shadow-[#2962ff]/20' 
          : 'bg-[#1e222d] text-gray-300 hover:bg-[#2a2e39] hover:shadow-md'
        } border border-[#2a2e39]
      `}
    >
      <span>{value}</span>
      {isSelected && <FaCheck size={12} />}
    </motion.button>
  );

  const filterCategories: Record<keyof Filters, string> = {
    accountSizes: "Tamaño de Cuenta",
    steps: "Pasos",
    platforms: "Plataformas",
    instruments: "Instrumentos",
    brokers: "Brokers",
    maxDrawdown: "Drawdown Máximo",
    // Eliminar la categoría de días de trading
    // tradingDays: "Días de Trading"
  };

  // Mostrar filtros activos
  const ActiveFilters = () => {
    const activeFilters: ActiveFilter[] = Object.entries(localFilters)
      .flatMap(([category, values]: [string, string[]]) => 
        values.map((value: string) => ({
          category: filterCategories[category as keyof Filters],
          value
        }))
      );

    if (activeFilters.length === 0) return null;

    return (
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 p-4 bg-[#1e222d] rounded-lg border border-[#2a2e39]"
      >
        <h3 className="text-sm font-medium text-gray-300 mb-3">Filtros Activos</h3>
        <div className="flex flex-wrap gap-2">
          {activeFilters.map(({ category, value }) => (
            <span
              key={`${category}-${value}`}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#2962ff] text-white"
            >
              <span className="mr-2 text-xs text-gray-200">{category}:</span>
              {value}
            </span>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-[#131722] to-[#1e222d] rounded-lg shadow-xl p-6 mb-6 border border-[#2a2e39]/30">
      <motion.div 
        className="flex justify-between items-center cursor-pointer mb-6"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex items-center space-x-3">
          <FaFilter className="text-[#04a8c2] text-xl" />
          <h2 className="text-xl font-bold text-white">Filtros de Búsqueda</h2>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className="text-[#04a8c2] text-xl" />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ActiveFilters />

            {Object.entries(filterOptions).map(([category, options]) => (
              <motion.div 
                key={category}
                className="mb-8 last:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-sm font-medium text-gray-300 mb-4 flex items-center gap-2">
                  {filterCategories[category as keyof Filters]}
                  {localFilters[category as keyof Filters].length > 0 && (
                    <span className="text-xs bg-[#04a8c2] text-white px-2 py-0.5 rounded-full">
                      {localFilters[category as keyof Filters].length}
                    </span>
                  )}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category === 'brokers' ? (
                    <BrokerFilter
                      options={options}
                      category={category as keyof Filters}
                      selectedValues={localFilters[category as keyof Filters]}
                      onFilterClick={handleFilterClick}
                    />
                  ) : (
                    options.map((option: string) => (
                      <FilterButton
                        key={`${category}-${option}`}
                        value={option}
                        category={category as keyof Filters}
                        isSelected={localFilters[category as keyof Filters].includes(option)}
                      />
                    ))
                  )}
                </div>
              </motion.div>
            ))}

            {Object.values(localFilters).some(arr => arr.length > 0) && (
              <motion.div 
                className="flex justify-end mt-6 pt-4 border-t border-[#2a2e39]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <button
                  onClick={(e) => {
                    setLocalFilters({
                      accountSizes: [],
                      steps: [],
                      platforms: [],
                      instruments: [],
                      brokers: [],
                      maxDrawdown: [],
                      // Eliminar el filtro de días de trading
                      // tradingDays: []
                    });
                    onFilterChange({
                      accountSizes: [],
                      steps: [],
                      platforms: [],
                      instruments: [],
                      brokers: [],
                      maxDrawdown: [],
                      // Eliminar el filtro de días de trading
                      // tradingDays: []
                    });
                  }}
                  className="px-6 py-2 bg-[#1e222d] text-white rounded-lg hover:bg-[#2a2e39] 
                    transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl
                    border border-[#2a2e39]"
                >
                  <FaTimes size={12} />
                  <span>Limpiar filtros</span>
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterPanel;
