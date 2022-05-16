import React from 'react';
import MovieCard from './MovieCard.js'
import App from './App.js'
import './MovieDetails.css'

function MovieDetails({movie}) {

  const genres = movie.genres.map((genre) => {
    return `${genre} `
  })

  const movieBackground = movie.backdrop_path
  const avgRating = movie.average_rating.toFixed(2)

  return (
    <div className="movie-details">
      <img className="background-img" src={movie.backdrop_path}/>
      <div className="movie-text">
        <h1>{movie.title}</h1>
        <h3>{movie.tagline}</h3>
        <h3>Genres: {genres}</h3>
        <h3>Avg Rating: {avgRating}</h3>
        <h3>Release Date: {movie.release_date}</h3>
        <p>Overview: {movie.overview}</p>
        <h3>Budget: ${movie.budget}</h3>
        <h3>Revenue: ${movie.revenue}</h3>
        <h3>Runtime: {movie.runtime} minutes</h3>
      </div>
    </div>
  )
}


export default MovieDetails
