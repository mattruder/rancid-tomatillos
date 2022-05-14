import React from 'react';
import  './Nav.css';

function Nav({displayHome}) {
  return (
    <nav>
      <button className="home-button" onClick={displayHome}>Rancid Tomatillos</button>
    </nav>
  )
}



export default Nav;
