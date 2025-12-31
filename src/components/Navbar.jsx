import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const scrollPosition = window.scrollY;
      
      if (heroSection) {
        setIsScrolled(scrollPosition > heroSection.offsetHeight - 100);
      }

      const sections = ['hero', 'features-section', 'pricing-section', 'contact-section'];
      const currentScrollPosition = scrollPosition + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= currentScrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    } else {
      setActiveSection('');
      setIsScrolled(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getNavLinkStyle = (section) => {
    const isActive = (location.pathname === '/' && activeSection === section);
    
    return {
      color: isActive ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: isActive ? '600' : '400',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    };
  };

  if (location.pathname !== '/' || isScrolled) {
    return null;
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 0',
      backgroundColor: 'rgba(47, 24, 147, 0.1)',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        <a onClick={() => scrollToSection('hero')} style={getNavLinkStyle('hero')}>Home</a>
        <a onClick={() => scrollToSection('features-section')} style={getNavLinkStyle('features-section')}>Features</a>
        <a onClick={() => scrollToSection('pricing-section')} style={getNavLinkStyle('pricing-section')}>Pricing</a>
        <a onClick={() => scrollToSection('contact-section')} style={getNavLinkStyle('contact-section')}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;