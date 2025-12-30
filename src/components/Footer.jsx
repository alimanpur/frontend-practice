import React from 'react';
import { FaTwitter, FaFacebook, FaGooglePlusG } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#2F1893',
      color: 'white',
      padding: '40px 60px 30px 60px'
    }}>
      {/* Top Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        paddingBottom: '30px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        {/* Logo */}
        <div style={{
          fontSize: '24px',
          fontWeight: '600',
          color: 'white'
        }}>
          Startup 3
        </div>

        {/* Social Icons and Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px'
        }}>
          <a 
            href="#" 
            style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              textDecoration: 'none', 
              fontSize: '14px',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = 'white'}
            onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
          >
            Privacy Policy
          </a>
          <a 
            href="#" 
            style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              textDecoration: 'none', 
              fontSize: '14px',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = 'white'}
            onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
          >
            Terms
          </a>
          
          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '15px', marginLeft: '20px' }}>
            <a 
              href="#" 
              style={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                fontSize: '18px', 
                textDecoration: 'none',
                marginRight: '5px',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = 'white'}
              onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
            >
              <FaTwitter />
            </a>
            <a 
              href="#" 
              style={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                fontSize: '18px', 
                textDecoration: 'none',
                marginRight: '5px',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = 'white'}
              onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
            >
              <FaFacebook />
            </a>
            <a 
              href="#" 
              style={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                fontSize: '18px', 
                textDecoration: 'none',
                marginRight: '5px',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = 'white'}
              onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
            >
              <FaGooglePlusG />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          gap: '40px'
        }}>
          <a 
            href="#" 
            style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              textDecoration: 'none', 
              fontSize: '14px',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = 'white'}
            onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
          >
            Tour
          </a>
          <a 
            href="#" 
            style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              textDecoration: 'none', 
              fontSize: '14px',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = 'white'}
            onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
          >
            Features
          </a>
          <a 
            href="#" 
            style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              textDecoration: 'none', 
              fontSize: '14px',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = 'white'}
            onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
          >
            Pricing Plans
          </a>
          <a 
            href="#" 
            style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              textDecoration: 'none', 
              fontSize: '14px',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = 'white'}
            onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
          >
            Our Works
          </a>
          <a 
            href="#" 
            style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              textDecoration: 'none', 
              fontSize: '14px',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = 'white'}
            onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
          >
            Brands
          </a>
          <a 
            href="#" 
            style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              textDecoration: 'none', 
              fontSize: '14px',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = 'white'}
            onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
          >
            Contacts
          </a>
        </div>

        {/* Copyright */}
        <div style={{
          color: 'rgba(255, 255, 255, 0.5)',
          fontSize: '14px'
        }}>
          © 2025 Designmodo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;