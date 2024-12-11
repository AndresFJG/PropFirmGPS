import React, { useState, useEffect } from 'react';
import '../index.css'

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Usar debounce para evitar llamadas excesivas a onSearch
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, onSearch]);

  return (
    <div className="flex justify-end items-center space-x-2">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar firmas..."
        className="w-1/3 p-2 pl-10 rounded-lg bg-[#1e222d] border border-[#2a2e39] text-[#d1d4dc] placeholder-[#787b86] focus:border-[#2962ff] focus:outline-none transition duration-200 ease-in-out"
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
