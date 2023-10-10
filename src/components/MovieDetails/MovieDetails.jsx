import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../MovieDetails/MovieDetails.css';
import { useDarkMode } from '../Utils/DarkMode';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const notFoundImageUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMq4cGfAmaJAYVpXFPLY57EzVip1FTMK-ETQH1aU24VD-bYx5wJ4srHFP99zAgqXBvfQ&usqp=CAU';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [trailers, setTrailers] = useState([]);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = '9a72da818298f390a1dbda79726b9d32';
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };

    const fetchMovieTrailers = async () => {
      try {
        const apiKey = '9a72da818298f390a1dbda79726b9d32';
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
        );
        const data = await response.json();
        setTrailers(data.results.filter(video => video.type === 'Trailer'));
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };

    fetchMovieDetails();
    fetchMovieTrailers();
  }, [movieId]);

  const handleTrailerClick = () => {
    if (trailers.length > 0) {
      const trailerKey = trailers[0]?.key;
      window.open(`https://www.youtube.com/watch?v=${trailerKey}`, '_blank');
    }
  };

  return (
    <div className={`movie-container ${darkMode ? 'dark-mode' : ''}`}>
      {movieDetails ? (
        <div>
          <div className="movie-details-container">
            <div className="image-container">
              <img
                className="movie-details-image"
                src={
                  movieDetails.poster_path
                    ? IMAGE_BASE_URL + movieDetails.poster_path
                    : notFoundImageUrl // Użyj obrazu "Not Found" w przypadku braku obrazu
                }
                alt={movieDetails.title}
                onClick={handleTrailerClick}
                style={{ cursor: 'pointer' }}
              />
              {trailers.length > 0 && (
                <div className="trailer-indicator">Trailer Available</div>
              )}
            </div>
            <div className="movie-details">
              <h2 className="movie-title">{movieDetails.title}</h2>
              <p className="movie-genre">
                {movieDetails.genres.map(genre => genre.name).join(', ')}
              </p>
              <p className="movie-release">
                Release Date: {movieDetails.release_date}
              </p>
              <p className="movie-overview">{movieDetails.overview}</p>
              <div className="buttons">
                <Link to={`/movies/${movieId}/cast`} className="btn">
                  Cast
                </Link>
                <Link to={`/movies/${movieId}/reviews`} className="btn">
                  Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MovieDetails;
