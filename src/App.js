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
      searchResults: [ {
          id: 694919,
          poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
          backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
          title: "Money Plane",
          average_rating: 6.875,
          release_date: "2020-09-29"
        } ],
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
    console.log('input', input)
    // this.setState({ searching: true })


    //then we want to to use our state.movies to get a filtered array of movies that inlcude the input passed from the search background

    //then we want to this.setState.searchResults and re render our movies container using the searchResults

    //if a user clicks clear then we need to reset the form, reset state of search bar to '', and rerender movies container with OG movies array state.movies

    //search movies using input and maybe transform case and check what movies include the input
    //
    //we want this to set state so that our movies container is rerendered with the correct array of movies
  }

  resetSearch = () => {
    console.log('reseting search')
    // this.setState({ searchResults: [], searching: false, })
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
                {this.state.searching && <Movies key="search-results" movies={this.state.searchResults}/>}
                {!this.state.searching &&  <Movies movies={this.state.movies}/>}
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
