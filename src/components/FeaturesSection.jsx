import React, { useState } from 'react';
import { featuresData } from '../data/Data.js';
import featuresBackground from '../assets/cd8798ea9e781bdf0627ed8d9186867e7b1d6a53.jpg';
import macbookImage from '../assets/Untitled design (1).png';

const FeaturesSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  return (
    <section id="features-section" className="features-wrapper">
      <div 
        className="features-bg-container"
        style={{ '--features-bg': `url(${featuresBackground})` }}
      >
        {/* MacBook Image Wrapper */}
        <div className="macbook-wrapper">
          <img src={macbookImage} alt="MacBook Pro" className="macbook-img" />
        </div>

        {/* Content Container */}
        <div className="features-content-container">
          <div className="features-text-block">
            <h2 className="features-main-title">
              {featuresData[currentFeature].title}
            </h2>

            <p className="features-main-description">
              {featuresData[currentFeature].description}
            </p>

            {/* Feature Grid/Cards */}
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                </div>
                <h4 className="feature-card-title">{featuresData[currentFeature].leftTitle}</h4>
                <p className="feature-card-desc">{featuresData[currentFeature].leftDescription}</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M6 3h12l4 6-10 12L2 9l4-6z"/>
                    <path d="M11 3L8 9l4 12 4-12-3-6"/>
                    <path d="M2 9h20"/>
                  </svg>
                </div>
                <h4 className="feature-card-title">{featuresData[currentFeature].rightTitle}</h4>
                <p className="feature-card-desc">{featuresData[currentFeature].rightDescription}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Pagination */}
        <div className="features-pagination">
          {featuresData.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentFeature(index)}
              className={`feat-dot ${currentFeature === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;