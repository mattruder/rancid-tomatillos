import React from 'react';
import  './Nav.css';
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <NavLink to="/" className="home">Rancid Tomatillos</NavLink>
      <h2>Pick A Movie!</h2>
    </nav>
  )
}



export default Nav;
