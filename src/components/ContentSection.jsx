import React from 'react';
import backgroundImage from '../assets/495a76abfa6125a690a426b8fcb3bbfd55392e02.jpg';
const ContentSection = () => {
  return (
    <div 
      style={{
        height: '100vh',
        backgroundImage: `linear-gradient(rgba(47, 24, 147, 0.8), rgba(47, 24, 147, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 20px',
        color: 'white'
      }}
    >
      <div style={{ marginBottom: '30px' }}>
        <span style={{ 
          color: 'rgba(255, 255, 255, 0.8)', 
          fontSize: '14px', 
          fontWeight: '500', 
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          FREE SAMPLE
        </span>
      </div>
      
      <h2 style={{ 
        fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
        fontWeight: '700', 
        marginBottom: '40px', 
        maxWidth: '800px', 
        lineHeight: '1.2'
      }}>
        Powerful Generator and Free Figma Sources
      </h2>
      
      <p style={{ 
        fontSize: '18px', 
        color: 'rgba(255, 255, 255, 0.9)', 
        maxWidth: '700px', 
        lineHeight: '1.6', 
        fontWeight: '300'
      }}>
        Startup Framework contains components and complex blocks which can easily be integrated into almost any design. All of the components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions.
      </p>
    </div>
  );
};

export default ContentSection;