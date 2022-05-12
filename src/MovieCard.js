import React from 'react';
import './MovieCard.css'

function MovieCard(movie) {
  return (
    <div className="movie-card" id={movie.id}>
      <img src={movie.img} alt={movie.title}/>
      <h3>{movie.title}</h3>
    </div>
  )
}

export default MovieCard;
