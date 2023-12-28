import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Carousel/Carousel.css';
import { Link } from 'react-router-dom';

const apiKey = '9a72da818298f390a1dbda79726b9d32';
const popularMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;

const PopularMoviesCarousel = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(popularMoviesUrl);
        const data = await response.json();
        console.log('Pobrane dane o popularnych filmach:', data);
        setPopularMovies(data.results);
      } catch (error) {
        console.error('Błąd pobierania danych o popularnych filmach: ', error);
      }
    };

    fetchPopularMovies();
  }, []);

  const handleMovieClick = movieId => {
    console.log('Clicked movie with ID:', movieId);
  };

  return (
    <div className="popular-movies-carousel">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        customButtonGroup={null}
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 6,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 3,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
        }}
        showDots
        sliderClass=""
      >
        {popularMovies.map(movie => (
          <div
            className="popular-movie-item"
            key={movie.id}
            onClick={() => handleMovieClick(movie.id)}
          >
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PopularMoviesCarousel;
