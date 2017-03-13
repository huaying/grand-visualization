import React from 'react';
import Hero from './Hero';
import '../styles/About.css';
import setFullScreen from '../lib/setFullScreen';

const HireUs = () => {
  setFullScreen(false);
  return (
    <div className="about">
      <Hero />
      <div className="content">
      </div>
    </div>
  );
};


export default HireUs;
