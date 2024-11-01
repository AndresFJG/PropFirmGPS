// import React from 'react';

// interface Review {
//   user: string;
//   rating: number;
//   comment: string;
//   date: string;
// }

// const reviews: Review[] = [
//   {
//     user: 'Juan Pérez',
//     rating: 4,
//     comment: 'Excelente plataforma, muy fácil de usar y con información clara sobre las empresas.',
//     date: '20 de Octubre, 2024',
//   },
//   {
//     user: 'María Rodríguez',
//     rating: 5,
//     comment: 'Me ayudó a encontrar la empresa adecuada para mi estilo de trading. Muy recomendada.',
//     date: '15 de Octubre, 2024',
//   },
//   {
//     user: 'Carlos Gómez',
//     rating: 3,
//     comment: 'La plataforma es buena, pero me gustaría ver más opciones de empresas.',
//     date: '10 de Octubre, 2024',
//   },
//   {
//     user: 'Ana López',
//     rating: 5,
//     comment: 'Gran experiencia. Me gusta la comparación de precios y las reseñas imparciales.',
//     date: '5 de Octubre, 2024',
//   },
// ];

// const Reviews: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center p-8 bg-gray-900 min-h-screen">
//       <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
//         Opiniones de Nuestros Usuarios
//       </h2>
//       <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
//         {reviews.map((review, index) => (
//           <div
//             key={index}
//             className="bg-[#242424] p-6 rounded-3xl shadow-lg flex flex-col text-white"
//           >
//             <div className="flex items-center mb-4">
//               <div className="flex flex-col items-start">
//                 <span className="text-lg font-semibold">{review.user}</span>
//                 <span className="text-sm text-gray-400">{review.date}</span>
//               </div>
//             </div>
//             <div className="flex items-center mb-4">
//               {Array.from({ length: 5 }).map((_, starIndex) => (
//                 <span
//                   key={starIndex}
//                   className={`text-xl ${
//                     starIndex < review.rating ? 'text-yellow-400' : 'text-gray-500'
//                   }`}
//                 >
//                   ★
//                 </span>
//               ))}
//             </div>
//             <p className="text-gray-300 text-base">{review.comment}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Reviews;

// import React, { useRef } from 'react';

// interface Review {
//   user: string;
//   rating: number;
//   comment: string;
//   date: string;
// }

// const reviews: Review[] = [
//   {
//     user: 'Juan Pérez',
//     rating: 4,
//     comment: 'Excelente plataforma, muy fácil de usar y con información clara sobre las empresas.',
//     date: '20 de Octubre, 2024',
//   },
//   {
//     user: 'María Rodríguez',
//     rating: 5,
//     comment: 'Me ayudó a encontrar la empresa adecuada para mi estilo de trading. Muy recomendada.',
//     date: '15 de Octubre, 2024',
//   },
//   {
//     user: 'Carlos Gómez',
//     rating: 3,
//     comment: 'La plataforma es buena, pero me gustaría ver más opciones de empresas.',
//     date: '10 de Octubre, 2024',
//   },
//   {
//     user: 'Ana López',
//     rating: 5,
//     comment: 'Gran experiencia. Me gusta la comparación de precios y las reseñas imparciales.',
//     date: '5 de Octubre, 2024',
//   },
//   {
//     user: 'Ana López',
//     rating: 5,
//     comment: 'Gran experiencia. Me gusta la comparación de precios y las reseñas imparciales.',
//     date: '5 de Octubre, 2024',
//   },
//   {
//     user: 'Ana López',
//     rating: 5,
//     comment: 'Gran experiencia. Me gusta la comparación de precios y las reseñas imparciales.',
//     date: '5 de Octubre, 2024',
//   },
//   {
//     user: 'Ana López',
//     rating: 5,
//     comment: 'Gran experiencia. Me gusta la comparación de precios y las reseñas imparciales.',
//     date: '5 de Octubre, 2024',
//   },
//   {
//     user: 'Ana López',
//     rating: 5,
//     comment: 'Gran experiencia. Me gusta la comparación de precios y las reseñas imparciales.',
//     date: '5 de Octubre, 2024',
//   },
//   {
//     user: 'Ana López',
//     rating: 5,
//     comment: 'Gran experiencia. Me gusta la comparación de precios y las reseñas imparciales.',
//     date: '5 de Octubre, 2024',
//   },
//   {
//     user: 'Ana López',
//     rating: 5,
//     comment: 'Gran experiencia. Me gusta la comparación de precios y las reseñas imparciales.',
//     date: '5 de Octubre, 2024',
//   },
//   {
//     user: 'Ana López',
//     rating: 5,
//     comment: 'Gran experiencia. Me gusta la comparación de precios y las reseñas imparciales.',
//     date: '5 de Octubre, 2024',
//   },
//   {
//     user: 'Ana López',
//     rating: 5,
//     comment: 'Gran experiencia. Me gusta la comparación de precios y las reseñas imparciales.',
//     date: '5 de Octubre, 2024',
//   },
//   {
//     user: 'Ana López',
//     rating: 5,
//     comment: 'Gran experiencia. Me gusta la comparación de precios y las reseñas imparciales.',
//     date: '5 de Octubre, 2024',
//   },
// ];

