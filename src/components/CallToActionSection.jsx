import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import backgroundImage from '../assets/126976cf680db86b7d6d1e508870cf2887a79864.jpg';

const CallToActionSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/form');
  };

  return (
    <div style={{
      height: '605px',
      backgroundImage: `linear-gradient(rgba(47, 24, 147, 0.6), rgba(47, 24, 147, 0.4)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 20px',
      color: 'white'
    }}>
      <h1 style={{
        fontSize: '64px',
        fontWeight: '700',
        marginBottom: '40px',
        maxWidth: '800px',
        lineHeight: '1.2',
        color: 'white'
      }}>
        Easy to setup.<br/>
        Easy to maintain
      </h1>
      
      <p style={{
        fontSize: '20px',
        color: 'rgba(255, 255, 255, 0.9)',
        maxWidth: '600px',
        marginBottom: '60px',
        lineHeight: '1.6',
        fontWeight: '400'
      }}>
        Bootstrap is a widely-used, sleek, intuitive and powerful front-end framework for faster and easier web development.
      </p>
      
      <div style={{
        display: 'flex',
        gap: '30px',
        alignItems: 'center'
      }}>
        {/* Round Play Button */}
        <button
          style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            backgroundColor: '#ff4757',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 25px rgba(255, 71, 87, 0.3)',
            outline: 'none'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.backgroundColor = '#ff3742';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.backgroundColor = '#ff4757';
          }}
        >
          <FaPlay style={{ marginLeft: '3px' }} />
        </button>

        {/* Get Started Button */}
        <button
          onClick={handleGetStarted}
          style={{
            backgroundColor: '#00d4aa',
            color: 'white',
            padding: '18px 40px',
            borderRadius: '50px',
            border: 'none',
            fontSize: '18px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 25px rgba(0, 212, 170, 0.3)',
            outline: 'none'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.backgroundColor = '#00c299';
            e.target.style.boxShadow = '0 12px 35px rgba(0, 212, 170, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.backgroundColor = '#00d4aa';
            e.target.style.boxShadow = '0 8px 25px rgba(0, 212, 170, 0.3)';
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CallToActionSection;