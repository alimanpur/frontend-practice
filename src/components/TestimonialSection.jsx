import React from 'react';

const TestimonialSection = () => {
  console.log('TestimonialSection rendering...');
  const testimonials = [
    {
      id: 1,
      name: "RAYHAN CURRAN",
      feedback: "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "KAYLEY FRAME",
      feedback: "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "GENE WHITFIELD",
      feedback: "The most important part of the Startup Framework is the samples",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "ALLAN KIM",
      feedback: "I've built my website with Startup just in one day, and it was ready-to-go.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <div style={{
      backgroundColor: '#2f1893',
      padding: '100px 120px',
      minHeight: '800px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: 'white',
          textAlign: 'left',
          marginBottom: '30px',
          fontFamily: 'Arial, sans-serif'
        }}>
          Our Happy Clients
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px'
        }}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '15px',
              padding: '40px',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: 'scale(1)',
              width:'500px',
              minHeight: '230px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.backgroundColor = 'transparent';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '20px',
              marginBottom: '30px'
            }}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  flexShrink: 0
                }}
              />
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.9)',
                margin: 0,
                fontWeight: '400'
              }}>
                {testimonial.feedback}
              </p>
            </div>
            
            <div style={{
              fontSize: '12px',
              fontWeight: '600',
              color: 'rgba(255, 255, 255, 0.6)',
              letterSpacing: '1px',
              textAlign: 'left'
            }}>
              {testimonial.name}
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;