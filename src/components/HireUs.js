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
            <p>xxx.xxx.xxxx</p>
          </div>
        </div>
        <form className="contact-form">
          <div className="group">
            <div className="contact-name">
              <label>Name *</label>
              <input type="text" />
            </div>
            <div className="contact-company">
              <label>Company</label>
              <input type="text" />
            </div>
          </div>
          <div className="contact-email">
            <label>Email Address *</label>
            <input type="text" />
          </div>
          <div className="contact-message">
            <label>Message *</label>
            <textarea rows="20"></textarea>
          </div>
          <div className="submit">
            <button type="button">SUBMIT</button>
          </div>
        </form>
        <div className="google-maps">
          <iframe
            width="720"
            height="450"
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAjc1VIVNngxBdpjp3RZ25poJn7VPNNZo0
              &q=USC,LA&zoom=9"
          />
        </div>
        <div className="footer">
          Copyright © 2017, Grand Visionary Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};


export default HireUs;
