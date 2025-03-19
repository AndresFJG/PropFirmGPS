import React, { useState, useEffect, useCallback, useRef } from 'react';
import '../index.css'
import { useAnalytics } from '../hooks/useAnalytics';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { trackEvent, trackTiming } = useAnalytics();
  const searchStartTime = useRef<number>(0);

  const debouncedSearch = useCallback(
    (term: string) => {
      if (term.trim()) {
        const searchTime = Date.now() - searchStartTime.current;
        trackEvent('Búsqueda', 'Realizar Búsqueda', term);
        trackTiming('Búsqueda', 'Tiempo de búsqueda', searchTime);
      }
      onSearch(term);
    },
    [onSearch, trackEvent, trackTiming]
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      debouncedSearch(searchTerm);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, debouncedSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!searchStartTime.current) {
      searchStartTime.current = Date.now();
    }
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex justify-end items-center space-x-2">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Buscar firmas..."
        className="w-1/3 p-2 pl-10 rounded-lg bg-[#1e222d] border border-[#2a2e39] text-[#d1d4dc] placeholder-[#787b86] focus:border-[#2962ff] focus:outline-none transition duration-200 ease-in-out"
      />
      <button
        onClick={() => debouncedSearch(searchTerm)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
