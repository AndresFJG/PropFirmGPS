// import React from 'react';

// const InfoCards: React.FC = () => {
//   const cards = [
//     {
//       icon: '👥',
//       title: 'Comparación exclusiva',
//       description: 'Compare las principales empresas de accesorios en un solo lugar, sin necesidad de buscar información en Internet.'
//     },
//     {
//       icon: '👤',
//       title: 'Enfoque personalizado',
//       description: 'Encuentre la empresa que se adapta a USTED. Ayudamos a los operadores a encontrar la empresa adecuada en función de sus preferencias y estilo de negociación.'
//     },
//     {
//       icon: '💬',
//       title: 'Opiniones imparciales',
//       description: 'Evaluaciones fiables e imparciales para garantizarle la imagen más precisa de cada empresa de accesorios.'
//     },
//     {
//       icon: '💰',
//       title: 'Comparación clara de precios',
//       description: 'Comparaciones transparentes de las estructuras de precios de varias empresas de atrezzo para ayudarle a elegir la opción más rentable.'
//     },
//     {
//       icon: '📋',
//       title: 'Normas de negociación',
//       description: 'Comprenda las reglas y directrices exclusivas de cada empresa de accesorios para encontrar una combinación perfecta para su estrategia de negociación.'
//     },
//     {
//       icon: '🏷️',
//       title: 'Descuentos',
//       description: 'Consigue descuentos exclusivos con las distintas empresas.'
//     },
//     {
//       icon: '📝',
//       title: 'Reseñas detalladas',
//       description: 'Análisis exhaustivos de las empresas de utilería para ofrecerle la información que necesita para tomar decisiones con conocimiento de causa - fríamente.'
//     },
//     {
//       icon: '🔔',
//       title: 'Mantente al día',
//       description: 'Sea el primero en enterarse de los cambios en las normas, las nuevas ofertas o los cambios en el panorama de las empresas de asesoramiento.'
//     },
//     {
//       icon: '🤝',
//       title: 'Su aliado comercial',
//       description: 'Más que un simple sitio de comparación, somos un compañero en su viaje comercial, con el objetivo de ayudarle a tener éxito en el mundo del comercio de accesorios.'
//     }
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {cards.map((card, index) => (
//         <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <div className="text-4xl mb-4">{card.icon}</div>
//           <h3 className="text-xl font-bold mb-2">{card.title}</h3>
//           <p className="text-gray-300">{card.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default InfoCards;

// import React from 'react';

// const InfoCards: React.FC = () => {
//   const cards = [
//     {
//       icon: '👥',
//       title: 'Comparación exclusiva',
//       description: 'Compare las principales empresas de accesorios en un solo lugar, sin necesidad de buscar información en Internet.'
//     },
//     {
//       icon: '👤',
//       title: 'Enfoque personalizado',
//       description: 'Encuentre la empresa que se adapta a USTED. Ayudamos a los operadores a encontrar la empresa adecuada en función de sus preferencias y estilo de negociación.'
//     },
//     {
//       icon: '💬',
//       title: 'Opiniones imparciales',
//       description: 'Evaluaciones fiables e imparciales para garantizarle la imagen más precisa de cada empresa de accesorios.'
//     },
//     {
//       icon: '💰',
//       title: 'Comparación clara de precios',
//       description: 'Comparaciones transparentes de las estructuras de precios de varias empresas de atrezzo para ayudarle a elegir la opción más rentable.'
//     },
//     {
//       icon: '📋',
//       title: 'Normas de negociación',
//       description: 'Comprenda las reglas y directrices exclusivas de cada empresa de accesorios para encontrar una combinación perfecta para su estrategia de negociación.'
//     },
//     {
//       icon: '🏷️',
//       title: 'Descuentos',
//       description: 'Consigue descuentos exclusivos con las distintas empresas.'
//     },
//     {
//       icon: '📝',
//       title: 'Reseñas detalladas',
//       description: 'Análisis exhaustivos de las empresas de utilería para ofrecerle la información que necesita para tomar decisiones con conocimiento de causa - fríamente.'
//     },
//     {
//       icon: '🔔',
//       title: 'Mantente al día',
//       description: 'Sea el primero en enterarse de los cambios en las normas, las nuevas ofertas o los cambios en el panorama de las empresas de asesoramiento.'
//     },
//     {
//       icon: '🤝',
//       title: 'Su aliado comercial',
//       description: 'Más que un simple sitio de comparación, somos un compañero en su viaje comercial, con el objetivo de ayudarle a tener éxito en el mundo del comercio de accesorios.'
//     }
//   ];

//   return (
//     <div className="flex justify-center items-center min-h-screen p-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl mx-auto">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="bg-[#242424] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center"
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               padding: '40px',
//               borderRadius: '40px',
//               backgroundColor: '#242424',
//             }}
//           >
//             <div className="text-4xl mb-4">{card.icon}</div>
//             <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
//             <p className="text-gray-300 text-base">{card.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InfoCards;

// import React from 'react';

// const InfoCards: React.FC = () => {
//   const cards = [
//     {
//       icon: '👥',
//       title: 'Comparación exclusiva',
//       description: 'Compare las principales empresas de accesorios en un solo lugar, sin necesidad de buscar información en Internet.'
//     },
//     {
//       icon: '👤',
//       title: 'Enfoque personalizado',
//       description: 'Encuentre la empresa que se adapta a USTED. Ayudamos a los operadores a encontrar la empresa adecuada en función de sus preferencias y estilo de negociación.'
//     },
//     {
//       icon: '💬',
//       title: 'Opiniones imparciales',
//       description: 'Evaluaciones fiables e imparciales para garantizarle la imagen más precisa de cada empresa de accesorios.'
//     },
//     {
//       icon: '💰',
//       title: 'Comparación clara de precios',
//       description: 'Comparaciones transparentes de las estructuras de precios de varias empresas de atrezzo para ayudarle a elegir la opción más rentable.'
//     },
//     {
//       icon: '📋',
//       title: 'Normas de negociación',
//       description: 'Comprenda las reglas y directrices exclusivas de cada empresa de accesorios para encontrar una combinación perfecta para su estrategia de negociación.'
//     },
//     {
//       icon: '🏷️',
//       title: 'Descuentos',
//       description: 'Consigue descuentos exclusivos con las distintas empresas.'
//     },
//     {
//       icon: '📝',
//       title: 'Reseñas detalladas',
//       description: 'Análisis exhaustivos de las empresas de utilería para ofrecerle la información que necesita para tomar decisiones con conocimiento de causa - fríamente.'
//     },
//     {
//       icon: '🔔',
//       title: 'Mantente al día',
//       description: 'Sea el primero en enterarse de los cambios en las normas, las nuevas ofertas o los cambios en el panorama de las empresas de asesoramiento.'
//     },
//     {
//       icon: '🤝',
//       title: 'Su aliado comercial',
//       description: 'Más que un simple sitio de comparación, somos un compañero en su viaje comercial, con el objetivo de ayudarle a tener éxito en el mundo del comercio de accesorios.'
//     }
//   ];

//   return (
//     <div className="flex flex-col items-center min-h-screen p-8 bg-gray-900">
//       <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
//         Su centro único para obtener información sobre empresas de utilería
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="bg-[#242424] p-6 rounded-3xl shadow-lg flex flex-col items-center text-center"
//             style={{
//               padding: '20px',
//               borderRadius: '40px',
//               width: '100%',
//               minWidth: '280px', // Reduce el ancho mínimo para hacer las tarjetas más pequeñas
//             }}
//           >
//             <div className="text-4xl mb-4">{card.icon}</div>
//             <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
//             <p className="text-gray-300 text-base">{card.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InfoCards;

import React from 'react';
import '../index.css'

const InfoCards: React.FC = () => {
  const cards = [
    {
      icon: '👥',
      title: 'Comparación exclusiva',
      description: 'Compare las principales empresas de accesorios en un solo lugar, sin necesidad de buscar información en Internet.'
    },
    {
      icon: '👤',
      title: 'Enfoque personalizado',
      description: 'Encuentre la empresa que se adapta a USTED. Ayudamos a los operadores a encontrar la empresa adecuada en función de sus preferencias y estilo de negociación.'
    },
    {
      icon: '💬',
      title: 'Opiniones imparciales',
      description: 'Evaluaciones fiables e imparciales para garantizarle la imagen más precisa de cada empresa de accesorios.'
    },
    {
      icon: '💰',
      title: 'Comparación clara de precios',
      description: 'Comparaciones transparentes de las estructuras de precios de varias empresas de atrezzo para ayudarle a elegir la opción más rentable.'
    },
    {
      icon: '📋',
      title: 'Normas de negociación',
      description: 'Comprenda las reglas y directrices exclusivas de cada empresa de accesorios para encontrar una combinación perfecta para su estrategia de negociación.'
    },
    {
      icon: '🏷️',
      title: 'Descuentos',
      description: 'Consigue descuentos exclusivos con las distintas empresas.'
    },
    {
      icon: '📝',
      title: 'Reseñas detalladas',
      description: 'Análisis exhaustivos de las empresas de utilería para ofrecerle la información que necesita para tomar decisiones con conocimiento de causa - fríamente.'
    },
    {
      icon: '🔔',
      title: 'Mantente al día',
      description: 'Sea el primero en enterarse de los cambios en las normas, las nuevas ofertas o los cambios en el panorama de las empresas de asesoramiento.'
    },
    {
      icon: '🤝',
      title: 'Su aliado comercial',
      description: 'Más que un simple sitio de comparación, somos un compañero en su viaje comercial, con el objetivo de ayudarle a tener éxito en el mundo del comercio de accesorios.'
    }
  ];

  return (
    <div className="flex flex-col items-center min-h-screen p-8  bg-purple-gradient">
      <h1 className="text-3xl md:text-4xl font-bold text-[#04a8c2] mb-8 text-center">
        Su centro único para obtener información sobre empresas de utilería
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#4c1d95] p-6 rounded-3xl shadow-lg flex flex-col items-center text-center"
            style={{
              padding: '20px',
              borderRadius: '40px',
              width: '100%',
              minWidth: '280px',
            }}
          >
            <div className="text-4xl mb-4 text-[#04a8c2]">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-white">{card.title}</h3>
            <p className="text-[#cce7ea] text-base">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;

