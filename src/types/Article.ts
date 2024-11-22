export interface Article {
  id: string;
  title: string;
  description: string;
  mainImage: string;
  firmLogo: string;
  firmName: string;
  date: string;
  readTime: string;
  content?: string;
  url?: string; // Hacemos url opcional
  links: {
    website: string;
    review: string;
  };
} 