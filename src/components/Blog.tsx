import React from 'react';

interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  link: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Tendencias del Mercado Financiero en 2023',
    description: 'Explora las tendencias emergentes en los mercados financieros y cómo pueden afectar tus decisiones de trading.',
    date: '15 de marzo de 2023',
    link: '/blog/tendencias-mercado-2023'
  },
  {
    id: 2,
    title: 'Las Mejores Firmas de Trading para 2023',
    description: 'Un análisis de las mejores firmas de trading que ofrecen condiciones competitivas y soporte excepcional.',
    date: '10 de marzo de 2023',
    link: '/blog/mejores-firmas-trading-2023'
  },
  {
    id: 3,
    title: 'Cómo Elegir una Empresa de Fondeo',
    description: 'Consejos y consideraciones para elegir la mejor empresa de fondeo que se adapte a tus necesidades como trader.',
    date: '5 de marzo de 2023',
    link: '/blog/como-elegir-empresa-fondeo'
  },
  {
    id: 4,
    title: 'Divisas del Mercado: Lo Que Necesitas Saber',
    description: 'Una guía completa sobre las divisas más negociadas y cómo afectan el mercado global.',
    date: '1 de marzo de 2023',
    link: '/blog/divisas-mercado'
  },
];

const Blog: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#131722] text-[#d1d4dc]">
      <h2 className="text-4xl font-bold text-center mb-6">Blog de Noticias Financieras</h2>
      <p className="text-center text-lg mb-8">
        Mantente informado sobre las últimas noticias en los mercados financieros, firmas de trading y más.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <div key={article.id} className="bg-[#1e222d] rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
            <p className="text-[#787b86] mb-4">{article.description}</p>
            <p className="text-sm text-gray-400 mb-4">{article.date}</p>
            <a href={article.link} className="text-[#2962ff] hover:underline">Leer más</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog; 