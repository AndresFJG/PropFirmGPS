import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaTools, FaCalculator, FaChartLine, FaBalanceScale, FaPercent } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsMenuOpen, setIsToolsMenuOpen] = useState(false);

  const toolsItems = [
    { name: 'Calculadoras', path: '/herramientas/calculadoras', icon: FaCalculator },
    { name: 'Análisis Técnico', path: '/herramientas/analisis', icon: FaChartLine },
    { name: 'Gestión de Riesgo', path: '/herramientas/riesgo', icon: FaBalanceScale },
    { name: 'Calculadora de Beneficios', path: '/herramientas/beneficios', icon: FaPercent },
  ];

  return (
    <>
      <div className="h-16"></div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#131722] border-b border-[#2a2e39] backdrop-blur-sm font-inter">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 px-4 lg:px-8">
            {/* Logo y nombre */}
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className="flex items-center space-x-2"
              >
                <span className="text-xl font-bold bg-gradient-to-r from-[#d1d4dc] via-[#5B8CFF] to-[#2962ff] text-transparent bg-clip-text hover:from-[#ffffff] hover:to-[#5B8CFF] transition-all duration-300">
                  PropFirm GPS
                </span>
              </Link>
            </div>

            {/* Navegación principal - Desktop */}
            <div className="hidden md:flex md:items-center md:justify-center md:space-x-4 flex-grow">
              <Link to="/" className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${location.pathname === '/' ? 'text-[#2962ff] bg-[#2962ff]/10' : 'text-[#d1d4dc] hover:text-[#2962ff] hover:bg-[#2a2e39]'}`}>Inicio</Link>
              <Link to="/articulos" className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${location.pathname.includes('/articulos') ? 'text-[#2962ff] bg-[#2962ff]/10' : 'text-[#d1d4dc] hover:text-[#2962ff] hover:bg-[#2a2e39]'}`}>Artículos</Link>
              <Link to="/centro-recursos" className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${location.pathname.includes('/centro-recursos') ? 'text-[#2962ff] bg-[#2962ff]/10' : 'text-[#d1d4dc] hover:text-[#2962ff] hover:bg-[#2a2e39]'}`}>Educación</Link>
              <Link to="/top-firms" className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${location.pathname.includes('/top-firms') ? 'text-[#2962ff] bg-[#2962ff]/10' : 'text-[#d1d4dc] hover:text-[#2962ff] hover:bg-[#2a2e39]'}`}>Top Firmas</Link>

              <div className="relative">
                <button onClick={() => setIsToolsMenuOpen(!isToolsMenuOpen)} className={`flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${location.pathname.includes('/herramientas') ? 'text-[#2962ff] bg-[#2962ff]/10' : 'text-[#d1d4dc] hover:text-[#2962ff] hover:bg-[#2a2e39]'}`}>
                  <FaTools className="mr-1" />
                  <span>Herramientas</span>
                  <FaChevronDown className={`ml-1 transform transition-transform duration-200 ${isToolsMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Menú desplegable */}
                {isToolsMenuOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 rounded-md shadow-lg bg-[#1e222d] border border-[#2a2e39]">
                    <div className="py-1">
                      {toolsItems.map((item) => (
                        <Link key={item.path} to={item.path} className="flex items-center px-4 py-2 text-sm text-[#d1d4dc] hover:bg-[#2962ff]/10 hover:text-[#2962ff]" onClick={() => { setIsToolsMenuOpen(false); setIsMenuOpen(false); }}>
                          <item.icon className="mr-2" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Botón de menú móvil */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-[#d1d4dc] hover:text-[#2962ff] hover:bg-[#2a2e39] transition-all duration-200">
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Menú móvil */}
          {isMenuOpen && (
            <div className="md:hidden bg-[#1e222d] border-t border-[#2a2e39]">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${location.pathname === '/' ? 'text-[#2962ff] bg-[#2962ff]/10' : 'text-[#d1d4dc] hover:text-[#2962ff] hover:bg-[#2a2e39]'}`} onClick={() => setIsMenuOpen(false)}>Inicio</Link>
                <Link to="/articulos" className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${location.pathname.includes('/articulos') ? 'text-[#2962ff] bg-[#2962ff]/10' : 'text-[#d1d4dc] hover:text-[#2962ff] hover:bg-[#2a2e39]'}`} onClick={() => setIsMenuOpen(false)}>Artículos</Link>
                <Link to="/centro-recursos" className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${location.pathname.includes('/centro-recursos') ? 'text-[#2962ff] bg-[#2962ff]/10' : 'text-[#d1d4dc] hover:text-[#2962ff] hover:bg-[#2a2e39]'}`} onClick={() => setIsMenuOpen(false)}>Educación</Link>
                <Link to="/top-firms" className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${location.pathname.includes('/top-firms') ? 'text-[#2962ff] bg-[#2962ff]/10' : 'text-[#d1d4dc] hover:text-[#2962ff] hover:bg-[#2a2e39]'}`} onClick={() => setIsMenuOpen(false)}>Top Firmas</Link>

                <div className="space-y-1">
                  <div className="px-3 py-2 text-[#787b86] text-sm font-medium">Herramientas</div>
                  {toolsItems.map((item) => (
                    <Link key={item.path} to={item.path} className="flex items-center px-3 py-2 text-base text-[#d1d4dc] hover:bg-[#2962ff]/10 hover:text-[#2962ff] rounded-md" onClick={() => { setIsMenuOpen(false); }}>
                      <item.icon className="mr-2" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;