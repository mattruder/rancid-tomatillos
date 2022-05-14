import React, { Component } from 'react';
import './App.css';
import MovieCard from './MovieCard'
import Movies from './Movies'
import Nav from './Nav'
import MovieDetails from "./MovieDetails"


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      displaySingleMovie: false,
      currentMovie: null,
      error: ''
    }
    this.displayMovie = this.displayMovie.bind(this)
    this.displayHome = this.displayHome.bind(this)
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => this.setState({movies: data.movies}))
    .catch(error => this.setState({error: 'There was a problem loading the page. Please try again later.'}))
  }


  displayMovie(id) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error ('Something went wrong')
      }
    })
    .then(data => this.setState({displaySingleMovie: true, currentMovie: data.movie}))
    .catch(error => {
      return this.setState({error: 'There was a problem loading your movie.'})
    }
    )
  }

  displayHome() {
    this.setState({displaySingleMovie: false, error: ''})
  }

  render() {
    if (!this.state.displaySingleMovie && !this.state.error){
      return (
        <main>
          <Nav displayHome={this.displayHome}/>
          <Movies onClick={this.displayMovie}
            movies={this.state.movies}
            displayMovie={this.displayMovie}
          />
        </main>
    )}
    else if (this.state.displaySingleMovie && !this.state.error) {
      return (
        <main>
          <Nav displayHome={this.displayHome}/>
          <MovieDetails
          movie={this.state.currentMovie}
          />
        </main>
      )
    } else {
      return(
        <main>
          <Nav displayHome={this.displayHome}/>
          <h2 className="error-message">{this.state.error}</h2>
        </main>
      )
    }
  }

}

export default App;
