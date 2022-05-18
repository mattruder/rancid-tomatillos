import React, { Component } from 'react';
import MovieCard from './MovieCard.js'
import App from './App.js'
import './MovieDetails.css'

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: null,
      error: ''
    }
  }
  componentDidMount = () => {
    this.displayMovie(this.props.id)

  }


  displayMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error ('Something went wrong')
      }
    })
    .then(data => this.setState({ movie: data.movie}))
    .catch(error => console.log(error))
  }


  render() {
    const genres = this.state.movie.genres.map((genre) => {
        return `${genre} `
      })
      const movieBackground = this.state.movie.backdrop_path
      const avgRating = this.state.movie.average_rating.toFixed(2)


      return (
        <div className="movie-details">
          <img className="background-img" src={this.state.movie.backdrop_path}/>
          <div className="movie-text">
            <h1>{this.state.movie.title}</h1>
            <h3>{this.state.movie.tagline}</h3>
            <h3>Genres: {genres}</h3>
            <h3>Avg Rating: {avgRating}</h3>
            <h3>Release Date: {this.state.movie.release_date}</h3>
            <p>Overview: {this.state.movie.overview}</p>
            <h3>Budget: ${this.state.movie.budget}</h3>
            <h3>Revenue: ${this.state.movie.revenue}</h3>
            <h3>Runtime: {this.state.movie.runtime} minutes</h3>
          </div>
        </div>
      )
    }
  }


export default MovieDetails
