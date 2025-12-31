import React from 'react';
import { testimonialsData } from '../data/Data.js';

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="testimonial-title">
          Our Happy Clients
        </h2>

        <div className="testimonial-grid">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <p className="testimonial-feedback">
                  {testimonial.feedback}
                </p>
              </div>
              
              <div className="testimonial-name">
                {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;