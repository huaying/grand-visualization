import React from 'react';
import '../styles/Proects.css';
import setFullScreen from '../lib/setFullScreen';

const workNumber = 5;
const Projects = () => {
  setFullScreen(false);
  return (
    <div className="projects">
      <div className="grid-col">
        <div className="grid-item">
          <img src="work/p1.png" role="presentation"></img>
        </div>
        <div className="grid-item grid-row">
          <div className="grid-item">
            {[...Array(workNumber).keys()].map(i => (
              <img src={`work/p${i + 2}.png`} role="presentation"></img>
            ))}
          </div>
          <div className="grid-item2 grid-col">
            <div className="grid-item">
              <img src="work/p3.png" role="presentation"></img>
            </div>
            <div className="grid-item grid-row">
              <div className="grid-item">
                {[...Array(workNumber).keys()].map(i => (
                  <img src={`work/p${i + 6}.png`} role="presentation"></img>
                ))}
              </div>
              <div className="grid-item">
                {[...Array(workNumber).keys()].map(i => (
                  <img src={`work/p${i + 11}.png`} role="presentation"></img>
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
