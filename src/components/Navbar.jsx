import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/Data.js';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaDribbble, FaBehance } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar-overlay ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Centered Content Group */}
        <div className="nav-content-wrapper">
          <div className="nav-links-main">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollToSection(link.id)}
                className="nav-item-link"
              >
                {link.name}
              </button>
            ))}
          </div>
          
          <div className="nav-social-divider"></div>

          <div className="nav-social-icons">
            <a href="#" className="nav-social-unit">
              <FaDribbble />
            </a>
            <a href="#" className="nav-social-unit">
              <FaBehance />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;