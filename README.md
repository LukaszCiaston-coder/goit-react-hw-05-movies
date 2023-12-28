# Movie Database Web App

This is a movie database web application built using React. The app allows users
to explore trending movies, search for specific movies, view details, cast, and
reviews of a movie. Additionally, users can switch between light and dark modes
for a personalized viewing experience.

## Features

### Home Page

- Displays trending movies of the day.
- Allows pagination to explore more movies.
- Responsive design for different screen sizes.

### Search Movies

- Search for movies by entering a title.
- Filter movies by genre.

### Movie Details

- View detailed information about a specific movie.
- Explore cast members and reviews related to the movie.
- Watch trailers if available.

### Dark Mode

- Toggle between light and dark modes for enhanced readability.

## Tech Stack

- React
- React Router
- React Paginate
- Themoviedb API

## Project Structure

### App Component (`App.js`)

- Defines the main layout of the application.
- Utilizes React Router for navigation.
- Integrates a dark mode toggle button.

### Movies Component (`Movies.js`)

- Displays a list of movies based on search results or genre.
- Implements pagination for large result sets.
- Allows users to search for movies and filter by genre.

### MovieDetails Component (`MovieDetails.js`)

- Provides detailed information about a selected movie.
- Fetches and displays movie details, cast, and trailers.

### Home Component (`Home.js`)

- Presents a list of trending movies.
- Implements pagination for a smooth browsing experience.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/movie-database-app.git
   cd movie-database-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   npm start
   ```

   The app should now be accessible at
   [http://localhost:3000](http://localhost:3000).

## Credits

This project utilizes the
[Themoviedb API](https://www.themoviedb.org/documentation/api) for fetching
movie data.

## Author

- Łukasz Ciastoń
