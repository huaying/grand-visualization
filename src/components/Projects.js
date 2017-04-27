import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/Proects.css';
import { Nav } from './LogoNav';
import { CSSTransitionGroup } from 'react-transition-group';
import setFullScreen from '../lib/setFullScreen';

const imgDir = 'preview/';
const workImgDir = 'https://grand-visualization-images.herokuapp.com/';
const heroPhoto1 = `${imgDir}1.jpg`;
const heroPhoto2 = `${imgDir}3.jpg`;
const photoGroup1 = [2, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40];
const photoGroup2 = [5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 43];
const photoGroup3 = [6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slidePicture: null,
      resize: false,
    };
  }

  componentDidMount() {
    setFullScreen(false);
    window.addEventListener('resize', () => this.resize());
  }

  shouldComponentUpdate() {
    // any state update just do re-render
    return true;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.resize());
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

  tuneSize() {
    const imageDom = ReactDOM.findDOMNode(this.refs.picture);
    const imageRatio = imageDom.naturalWidth / imageDom.naturalHeight;
    const windowRatio = window.innerWidth / window.innerHeight;
    // console.log(imageDom.naturalWidth, imageDom.naturalHeight,
    // window.innerWidth, window.innerHeight)
    // console.log(imageRatio, windowRatio)
    if (windowRatio < imageRatio) {
      imageDom.style.width = '80%';
      imageDom.style.height = 'auto';
    } else {
      imageDom.style.width = 'auto';
      imageDom.style.height = '80%';
    }
    imageDom.style.transition = 'opacity 0.5s ease-out';
    imageDom.style.opacity = '1';
  }

  showSlidePicture(pictureId) {
    setFullScreen(true);
    const doc = document.documentElement;
    const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const boxStyle = {
      position: 'absolute',
      top, left,
      background: 'rgba(0, 0, 0, 0.7)',
      height: window.innerHeight,
      width: '100%',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
    };
    const imgStyle = {
      background: 'white',
      padding: '15px',
      opacity: '0',
    };

    return (
      <div
        style={boxStyle}
        onClick={() => {
          this.setState({ slidePicture: null });
          setFullScreen(false);
        }}
      >
        <img
          ref="picture"
          style={imgStyle}
          src={`${workImgDir}${pictureId}.jpg`}
          onLoad={() => this.tuneSize()}
          alt="work"
        />
      </div>
    );
  }

  resize() {
    if (this.state.slidePicture !== null) {
      this.setState({ resize: true });
      this.tuneSize();
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
        <CSSTransitionGroup
          component="div"
          transitionName="fade"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
        {this.state.slidePicture !== null &&
          this.showSlidePicture(this.state.slidePicture)}
        </CSSTransitionGroup>
      </div>
    );
  }
}
export default Projects;
