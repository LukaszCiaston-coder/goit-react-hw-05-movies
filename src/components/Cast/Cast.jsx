import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Cast/Cast.css';
import { useDarkMode } from '../Utils/DarkMode';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200';
const notFoundImageUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMq4cGfAmaJAYVpXFPLY57EzVip1FTMK-ETQH1aU24VD-bYx5wJ4srHFP99zAgqXBvfQ&usqp=CAU';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const apiKey = '9a72da818298f390a1dbda79726b9d32';
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
      <h2>Cast</h2>
      <ul className="cast-list">
        {cast.map(actor => (
          <li className="cast-item" key={actor.id}>
            <img
              className="actor-image"
              src={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${actor.profile_path}`
                  : notFoundImageUrl
              }
              alt={actor.name}
            />
            <p className="actor-name">{actor.name}</p>
          </li>
        ))}

        {!cast.length && (
          <li className="cast-item">
            <img
              src={notFoundImageUrl}
              alt="Not Found"
              className="actor-image"
            />
            <p className="actor-name">Not Found</p>
          </li>
        )}
      </ul>
      <Link to={`/movies/${movieId}`} className="btn">
        Back to Movie Details
      </Link>
    </div>
  );
};

export default Cast;
