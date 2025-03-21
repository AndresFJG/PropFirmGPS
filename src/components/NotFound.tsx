import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import { logEvent } from '../types/analytics';

const NotFound: React.FC = () => {
  React.useEffect(() => {
    logEvent('Error', '404', window.location.pathname);
  }, []);

  return (
    <>
      <SEO 
        title="404 - Página no encontrada | Prop Firm GPS"
        description="Lo sentimos, la página que estás buscando no existe. Vuelve a la página principal para encontrar más información sobre prop firms y trading."
      />
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-[#2962ff] mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 text-center">
          Página no encontrada
        </h2>
        <p className="text-[#787b86] text-lg mb-8 text-center max-w-md">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/"
            className="px-6 py-3 bg-[#2962ff] text-white rounded-lg hover:bg-[#2979ff] transition-all duration-300 text-center"
            onClick={() => logEvent('404', 'Click', 'Volver al inicio')}
          >
            Volver al inicio
          </Link>
          <Link 
            to="/centro-recursos"
            className="px-6 py-3 border border-[#2962ff] text-[#2962ff] rounded-lg hover:bg-[#2962ff] hover:text-white transition-all duration-300 text-center"
            onClick={() => logEvent('404', 'Click', 'Centro de recursos')}
          >
            Centro de recursos
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound; 