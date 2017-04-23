import React, { Component } from 'react';
import LogoNav from './LogoNav';
import '../styles/Home.css';
import bg from '../images/landing-hero.png';
import setFullScreen from '../lib/setFullScreen';

class Home extends Component {
  componentDidMount() {
    setFullScreen(true);
  }

  render() {
    return (
      <div className="home">
        <img src={bg} className="home-bg" alt="" />
        {/* <div key="home" className="home-bg"></div> */}
        <LogoNav />
      </div>
    );
  }
}

export default Home;
