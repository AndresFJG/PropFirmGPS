import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

const Navbar: React.FC = () => {
  return (
    <nav className="text-white py-4 bg-purple-gradient" >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-shadow">ProFirm GPS</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-pink-300 transition-all">Inicio</Link>
          <Link to="/compare" className="hover:text-pink-300 transition-all">Comparar Firmas</Link>
          <Link to="/offers" className="hover:text-pink-300 transition-all">Ofertas</Link>
          <Link to="/about" className="hover:text-pink-300 transition-all">Sobre Nosotros</Link>
          <Link to="/contact" className="hover:text-pink-300 transition-all">Contacto</Link>
        </div>
        <div>
          <button className=" text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-all bg-[#f965a0]">
            Iniciar Sesión / Registrarse
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;