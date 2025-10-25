import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About DocBook</h2>
          <p>
            We're revolutionizing healthcare by making quality medical care accessible, 
            convenient, and reliable for everyone.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <div className="card-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                To bridge the gap between patients and healthcare providers by offering 
                a seamless, user-friendly platform that makes booking medical appointments 
                as simple as ordering food online.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>
                To become the leading healthcare technology platform that transforms 
                how people access medical care, making quality healthcare available 
                to everyone, everywhere.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Our Values</h3>
              <p>
                We believe in transparency, reliability, and putting patients first. 
                Our platform is built on trust, innovation, and a commitment to 
                improving healthcare outcomes.
              </p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Happy Patients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Expert Doctors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h3>Meet Our Team</h3>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <i className="fas fa-user-md"></i>
              </div>
              <h4>Dr. Sarah Johnson</h4>
              <p className="member-role">Chief Medical Officer</p>
              <p className="member-bio">
                Board-certified physician with 15+ years of experience in 
                internal medicine and healthcare technology.
              </p>
            </div>

            <div className="team-member">
              <div className="member-photo">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h4>Michael Chen</h4>
              <p className="member-role">Chief Technology Officer</p>
              <p className="member-bio">
                Technology visionary with expertise in healthcare systems 
                and patient management platforms.
              </p>
            </div>

            <div className="team-member">
              <div className="member-photo">
                <i className="fas fa-chart-line"></i>
              </div>
              <h4>Emily Rodriguez</h4>
              <p className="member-role">Head of Operations</p>
              <p className="member-bio">
                Operations expert focused on improving patient experience 
                and streamlining healthcare processes.
              </p>
            </div>
          </div>
        </div>

        <div className="why-choose-us">
          <h3>Why Choose DocBook?</h3>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h4>Instant Booking</h4>
              <p>Book appointments in seconds with our intuitive interface</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Secure & Private</h4>
              <p>Your health data is protected with enterprise-grade security</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h4>Mobile First</h4>
              <p>Access healthcare on any device, anywhere, anytime</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h4>Expert Doctors</h4>
              <p>Connect with verified, experienced healthcare professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
