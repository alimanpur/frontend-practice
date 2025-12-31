import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import backgroundImage from '../assets/2e9d962f4c269f57807850115899b4611a2bf3ba.jpg';
import ContentSection from '../components/ContentSection';
import FeaturesSection from '../components/FeaturesSection';
import FormSection from '../components/FormSection';
import TestimonialSection from '../components/TestimonialSection';
import CallToActionSection from '../components/CallToActionSection';
import ShowcaseSection from '../components/ShowcaseSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [buttonHover, setButtonHover] = useState(false);
  const location = useLocation();

  const slides = [
    {
      subtitle: "Startup 3",
      title: "Forget About Code",
      description: "Startup Framework gives you complete freedom over your creative process — you don't have to think about any technical aspects. There are no limits and absolutely no coding."
    },
    {
      subtitle: "Design 4",
      title: "Focus on Creativity",
      description: "Our platform empowers designers and developers to create stunning websites without worrying about technical complexities. Just focus on your creative vision."
    },
    {
      subtitle: "Build 5",
      title: "Launch Faster",
      description: "Speed up your development process with our intuitive tools and pre-built components. Get your projects live in record time with professional results."
    },
    {
      subtitle: "Scale 6",
      title: "Grow Your Business",
      description: "Built for scalability and performance. Our framework grows with your business needs, ensuring your website performs flawlessly at any scale."
    },
    {
      subtitle: "Success 7",
      title: "Achieve More",
      description: "Join thousands of successful businesses who have transformed their online presence. Take your digital strategy to the next level with our proven solutions."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
      {/* Hero Section */}
      <div 
        id="hero"
        style={{
          height: '100vh',
          backgroundImage: `linear-gradient(rgba(47, 24, 147, 0.8), rgba(47, 24, 147, 0.6)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          color: 'white',
          paddingTop: '80px'
        }}
      >
        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          style={{ position: 'absolute', left: '40px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.6)', fontSize: '40px', cursor: 'pointer', zIndex: 10 }}
        >
          ‹
        </button>
        <button 
          onClick={nextSlide}
          style={{ position: 'absolute', right: '40px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.6)', fontSize: '40px', cursor: 'pointer', zIndex: 10 }}
        >
          ›
        </button>

        {/* Main content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px' }}>
          <div style={{ marginBottom: '30px' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '18px', fontWeight: '400', letterSpacing: '0.5px' }}>
              {slides[currentSlide].subtitle}
            </span>
          </div>
          
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: '700', marginBottom: '40px', maxWidth: '900px', lineHeight: '1.1', color: 'white' }}>
            {slides[currentSlide].title}
          </h1>
          
          <p style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '650px', marginBottom: '60px', lineHeight: '1.6', fontWeight: '300' }}>
            {slides[currentSlide].description}
          </p>
          
          {/* Pagination dots */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '60px', alignItems: 'center' }}>
            {slides.map((_, index) => (
              <div 
                key={index}
                onClick={() => goToSlide(index)}
                style={{ 
                  width: currentSlide === index ? '10px' : '8px', 
                  height: currentSlide === index ? '10px' : '8px', 
                  backgroundColor: currentSlide === index ? 'white' : 'rgba(255, 255, 255, 0.4)', 
                  borderRadius: '50%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              ></div>
            ))}
          </div>
          
          <button 
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
            style={{ 
              backgroundColor: buttonHover ? '#3730A3' : '#4F46E5', 
              color: 'white', 
              padding: '16px 32px', 
              borderRadius: '30px', 
              border: 'none', 
              fontSize: '16px', 
              fontWeight: '600', 
              cursor: 'pointer', 
              boxShadow: buttonHover ? '0 6px 25px rgba(79, 70, 229, 0.4)' : '0 4px 20px rgba(79, 70, 229, 0.3)',
              transform: buttonHover ? 'translateY(-2px)' : 'translateY(0)',
              transition: 'all 0.3s ease'
            }}
          >
            Create an Account
          </button>
        </div>
      </div>

      {/* Content Section */}
      <ContentSection />
      
      {/* Features Section */}
      <FeaturesSection />

      {/* Form Section */}
            <FormSection />

      {/*Testimonial Section*/ }
            <TestimonialSection/>

      {/* Call to Action Section */}
      <CallToActionSection />

      {/* Showcase Section */}
      <ShowcaseSection />

      {/*Teams Section*/ }
      <TeamSection/>

      {/*Contact Section*/}
      <ContactSection/>

      {/*Pricing Section*/}
      <PricingSection/>

      {/*Footer*/}
      <Footer/>

    </div>
  );
};

export default Home;