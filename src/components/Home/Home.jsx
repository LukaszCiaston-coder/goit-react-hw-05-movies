// Home.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css';
import { useDarkMode } from '../Utils/DarkMode';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const apiKey = '9a72da818298f390a1dbda79726b9d32'; // Klucz API themoviedb.org
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
        );
        const data = await response.json();
        setTrendingMovies(data.results);
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={`container-home ${darkMode ? 'dark-mode' : ''}`}>
      <h2 className="home-title">Trending Movies Today</h2>
      <ul className="home-movie-list">
        {trendingMovies.map(movie => (
          <li className="home-movie-item" key={movie.id}>
            <Link to={`/movies/${movie.id}`} className="movie-link">
              <div className="movie-image-container">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-image"
                />

                <div className="movie-description">
                  <h3 className="movie-title">{movie.title}</h3>{' '}
                  {/* Tytuł pod obrazkiem */}
                  <p className="movie-overview">{movie.overview}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
