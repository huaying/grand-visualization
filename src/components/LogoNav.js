import React from 'react';
import logo from '../images/landing-logo.png';
import { Link, NavLink } from 'react-router-dom';

const LogoNav = () => (
  <div className="logo nav">
    <Link to="/"><img src={logo} alt="Logo" width="300" /></Link>
    <nav>
      <NavLink to="/about">about</NavLink>{' | '}
      <NavLink to="/projects">projects</NavLink>{' | '}
      <NavLink to="/hire_us">hire us</NavLink>
    </nav>
  </div>
);

export const Nav = () => (
  <div className="nav">
    <Link className="brand" to="/"><img src={logo} alt="Logo" width="300" /></Link>
    <nav>
      <NavLink to="/about">about</NavLink>{' '}
      <NavLink to="/projects">projects</NavLink>{' '}
      <NavLink to="/hire_us">hire us</NavLink>
    </nav>
  </div>
);

export default LogoNav;
