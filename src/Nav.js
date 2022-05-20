import React from 'react';
import  './Nav.css';
import { NavLink } from 'react-router-dom'
import SearchBar from './searchBar'

function Nav({searchMovies, resetSearch}) {
  return (
    <nav>
      <NavLink to="/" className="home">Rancid Tomatillos</NavLink>
      <SearchBar searchMovies={searchMovies} resetSearch={resetSearch}/>
    </nav>
  )
}



export default Nav;
