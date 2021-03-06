import React, { Component } from 'react';
import LogoNav from './LogoNav';
import '../styles/Home.css';
import bg from '../images/landing-hero.png';
import bg2 from '../images/landing-hero2.jpg';
import bg4 from '../images/landing-hero5.jpg';
import prelaodImg from '../images/hero-blur.png';
import setFullScreen from '../lib/setFullScreen';
import fb from '../images/facebook.svg';
import ig from '../images/instagram.svg';
import be from '../images/be.svg';

const SLIDE_INTERVAL = 6500; //ms
class Home extends Component {
  bgs = [bg, bg2, bg4];
  cpations = [
    '',
    '5 Lakeshore Drive Residential, Philadelphia, PA',
    'Tiny Tim, Long Beach, CA',
  ];
  state = {
    bgIdx: 0,
    startSlide: false,
  }

  componentDidMount = () => {
    setFullScreen(true);
    this.tick = setInterval(this.bgSlide, SLIDE_INTERVAL);
    this.preload();
  }

  componentWillUnmount = () => {
    clearInterval(this.tick);
  }

  bgSlide = () => {
    const bgIdx = (this.state.bgIdx + 1) % this.bgs.length;
    this.setState({ bgIdx, slideStart: true });
  }

  preload() {
    new Image().src = prelaodImg;
  }

  render() {
    const background = () => {
      return this.bgs.map((bg, idx) => {
        let display = 'hide';
        if (idx === this.state.bgIdx) {
          display = (this.state.slideStart) ? 'slide-in' : '';
        }
        else if (idx === ((this.state.bgIdx + this.bgs.length) - 1) % this.bgs.length) {
          display = (this.state.slideStart) ? 'slide-out' : 'hide';
        }
        return <img src={bg} className={`home-bg ${display}`} alt="" />;
      })
      return <img src={this.bgs[this.state.bgIdx]} className="home-bg fade-in" alt="" />;
    }
    return (
      <div className="home">
        {background()}
        <div id="cover"></div>
        <LogoNav white />
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
        {this.cpations[this.state.bgIdx] &&
          <div className="caption">{this.cpations[this.state.bgIdx]}</div>
        }
      </div>
    );
  }
}

export default Home;
