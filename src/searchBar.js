import React, { Component } from 'react';
import './searchBar.css';

class SearchBar extends Component {
  constructor(){
    super()
    this.state = {
      search: ''
    }
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value})
  }

  componentDidUpdate = () => {
    if(this.state.search) {
      this.props.searchMovies(this.state.search)
    }
    console.log('line 17', this.state.search)

  }

  clearSearch = (event) => {
    this.props.resetSearch()
    this.setState({ search: ''})
  }

  render(){
    return(
      <form>
        <input
          type="text"
          placeholder="Search for a movie"
          value={this.state.search}
          onChange={event => this.handleChange(event)}
        />
        <button
          className="clear-search"
          type="reset"
          onClick={event => this.clearSearch(event)}>
          X
        </button>
      </form>
    )
  }



}

export default SearchBar
