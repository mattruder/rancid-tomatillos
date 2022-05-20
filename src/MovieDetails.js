import React, { Component } from 'react';
import './MovieDetails.css'

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      movie: null,
      error: ''
    }
  }

  componentDidMount = () => {
    this.displayMovie(this.state.id)

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
    .catch(error => this.setState({error: 'There was a problem loading the page. Please try again later.'}))
  }



  render() {
      return (
        <>
        {!this.state.error && this.state.movie &&
          <div className="movie-details">
          <img className="background-img" src={this.state.movie.backdrop_path}/>
            <div className="movie-text">
                <h1>{this.state.movie.title}</h1>
                <h3>{this.state.movie.tagline}</h3>
                <h3>Genres: {this.state.movie.genres.join('  ')}</h3>
                <h3>Avg Rating: {this.state.movie.average_rating.toFixed(2)}</h3>
                <h3>Release Date: {this.state.movie.release_date}</h3>
                <p>Overview: {this.state.movie.overview}</p>
                <h3>Budget: ${this.state.movie.budget}</h3>
                <h3>Revenue: ${this.state.movie.revenue}</h3>
                <h3>Runtime: {this.state.movie.runtime} minutes</h3>
            </div>
          </div>
        }
        {this.state.error && <h2>{this.state.error}</h2>}
        </>
      )
    }
  }


export default MovieDetails
