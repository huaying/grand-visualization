import React from 'react';
import '../styles/Proects.css';
import { Nav } from './LogoNav';
import setFullScreen from '../lib/setFullScreen';

const imgDir = 'preview/';
const heroPhoto1 = `${imgDir}1.jpg`;
const heroPhoto2 = `${imgDir}3.jpg`;
const photoGroup1 = [2, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40];
const photoGroup2 = [5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 43];
const photoGroup3 = [6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42];
const Projects = () => {
  setFullScreen(false);
  return (
    <div className="projects">
      <Nav />
      <div className="content">
        <div className="grid-col">
          <div className="grid-item">
            <img src={heroPhoto1} alt="hero1"></img>
          </div>
          <div className="grid-item grid-row">
            <div className="grid-item">
              {photoGroup1.map(i => (
                <img src={`${imgDir}${i}.jpg`} alt="group1"></img>
              ))}
            </div>
            <div className="grid-item2 grid-col">
              <div className="grid-item">
                <img src={heroPhoto2} alt="hero2" />
              </div>
              <div className="grid-item grid-row">
                <div className="grid-item">
                  {photoGroup2.map(i => (
                    <img src={`${imgDir}${i}.jpg`} alt="group2"></img>
                  ))}
                </div>
                <div className="grid-item">
                  {photoGroup3.map(i => (
                    <img src={`${imgDir}${i}.jpg`} alt="group3"></img>
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
    </div>
  );
};
export default Projects;
