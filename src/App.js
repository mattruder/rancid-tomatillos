import React, { Component } from 'react';
import './App.css';
import MovieCard from './MovieCard'
import Movies from './Movies'
import Nav from './Nav'
import MovieDetails from "./MovieDetails"
import { Route, NavLink, Switch } from 'react-router-dom'


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => this.setState({movies: data.movies}))
    .catch(error => this.setState({error: 'There was a problem loading the page. Please try again later.'}))
  }

  render() {
    return(
      <main>
        <Nav/>
        <Switch>
          <Route
            exact path="/"
            render={() =>
              <Movies movies={this.state.movies}/>
            }
          />
          <Route
            exact path="/:id"
            render={({match}) => {
              const id = parseInt(match.params.id)
              return <MovieDetails id={id} />
            }}
          />
        </Switch>
      </main>

    )
  }
    /*
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
    }*/


}

export default App;


//this.setState({displaySingleMovie: true, currentMovie: data.movie})
