import React from 'react';
import Hero from './Hero';
import '../styles/About.css';
import one from '../images/1.png';
import two from '../images/2.png';
import three from '../images/3.png';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import setFullScreen from '../lib/setFullScreen';
import { Link } from 'react-router-dom';

const photo1 = '/preview/7.jpg';
const photo2 = '/preview/24.jpg';
const photo3 = '/preview/42.jpg';
const photo4 = '/preview/43.jpg';

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
            Grand Visualization is an experienced team of visualization artists
            specializing in architectural visualization for projects worldwide.
            We will utilize our expertise to help craft beautiful images and
            narratives for your design project.
            </p>
            <p>
            Our new office located in Downtown Los Angeles, allows us to provide
            in-person services for clients located in the Greater Los Angeles
            Area. We can dispatch our specialists to work onsite and revise at
            the final stage of the visualization project until your satisfaction.
            Also, we are willing to work with you via the Internet regardless of
            your location.
            </p>
            <p>
            We look forward to helping you create stunning visualizations that
            will reach and exceed your expectations.
            </p>
            <div className="flow">
              <div>
                <img src={one} alt="one" />
                <h3>Let us know your needs.</h3>
                <p>
                  Send us your documents of the unbuilt project, we will
                  evaluate the files and give you a quote as soon as possible.
                </p>
              </div>
              <div>
                <img src={two} alt="two" />
                <h3>3D Model Creation</h3>
                <p>
                  Upon your approval and 25% down payment, we start work into
                  it immediately. We will show you our draft views and make
                  adjustments when the 3D model is completed.
                </p>
              </div>
              <div>
                <img src={three} alt="three" />
                <h3>Optimization & Delivery</h3>
                <p>
                  We will be making changes until the drawings meet your
                  satisfaction. If you are in Greater Los Angeles area,
                  we can dispatch our specialist to work on site.
                  <br />
                  After receiving your remaining payment, high resolution
                  drawings will be delivered to you.
                </p>
              </div>
            </div>
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
          <img src={photo1} alt="photo1" />
          <img src={photo2} alt="photo2" />
          <img src={photo3} alt="photo3" />
          <img src={photo4} alt="photo4" />
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
