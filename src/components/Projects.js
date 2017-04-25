import React, { Component } from 'react';
import '../styles/Proects.css';
import { Nav } from './LogoNav';
import setFullScreen from '../lib/setFullScreen';

const imgDir = 'preview/';
const workImgDir = 'preview/';
const heroPhoto1 = `${imgDir}1.jpg`;
const heroPhoto2 = `${imgDir}3.jpg`;
const photoGroup1 = [2, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40];
const photoGroup2 = [5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 43];
const photoGroup3 = [6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42];

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slidePicture: null,
      resize: false,
    }
  }

  componentDidMount() {
    setFullScreen(false);
    window.addEventListener('resize', () => this.resize());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.resize());
  }

  shouldComponentUpdate() {
    // any state update just do re-render
    return true;
  }

  getImage(src, idx) {
    return (
      <img
        key={`img${idx}`}
        src={src}
        alt="img"
        onClick={() => this.setState({ slidePicture: idx })}
      />);
  }

  showSlidePicture(pictureId) {
    setFullScreen(true);
    const doc = document.documentElement;
    const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const boxStyle = {
      position: 'absolute',
      top, left,
      background: 'rgba(0, 0, 0, 0.5)',
      height: '100%',
      width: '100%',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
    return (
      <div
        style={boxStyle}
        onClick={() => {
          this.setState({ slidePicture: null });
          setFullScreen(false);
        }}
      >
        <img src={`${workImgDir}${pictureId}.jpg`} alt="work" />
      </div>
    );
  }

  resize() {
    if (this.state.slidePicture !== null) {
      this.setState({ resize: true });
    }
  }

  render() {
    return (
      <div className="projects">
        <Nav />
        <div className="content">
          <div className="grid-col">
            <div className="grid-item">
              {this.getImage(heroPhoto1, '1')}
            </div>
            <div className="grid-item grid-row">
              <div className="grid-item">
                {photoGroup1.map(i => (
                  this.getImage(`${imgDir}${i}.jpg`, i)
                ))}
              </div>
              <div className="grid-item2 grid-col">
                <div className="grid-item">
                  {this.getImage(heroPhoto2, '3')}
                </div>
                <div className="grid-item grid-row">
                  <div className="grid-item">
                    {photoGroup2.map(i => (
                      this.getImage(`${imgDir}${i}.jpg`, i)
                    ))}
                  </div>
                  <div className="grid-item">
                    {photoGroup3.map(i => (
                      this.getImage(`${imgDir}${i}.jpg`, i)
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            Copyright © 2017, Grand Visionary Inc. All rights reserved.
          </div>
        </div>
        {this.state.slidePicture !== null &&
          this.showSlidePicture(this.state.slidePicture)}
      </div>
    );
  }
}
export default Projects;
