import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Firm } from '../backend/types';
import FirmDetails from './FirmDetails';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../index.css';

// Modal Component
const Modal: React.FC<{ isOpen: boolean; onClose: () => void; firm: Firm | null }> = ({
  isOpen,
  onClose,
  firm,
}) => {
  if (!isOpen || !firm) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-r from-[#1a1a2e] to-[#392a63] p-8 rounded-2xl shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 border border-purple-500/20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#04a8c2] to-[#67d6e9] bg-clip-text text-transparent">
            {firm['FIRM']}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <FirmDetails firm={firm} />
      </div>
    </div>
  );
};

interface FirmTableProps {
  firms: Firm[];
  isFilterPanelOpen?: boolean;
}

const FirmTable: React.FC<FirmTableProps> = ({ firms, isFilterPanelOpen = false }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedFirm, setSelectedFirm] = useState<Firm | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(firms.length / rowsPerPage);
  const currentFirms = firms.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );

  const handleRowClick = (firm: Firm) => {
    setSelectedFirm(firm);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFirm(null);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Agregar console.log para debugging
  useEffect(() => {
    console.log('Firms en tabla:', firms);
  }, [firms]);

  useEffect(() => {
    console.log('Renderizando tabla con firms:', {
      total: firms.length,
      muestra: firms.slice(0, 3) // Ver los primeros 3 elementos
    });
  }, [firms]);

  return (
    <div className={`flex flex-col h-[calc(100vh+8rem)] w-full p-6 bg-gradient-to-br from-[#1a1a2e] to-[#392a63] rounded-lg shadow-xl border border-purple-500/10 
      ${isFilterPanelOpen ? 'lg:w-[calc(100%-320px)]' : 'w-full'} transition-all duration-300`}>
      
      {/* Contenedor de la tabla con scroll */}
      <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-[#04a8c2] scrollbar-track-[#1a1a2e]">
        <table className="w-full text-white text-sm border-separate border-spacing-0 rounded-xl">
          <thead>
            <tr className="text-left bg-gradient-to-r from-[#2a1e4f] to-[#4e3a77]">
              <th className="py-4 px-6 font-semibold tracking-wider rounded-tl-xl">Firma</th>
              <th className="py-4 px-6 font-semibold tracking-wider">Precio</th>
              <th className="py-4 px-6 font-semibold tracking-wider">Cuenta</th>
              <th className="py-4 px-6 font-semibold tracking-wider hidden md:table-cell">Objetivo</th>
              <th className="py-4 px-6 font-semibold tracking-wider hidden lg:table-cell">Pérdida Diaria</th>
              <th className="py-4 px-6 font-semibold tracking-wider hidden lg:table-cell">Pérdida Total</th>
              <th className="py-4 px-6 font-semibold tracking-wider hidden xl:table-cell">Comisión</th>
              <th className="py-4 px-6 font-semibold tracking-wider hidden xl:table-cell">Ratio</th>
              <th className="py-4 px-6 font-semibold tracking-wider">Rating</th>
              <th className="py-4 px-6 font-semibold tracking-wider rounded-tr-xl">Acción</th>
            </tr>
          </thead>
          <tbody>
            {currentFirms.map((firm, index) => (
              <tr
                key={index}
                className={`border-b border-purple-500/10 hover:bg-purple-600/10 cursor-pointer backdrop-blur-sm
                  ${index % 2 === 0 ? 'bg-purple-900/5' : 'bg-purple-900/10'} 
                  transition-all duration-200 ease-in-out`}
                onClick={() => handleRowClick(firm)}
              >
                <td className="py-4 px-6">
                  <Link to={`/firm/${firm['FIRM']}/details`} className="flex items-center space-x-3">
                    <img
                      src={String(firm.logo || '/logo192.png')}
                      alt={String(firm.name || 'Firma')}
                      className="w-10 h-10 rounded-lg object-cover border border-purple-500/20"
                    />
                    <span className="font-medium text-white hover:text-[#04a8c2] transition-colors duration-200">
                      {firm['FIRM'] || ''}
                    </span>
                  </Link>
                </td>
                <td className="py-4 px-6 font-mono">{firm['PRICE'] ? `${firm['PRICE']}` : ''}</td>
                <td className="py-4 px-6 font-mono">{firm['ACCOUNT SIZE'] ? `${firm['ACCOUNT SIZE']}` : ''}</td>
                <td className="py-4 px-6 hidden md:table-cell font-mono">{firm['PROFIT TARGET'] || ''}%</td>
                <td className="py-4 px-6 hidden lg:table-cell font-mono text-red-400">{firm['MAX. DAILY LOSS'] || ''}</td>
                <td className="py-4 px-6 hidden lg:table-cell font-mono text-red-400">{firm['MAX. TOTAL DRAWDOWN'] || ''}</td>
                <td className="py-4 px-6 hidden xl:table-cell font-mono">{firm['COMMISION PER ROUND LOT (FOREX)'] || ''}</td>
                <td className="py-4 px-6 hidden xl:table-cell font-mono">{firm['PROFIT TARGET TO DRAWDOWN RATIO'] || ''}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="font-medium">{firm['Trust Pilot Rating'] || ''}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Comprar: ${firm['FIRM']}`);
                    }}
                    className="bg-gradient-to-r from-[#04a8c2] to-[#67d6e9] text-white px-4 py-2 rounded-lg
                      hover:from-[#67d6e9] hover:to-[#04a8c2] transition-all duration-300 shadow-lg
                      hover:shadow-[#04a8c2]/20 font-medium"
                  >
                    Comprar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="flex justify-between items-center mt-4 px-4 flex-shrink-0">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className="flex items-center px-6 py-2 bg-gradient-to-r from-[#04a8c2] to-[#67d6e9] text-white rounded-lg
            disabled:opacity-50 disabled:cursor-not-allowed hover:from-[#67d6e9] hover:to-[#04a8c2] 
            transition-all duration-300 font-medium"
        >
          <FaArrowLeft className="mr-2" /> Anterior
        </button>
        <span className="text-white font-medium">
          Página {currentPage + 1} de {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className="flex items-center px-6 py-2 bg-gradient-to-r from-[#04a8c2] to-[#67d6e9] text-white rounded-lg
            disabled:opacity-50 disabled:cursor-not-allowed hover:from-[#67d6e9] hover:to-[#04a8c2] 
            transition-all duration-300 font-medium"
        >
          Siguiente <FaArrowRight className="ml-2" />
        </button>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} firm={selectedFirm} />
    </div>
  );
};

export default FirmTable;