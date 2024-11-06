import React, { useState, useEffect } from 'react';
import { Filters, FilterPanelProps} from '../backend/types';
import { FaFilter, FaChevronDown, FaTimes, FaCheck } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';

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
          e.target.value = ''; // Limpiar input después de seleccionar
        }
      }}
      className="w-full px-4 py-2 rounded-lg text-sm font-medium bg-[#312354] text-gray-300 
                 border border-[#4e3a77] focus:outline-none focus:border-[#04a8c2]"
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
          className="inline-flex items-center px-3 py-2 rounded-lg text-sm bg-gradient-to-r from-[#04a8c2] to-[#67d6e9] text-white"
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

  // Sincronizar localFilters con currentFilters
  useEffect(() => {
    setLocalFilters(currentFilters);
  }, [currentFilters]);

  // Obtener valores únicos de las firms para los filtros
  const filterOptions: Record<keyof Filters, string[]> = {
    accountSizes: ['5K', '10K', '25K', '50K', '100K', '200K'],
    steps: ['1', '2', '3', 'Instant'],
    platforms: ['MT4', 'MT5', 'cTrader', 'TradingView'],
    instruments: ['Forex', 'Índices', 'Materias Primas', 'Criptomonedas', 'Futuros'],
    brokers: Array.from(new Set(firms
      .map(firm => String(firm['Broker'] || '').trim())
      .filter(Boolean)
    )),
    maxDrawdown: ['5', '10', '12', '15'],
    tradingDays: ['5', '30', '60']
  };

  const handleFilterClick = (e: React.MouseEvent, category: keyof Filters, value: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    const newFilters = {
      ...localFilters,
      [category]: localFilters[category].includes(value)
        ? localFilters[category].filter(v => v !== value)
        : [...localFilters[category], value]
    };
    
    console.log('Filtro seleccionado:', {
      category,
      value,
      currentFilters: localFilters[category],
      newFilters: newFilters[category]
    });
    
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
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
          ? 'bg-gradient-to-r from-[#04a8c2] to-[#67d6e9] text-white shadow-lg shadow-[#04a8c2]/20' 
          : 'bg-[#312354] text-gray-300 hover:bg-[#4e3a77] hover:shadow-md'
        } border border-[#4e3a77]
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
    tradingDays: "Días de Trading"
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
        className="mb-6 p-4 bg-[#312354] rounded-lg border border-[#4e3a77]"
      >
        <h3 className="text-sm font-medium text-gray-300 mb-3">Filtros Activos</h3>
        <div className="flex flex-wrap gap-2">
          {activeFilters.map(({ category, value }) => (
            <span
              key={`${category}-${value}`}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#04a8c2] text-white"
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
    <div className="bg-gradient-to-br from-[#392a63] to-[#2a1e4f] rounded-lg shadow-xl p-6 mb-6 border border-purple-500/10">
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
                className="flex justify-end mt-6 pt-4 border-t border-purple-500/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <button
                  onClick={(e) => {
                    // Solo aquí permitimos la actualización de la página
                    setLocalFilters({
                      accountSizes: [],
                      steps: [],
                      platforms: [],
                      instruments: [],
                      brokers: [],
                      maxDrawdown: [],
                      tradingDays: []
                    });
                    onFilterChange({
                      accountSizes: [],
                      steps: [],
                      platforms: [],
                      instruments: [],
                      brokers: [],
                      maxDrawdown: [],
                      tradingDays: []
                    });
                  }}
                  className="px-6 py-2 bg-[#312354] text-white rounded-lg hover:bg-[#4e3a77] 
                    transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
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

