import img1 from '../img/footerBg.jpg';
import img2 from '../img/logoCorp.svg';
import img3 from '../img/Bitmap (6).png';
import img4 from '../img/Bitmap (7).png';
import img5 from '../img/Bitmap (8).png';

import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      
     
      <div className="footer-hero-container">
        <img src={img1} alt="Build Amazing" className="footer-big-img" />
        <div className="hero-overlay-content">
          <h2 className="hero-title">Want to build something amazing?</h2>
          <button className="get-in-touch-btn">GET IN TOUCH</button>
        </div>
      </div>

     
      <div className="newsletter-bar">
        <div className="footer-container flex-bar">
          <span className="newsletter-label">Newsletter Signup</span>
          <form className="newsletter-form">
            <input type="email" placeholder="test@youremail.com" className="news-input" />
            <button type="submit" className="signup-btn">SIGNUP</button>
          </form>
        </div>
      </div>

     
      <div className="footer-content-dark">
        <div className="footer-container footer-grid">
          
          <div className="footer-col">
            <h4 className="footer-head">COMPANY</h4>
            <div className="footer-logo-wrapper">
              <img src={img2} alt="Konstruct" className="footer-logo-img" />
            </div>
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-head">LINKS</h4>
            <div className="links-wrapper">
              <div className="links-sub-col">
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">SERVICES</a>
                <a href="#">PROJECTS</a>
                <a href="#">CONTACT US</a>
              </div>
              <div className="links-sub-col">
                <a href="#">FAQ</a>
                <a href="#">TERMS</a>
                <a href="#">CAREERS</a>
              </div>
              <div className="links-sub-col">
                <a href="#">BLOG</a>
                <a href="#">PARTNERS</a>
                <a href="#">NEWS</a>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-head">CONTACT US</h4>
            <div className="contact-details">
              <p>213 Baker Street, Oriel City Kounty, 7000 KNW, Kountry Name</p>
              <p>+23 994 233 4022</p>
              <p className="blue-link">info@konstruct.com</p>
            </div>
            
            <div className="social-icons-row">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src={img3} alt="Facebook" className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src={img4} alt="Twitter" className="social-icon" />
              </a>
              <a href="https://google.com" target="_blank" rel="noreferrer">
                <img src={img5} alt="Google Plus" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

     
      <div className="footer-bottom-line">
        <div className="footer-container">
          <p>© 2017 Konstruct Inc. Designed by Jane Kathryn Teo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;