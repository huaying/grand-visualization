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
            Please do not hesitate to contact us for any inquiries,
            we will reach back to you as soon as possible with solutions
            that suit your needs.
            </p>
            <div className="contact-info">
              <div className="row">
                P: +1 818.835.6623
              </div>
              <div className="row">
                E: <a href="mailto:suh@grandvisualization.com" rel="nofollow">
                  suh@grandvisualization.com
                </a>
              </div>
              <div className="row">
                A: 420 E. 3rd. Street, Suite 1015, Los Angeles, CA 90013
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
              &q=420E+3rd+Street,+Suite+1015,+Los+Angeles,+CA+90013
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
