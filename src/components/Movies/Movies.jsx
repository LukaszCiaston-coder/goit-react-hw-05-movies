import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Movies/Movies.css';
import { useDarkMode } from '../Utils/DarkMode';

// Użyj URL obrazka "Not Found" z zewnętrznego źródła
const notFoundImageUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMq4cGfAmaJAYVpXFPLY57EzVip1FTMK-ETQH1aU24VD-bYx5wJ4srHFP99zAgqXBvfQ&usqp=CAU';

const Movies = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { darkMode } = useDarkMode();

  const handleSearchInputChange = event => {
    setSearchKeyword(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const apiKey = '9a72da818298f390a1dbda79726b9d32';
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchKeyword}`
      );
      const data = await response.json();
      console.log('Fetched data:', data);

      const resultsWithImages =
        data.results.length > 0
          ? data.results
          : [
              {
                poster_path: null,
                title: 'Not Found',
                id: 'not-found',
              },
            ];

      setSearchResults(resultsWithImages);
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  };

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
  };

  return (
    <div className={`movies-container ${darkMode ? 'dark-mode' : ''}`}>
      <h2>Search Your Movie</h2>
      <input
        type="text"
        placeholder="Enter movie title"
        value={searchKeyword}
        onChange={handleSearchInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      <ul className="movies-list">
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link className="movie-items" to={`/movies/${movie.id}`}>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-thumbnail"
                />
              ) : (
                <img
                  src={notFoundImageUrl} // Obrazek "Not Found" z zewnętrznego URL
                  alt="Not Found"
                  className="movie-thumbnail"
                />
              )}
              <span className="movies-title">
                {truncateTitle(movie.title, 12)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
