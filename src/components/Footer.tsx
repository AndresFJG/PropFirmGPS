// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-between">
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h3 className="text-xl font-bold mb-4">ProFirm GPS</h3>
//             <p className="text-gray-400">Comparando las mejores firmas de trading propietario para ti.</p>
//           </div>
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
//             <ul className="space-y-2">
//               <li><Link to="/terms" className="text-gray-400 hover:text-pink-400 transition-all">Términos de Servicio</Link></li>
//               <li><Link to="/privacy" className="text-gray-400 hover:text-pink-400 transition-all">Política de Privacidad</Link></li>
//               <li><Link to="/faq" className="text-gray-400 hover:text-pink-400 transition-all">Preguntas Frecuentes</Link></li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-pink-400 transition-all">Facebook</a>
//               <a href="#" className="text-gray-400 hover:text-pink-400 transition-all">Twitter</a>
//               <a href="#" className="text-gray-400 hover:text-pink-400 transition-all">LinkedIn</a>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
//           <p>&copy; 2023 ProFirm GPS. Todos los derechos reservados.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-between">
//           {/* Sección de Descripción */}
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h3 className="text-xl font-bold mb-4">ProFirm GPS</h3>
//             <p className="text-gray-400">Comparando las mejores firmas de trading propietario para ti.</p>
//           </div>

//           {/* Enlaces Rápidos */}
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/terms" className="text-gray-400 hover:text-pink-400 transition-all">
//                   Términos de Servicio
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/privacy" className="text-gray-400 hover:text-pink-400 transition-all">
//                   Política de Privacidad
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/faq" className="text-gray-400 hover:text-pink-400 transition-all">
//                   Preguntas Frecuentes
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Sección de Redes Sociales */}
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
//             <div className="flex space-x-4">
//               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-all">
//                 Facebook
//               </a>
//               <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-all">
//                 Twitter
//               </a>
//               <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-all">
//                 LinkedIn
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Pie de página */}
//         <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
//           <p>&copy; 2023 ProFirm GPS. Todos los derechos reservados.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4c1d95] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Sección de Descripción */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">ProFirm GPS</h3>
            <p className="text-cyan-200">
              Comparando las mejores firmas de trading propietario para ti.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-cyan-200 hover:text-cyan-300 transition-all">
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-cyan-200 hover:text-cyan-300 transition-all">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-cyan-200 hover:text-cyan-300 transition-all">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección de Redes Sociales */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-200 hover:text-cyan-300 transition-all"
              >
                Facebook
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-200 hover:text-cyan-300 transition-all"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-200 hover:text-cyan-300 transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Pie de página */}
        <div className="mt-8 pt-8 border-t border-cyan-800 text-center text-cyan-200">
          <p>&copy; 2023 ProFirm GPS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
