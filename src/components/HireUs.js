import React from 'react';
import Hero from './Hero';
import '../styles/HireUs.css';
import setFullScreen from '../lib/setFullScreen';

const HireUs = () => {
  setFullScreen(false);
  return (
    <div className="hire-us">
      <Hero />
      <div className="content">
        <div className="panel">
          <div className="panel-title">Contact Us</div>
          <div className="panel-body">
            <p>
            Do not hesitate to contact us for any inquiries,
            we will reach back to you as soon as possible.
            </p>
            <div className="contact-info">
              <div className="row">
                <h3 className="col right">Phone</h3>
                <span className="col left">+1 8188356623</span>
              </div>
              <div className="row">
                <h3 className="col right">Email</h3>
                <span className="col left">
                  <a href="mailto:sug@grandvisualization.com" rel="nofollow">
                    sug@grandvisualization.com
                  </a>
                </span>
              </div>
              <div className="row">
                <h3 className="col right">Address</h3>
                <span className="col left">
                  420E 3rd Street, Suite 1050. <br />
                  Los Angeles, California 90013, U.S.A
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="google-maps">
          <iframe
            width="720"
            height="450"
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAjc1VIVNngxBdpjp3RZ25poJn7VPNNZo0
              &q=420E+3rd+Street,+Suite+1050,+Los+Angeles,+CA+90013
              &zoom=13"
          />
        </div>
        <div className="copyright">
          Copyright © 2017, Grand Visionary Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};


export default HireUs;
