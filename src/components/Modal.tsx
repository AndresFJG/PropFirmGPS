import React from 'react';
import { Firm } from '../backend/types';
import FirmDetails from './FirmDetails';
import '../index.css'

// Modal Component
const Modal: React.FC<{ isOpen: boolean; onClose: () => void; firm: Firm | null }> = ({
  isOpen,
  onClose,
  firm,
}) => {
  if (!isOpen || !firm) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#131722]/80 backdrop-blur-sm p-4">
      <div className="bg-[#1e222d] p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto overflow-y-auto max-h-[90vh] border border-[#2a2e39]/30">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">{firm['FIRM']}</h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white transition text-2xl"
          >
            ✖
          </button>
        </div>
        <div className="font-inter">
          <h3 className="font-poppins font-bold">
            {/* ... */}
          </h3>
          <p className="font-inter font-regular">
            {/* ... */}
          </p>
        </div>
        <FirmDetails firm={firm} />
      </div>
    </div>
  );
};

export default Modal;
