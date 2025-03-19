import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import '../index.css';
import { logEvent } from '../types/analytics';

const Footer: React.FC = () => {
  const handleFooterClick = (linkType: string) => {
    logEvent('Footer', 'Click Link', linkType);
  };

  const handleNavigation = (destination: string) => {
    logEvent('Footer', 'Navegación', destination);
  };

  return (
    <footer className="bg-[#1e222d] text-white">
      {/* Sección Principal */}
      <div className="w-full max-w-[90rem] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Sección de la Marca */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <h3 className="text-2xl font-bold font-poppins bg-gradient-to-r from-[#2962ff] to-[#2979ff] text-transparent bg-clip-text">
                PropFirm GPS
              </h3>
            </div>
            <p className="text-[#787b86] font-inter leading-relaxed">
              Tu guía confiable en el mundo del trading propietario. Comparamos y analizamos las mejores firmas para impulsar tu carrera.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-poppins text-[#d1d4dc]">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/terms-and-privacy" 
                  className="text-[#787b86] hover:text-[#2962ff] transition-colors duration-300 font-inter"
                  onClick={() => handleNavigation('Términos y Privacidad')}>
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-[#787b86] hover:text-[#2962ff] transition-colors duration-300 font-inter"
                  onClick={() => handleNavigation('Política de Privacidad')}>
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-[#787b86] hover:text-[#2962ff] transition-colors duration-300 font-inter"
                  onClick={() => handleNavigation('FAQ')}>
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-poppins text-[#d1d4dc]">
              Recursos
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/blog" 
                      className="text-[#787b86] hover:text-[#2962ff] transition-colors duration-300 font-inter"
                      onClick={() => handleFooterClick('Blog')}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/centro-recursos" 
                      className="text-[#787b86] hover:text-[#2962ff] transition-colors duration-300 font-inter"
                      onClick={() => handleFooterClick('Educación')}>
                  Educación
                </Link>
              </li>
              <li>
                <Link to="/articulos" 
                      className="text-[#787b86] hover:text-[#2962ff] transition-colors duration-300 font-inter"
                      onClick={() => handleFooterClick('Noticias')}>
                  Noticias
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto y Redes Sociales */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold font-poppins text-[#d1d4dc]">
              Conecta con Nosotros
            </h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-[#2a2e39] hover:bg-[#2962ff] 
                          flex items-center justify-center transition-all duration-300
                          text-[#787b86] hover:text-white"
                 onClick={() => handleFooterClick('Facebook')}>
                <FaFacebookF size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-[#2a2e39] hover:bg-[#2962ff] 
                          flex items-center justify-center transition-all duration-300
                          text-[#787b86] hover:text-white"
                 onClick={() => handleFooterClick('Twitter')}>
                <FaTwitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-[#2a2e39] hover:bg-[#2962ff] 
                          flex items-center justify-center transition-all duration-300
                          text-[#787b86] hover:text-white"
                 onClick={() => handleFooterClick('LinkedIn')}>
                <FaLinkedinIn size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-[#2a2e39] hover:bg-[#2962ff] 
                          flex items-center justify-center transition-all duration-300
                          text-[#787b86] hover:text-white"
                 onClick={() => handleFooterClick('Instagram')}>
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#2a2e39] to-transparent my-8"></div>

        {/* Copyright */}
        <div className="text-center text-[#787b86] font-inter">
          <p>&copy; {new Date().getFullYear()} PropFirm GPS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
