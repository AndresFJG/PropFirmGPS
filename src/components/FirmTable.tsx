import React, { useState } from 'react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-purple-gradient text-center">
      <div className="bg-[#392a63] p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#04a8c2] text-center">{firm['FIRM']}</h2>
          <button
            onClick={onClose}
            className="text-[#04a8c2] hover:text-[#67d6e9] transition"
          >
            ✖
          </button>
        </div>
        <FirmDetails firm={firm} />
      </div>
    </div>
  );
};

interface FirmTableProps {
  firms: Firm[];
}

const FirmTable: React.FC<FirmTableProps> = ({ firms }) => {
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

  return (
    <div className="flex flex-col h-full w-full p-4 bg-[#392a63] rounded-lg shadow-lg">
      <div className="flex-grow overflow-y-auto max-h-[500px] scrollbar-custom">
        <table className="w-full bg-[#312354] text-white text-sm border-separate border-spacing-0 rounded-lg">
          <thead>
            <tr className="text-left border-b border-[#2a1e4f] bg-[#4e3a77]">
              <th className="py-3 px-4 border border-[#2a1e4f] rounded-tl-lg">Firma</th>
              <th className="py-3 px-4 border border-[#2a1e4f]">Precio</th>
              <th className="py-3 px-4 border border-[#2a1e4f]">Cuenta</th>
              <th className="py-3 px-4 hidden md:table-cell border border-[#2a1e4f]">Objetivo</th>
              <th className="py-3 px-4 hidden lg:table-cell border border-[#2a1e4f]">Pérdida diaria</th>
              <th className="py-3 px-4 hidden lg:table-cell border border-[#2a1e4f]">Pérdida total</th>
              <th className="py-3 px-4 hidden xl:table-cell border border-[#2a1e4f]">Comisión</th>
              <th className="py-3 px-4 hidden xl:table-cell border border-[#2a1e4f]">Ratio</th>
              <th className="py-3 px-4 border border-[#2a1e4f]">Calificación</th>
              <th className="py-3 px-4 border border-[#2a1e4f] rounded-tr-lg">Acción</th>
            </tr>
          </thead>
          <tbody>
            {currentFirms.map((firm, index) => (
              <tr
                key={index}
                className={`border-b border-[#2a1e4f] ${
                  firm['FIRM'] ? 'hover:bg-[#4e3a77] cursor-pointer' : ''
                } ${index % 2 === 0 ? 'bg-[#312354]' : 'bg-[#392a63]'} transition duration-300`}
                onClick={() => handleRowClick(firm)}
              >
                <td className="py-3 px-4 border border-[#2a1e4f] text-center">
                  <Link to={`/firm/${firm['FIRM']}/details`} className="flex flex-col items-center text-center">
                    <img
                      src={String(firm.logo || '/logo192.png')}
                      alt={String(firm.name || 'Firma')}
                      className="w-8 h-8 mb-2 rounded-full"
                    />
                    <span className="font-semibold text-sm text-center overflow-hidden text-ellipsis max-w-[100px]">
                      {firm['FIRM'] || ''}
                    </span>
                  </Link>
                </td>
                <td className="py-3 px-4 border border-[#2a1e4f]">{firm['PRICE'] || ''}</td>
                <td className="py-3 px-4 border border-[#2a1e4f]">{firm['ACCOUNT SIZE'] || ''}</td>
                <td className="py-3 px-4 hidden md:table-cell border border-[#2a1e4f]">{firm['PROFIT TARGET'] || ''}</td>
                <td className="py-3 px-4 hidden lg:table-cell border border-[#2a1e4f]">{firm['MAX. DAILY LOSS'] || ''}</td>
                <td className="py-3 px-4 hidden lg:table-cell border border-[#2a1e4f]">{firm['MAX. TOTAL DRAWDOWN'] || ''}</td>
                <td className="py-3 px-4 hidden xl:table-cell border border-[#2a1e4f]">{firm['COMMISION PER ROUND LOT (FOREX)'] || ''}</td>
                <td className="py-3 px-4 hidden xl:table-cell border border-[#2a1e4f]">{firm['PROFIT TARGET TO DRAWDOWN RATIO'] || ''}</td>
                <td className="py-3 px-4 border border-[#2a1e4f]">⭐{firm['Trust Pilot Rating'] || ''}</td>
                <td className="py-3 px-4 border border-[#2a1e4f]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Evitar que el click abra el modal
                      alert(`Comprar: ${firm['FIRM']}`);
                    }}
                    className="bg-[#04a8c2] text-white px-2 py-1 rounded-md hover:bg-[#67d6e9] transition"
                  >
                    Comprar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Controles de paginación */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className="flex items-center px-4 py-2 bg-[#04a8c2] text-white rounded-md disabled:opacity-50"
        >
          <FaArrowLeft className="mr-2" /> Anterior
        </button>
        <span className="text-white mx-2">
          Página {currentPage + 1} de {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className="flex items-center px-4 py-2 bg-[#04a8c2] text-white rounded-md disabled:opacity-50"
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