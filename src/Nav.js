import React from 'react';
import  './Nav.css';

function Nav({displayHome}) {
  return (
    <nav>
      <button className="home-button" onClick={displayHome}>Rancid Tomatillos</button>
      <h2>Pick A Movie!</h2>
    </nav>
  )
}



export default Nav;
