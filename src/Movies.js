import React from 'react';
import './Movies.css';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';


function Movies({ movies }) {
  const movieCards = movies.map((movie) => {
    return (
      <Link to={`/movies/${movie.id}`}>
        <MovieCard
          title={movie.title}
          img={movie.poster_path}
          id={movie.id}
          key={movie.id}
        />
      </Link>
    )
  })

  return (
    <div className="movie-container">
      {movieCards}
    </div>
  )

}

export default Movies;
