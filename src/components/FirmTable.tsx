import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Firm } from '../backend/types';
import FirmDetails from './FirmDetails';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../index.css';
import { firmLinks } from '../backend/firmData';


// Modal Component
const Modal: React.FC<{ isOpen: boolean; onClose: () => void; firm: Firm | null }> = ({
  isOpen,
  onClose,
  firm,
}) => {
  if (!isOpen || !firm) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-r from-[#131722] to-[#1e222d] p-8 rounded-2xl shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 border border-[#2962ff]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-poppins font-semibold">
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
  const rowsPerPage = 15;

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

  return (
    <div className={`flex flex-col h-auto w-full p-6 bg-[#1e222d] rounded-lg shadow-xl border border-[#2a2e39]/30 
      ${isFilterPanelOpen ? 'lg:w-[calc(100%-320px)]' : 'w-full'} transition-all duration-300`}>
      
      {/* Contenedor de la tabla con scroll */}
      <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-[#2962ff] scrollbar-track-[#1e222d]">
        <div className="font-inter">
          <table className="font-inter w-full text-[#d1d4dc] text-sm border-separate border-spacing-0 rounded-xl">
            <thead>
              <tr className="text-left bg-[#131722]">
                <th className="py-4 px-2 sm:px-6 font-semibold tracking-wider rounded-tl-xl">Firma</th>
                <th className="py-4 px-2 sm:px-6 font-semibold tracking-wider">Precio</th>
                <th className="py-4 px-2 sm:px-6 font-semibold tracking-wider">Cuenta</th>
                <th className="py-4 px-2 sm:px-6 font-semibold tracking-wider">Steps</th>
                <th className="py-4 px-2 sm:px-6 font-semibold tracking-wider hidden md:table-cell">Objetivo</th>
                <th className="py-4 px-2 sm:px-6 font-semibold tracking-wider hidden lg:table-cell">Pérdida Diaria</th>
                <th className="py-4 px-2 sm:px-6 font-semibold tracking-wider hidden lg:table-cell">Pérdida Total</th>
                <th className="py-4 px-2 sm:px-6 font-semibold tracking-wider hidden xl:table-cell">Comisión</th>
                <th className="py-4 px-2 sm:px-6 font-semibold tracking-wider hidden xl:table-cell">Ratio</th>
                <th className="py-4 px-2 sm:px-6 font-semibold tracking-wider">Rating</th>
                <th className="py-4 px-2 sm:px-6 font-semibold tracking-wider rounded-tr-xl">Acción</th>
              </tr>
            </thead>
            <tbody>
              {currentFirms.map((firm, index) => (
                <tr
                  key={index}
                  className={`border-b border-[#2a2e39]/30 hover:bg-[#2a2e39]/20 cursor-pointer
                    ${index % 2 === 0 ? 'bg-[#1e222d]/50' : 'bg-[#131722]/50'}`}
                  onClick={() => handleRowClick(firm)}
                >
                  <td className="py-4 px-2 sm:px-6">
                    <Link to={`/firm/${firm['FIRM']}/details`} className="flex items-center space-x-3">
                      <div className="relative w-12 h-12">
                        <img
                          src={firm['logo'] && firm['logo'].trim() !== '' ? require(`../logos/${firm['logo']}`) : 'ruta/a/imagen/predeterminada.png'}
                          alt={String(firm['FIRM'] || 'Firma')}
                          onError={(e) => { e.currentTarget.src = 'ruta/a/imagen/predeterminada.png'; }}
                          className="w-full h-full rounded-lg object-contain shadow-md transition-transform duration-200 ease-in-out transform hover:scale-110"
                        />
                      </div>
                      <span className="font-medium text-white hover:text-[#04a8c2] transition-colors duration-200">
                        {firm['FIRM'] || 'N/A'}
                      </span>
                    </Link>
                  </td>
                  <td  className="py-4 px-2 sm:px-6 font-mono">{firm['PRICE'] ? `${firm['PRICE']}` : 'N/A'}</td>
                  <td className="py-4 px-2 sm:px-6 font-mono">{firm['ACCOUNT SIZE'] ? `${firm['ACCOUNT SIZE']}` : 'N/A'}</td>
                  <td className="py-4 px-2 sm:px-6 font-mono">{firm['STEPS'] ? `${firm['STEPS']}` : 'N/A'}</td>
                  <td className="py-4 px-2 sm:px-6 hidden md:table-cell font-mono">{firm['PROFIT TARGET'] ? `${firm['PROFIT TARGET']}` : 'N/A'}%</td>
                  <td className="py-4 px-2 sm:px-6 hidden lg:table-cell font-mono text-red-400">{firm['MAX. DAILY LOSS'] ? `${firm['MAX. DAILY LOSS']}` : 'N/A'}</td>
                  <td className="py-4 px-2 sm:px-6 hidden lg:table-cell font-mono text-red-400">{firm['MAX. TOTAL DRAWDOWN'] ? `${firm['MAX. TOTAL DRAWDOWN']}` : 'N/A'}</td>
                  <td className="py-4 px-2 sm:px-6 hidden xl:table-cell font-mono">{firm['COMMISION PER ROUND LOT (FOREX)'] ? `${firm['COMMISION PER ROUND LOT (FOREX)']}` : 'N/A'}</td>
                  <td className="py-4 px-2 sm:px-6 hidden xl:table-cell font-mono">{firm['PROFIT TARGET TO DRAWDOWN RATIO'] ? `${firm['PROFIT TARGET TO DRAWDOWN RATIO']}` : 'N/A'}</td>
                  <td className="py-4 px-2 sm:px-6">
                    <div className="flex items-center"> 
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="font-medium">{firm['Trust Pilot Rating'] ? `${firm['Trust Pilot Rating']}` : 'N/A'}</span>
                    </div>
                  </td>
                  <td className="py-4 px-2 sm:px-6" id='firm-table-body'>
                    <a
                      href={firmLinks.find(link => link.name === firm['FIRM'])?.websiteUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-block bg-gradient-to-r from-[#04a8c2] to-[#67d6e9] text-white px-4 py-2 rounded-lg
                        hover:from-[#67d6e9] hover:to-[#04a8c2] transition-all duration-300 shadow-lg
                        hover:shadow-[#04a8c2]/20 font-medium text-center"
                    >
                      Comprar
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Paginación */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 px-4 flex-shrink-0">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className="flex items-center px-4 py-2 bg-gradient-to-r from-[#2962ff] to-[#2979ff] text-white rounded-lg
            disabled:opacity-50 disabled:cursor-not-allowed hover:from-[#2979ff] hover:to-[#2962ff] 
            transition-all duration-300 font-medium w-full sm:w-auto"
        >
          <FaArrowLeft className="mr-2" /> Anterior
        </button>
        <span className="text-white font-medium my-2 sm:my-0">
          Página {currentPage + 1} de {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className="flex items-center px-4 py-2 bg-gradient-to-r from-[#04a8c2] to-[#67d6e9] text-white rounded-lg
            disabled:opacity-50 disabled:cursor-not-allowed hover:from-[#67d6e9] hover:to-[#04a8c2] 
            transition-all duration-300 font-medium w-full sm:w-auto"
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