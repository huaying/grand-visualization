import React from 'react';
import LogoNav from './LogoNav';
import '../styles/Home.css';
import setFullScreen from '../lib/setFullScreen';

const Home = () => {
  setFullScreen(true);
  return (
    <div className="Home">
      <LogoNav />
    </div>
  );
};

export default Home;
