import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import '../Movies/Movies.css';
import { useDarkMode } from '../Utils/DarkMode';

const notFoundImageUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMq4cGfAmaJAYVpXFPLY57EzVip1FTMK-ETQH1aU24VD-bYx5wJ4srHFP99zAgqXBvfQ&usqp=CAU';

const Movies = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const resultsPerPage = 18;
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const apiKey = '9a72da818298f390a1dbda79726b9d32';
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
        );
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error('Error while fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  const handleSearchInputChange = event => {
    setSearchKeyword(event.target.value);
  };

  const fetchAllResults = async () => {
    const apiKey = '9a72da818298f390a1dbda79726b9d32';
    const totalResults = 500; // Zakładam, że API ma 500 wyników
    const totalPages = Math.ceil(totalResults / resultsPerPage);
    const allResults = [];

    for (let page = 1; page <= totalPages; page++) {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchKeyword}&page=${page}&per_page=${resultsPerPage}`
      );

      const data = await response.json();
      const resultsWithImages = data.results || [];

      allResults.push(...resultsWithImages);
    }

    setSearchResults(allResults);
  };

  const handleSearch = async () => {
    // Wywołaj funkcję fetchAllResults
    await fetchAllResults();
  };

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
  };
  const handleGenreClick = async genreId => {
    try {
      const apiKey = '9a72da818298f390a1dbda79726b9d32';
      const totalResults = 500;
      const totalPages = Math.ceil(totalResults / resultsPerPage);
      const allResults = [];

      for (let page = 1; page <= totalPages; page++) {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${page}&per_page=${resultsPerPage}`
        );
        const data = await response.json();
        const resultsWithImages = data.results || [];
        allResults.push(...resultsWithImages);
      }

      console.log('Fetched data for genreId:', genreId);

      // Ustaw wszystkie wyniki w stanie komponentu
      setSearchResults(allResults);
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  };
  const indexOfLastResult = (currentPage + 1) * resultsPerPage;
  const indexOfFirstResult = currentPage * resultsPerPage;
  const currentResults = searchResults.slice(
    indexOfFirstResult,
    indexOfLastResult
  );

  return (
    <div className={`movies-container ${darkMode ? 'dark-mode' : ''}`}>
      <h2>Search Your Movie</h2>
      <input
        type="text"
        placeholder="Enter movie title"
        value={searchKeyword}
        onChange={handleSearchInputChange}
      />
      <button className="btn" onClick={handleSearch}>
        Search
      </button>

      <div className="genre-buttons">
        {genres.map(genre => (
          <button
            key={genre.id}
            onClick={() => handleGenreClick(genre.id)}
            className="genre-button btn"
          >
            {genre.name}
          </button>
        ))}
      </div>

      <ul className="movies-list">
        {currentResults.map(movie => (
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
                  src={notFoundImageUrl}
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

      <ReactPaginate
        pageCount={Math.ceil(searchResults.length / resultsPerPage)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={data => setCurrentPage(data.selected)}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Movies;
