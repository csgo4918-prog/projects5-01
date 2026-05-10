
import img1 from '../img/service1.svg';
import img2 from '../img/service2.svg';
import img3 from '../img/service3.svg';


import React from 'react';
import '../App.css';



const Services = () => {
  return (
    <section className="capabilities-section">
      <div className="container">
        <div className="header-row">
          <div className="title-group">
            <h2 className="section-title">OUR CAPABILITIES</h2>
            <div className="title-underline"></div>
          </div>
          <p className="header-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
          </p>
          <button className="all-services-btn">ALL SERVICES</button>
        </div>

        <div className="services-grid">
          
        
          <div className="service-card">
            <div className="icon-placeholder">
              <img src={img1} alt="Management" /> 
            </div>
            <h3 className="service-card-title">PROJECT AND CONSTRUCTION MANAGEMENT</h3>
            <p className="service-card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
            </p>
          </div>

         
          <div className="service-card">
            <div className="icon-placeholder">
              <img src={img2} alt="Audit" />
            </div>
            <h3 className="service-card-title">STRUCTURE AUDIT AND MAINTENANCE</h3>
            <p className="service-card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
            </p>
          </div>

         
          <div className="service-card">
            <div className="icon-placeholder">
              <img src={img3} alt="Factory" />
            </div>
            <h3 className="service-card-title">FACTORY CONSTRUCTION AND MODELING</h3>
            <p className="service-card-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;