import React, { useState } from 'react';
import { heroSlides } from '../data/Data.js';
import backgroundImage from '../assets/2e9d962f4c269f57807850115899b4611a2bf3ba.jpg';

// Components
import Navbar from '../components/Navbar';
import ContentSection from '../components/ContentSection.jsx';
import FeaturesSection from '../components/FeaturesSection';
import FormSection from '../components/FormSection';
import TestimonialSection from '../components/TestimonialSection';
import CallToActionSection from '../components/CallToActionSection';
import ShowcaseSection from '../components/ShowcaseSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const HomeNew = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="home-wrapper">
      <Navbar />
      {/* Hero Section */}
      <section 
        id="hero" 
        className="hero-container"
        style={{ '--hero-bg': `url(${backgroundImage})` }}
      >
        {/* Navigation arrows */}
        <button onClick={prevSlide} className="nav-arrow left-arrow">‹</button>
        <button onClick={nextSlide} className="nav-arrow right-arrow">›</button>

        {/* Main content */}
        <div className="hero-content">
          <div className="subtitle-wrapper">
            <span className="hero-subtitle">
              {heroSlides[currentSlide]?.subtitle || 'Loading...'}
            </span>
          </div>
          
          <h1 className="hero-title">
            {heroSlides[currentSlide]?.title || 'Welcome'}
          </h1>
          
          <p className="hero-description">
            {heroSlides[currentSlide]?.description || 'Loading content...'}
          </p>
          
          {/* Pagination dots */}
          <div className="pagination-dots">
            {heroSlides.map((_, index) => (
              <div 
                key={index}
                onClick={() => goToSlide(index)}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
              />
            ))}
          </div>
          
          <button className="cta-button">
            Create an Account
          </button>
        </div>
      </section>

      {/* Other Sections */}
      <ContentSection />
      <FeaturesSection />
      <FormSection />
      <TestimonialSection />
      <CallToActionSection />
      <ShowcaseSection />
      <TeamSection />
      <ContactSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default HomeNew;