import React from 'react';
import '../index.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1e222d] py-8">
      <div className="bg-[#131722] p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-white">ProFirm GPS</h1>
          <h2 className="text-xl font-semibold text-gray-400">Política de Privacidad</h2>
          <p className="text-gray-400">Última actualización: 2024</p>
        </header>

        <div className="space-y-4">
          <p className="text-gray-300">Bienvenido a ProFirm GPS. Su privacidad es importante para nosotros. Esta política describe cómo recopilamos, usamos y protegemos su información personal.</p>
          
          <h2 className="text-2xl font-semibold text-white">1. Información que Recopilamos</h2>
          <p className="text-gray-300">Recopilamos información que usted nos proporciona directamente, como su nombre, dirección de correo electrónico y otra información de contacto.</p>
          
          <h2 className="text-2xl font-semibold text-white">2. Uso de la Información</h2>
          <p className="text-gray-300">Utilizamos su información para proporcionarle nuestros servicios, comunicarnos con usted y mejorar nuestra plataforma.</p>
          
          <h2 className="text-2xl font-semibold text-white">3. Compartir Información</h2>
          <p className="text-gray-300">No compartimos su información personal con terceros sin su consentimiento, excepto cuando sea necesario para cumplir con la ley o proteger nuestros derechos.</p>
          
          <h2 className="text-2xl font-semibold text-white">4. Seguridad de la Información</h2>
          <p className="text-gray-300">Tomamos medidas razonables para proteger su información personal, pero no podemos garantizar su seguridad al 100%.</p>
          
          <h2 className="text-2xl font-semibold text-white">5. Cambios a esta Política</h2>
          <p className="text-gray-300">Podemos actualizar esta política de privacidad de vez en cuando. Le notificaremos sobre cambios significativos mediante un aviso en nuestro sitio web.</p>
          
          <h2 className="text-2xl font-semibold text-white">6. Contacto</h2>
          <p className="text-gray-300">Si tiene preguntas sobre esta política de privacidad, contáctenos a través de [correo electrónico de contacto].</p>
          
          <p className="mt-4 text-gray-300">Al utilizar nuestros servicios, usted acepta esta política de privacidad.</p>
        </div>

        <footer className="mt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ProFirm GPS. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;