import React from 'react';
import MovieCard from './MovieCard.js'
import App from './App.js'
// import movieData from './movieData'

function MovieDetails({movie}) {
  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
    </div>
  )





}


export default MovieDetails



/*

Input: single movie

output: single movie details to display

method: match id from movie card to movie, make the text clickable, and pull up
the movie details.

movie details:
- backdrop_path
- title
- average_rating
- release_date


*/
