import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Cast/Cast.css';
import { useDarkMode } from '../Utils/DarkMode';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200'; // Base URL for actor images

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const darkMode = useDarkMode();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const apiKey = '9a72da818298f390a1dbda79726b9d32'; // Klucz API themoviedb.org
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
        );
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div className={`cast-container ${darkMode ? 'dark-mode' : ''}`}>
      <h2 className="cast-title">Cast</h2>
      <ul className="cast-list">
        {cast.map(actor => (
          <li className="cast-item" key={actor.id}>
            <img
              className="actor-image"
              src={`${IMAGE_BASE_URL}${actor.profile_path}`}
              alt={actor.name}
            />
            <p className="actor-name">{actor.name}</p>
          </li>
        ))}
      </ul>
      <Link to={`/movies/${movieId}`} className="back-link">
        Back to Movie Details
      </Link>
    </div>
  );
};

export default Cast;
