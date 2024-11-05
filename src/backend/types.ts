import { useState, useEffect } from 'react';

export interface Firm {
    id: number;
    logo: string;
    name: string;
    price: string;
    accountSize: string;
    profitTarget: string;
    profitTargetPhase2?: string;
    maxDailyLoss: string;
    maxTotalLoss: string;
    refundType: string;
    refundAmount: string;
    profitRatio: string;
    payoutFrequency: string;
    rating: number;
    country: string;
    registrationDate: string;
    traderTrust: number;
    minTradingDays: string;
    maxTradingDays: string;
    twoCategories: boolean;
    leverage: string;
    discountRate: string;
    scale: string;
    crypto: boolean;
    newsCommission: string;
    [key: string]: string | number | boolean | undefined;
  }

  export interface Article {
    id: string;
    title: string;
    firmName: string;
    content: string;
    author: string;
    date: string;
    imageUrl?: string;
    tags: string[];
    readTime: number; // en minutos
  }

  export interface ComparisonData {
    firm1: {
      name: string;
      logo: string;
      strengths: string[];
    };
    firm2: {
      name: string;
      logo: string;
      strengths: string[];
    };
    metrics: ComparisonMetric[];
  }
  
  export interface ComparisonMetric {
    category: string;
    metrics: {
      name: string;
      firm1Value: string | number;
      firm2Value: string | number;
      winner: 'firm1' | 'firm2' | 'tie';
      icon?: React.ReactNode;
    }[];
  }


interface Review {
  firmId: string;
  rating: number;
  count: number;
}

export const useReviews = () => {
  const [reviews, setReviews] = useState<Record<string, Review>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Reemplaza esta URL con tu endpoint real
        const response = await fetch('/api/firms/reviews');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { reviews, loading };
};
  