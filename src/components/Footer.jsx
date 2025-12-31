import React from 'react';
import { FaTwitter, FaFacebook, FaGooglePlusG } from 'react-icons/fa';
import { footerLinks } from '../data/Data.js';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      {/* Top Section */}
      <div className="footer-top">
        {/* Logo */}
        <div className="footer-logo">Startup 3</div>

        {/* Legal and Socials */}
        <div className="footer-top-right">
          <div className="footer-legal-links">
            {footerLinks.legal.map((link, index) => (
              <a key={index} href={link.url} className="footer-link">
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="footer-social-icons">
            <a href="#" className="footer-social-link"><FaTwitter /></a>
            <a href="#" className="footer-social-link"><FaFacebook /></a>
            <a href="#" className="footer-social-link"><FaGooglePlusG /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        {/* Main Navigation */}
        <div className="footer-main-nav">
          {footerLinks.main.map((link, index) => (
            <a key={index} href={link.url} className="footer-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          © 2025 Designmodo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;