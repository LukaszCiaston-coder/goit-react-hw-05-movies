import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css';
import { useDarkMode } from '../Utils/DarkMode';
import Loader from '../Loader/Loader';
import ReactPaginate from 'react-paginate';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const { darkMode } = useDarkMode();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const moviesPerPage = 20;

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setIsLoading(true);

      try {
        const apiKey = '9a72da818298f390a1dbda79726b9d32';
        const totalResults = 500;
        const totalPages = Math.ceil(totalResults / moviesPerPage);
        const allMovies = [];

        for (let page = 1; page <= totalPages; page++) {
          const response = await fetch(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=${page}&per_page=${moviesPerPage}`
          );

          const data = await response.json();
          const movies = data.results || [];

          allMovies.push(...movies);
        }

        setTrendingMovies(allMovies);
        setIsLoading(false);
      } catch (error) {
        console.error('Error while fetching trending movies:', error);
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  const handlePageClick = data => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const indexOfLastMovie = (currentPage + 1) * moviesPerPage;
  const indexOfFirstMovie = currentPage * moviesPerPage;
  const currentMovies = trendingMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  return (
    <div className={`container-home ${darkMode ? 'dark-mode' : ''}`}>
      <h2 className="home-title">Trending Movies Today</h2>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ul className="home-movie-list">
            {currentMovies.map(movie => (
              <li className="home-movie-item" key={movie.id}>
                <Link to={`/movies/${movie.id}`} className="movie-link">
                  <div className="movie-image-container">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                      className="movie-image"
                    />

                    <div className="movie-description">
                      <h3 className="movie-title">{movie.title}</h3>
                      <p className="movie-overview">{movie.overview}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {window.innerWidth > 760 && (
            <ReactPaginate
              pageCount={Math.ceil(trendingMovies.length / moviesPerPage)}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
          )}
          {window.innerWidth <= 760 && (
            <ReactPaginate
              pageCount={Math.ceil(trendingMovies.length / moviesPerPage)}
              pageRangeDisplayed={0}
              marginPagesDisplayed={1}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
