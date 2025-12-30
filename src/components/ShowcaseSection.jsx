import React from 'react';
import portfolioImage1 from '../assets/0473f69d784b36f7f86dce0c85f1d1dd2bc46f50.jpg';
import portfolioImage2 from '../assets/14602bf91a2ee33c171f39337a5b71e42c42b387.jpg';
import portfolioImage3 from '../assets/6092e1361b7d6d15b1d01cf0004cb784dcfb12ce.jpg';
import portfolioImage4 from '../assets/e08f26b3dccd6dbe720b42e9b0413e3a873d2883.jpg';

const ShowcaseSection = () => {
  const portfolioItems = [
    {
      id: 1,
      image: portfolioImage1,
      title: "UI KIT",
      description: "Mozart Project"
    },
    {
      id: 2,
      image: portfolioImage2,
      title: "Framework",
      description: "Startup Framework 2.0"
    },
    {
      id: 3,
      image: portfolioImage4,
      title: "Photos",
      description: "From the Sky"
    },
    {
      id: 4,
      image: portfolioImage3,
      title: "Pictures",
      description: "Air Forces"
    },
  ];

  return (
    <div style={{
      backgroundColor: '#2f1893',
      padding: '20px 10px',
      minHeight: '1200px'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '1200px',
        margin: '0 auto'
      }}>
        {/* Header Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 10px',
          marginTop: '100px',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: 'white',
            margin: 0,
            fontFamily: 'Arial, sans-serif'
          }}>
            Last Work
          </h2>
          
          <button
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '12px 24px',
              border: '2px solid #e5e5e5',
              borderRadius: '25px',
              fontSize: '16px',
              fontWeight: '500',
              opacity: '50%',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              outline: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'white';
              e.target.style.backgroundColor = '#2f1893';
              e.target.style.color = 'white';
              e.target.style.opacity = '100%';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = '#e5e5e5';
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
              e.target.style.opacity = '50%';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            View All Works
          </button>
        </div>

        {/* Portfolio Grid */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '40px',
            marginBottom: '50px',
            maxWidth: '1100px'
          }}>
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: 'transparent',
                borderRadius: '15px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            >
              <div style={{
                width: '500px',
                height: '300px',
                overflow: 'hidden',
                borderRadius: '15px'
              }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </div>
              
              <div style={{
                padding: '20px 0',
                textAlign: 'left'
              }}>
                <h5 style={{
                  fontSize: '15px',
                  fontWeight: '700',
                  color: 'rgba(255, 255, 255, 0.7)',
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'center',
                  margin: '0 0 8px 0',
                  fontFamily: 'Arial, sans-serif'
                }}>
                  {item.title}
                </h5>
                <p style={{
                  fontSize: '22px',
                  fontWeight: '400',
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  margin: 0,
                  fontFamily: 'Arial, sans-serif'
                }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;