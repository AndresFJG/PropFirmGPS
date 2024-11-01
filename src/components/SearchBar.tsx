// import React, { useState } from 'react';

// interface SearchBarProps {
//   onSearch: (term: string) => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     onSearch(searchTerm);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full">
//       <div className="relative">
//         <input
//           type="text"
//           placeholder="Buscar empresa o reto"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full bg-gray-800 text-white border border-gray-700 rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-purple-500"
//         />
//         <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
//           <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//           </svg>
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SearchBar;

import React, { useState, useEffect } from 'react';
import '../index.css'

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Llamar a la función de búsqueda en tiempo real
  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  return (
    <div className="flex justify-end w-full mb-4">
      <div className="relative w-64">
        <input
          type="text"
          placeholder="Buscar empresa o reto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-purple-800 text-white border border-gray-700 rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-pink-500"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <svg
            className="w-5 h-5 text-white-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
