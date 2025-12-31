import React from 'react';
import { pricingPlans } from '../data/Data.js';
import pricingBackground from '../assets/c722e855deb2b6cea2cae4307bf9b64408da515d.jpg';

const PricingSection = () => {
  return (
    <section 
      id="pricing-section" 
      className="pricing-wrapper"
      style={{ '--pricing-bg': `url(${pricingBackground})` }}
    >
      {/* Header */}
      <div className="pricing-header">
        <h2 className="pricing-main-title">Plans & Pricing</h2>
        <p className="pricing-main-desc">
          Startup Framework is free forever — you only pay for custom domain hosting or to export your site.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="pricing-card"
            style={{ 
              '--plan-color': plan.color, 
              '--plan-hover': plan.hoverColor 
            }}
          >
            <h3 className="plan-name">{plan.name}</h3>

            <div className="plan-price-container">
              <span className="plan-price">{plan.price}</span>
              <span className="plan-currency">$</span>
            </div>

            <div className="plan-features-list">
              {plan.features.map((feature, fIndex) => (
                <div
                  key={fIndex}
                  className={`feature-item ${feature.included ? 'included' : 'excluded'}`}
                >
                  <span className="feature-check">✓</span>
                  {feature.name}
                </div>
              ))}
            </div>

            <button className="plan-btn">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;