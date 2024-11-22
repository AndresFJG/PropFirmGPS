import React from 'react';
import { FaBookOpen, FaVideo, FaUsers, FaRegLightbulb } from 'react-icons/fa';

const ResourceCenter: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#131722] text-[#d1d4dc]">
      <h2 className="text-5xl font-bold text-center mb-6 text-[#2962ff]">Centro de Recursos Educativos</h2>
      <p className="text-center text-lg mb-8">
        ¡Próximamente se publicarán recursos educativos que transformarán tu experiencia de trading!
      </p>
      <div className="bg-[#1e222d] rounded-xl p-6 mb-8 shadow-lg transition-transform transform hover:scale-105">
        <h3 className="text-3xl font-semibold mb-4 flex items-center">
          <FaBookOpen className="mr-2 text-[#2962ff]" /> Descripción
        </h3>
        <p className="text-[#787b86] mb-4">
          Nuestra biblioteca integrada ofrecerá una variedad de materiales educativos, incluyendo webinars, artículos, tutoriales y guías prácticas. 
          Estos recursos están diseñados para ayudarte a mejorar tus habilidades de trading y a mantenerte actualizado con las últimas tendencias del mercado.
        </p>
        <p className="text-[#787b86]">
          Ya seas un principiante que busca entender los conceptos básicos o un trader experimentado que desea perfeccionar sus estrategias, aquí encontrarás contenido valioso adaptado a tu nivel de experiencia.
        </p>
      </div>
      <div className="bg-[#1e222d] rounded-xl p-6 mb-8 shadow-lg transition-transform transform hover:scale-105">
        <h3 className="text-3xl font-semibold mb-4 flex items-center">
          <FaRegLightbulb className="mr-2 text-[#2962ff]" /> Características
        </h3>
        <ul className="list-disc list-inside text-[#787b86] mb-4">
          <li className="flex items-center mb-2">
            <FaVideo className="mr-2 text-[#2962ff]" /> Contenido categorizado por nivel de experiencia y temas específicos.
          </li>
          <li className="flex items-center mb-2">
            <FaUsers className="mr-2 text-[#2962ff]" /> Actualizaciones periódicas con las últimas tendencias y estrategias de trading.
          </li>
          <li className="flex items-center mb-2">
            <FaVideo className="mr-2 text-[#2962ff]" /> Webinars interactivos con expertos de la industria.
          </li>
          <li className="flex items-center mb-2">
            <FaBookOpen className="mr-2 text-[#2962ff]" /> Artículos y tutoriales que cubren desde análisis técnico hasta gestión de riesgos.
          </li>
          <li className="flex items-center mb-2">
            <FaUsers className="mr-2 text-[#2962ff]" /> Acceso a una comunidad de traders para compartir experiencias y estrategias.
          </li>
        </ul>
        <p className="text-[#d1d4dc] italic">
          ¡No te pierdas la oportunidad de aprender y crecer como trader!
        </p>
      </div>
      <div className="mt-8 text-center">
        <p className="text-[#d1d4dc] italic mb-4">
          Inspiración: Empresas como Topstep proporcionan recursos educativos extensivos para apoyar el desarrollo continuo de sus traders.
        </p>
        <p className="text-lg mb-4">
          Síguenos en nuestras redes sociales para estar al tanto de las últimas noticias y actualizaciones sobre nuestros recursos educativos:
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#2962ff] hover:underline transition duration-200">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#2962ff] hover:underline transition duration-200">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#2962ff] hover:underline transition duration-200">Instagram</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#2962ff] hover:underline transition duration-200">LinkedIn</a>
        </div>
        <button className="px-6 py-3 bg-[#2962ff] text-white rounded-lg hover:bg-[#2979ff] transition duration-200">
          ¡Mantente informado!
        </button>
      </div>
    </div>
  );
};

export default ResourceCenter; 