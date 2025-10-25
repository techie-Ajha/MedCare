import React from 'react';

const Hero = ({ onBookAppointment }) => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Your Health, Our Priority</h1>
          <p>
            Book appointments with trusted doctors instantly. Get expert medical 
            care when you need it most with our revolutionary booking system.
          </p>
          <div className="hero-buttons">
            <button className="cta-btn primary" onClick={onBookAppointment}>
              <i className="fas fa-calendar-plus"></i>
              Book Appointment
            </button>
            <a href="tel:+919876543210" className="cta-btn secondary">
              <i className="fas fa-phone"></i>
              Emergency Call
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="hero-main-image">
            <img 
              src="/book.png" 
              alt="Healthcare Appointment Booking" 
              className="hero-book-image"
            />
          </div>
          
          <div className="floating-card animate-float">
            <i className="fas fa-user-md"></i>
            <h3>24/7 Available</h3>
            <p>Expert doctors ready to help</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
