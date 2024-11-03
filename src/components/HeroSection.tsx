import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-purple-gradient text-white py-12">
      <div className="container mx-auto px-4 text-center ">
        <h1 className="text-4xl font-bold mb-4 text-shadow">Encuentra la Mejor Firma de Trading Propietario</h1>
        <p className="text-xl mb-8">Compara y elige entre cientos de opciones para impulsar tu carrera de trading</p>
        <Link 
          to="/comparaciones" 
          className=" text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition-all inline-block"
        >
          Comparar Firmas Ahora
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;