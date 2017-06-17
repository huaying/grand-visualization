import React, { Component } from 'react';
import LogoNav from './LogoNav';
import '../styles/Home.css';
import bg from '../images/landing-hero.png';
import prelaodImg from '../images/hero-blur.png';
import setFullScreen from '../lib/setFullScreen';
import fb from '../images/facebook.svg';
import ig from '../images/instagram.svg';
import be from '../images/be.svg';

class Home extends Component {
  componentDidMount() {
    setFullScreen(true);
    this.preload();
  }

  preload() {
    new Image().src = prelaodImg;
  }

  render() {
    return (
      <div className="home">
        <img src={bg} className="home-bg" alt="" />
        <LogoNav />
        <div className="social">
          <a href="https://www.facebook.com/Grand-Visualization-485514698458079/" target="_blank">
            <img src={fb} />
          </a>
          <a href="https://www.instagram.com/grandvisualization/" target="_blank">
            <img src={ig} />
          </a>
          <a href="https://www.behance.net/suh6419" target="_blank">
            <img src={be} />
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
