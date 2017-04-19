import React from 'react';
import setFullScreen from '../lib/setFullScreen';

const workNumber = 43;
const Projects = () => {
  setFullScreen(false);
  return (
    <div>
    {[...Array(workNumber).keys()].map(i => (
      <img src={`work/p${i + 1}.png`} role="presentation"></img>
    ))}
    </div>
  );
};
export default Projects;
