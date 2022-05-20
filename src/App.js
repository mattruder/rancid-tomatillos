import React, { Component } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import Movies from './Movies';
import Nav from './Nav';
import MovieDetails from "./MovieDetails";
import SearchBar from './searchBar'
import { Route, NavLink, Switch } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchResults: [],
      searching: false,
      error: ''
    }
    this.searchMovies = this.searchMovies.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => this.setState({movies: data.movies}))
    .catch(error => this.setState({error: 'There was a problem loading the page. Please try again later.'}))
  }

  searchMovies = (input) => {
    const filteredMovies =
      this.state.movies.filter(movie => movie.title.toLowerCase().includes(input.toLowerCase()));


    if(filteredMovies.length) {
      this.setState({ searching: true, searchResults: filteredMovies, error: ''});
    } else {
      this.setState({ error: 'No movies match your search.' })
    }
    console.log(this.state)
  }

  resetSearch = () => {
    this.setState({ searchResults: [], searching: false, error: ''})


  }



  render() {
    return(
      <main>
        <Nav movies={this.state.movies} searchMovies={this.searchMovies} resetSearch={this.resetSearch}/>
        <Switch>
          <Route
            exact path="/"
            render={() =>
              <>
                {this.state.error && <h2>{this.state.error}</h2> }
                {!this.state.error && this.state.searching && <Movies key="search-results" movies={this.state.searchResults}/>}
                {!this.state.error && !this.state.searching &&  <Movies key="all-movies" movies={this.state.movies}/>}
              </>
            }
          />
          <Route
            exact path="/movies/:id"
            render={({match}) => {
              const id = parseInt(match.params.id)
              return <MovieDetails id={id} />
            }}
          />
        </Switch>
      </main>

    )
  }

}

export default App;


// for rendering movies, we would want to change the props to this.state.searchResults
//this.state.searching && <Movies movies={this.state.searchResults}/>
