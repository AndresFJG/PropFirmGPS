import React, { useState, useEffect } from 'react';
import '../index.css'

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Solución 2: Usar debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, onSearch]);

  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar firmas..."
        className="w-full p-2 pl-10 rounded border border-gray-300"
      />
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
        🔍
      </span>
    </div>
  );
};

export default SearchBar;
