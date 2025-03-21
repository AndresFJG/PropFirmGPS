import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  author?: string;
  siteName?: string;
  type?: string;
  locale?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageAlt?: string;
  imageType?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Prop Firm GPS - Encuentra el broker que mejor se adapte a tu estilo de trading",
  description = "Encuentra el broker que mejor se adapte a su estilo de trading, objetivos de inversión y nivel de experiencia. ⚖️ Evaluaciones Objetivas. Revisiones imparciales.",
  keywords = "prop firms, propfirmgps, trading, broker, comparador, evaluación, trading propietario, FTMO, MyForexFunds, TFT",
  image = "/logopropfirm.png",
  url = "https://propfirmgps.com",
  author = "Prop Firm GPS",
  siteName = "Prop Firm GPS",
  type = "website",
  locale = "es_ES",
  imageWidth = "1200",
  imageHeight = "630",
  imageAlt = "Prop Firm GPS - Encuentra el broker que mejor se adapte a tu estilo de trading",
  imageType = "image/png"
}) => {
  return (
    <Helmet>
      {/* Títulos básicos */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:type" content={imageType} />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/logopropfirm.png" />
      <link rel="apple-touch-icon" href="/logopropfirm.png" />

      {/* Idioma */}
      <html lang="es" />
    </Helmet>
  );
};

export default SEO;