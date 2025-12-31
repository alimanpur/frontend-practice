import React from 'react';
import { contentData } from '../data/Data.js';
import backgroundImage from '../assets/495a76abfa6125a690a426b8fcb3bbfd55392e02.jpg';

const ContentSection = () => {
  return (
    <section 
      className="content-section-container"
      style={{ '--content-bg': `url(${backgroundImage})` }}
    >
      <div className="content-badge-wrapper">
        <span className="content-badge">
          {contentData.badge}
        </span>
      </div>
      
      <h2 className="content-heading">
        {contentData.title}
      </h2>
      
      <p className="content-description">
        {contentData.description}
      </p>
    </section>
  );
};

export default ContentSection;