import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { ctaContent } from '../data/Data.js';
import backgroundImage from '../assets/126976cf680db86b7d6d1e508870cf2887a79864.jpg';

const CallToActionSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/form');
  };

  return (
    <section 
      className="cta-section-container"
      style={{ '--cta-bg': `url(${backgroundImage})` }}
    >
      <h1 className="cta-title">
        {ctaContent.title.split('. ').map((text, i) => (
          <React.Fragment key={i}>
            {text}{i === 0 ? '.' : ''}
            <br className="hidden md:block" />
          </React.Fragment>
        ))}
      </h1>
      
      <p className="cta-description">
        {ctaContent.description}
      </p>
      
      <div className="cta-button-group">
        {/* Round Play Button */}
        <button className="play-btn">
          <FaPlay className="ml-1" />
        </button>

        {/* Get Started Button */}
        <button onClick={handleGetStarted} className="get-started-btn">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;