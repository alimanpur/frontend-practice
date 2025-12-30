import React, { useState, useEffect } from 'react';
import featuresBackground from '../assets/cd8798ea9e781bdf0627ed8d9186867e7b1d6a53.jpg';
import macbookImage from '../assets/Untitled design (1).png';
import FormSection from './FormSection';

const FeaturesSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  const features = [
    {
      title: "Revolutionary Design System",
      description: "Transform your development workflow with our cutting-edge design system that empowers teams to build stunning interfaces faster than ever before.",
      leftTitle: "50+ PREMIUM COMPONENTS",
      leftDescription: "Pre-built, customizable components that integrate seamlessly with your existing workflow and design standards.",
      rightTitle: "LIGHTNING FAST SETUP",
      rightDescription: "Get up and running in minutes with our streamlined installation process and comprehensive documentation."
    },
    {
      title: "Advanced Development Tools",
      description: "Leverage powerful development tools and frameworks designed to accelerate your coding process and enhance productivity across all platforms.",
      leftTitle: "INTELLIGENT CODE GENERATION",
      leftDescription: "AI-powered code suggestions and auto-completion that understands your project context and coding patterns.",
      rightTitle: "REAL-TIME COLLABORATION",
      rightDescription: "Work seamlessly with your team through live editing, instant feedback, and synchronized development environments."
    },
    {
      title: "Enterprise-Grade Security",
      description: "Built with security-first principles, our platform provides enterprise-level protection while maintaining optimal performance and user experience.",
      leftTitle: "ADVANCED ENCRYPTION",
      leftDescription: "Military-grade encryption protocols protect your data and ensure complete privacy across all communications.",
      rightTitle: "COMPLIANCE READY",
      rightDescription: "Meet industry standards with built-in GDPR, HIPAA, and SOC 2 compliance features and automated reporting."
    },
    {
      title: "Scalable Cloud Infrastructure",
      description: "Deploy with confidence on our globally distributed cloud infrastructure that automatically scales to meet your growing business demands.",
      leftTitle: "99.9% UPTIME GUARANTEE",
      leftDescription: "Reliable infrastructure with redundant systems and automatic failover to ensure your applications stay online.",
      rightTitle: "GLOBAL CDN NETWORK",
      rightDescription: "Lightning-fast content delivery through our worldwide network of edge servers and optimized caching systems."
    },
    {
      title: "AI-Powered Analytics",
      description: "Harness the power of artificial intelligence to gain deep insights into user behavior, performance metrics, and business growth opportunities.",
      leftTitle: "PREDICTIVE INSIGHTS",
      leftDescription: "Advanced machine learning algorithms that predict user trends and recommend optimization strategies for maximum impact.",
      rightTitle: "REAL-TIME DASHBOARDS",
      rightDescription: "Interactive dashboards with live data visualization and customizable reports for instant decision-making capabilities."
    },
    {
      title: "Seamless Integration Hub",
      description: "Connect effortlessly with over 1000+ third-party services and APIs through our comprehensive integration platform and automation tools.",
      leftTitle: "1000+ API CONNECTIONS",
      leftDescription: "Pre-built connectors for popular services including Slack, Salesforce, Google Workspace, and hundreds more platforms.",
      rightTitle: "NO-CODE AUTOMATION",
      rightDescription: "Create complex workflows and automations without writing a single line of code using our visual workflow builder."
    }
  ];

  useEffect(() => {
    let scrollTimeout;
    const handleWheel = (e) => {
      const featuresElement = document.getElementById('features-section');
      if (featuresElement) {
        const rect = featuresElement.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom > 0) {
          e.preventDefault();
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            if (e.deltaY > 0 && currentFeature < features.length - 1) {
              setCurrentFeature(prev => prev + 1);
            } else if (e.deltaY < 0 && currentFeature > 0) {
              setCurrentFeature(prev => prev - 1);
            }
          }, 100);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [currentFeature, features.length]);

  return (
    <div 
      id="features-section"
      style={{
        height: '100vh',
        position: 'relative'
      }}
    >
        <div style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          backgroundImage: `linear-gradient(rgba(47, 24, 147, 0.7), rgba(47, 24, 147, 0.5)), url(${featuresBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          padding: '0 0',
          overflow: 'hidden',
          zIndex: 1
        }}>
        {/* MacBook Pro with Screen - Half Visible */}
        <div style={{
          position: 'absolute',
          left: '-575px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '1150px',
          height: 'auto',
          overflow: 'hidden'
        }}>
          <img 
            src={macbookImage} 
            alt="MacBook Pro"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Content Container with Vertical Animation */}
        <div style={{
          position: 'absolute',
          left: '600px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '900px',
          paddingLeft: '40px',
          height: '100vh',
          overflow: 'hidden'
        }}>
          {/* All Features Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: `${features.length * 100}vh`,
            transform: `translateY(-${currentFeature * 100}vh)`,
            transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'left',
                flexShrink: 0
              }}>
                <h2 style={{
                  fontSize: '50px',
                  fontWeight: '700',
                  marginBottom: '30px',
                  lineHeight: '1.2',
                  color: 'white',
                  maxWidth: '900px'
                }}>
                  {feature.title}
                </h2>

                <p style={{
                  fontSize: '32px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '40px',
                  lineHeight: '32px',
                  maxWidth: '1200px'
                }}>
                  {feature.description}
                </p>

                {/* Feature Cards */}
                <div style={{
                  display: 'flex',
                  gap: '60px',
                  justifyContent: 'flex-start',
                  marginTop: '60px'
                }}>
                  <div style={{ textAlign: 'left', width: '320px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      marginBottom: '32px'
                    }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                      </svg>
                    </div>
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      letterSpacing: '1.2px',
                      marginBottom: '20px',
                      color: 'white',
                      textTransform: 'uppercase'
                    }}>
                      {feature.leftTitle}
                    </h4>
                    <p style={{
                      fontSize: '20px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: '1.6'
                    }}>
                      {feature.leftDescription}
                    </p>
                  </div>

                  <div style={{ textAlign: 'left', width: '320px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      marginBottom: '32px'
                    }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        <path d="M6 3h12l4 6-10 12L2 9l4-6z"/>
                        <path d="M11 3L8 9l4 12 4-12-3-6"/>
                        <path d="M2 9h20"/>
                      </svg>
                    </div>
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      letterSpacing: '1.2px',
                      marginBottom: '20px',
                      color: 'white',
                      textTransform: 'uppercase'
                    }}>
                      {feature.rightTitle}
                    </h4>
                    <p style={{
                      fontSize: '20px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: '1.6'
                    }}>
                      {feature.rightDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div style={{
          position: 'absolute',
          right: '80px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center'
        }}>
          {features.map((_, index) => (
            <div
              key={index}
              style={{
                width: currentFeature === index ? '12px' : '8px',
                height: currentFeature === index ? '12px' : '8px',
                backgroundColor: currentFeature === index ? 'white' : 'rgba(255, 255, 255, 0.4)',
                borderRadius: '50%',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: currentFeature === index ? 'scale(1.2)' : 'scale(1)',
                boxShadow: currentFeature === index ? '0 0 20px rgba(255, 255, 255, 0.5)' : 'none'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;