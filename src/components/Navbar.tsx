/* import React from 'react';
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
          <Link to="/articles" className="hover:text-pink-300 transition-all">Artículos</Link>
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

export default Navbar; */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <>
      {/* Div espaciador para compensar el navbar fijo */}
      <div className="h-16"></div>
      
      {/* Navbar fijo */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-900/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="text-white font-bold text-xl hover:text-[#04a8c2] transition-colors duration-200"
              >
                ProFirm GPS
              </Link>
              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      location.pathname === '/'
                        ? 'bg-purple-800 text-white shadow-md'
                        : 'text-gray-300 hover:text-white hover:bg-purple-800/70'
                    }`}
                  >
                    Inicio
                  </Link>
                  <Link
                    to="/articulos"
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      location.pathname.includes('/articulos')
                        ? 'bg-purple-800 text-white shadow-md'
                        : 'text-gray-300 hover:text-white hover:bg-purple-800/70'
                    }`}
                  >
                    Artículos
                  </Link>
                  <Link
                    to="/comparaciones"
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      location.pathname.includes('/comparaciones')
                        ? 'bg-purple-800 text-white shadow-md'
                        : 'text-gray-300 hover:text-white hover:bg-purple-800/70'
                    }`}
                  >
                    Comparaciones
                  </Link>
                  <Link
                    to="/top-firms"
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      location.pathname.includes('/top-firms')
                        ? 'bg-purple-800 text-white shadow-md'
                        : 'text-gray-300 hover:text-white hover:bg-purple-800/70'
                    }`}
                  >
                    Top Firmas
                  </Link>
                </div>
              </div>
            </div>

            {/* Menú móvil - opcional */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white p-2">
                <svg 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Línea decorativa con gradiente */}
        <div className="h-[2px] bg-gradient-to-r from-purple-600 via-[#04a8c2] to-purple-600"></div>
      </nav>
    </>
  );
};

export default Navbar;