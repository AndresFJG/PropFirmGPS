import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../index.css'
import { logEvent } from '../types/analytics';

interface Review {
  user: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  id: string;
}

const reviews: Review[] = [
  {
    user: 'Juan Pérez',
    rating: 4,
    comment: 'Excelente plataforma, muy fácil de usar y con información clara sobre las empresas.',
    date: '20 de Octubre, 2024',
    avatar: 'JP',
    id: 'JP'
  },
  {
    user: 'María Rodríguez',
    rating: 5,
    comment: 'Me ayudó a encontrar la empresa adecuada para mi estilo de trading. Muy recomendada.',
    date: '15 de Octubre, 2024',
    avatar: 'MR',
    id: 'MR'
  },
  {
    user: 'Carlos Gómez',
    rating: 3,
    comment: 'La plataforma es buena, pero me gustaría ver más opciones de empresas.',
    date: '10 de Octubre, 2024',
    avatar: 'CG',
    id: 'CG'
  },
  {
    user: 'Ana López',
    rating: 5,
    comment: 'Gran experiencia. Me gusta la comparación de precios y las reseñas imparciales.',
    date: '5 de Octubre, 2024',
    avatar: 'AL',
    id: 'AL'
  },
  {
    user: 'Luis Fernández',
    rating: 4,
    comment: 'La interfaz es intuitiva y fácil de navegar.',
    date: '1 de Noviembre, 2024',
    avatar: 'LF',
    id: 'LF'
  },
  {
    user: 'Sofía Martínez',
    rating: 5,
    comment: 'Excelente atención al cliente y soporte técnico.',
    date: '2 de Noviembre, 2024',
    avatar: 'SM',
    id: 'SM'
  },
  {
    user: 'Pedro Sánchez',
    rating: 4,
    comment: 'Tuve algunos problemas técnicos, pero el soporte fue útil.',
    date: '3 de Noviembre, 2024',
    avatar: 'PS',
    id: 'PS'
  },
  {
    user: 'Clara Torres',
    rating: 4,
    comment: 'Me gusta la variedad de opciones de trading que ofrecen.',
    date: '4 de Noviembre, 2024',
    avatar: 'CT',
    id: 'CT'
  },
];

// Duplicar las reseñas para el scroll infinito
const infiniteReviews = [...reviews, ...reviews];

const Reviews: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [usefulCount, setUsefulCount] = useState<number[]>(Array(infiniteReviews.length).fill(0));

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Reducido para scroll más suave
      const newScrollPosition = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });

      // Reiniciar el scroll al inicio si se llega al final
      if (newScrollPosition >= scrollContainerRef.current.scrollWidth / 2) {
        scrollContainerRef.current.scrollLeft = 0;
      } else if (newScrollPosition < 0) {
        scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth / 2;
      }
    }
  };

  const handleUsefulClick = (reviewId: string, index: number) => {
    logEvent('Review', 'Marcar Útil', reviewId);
    const newCounts = [...usefulCount];
    newCounts[index] += 1;
    setUsefulCount(newCounts);
  };

  const handleShareClick = (reviewId: string) => {
    logEvent('Review', 'Compartir', reviewId);
  };

  const handleReviewClick = (reviewId: string) => {
    logEvent('Reviews', 'Ver Review', reviewId);
  };

  return (
    <div className="w-full bg-[#131722] py-20 px-6">
      <div className="max-w-[90rem] mx-auto">
        {/* Encabezado */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins bg-gradient-to-r from-[#2962ff] to-[#2979ff] text-transparent bg-clip-text">
            Opiniones de Nuestros Usuarios
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2962ff] to-[#2979ff] mx-auto rounded-full"></div>
          <p className="text-[#787b86] text-lg max-w-2xl mx-auto font-inter mt-4">
            Descubra lo que otros traders opinan sobre nuestra plataforma
          </p>
        </div>

        {/* Contenedor de Reviews con Scroll */}
        <div className="relative px-4">
          {/* Botón Izquierdo */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10
                     w-10 h-10 rounded-full bg-[#1e222d] border border-[#2a2e39]
                     flex items-center justify-center text-[#d1d4dc]
                     hover:bg-[#2962ff] hover:text-white transition-all duration-300
                     shadow-lg hover:shadow-[#2962ff]/20"
          >
            <FaChevronLeft />
          </button>

          {/* Contenedor con Scroll */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide py-4"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              maxWidth: '100%',
            }}
          >
            {infiniteReviews.map((review, index) => (
              <div
                key={index}
                className="min-w-[280px] max-w-[280px] flex-shrink-0 bg-[#1e222d] rounded-xl p-5 
                           border border-[#2a2e39]/30 hover:border-[#2962ff]/30
                           transform transition-all duration-300
                           hover:shadow-lg hover:shadow-[#2962ff]/5
                           hover:translate-y-[-4px]
                           scroll-snap-align-start"
                onClick={() => handleReviewClick(review.id)}
              >
                {/* Header del Review */}
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2962ff] to-[#2979ff] 
                                flex items-center justify-center text-white font-semibold font-poppins
                                text-sm shadow-lg">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-[#d1d4dc] font-semibold font-poppins text-sm">
                          {review.user}
                        </h3>
                        <p className="text-xs text-[#787b86] font-inter">
                          {review.date}
                        </p>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <span
                            key={starIndex}
                            className={`text-sm ${
                              starIndex < review.rating 
                                ? 'text-[#2962ff]' 
                                : 'text-[#2a2e39]'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contenido del Review */}
                <div className="pl-13">
                  <p className="text-[#d1d4dc] text-sm leading-relaxed font-inter line-clamp-4">
                    {review.comment}
                  </p>
                </div>

                <div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUsefulClick(review.id, index);
                    }}
                    className="text-xs text-[#787b86] font-inter hover:text-[#2962ff] transition-colors duration-200"
                  >
                    Útil ({usefulCount[index]})
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShareClick(review.id);
                    }}
                    className="text-xs text-[#787b86] font-inter"
                  >
                    Compartir
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Botón Derecho */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10
                     w-10 h-10 rounded-full bg-[#1e222d] border border-[#2a2e39]
                     flex items-center justify-center text-[#d1d4dc]
                     hover:bg-[#2962ff] hover:text-white transition-all duration-300
                     shadow-lg hover:shadow-[#2962ff]/20"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Indicadores de scroll */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-12 h-1 rounded-full bg-[#2962ff]"></div>
          <div className="w-12 h-1 rounded-full bg-[#2962ff]/30"></div>
          <div className="w-12 h-1 rounded-full bg-[#2962ff]/30"></div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

