import React from 'react';
import '../index.css';

const TermsAndPrivacy: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1e222d] py-8">
      <div className="bg-[#131722] p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-white">ProFirm GPS</h1>
          <h2 className="text-xl font-semibold text-gray-400">Términos de Servicio</h2>
          <p className="text-gray-400">Última actualización: 2024</p>
        </header>

        <div className="space-y-4">
          <p className="text-gray-300">Bienvenido a ProFirm GPS. Al acceder y utilizar nuestro sitio web y servicios, usted acepta cumplir con los siguientes términos y condiciones. Si no está de acuerdo con estos términos, le recomendamos que no utilice nuestros servicios.</p>
          
          <h2 className="text-2xl font-semibold text-white">1. Aceptación de los Términos</h2>
          <p className="text-gray-300">Al utilizar nuestro sitio web, usted acepta estos Términos de Servicio y nuestra Política de Privacidad. Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestros servicios.</p>
          
          <h2 className="text-2xl font-semibold text-white">2. Modificaciones a los Términos</h2>
          <p className="text-gray-300">ProFirm GPS se reserva el derecho de modificar estos Términos de Servicio en cualquier momento. Cualquier cambio será efectivo inmediatamente después de su publicación en el sitio web. Le recomendamos que revise periódicamente estos términos para estar al tanto de cualquier cambio.</p>
          
          <h2 className="text-2xl font-semibold text-white">3. Uso del Servicio</h2>
          <p className="text-gray-300">Usted se compromete a utilizar nuestros servicios solo para fines legales y de acuerdo con todas las leyes y regulaciones aplicables. No debe utilizar nuestros servicios de manera que cause daño o interrupción a nuestro sitio web o a los servicios que ofrecemos.</p>
          
          <h2 className="text-2xl font-semibold text-white">4. Propiedad Intelectual</h2>
          <p className="text-gray-300">Todo el contenido, características y funcionalidad del sitio web, incluidos, entre otros, texto, gráficos, logotipos, iconos, imágenes y software, son propiedad de ProFirm GPS o de sus licenciantes y están protegidos por las leyes de derechos de autor y propiedad intelectual.</p>
          
          <h2 className="text-2xl font-semibold text-white">5. Limitación de Responsabilidad</h2>
          <p className="text-gray-300">En la medida máxima permitida por la ley, ProFirm GPS no será responsable de ningún daño indirecto, incidental, especial o consecuente que surja de o esté relacionado con el uso de nuestros servicios. Esto incluye, pero no se limita a, la pérdida de beneficios, datos o uso.</p>
          
          <h2 className="text-2xl font-semibold text-white">6. Indemnización</h2>
          <p className="text-gray-300">Usted acepta indemnizar y mantener indemne a ProFirm GPS, sus afiliados, directores, empleados y agentes de cualquier reclamación, pérdida, responsabilidad, daño, costo o gasto (incluidos los honorarios razonables de abogados) que surjan de su uso de nuestros servicios o de su violación de estos Términos de Servicio.</p>
          
          <h2 className="text-2xl font-semibold text-white">7. Ley Aplicable</h2>
          <p className="text-gray-300">Estos Términos de Servicio se regirán e interpretarán de acuerdo con las leyes del [país/estado], sin tener en cuenta sus disposiciones sobre conflictos de leyes.</p>
          
          <h2 className="text-2xl font-semibold text-white">8. Contacto</h2>
          <p className="text-gray-300">Si tiene alguna pregunta sobre estos Términos de Servicio, no dude en contactarnos a través de [correo electrónico de contacto].</p>
          
          <p className="mt-4 text-gray-300">Al utilizar nuestros servicios, usted reconoce que ha leído, entendido y aceptado estos Términos de Servicio.</p>
        </div>

        <footer className="mt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ProFirm GPS. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default TermsAndPrivacy;