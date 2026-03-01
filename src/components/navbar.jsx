import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={closeMenu}>
            <i className="fas fa-heartbeat"></i>
            DocBook
          </a>

          <div className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
            <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
            <a href="#services" className="nav-link" onClick={closeMenu}>Services</a>
            <a href="#doctors" className="nav-link" onClick={closeMenu}>Doctors</a>
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          </div>

          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
