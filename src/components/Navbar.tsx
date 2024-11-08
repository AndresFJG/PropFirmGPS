import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Espaciador para el navbar fijo */}
      <div className="h-16"></div>
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#131722] border-b border-[#2a2e39] backdrop-blur-sm font-inter">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 px-4 lg:px-8">
            {/* Logo y nombre */}
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className="flex items-center space-x-2"
              >
                <span className="text-xl font-bold text-[#d1d4dc] hover:text-[#2962ff] transition-colors duration-200">
                  PropFirm GPS
                </span>
              </Link>
            </div>

            {/* Navegación principal - Desktop */}
            <div className="hidden md:flex md:items-center md:space-x-1">
              <Link
                to="/"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${location.pathname === '/' 
                    ? 'text-[#2962ff] bg-[#2962ff]/10' 
                    : 'text-[#d1d4dc] hover:text-[#2962ff] hover:bg-[#2a2e39]'}`}
              >
                Inicio
              </Link>
              
              <Link
                to="/articulos"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${location.pathname.includes('/articulos') 
                    ? 'text-[#2962ff] bg-[#2962ff]/10' 
                    : 'text-[#d1d4dc] hover:text-[#2962ff] hover:bg-[#2a2e39]'}`}
              >
                Artículos
              </Link>

              <Link
                to="/comparaciones"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${location.pathname.includes('/comparaciones') 
                    ? 'text-[#2962ff] bg-[#2962ff]/10' 
                    : 'text-[#d1d4dc] hover:text-[#2962ff] hover:bg-[#2a2e39]'}`}
              >
                Comparaciones
              </Link>

              <Link
                to="/top-firms"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${location.pathname.includes('/top-firms') 
                    ? 'text-[#2962ff] bg-[#2962ff]/10' 
                    : 'text-[#d1d4dc] hover:text-[#2962ff] hover:bg-[#2a2e39]'}`}
              >
                Top Firmas
              </Link>
            </div>

            {/* Botones de acción - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <button className="px-4 py-2 text-sm font-medium text-[#d1d4dc] hover:text-[#2962ff] hover:bg-[#2a2e39] rounded-md transition-all duration-200">
                Iniciar Sesión
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-[#2962ff] hover:bg-[#2979ff] rounded-md transition-all duration-200">
                Registrarse
              </button>
            </div>

            {/* Botón de menú móvil */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-[#d1d4dc] hover:text-[#2962ff] hover:bg-[#2a2e39] transition-all duration-200"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Menú móvil */}
          {isMenuOpen && (
            <div className="md:hidden bg-[#1e222d] border-t border-[#2a2e39]">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200
                    ${location.pathname === '/' 
                      ? 'text-[#2962ff] bg-[#2962ff]/10' 
                      : 'text-[#d1d4dc] hover:text-[#2962ff] hover:bg-[#2a2e39]'}`}
                >
                  Inicio
                </Link>
                {/* Repetir para otros enlaces */}
              </div>
              <div className="px-2 pt-4 pb-3 border-t border-[#2a2e39]">
                <button className="w-full px-3 py-2 text-base font-medium text-[#d1d4dc] hover:text-[#2962ff] hover:bg-[#2a2e39] rounded-md transition-all duration-200">
                  Iniciar Sesión
                </button>
                <button className="w-full mt-2 px-3 py-2 text-base font-medium text-white bg-[#2962ff] hover:bg-[#2979ff] rounded-md transition-all duration-200">
                  Registrarse
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;