// const Reviews: React.FC = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   let isMouseDown = false;
//   let startX: number;
//   let scrollLeft: number;

//   const handleMouseDown = (e: React.MouseEvent) => {
//     isMouseDown = true;
//     startX = e.pageX - (scrollRef.current?.offsetLeft || 0);
//     scrollLeft = scrollRef.current?.scrollLeft || 0;
//   };

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isMouseDown) return;
//     e.preventDefault();
//     const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
//     const walk = (x - startX) * 2; // Velocidad de desplazamiento
//     if (scrollRef.current) {
//       scrollRef.current.scrollLeft = scrollLeft - walk;
//     }
//   };

//   const handleMouseUpOrLeave = () => {
//     isMouseDown = false;
//   };

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-900">
//       <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
//         Opiniones de Nuestros Usuarios
//       </h2>
//       <div
//         ref={scrollRef}
//         className="w-full flex space-x-4 py-4 overflow-hidden cursor-grab"
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUpOrLeave}
//         onMouseLeave={handleMouseUpOrLeave}
//       >
//         {reviews.map((review, index) => (
//           <div
//             key={index}
//             className="min-w-[300px] max-w-xs bg-[#242424] p-4 rounded-3xl shadow-md flex-shrink-0"
//           >
//             <div className="flex flex-col mb-2">
//               <span className="text-lg font-semibold text-white">{review.user}</span>
//               <span className="text-sm text-gray-400">{review.date}</span>
//             </div>
//             <div className="flex items-center mb-2">
//               {Array.from({ length: 5 }).map((_, starIndex) => (
//                 <span
//                   key={starIndex}
//                   className={`text-xl ${
//                     starIndex < review.rating ? 'text-yellow-400' : 'text-gray-500'
//                   }`}
//                 >
//                   ★
//                 </span>
//               ))}
//             </div>
//             <p className="text-gray-300 text-base">{review.comment}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Reviews;

import React, { useRef } from 'react';
import '../index.css'

interface Review {
  user: string;
  rating: number;
  comment: string;
  date: string;
}

const reviews: Review[] = [
  {
    user: 'Juan Pérez',
    rating: 4,
    comment: 'Excelente plataforma, muy fácil de usar y con información clara sobre las empresas.',
    date: '20 de Octubre, 2024',
  },
  {
    user: 'María Rodríguez',
    rating: 5,
    comment: 'Me ayudó a encontrar la empresa adecuada para mi estilo de trading. Muy recomendada.',
    date: '15 de Octubre, 2024',
  },
  {
    user: 'Carlos Gómez',
    rating: 3,
    comment: 'La plataforma es buena, pero me gustaría ver más opciones de empresas.',
    date: '10 de Octubre, 2024',
  },
  {
    user: 'Ana López',
    rating: 5,
    comment: 'Gran experiencia. Me gusta la comparación de precios y las reseñas imparciales.',
    date: '5 de Octubre, 2024',
  },
];

const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  let isMouseDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    isMouseDown = true;
    startX = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Velocidad de desplazamiento
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    isMouseDown = false;
  };

  return (
    <div className="flex flex-col items-center p-6 bg-purple-gradient">
      <h2 className="text-3xl md:text-4xl font-bold text-[#04a8c2] mb-6 text-center">
        Opiniones de Nuestros Usuarios
      </h2>
      <div
        ref={scrollRef}
        className="w-full flex space-x-4 py-4 overflow-hidden cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-xs bg-[#4c1d95] p-4 rounded-3xl shadow-md flex-shrink-0"
          >
            <div className="flex flex-col mb-2">
              <span className="text-lg font-semibold text-[#04a8c2]">{review.user}</span>
              <span className="text-sm text-[#cce7ea]">{review.date}</span>
            </div>
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <span
                  key={starIndex}
                  className={`text-xl ${
                    starIndex < review.rating ? 'text-yellow-400' : 'text-gray-500'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-[#e2e8f0] text-base">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

