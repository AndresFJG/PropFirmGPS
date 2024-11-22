import { useState, useEffect } from 'react';

interface Review {
  firmId: string;
  rating: number;
  count: number;
}

const useReviews = () => {
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

export default useReviews;
export {}; 