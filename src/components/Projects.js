import React from 'react';
import '../styles/Proects.css';
import { Nav } from './LogoNav';
import setFullScreen from '../lib/setFullScreen';

const heroPhoto1 = 'work/p1.png';
const heroPhoto2 = 'work/p3.png';
const photoGroup1 = [2, 4, 8, 11, 14, 17, 20, 23, 25, 30, 33, 36, 39, 42];
const photoGroup2 = [5, 9, 12, 15, 18, 21, 24, 26, 28, 31, 34, 37, 40, 43];
const photoGroup3 = [6, 7, 10, 13, 16, 19, 22, 27, 29, 32, 35, 38, 41];
const Projects = () => {
  setFullScreen(false);
  return (
    <div className="projects">
      <Nav />
      <div className="content grid-col">
        <div className="grid-item">
          <img src={heroPhoto1} role="presentation"></img>
        </div>
        <div className="grid-item grid-row">
          <div className="grid-item">
            {photoGroup1.map(i => (
              <img src={`work/p${i}.png`} role="presentation"></img>
            ))}
          </div>
          <div className="grid-item2 grid-col">
            <div className="grid-item">
              <img src={heroPhoto2} role="presentation"></img>
            </div>
            <div className="grid-item grid-row">
              <div className="grid-item">
                {photoGroup2.map(i => (
                  <img src={`work/p${i}.png`} role="presentation"></img>
                ))}
              </div>
              <div className="grid-item">
                {photoGroup3.map(i => (
                  <img src={`work/p${i}.png`} role="presentation"></img>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
