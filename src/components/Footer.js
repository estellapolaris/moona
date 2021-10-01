import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import SocialFollow from "./SocialFollow"
function Footer() {
 
  return (
    <div className='footer-container'>
      <div className='footer-container'>
      <SocialFollow />
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
              <img src="images/cover.png" class="responsive"></img>
          </div>
        </div>
      </section>
      <medium class='website-rights'>© 2016 COVER Corp.</medium>
      <medium class='website-rights'>estella_polaris</medium>
    </div>
    </div>
  );
}

export default Footer;