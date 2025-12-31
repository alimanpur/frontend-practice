import React from 'react';
import { portfolioItems } from '../data/Data.js';

const ShowcaseSection = () => {
  return (
    <section className="showcase-section">
      <div className="showcase-container">
        {/* Header Section */}
        <div className="showcase-header">
          <h2 className="showcase-title">
            Last Work
          </h2>
          
          <button className="view-all-btn">
            View All Works
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-img-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="portfolio-img"
                />
              </div>
              
              <div className="portfolio-info">
                <h5 className="portfolio-item-title">
                  {item.title}
                </h5>
                <p className="portfolio-item-desc">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;