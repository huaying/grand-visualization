import React from 'react';
import logo from '../images/landing-logo.png';
import { Link } from 'react-router-dom';

const LogoNav = () => (
  <div className="logo">
    <Link to="/"><img src={logo} alt="Logo" width="300" /></Link>
    <nav>
      <Link to="/about">about</Link>{' | '}
      <Link to="/projects">projects</Link>{' | '}
      <Link to="/hire_us">hire us</Link>
    </nav>
  </div>
);

export default LogoNav;
