import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <i className="fas fa-heartbeat"></i>
              <span>DocBook</span>
            </div>
            <p>
              Your trusted partner in healthcare. Book appointments with ease 
              and get the medical care you deserve.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#doctors">Doctors</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p><i className="fas fa-phone"></i> +91 98765 43210</p>
              <p><i className="fas fa-envelope"></i> info@docbook.com</p>
              <p><i className="fas fa-map-marker-alt"></i> 123 Healthcare St, Medical City</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 DocBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
