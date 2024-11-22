import React, { useEffect } from 'react';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, title, content }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Desactiva el desplazamiento del fondo
    } else {
      document.body.style.overflow = 'unset'; // Restaura el desplazamiento del fondo
    }

    return () => {
      document.body.style.overflow = 'unset'; // Asegura que se restaure al desmontar
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <div className="text-gray-700 leading-relaxed">
          <pre className="whitespace-pre-wrap">{content}</pre>
        </div>
        <button 
          onClick={onClose} 
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default CustomModal; 