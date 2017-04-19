import React from 'react';
import Hero from './Hero';
import '../styles/About.css';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import setFullScreen from '../lib/setFullScreen';
import { Link } from 'react-router-dom';

const photo1 = '/work/p8.png';
const photo2 = '/work/p22.png';
const photo3 = '/work/p41.png';
const photo4 = '/work/p43.png';

const About = () => {
  setFullScreen(false);
  return (
    <div className="about">
      <Hero />
      <div className="content">
        <div className="quote">
          “Photorealistic architectural visualization expert you can trust.”
        </div>
        <div className="panel">
          <div className="panel-title">How we work</div>
          <div className="panel-body">
            <p>
            Grand Visualization is a professional team with the experience of
            completing unbuilt visualization projects worldwide. We can utilize
            our expertise to help present your design project with a beautiful
            narrative approach.
            </p>
            <p>
            Our new office locates in Downtown Los Angeles.
            We can provide in person services if your location is in the Greater
            Los Angeles Area. We can dispatch our specialists to work onsite and
            revise at the final stage of the visualization project until your
            satisfaction. Also, we are willing to work with you via the Internet
            regardless of your location.
            </p>
            <p>
            Our goal is to implement your design to a stunning visualization
            until reaching or exceeding your expected result.
            </p>
          </div>
        </div>
        <div className="panel">
          <div className="panel-title">What we do</div>
          <div className="panel-body">
            <p>
            We provide various types of design-related still image creation
            services regardless of the scale of the design and the urgency of
            the project. Our range of service includes:
            </p>
            <div className="icon_group">
              <img src={icon1} alt="icon1" />
              <img src={icon2} alt="icon2" />
              <img src={icon3} alt="icon3" />
              <img src={icon4} alt="icon4" />
            </div>
            <ul>
              <li>-Architecture (interior/exterior/3D Floorplans)</li>
              <li>-Landscape Architecture</li>
              <li>-Urban Design</li>
              <li>-Real Estate</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="image-group">
          <img src={photo1} role="presentation" />
          <img src={photo2} role="presentation" />
          <img src={photo3} role="presentation" />
          <img src={photo4} role="presentation" />
        </div>
        <div className="more">
          <Link to="/projects">see more >></Link>
        </div>
        <div className="copyright">
          Copyright © 2017, Grand Visionary Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};


export default About;
