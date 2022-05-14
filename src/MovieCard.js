import React from 'react';
import MovieDetails from "./MovieDetails"
import './MovieCard.css'

function test() {
  console.log('hello')
}

function MovieCard(movie) {
  return (
    <div className="movie-card" id={movie.id} onClick={() => {movie.displayMovie(movie.id)}}>
      <img src={movie.img} alt={movie.title}/>
      <h3>{movie.title}</h3>
    </div>
  )
}

export default MovieCard;
