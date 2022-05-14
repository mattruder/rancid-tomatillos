import React from 'react';
import './Movies.css';
import MovieCard from './MovieCard'

function Movies({ movies, displayMovie }) {
  const movieCards = movies.map((movie) => {
    return (
      <MovieCard
        title={movie.title}
        img={movie.poster_path}
        id={movie.id}
        key={movie.id}
        displayMovie={displayMovie}
      />
    )
  })

  return (
    <div className="movie-container">
      {movieCards}
    </div>
  )

}

export default Movies;
