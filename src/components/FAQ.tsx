import React, { useState } from 'react';
import '../index.css';

interface FAQItem {
  question: string;
  answer: string;
  image?: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "¿Qué es ProFirm GPS?",
      answer: "ProFirm GPS es una plataforma que compara y analiza las mejores firmas de trading para ayudarte a impulsar tu carrera en el trading propietario.",
      image: "ruta/a/imagen/profirm-gps.png"
    },
    {
      question: "¿Cómo puedo registrarme?",
      answer: "Puedes registrarte en nuestro sitio web haciendo clic en el botón de registro y completando el formulario con tu información.",
    },
    {
      question: "¿Qué tipos de cuentas ofrecen?",
      answer: "Ofrecemos diferentes tipos de cuentas que se adaptan a tus necesidades de trading, incluyendo cuentas estándar y cuentas de demostración.",
    },
    {
      question: "¿Es seguro utilizar ProFirm GPS?",
      answer: "Sí, tomamos la seguridad de tus datos muy en serio y utilizamos medidas de seguridad avanzadas para proteger tu información.",
    },
    {
      question: "¿Dónde puedo encontrar más información?",
      answer: "Puedes encontrar más información en nuestra sección de artículos y guías en el sitio web.",
    },
    {
      question: "¿Qué es el trading propietario?",
      answer: "El trading propietario es una forma de trading donde las firmas utilizan su propio capital para realizar operaciones en los mercados financieros.",
      image: "ruta/a/imagen/trading-propietario.png"
    },
    {
      question: "¿Cuáles son los riesgos del trading?",
      answer: "El trading conlleva riesgos significativos, incluyendo la posibilidad de perder parte o la totalidad de tu inversión. Es importante entender estos riesgos antes de comenzar.",
    },
    {
      question: "¿Qué herramientas ofrece ProFirm GPS?",
      answer: "ProFirm GPS ofrece herramientas de análisis, comparaciones de firmas y recursos educativos para ayudarte a tomar decisiones informadas.",
    },
    {
      question: "¿Cómo puedo contactar al soporte?",
      answer: "Puedes contactar a nuestro equipo de soporte a través de la sección de contacto en nuestro sitio web o enviando un correo electrónico a soporte@profirmgps.com.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#1e222d] py-8">
      <div className="bg-[#131722] p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Preguntas Frecuentes</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none transition duration-300 ease-in-out hover:bg-gray-700"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="py-2 text-gray-300 transition-all duration-300 ease-in-out">
                  {faq.image && <img src={faq.image} alt={faq.question} className="w-full h-auto mb-2 rounded" />}
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ; 