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
import fb from '../images/facebook.svg';
import ig from '../images/instagram.svg';
import be from '../images/be.svg';
import choose1 from '../images/choose1.png';
import choose2 from '../images/choose2.png';
import choose3 from '../images/choose3.png';
import choose4 from '../images/choose4.png';
import choose5 from '../images/choose5.png';
import choose6 from '../images/choose6.png';
import how1 from '../images/how1.jpg';
import how2 from '../images/how2.jpg';
import how3 from '../images/how3.jpg';
import { Link } from 'react-router-dom';
import { source } from '../source';

const photo1 = `${source}/preview/7.jpg`;
const photo2 = `${source}/preview/24.jpg`;
const photo3 = `${source}/preview/42.jpg`;
const photo4 = `${source}/preview/43.jpg`;

const About = () => {
  setFullScreen(false);
  return (
    <div className="about">
      <Hero />
      <div className="content">
        <div className="panel">
          <div className="panel-body">
            <p><strong>
            Grand Visualization has a talented team of architectural rendering
            specialists with over 8 years of combined experience. We pride
            ourselves in consistently providing highest quality architectural
            rendering services at competitive prices. Being founded by architects,
            our expertise lies in being able to effectively communicate
            architectural design to whomever it may be. We believe that the
            core of design lies in articulating a cohesive narrative to a
            larger audience.
            </strong></p>
            <p><strong>
            We are willing to work with you via the Internet regardless of
            your location.  Also, allow us to provide in-person services for
            clients located in the Greater Los Angeles Area. We look forward
            to helping you create stunning visualizations that will reach and
            exceed your expectations.
            </strong></p>
          </div>
        </div>
        <div className="panel">
          <div className="panel-title">How we work</div>
          <div className="flow">
            <div>
              <img className="flow-big" src={how1} />
              <div className="text-block">
                <img className="flow-small" src={one} alt="one" />
                <h3>Let us know your needs.</h3>
                <p>
                  Send us your documents of the unbuilt project,
                  we will evaluate the files then give you a quote as soon as
                  possible and the consultation is free.
                </p>
              </div>
            </div>
            <div>
              <img className="flow-big" src={how2} />
              <div className="text-block">
                <img className="flow-small" src={two} alt="two" />
                <h3>3D Model Creation</h3>
                <p>
                  Upon your approval, our team will begin working immediately
                  on 3d model creation. We will work with you and devise a
                  customized timeline to ensure the model is completed to
                  custmer satisfaction.
                </p>
              </div>
            </div>
            <div>
              <img className="flow-big" src={how3} />
              <div className="text-block">
                <img className="flow-small" src={three} alt="three" />
                <h3>Optimization & Delivery</h3>
                <p>
                  We will be making changes until the drawings meet your satisfaction.
                  After receiving your payment, high resolution drawings will
                  be delivered to you.
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
        <div className="panel choose">
          <div className="panel-title">Why choose us</div>
          <div className="panel-body">
            <div className="flow">
              <div>
                <div className="flow-small">
                  <img src={choose1} alt="one" />
                </div>
                <h3>Opportunity to Streamline your Business</h3>
                <p>
                  We provide services that lower operational and labor costs for
                  your company. By working with us, you will leverage a global knowledge base.
                  In addition, you will not have to spend time and money hiring
                  architects for renderings. Instead, you can focus on core business
                  processes by delegating. Let us take care of the rest.
                </p>
              </div>
              <div>
                <div className="flow-small">
                  <img src={choose2} alt="two" />
                </div>
                <h3>All-Around Professionalism</h3>
                <p>
                  Our team is well experienced with both larger and smaller scale
                  projects. With graceful teamwork and coordination, we bring together
                  diverse artists from the architecture design field to do the best
                  work possible.
                </p>
              </div>
              <div>
                <div className="flow-small">
                  <img src={choose3} alt="three" />
                </div>
                <h3>Competitive Price</h3>
                <p>
                  Our company has very competitive pricing, especially for a
                  Los Angeles based firm. We take pride in consistently providing
                  our clients with highest quality architectural rendering
                  services at fair prices.
                </p>
              </div>
            </div>
            <div className="flow">
              <div>
                <div className="flow-small">
                  <img src={choose4} alt="four" />
                </div>
                <h3>Flexibility</h3>
                <p>
                  With design projects, we completely understand the importance
                  of time. We know that rendering production time frame can be very
                  critical, which is why we offer flexible time plans based on
                  your needs, regardless of the workload of the project.
                </p>
              </div>
              <div>
                <div className="flow-small">
                  <img src={choose5} alt="five" />
                </div>
                <h3>Efficient Communication</h3>
                <p>
                  We make it easy for you to communicate with us.
                  Since our artists come from architectural backgrounds,
                  they can convey your ideas and technical drawings to
                  visual art pieces precisely and efficiently. No more wasted
                  time due to cultural and/or time differences.
                </p>
              </div>
              <div>
                <div className="flow-small">
                  <img src={choose6} alt="six" />
                </div>
                <h3>Long Term Options</h3>
                <p>
                  If you are interested in long term cooperation with Grand
                  Visualization, we offer custom-made business plans to generate
                  the workflow that works just right for you.
                </p>
              </div>
            </div>
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
          <div>
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
          Copyright © 2017, Grand Visionary Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};


export default About;
