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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">{firm['FIRM']}</h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white transition text-2xl"
          >
            ✖
          </button>
        </div>
        <FirmDetails firm={firm} />
      </div>
    </div>
  );
};

export default Modal;
