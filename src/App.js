import React, { Component } from 'react';
import './App.css';
import MovieCard from './MovieCard'
import Movies from './Movies'
import Nav from './Nav'
import movieData from './movieData'


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <main>
        <Nav />
        <Movies movies={this.state.movies}/>
      </main>
    )
  }
}

export default App;
