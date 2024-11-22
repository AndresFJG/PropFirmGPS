import React from 'react';
import { Route, Routes } from 'react-router-dom';

const TermsOfService: React.FC = () => (
  <div>
    <h2>Términos de Servicio</h2>
    <p>Aquí van los términos de servicio...</p>
  </div>
);

const PrivacyPolicy: React.FC = () => (
  <div>
    <h2>Política de Privacidad</h2>
    <p>Aquí va la política de privacidad...</p>
  </div>
);

const FAQ: React.FC = () => (
  <div>
    <h2>Preguntas Frecuentes</h2>
    <p>Aquí van las preguntas frecuentes...</p>
  </div>
);

const LegalLinks: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
};

export default LegalLinks;