import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const phoneNumber = '1234567890'; // Reemplaza con tu número de WhatsApp
    const message = 'Hola, tengo una consulta.'; // Mensaje predeterminado
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
      style={{ zIndex: 1000, width: '60px', height: '60px' }}
    >
      <FaWhatsapp size={30} />
    </button>
  );
};

export default WhatsAppButton; 