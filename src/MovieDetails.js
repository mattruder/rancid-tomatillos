import React from 'react';
import MovieCard from './MovieCard.js'
import App from './App.js'
import './MovieDetails.css'

function MovieDetails({movie}) {

  return (
    <div className="movie-details">
      <img src={movie.backdrop_path}/>
      <h1>{movie.title}</h1>
      <h3>{movie.average_rating}</h3>
      <h3>{movie.release_date}</h3>
      <p>{movie.overview}</p>
      <h3>{movie.budget}</h3>
      <h3>{movie.revenue}</h3>
      <h3>{movie.runtime} minutes</h3>
      <h3>{movie.tagline}</h3>
    </div>
  )
}


export default MovieDetails
