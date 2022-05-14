import React, { Component } from 'react';
import './App.css';
import MovieCard from './MovieCard'
import Movies from './Movies'
import Nav from './Nav'
import movieData from './movieData'
import MovieDetails from "./MovieDetails"


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      displaySingleMovie: false,
      currentMovie: null
    }
    this.displayMovie = this.displayMovie.bind(this)
  }

  displayMovie(id) {
    const movie = this.state.movies.find((movie) => {
      return movie.id === id
    })
    this.setState({currentMovie: movie})
    this.setState({displaySingleMovie: true})
  }

  render() {
    if (this.state.displaySingleMovie === false)
    {return (
      <main>
        <Nav />
        <Movies onClick={this.displayMovie}
          movies={this.state.movies}
          displayMovie={this.displayMovie}
        />
      </main>
    )}
    else {
      return (
        <main>
          <Nav />
          <MovieDetails
          movie={this.state.currentMovie}
          />
        </main>
      )
    }
  }


}

export default App;
