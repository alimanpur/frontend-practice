import React, { useState } from 'react';
import pricingBackground from '../assets/c722e855deb2b6cea2cae4307bf9b64408da515d.jpg';

const PricingSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const pricingPlans = [
    {
      name: 'Starter',
      price: '9.99',
      features: [
        { name: '2 GB of space', included: true },
        { name: '14 days of backups', included: true },
        { name: 'Social integrations', included: true },
        { name: 'Client billing', included: true },
        { name: 'Remote access', included: false },
        { name: 'Custom domain', included: false },
        { name: '24 hours support', included: false },
        { name: 'Admin tools', included: false },
        { name: 'Collaboration tools', included: false },
        { name: 'User management', included: false }
      ],
      color: '#6366f1'
    },
    {
      name: 'Professional',
      price: '19.99',
      features: [
        { name: '2 GB of space', included: true },
        { name: '14 days of backups', included: true },
        { name: 'Social integrations', included: true },
        { name: 'Client billing', included: true },
        { name: 'Remote access', included: true },
        { name: 'Custom domain', included: true },
        { name: '24 hours support', included: true },
        { name: 'Admin tools', included: false },
        { name: 'Collaboration tools', included: false },
        { name: 'User management', included: false }
      ],
      color: '#e91e63'
    },
    {
      name: 'Team',
      price: '49.99',
      features: [
        { name: '2 GB of space', included: true },
        { name: '14 days of backups', included: true },
        { name: 'Social integrations', included: true },
        { name: 'Client billing', included: true },
        { name: 'Remote access', included: true },
        { name: 'Custom domain', included: true },
        { name: '24 hours support', included: true },
        { name: 'Admin tools', included: true },
        { name: 'Collaboration tools', included: true },
        { name: 'User management', included: true }
      ],
      color: '#10b981'
    }
  ];

  const getButtonColor = (planIndex) => {
    if (hoveredCard === planIndex) {
      if (hoveredButton === planIndex) {
        const colors = ['#4f46e5', '#c2185b', '#059669'];
        return colors[planIndex];
      }
      return pricingPlans[planIndex].color;
    }
    return 'rgba(255, 255, 255, 0.2)';
  };

  return (
    <div id="pricing-section" style={{
      minHeight: '1130px',
      position: 'relative',
      backgroundImage: `linear-gradient(rgba(47, 24, 147, 0.7), rgba(47, 24, 147, 0.5)), url(${pricingBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 20px',
      color: 'white'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '60px'
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '700',
          marginBottom: '20px',
          color: 'white'
        }}>
          Plans & Pricing
        </h2>
        <p style={{
          fontSize: '22px',
          color: 'rgba(255, 255, 255, 0.8)',
          maxWidth: '500px',
          lineHeight: '1.6'
        }}>
          Startup Framework is free forever — you only pay for custom domain hosting or to export your site.
        </p>
      </div>

      {/* Pricing Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '30px',
        maxWidth: '1200px',
        width: '100%'
      }}>
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => {
              setHoveredCard(null);
              setHoveredButton(null);
            }}
            style={{
              backgroundColor: 'transparent',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              padding: '40px 30px',
              textAlign: 'center',
              position: 'relative',
              transition: 'transform 0.3s ease',
              transform: hoveredCard === index ? 'translateY(-10px)' : 'translateY(0)'
            }}
          >
            {/* Plan Name */}
            <h3 style={{
              fontSize: '22px',
              fontWeight: '500',
              marginBottom: '20px',
              display: 'flex',
              alignContent:'left',
              justifyContent: 'left',
              color: 'white'
            }}>
              {plan.name}
            </h3>

            {/* Price */}
            <div style={{
              marginBottom: '40px'
            }}>
              <span style={{
                fontSize: '58px',
                fontWeight: '700',
                color: 'white'
              }}>
                {plan.price}
              </span>
              <span style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.7)',
                marginLeft: '5px'
              }}>
                $
              </span>
            </div>

            {/* Features */}
            <div style={{
              marginBottom: '40px',
              textAlign: 'left'
            }}>
              {plan.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    fontSize: '14px',
                    color: feature.included ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.5)'
                  }}
                >
                  <span style={{
                    color: feature.included ? '#00d4aa' : 'rgba(255, 255, 255, 0.3)',
                    marginRight: '10px',
                    fontSize: '12px'
                  }}>
                    ✓
                  </span>
                  {feature.name}
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              onMouseEnter={() => setHoveredButton(index)}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '16px',
                fontWeight: '600',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                backgroundColor: getButtonColor(index),
                color: 'white',
                transform: hoveredButton === index ? 'translateY(-2px)' : 'translateY(0)'
              }}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;