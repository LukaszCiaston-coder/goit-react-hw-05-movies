import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Reviews/Reviews.css';
import { useDarkMode } from '../Utils/DarkMode';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const darkMode = useDarkMode();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const apiKey = '9a72da818298f390a1dbda79726b9d32'; // Klucz API themoviedb.org
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`
        );
        const data = await response.json();
        setReviews(data.results);
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={`reviews-container ${darkMode ? 'dark-mode' : ''}`}>
      <h2>Reviews</h2>
      <ul className="reviews-list">
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
      <Link to={`/movies/${movieId}`} className="back-link">
        Back to Movie Details
      </Link>
    </div>
  );
};

export default Reviews;
