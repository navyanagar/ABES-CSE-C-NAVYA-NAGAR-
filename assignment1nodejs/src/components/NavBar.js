import React from 'react';
import { NavLink } from 'react-router-dom';   
import './NavBar.css';
const NavBar = () => {
  return (
    <nav className="navbar">
    <img src="https://avatars.githubusercontent.com/u/48626910?s=280&v=4" alt="Logo" className="logo"/>
    <NavLink to="/" className="nav-link">Home</NavLink>
    <NavLink to="/work" className="nav-link">Work</NavLink>
    </nav>
  );
};
export default NavBar;
