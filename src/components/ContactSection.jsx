import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { BsBuilding } from 'react-icons/bs';
import ContactBackground from '../assets/801b840003ba21507c4e4e0df1ee626da6fc2a65.jpg';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '$500',
    message: '',
    sendCopy: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div id="contact-section" style={{
      backgroundImage: `linear-gradient(rgba(47, 24, 147, 0.7), rgba(47, 24, 147, 0.5)), url(${ContactBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      minHeight: '770px',
      padding: '100px 20px'
    }}>
      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <div style={{
            color: 'white',
            width: '410px',
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '700',
              color: 'white',
              margin: '0 0 30px 0',
              fontFamily: 'Arial, sans-serif',
              lineHeight: '1.2'
            }}>
              Let's Keep in Touch
            </h2>
            
            <p style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.6',
              fontWeight: '500',
              margin: '0 0 90px 0',
              fontFamily: 'Arial, sans-serif'
            }}>
              We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
            </p>

            {/* Contact Info */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              width: '284px',
              gap: '35px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <FaPhoneAlt style={{ fontSize: '18px', color: 'white' }} />
                <span style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: 'Arial, sans-serif'
                }}>
                  +1 555 505 5050
                </span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <IoIosMail style={{ fontSize: '18px', color: 'white' }} />
                <span style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: 'Arial, sans-serif'
                }}>
                  info@designmodo.com
                </span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px'
              }}>
                <BsBuilding style={{ fontSize: '18px', color: 'white', marginTop: '2px' }} />
                <span style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: 'Arial, sans-serif',
                  lineHeight: '1.5'
                }}>
                  San Francisco, CA560 Bush St &<br />
                  20th Ave, Apt5 San Francisco,<br />
                  230909
                </span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            width: '470px',
            height: '570px',
            padding: '40px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#666',
                    marginBottom: '8px',
                    fontFamily: 'Arial, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="First name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '15px',
                      border: '1px solid #e5e5e5',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontFamily: 'Arial, sans-serif',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#7c3aed'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#666',
                    marginBottom: '8px',
                    fontFamily: 'Arial, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    BUDGET
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '15px',
                      border: '1px solid #e5e5e5',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontFamily: 'Arial, sans-serif',
                      outline: 'none',
                      backgroundColor: 'white'
                    }}
                  >
                    <option value="$500">$500</option>
                    <option value="$1000">$1000</option>
                    <option value="$2000">$2000</option>
                    <option value="$5000+">$5000+</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#666',
                  marginBottom: '8px',
                  fontFamily: 'Arial, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  INPUT FIELD
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@mail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontFamily: 'Arial, sans-serif',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#7c3aed'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
                />
              </div>

              <div style={{ marginBottom: '30px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#666',
                  marginBottom: '8px',
                  fontFamily: 'Arial, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  YOUR MESSAGE
                </label>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontFamily: 'Arial, sans-serif',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#7c3aed'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
                />
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '14px',
                  color: '#666',
                  fontFamily: 'Arial, sans-serif',
                  cursor: 'pointer'
                }}>
                  <input
                    type="checkbox"
                    name="sendCopy"
                    checked={formData.sendCopy}
                    onChange={handleInputChange}
                    style={{
                      width: '18px',
                      height: '18px',
                      accentColor: '#10d9c4'
                    }}
                  />
                  Send me a copy
                </label>

                <button
                  type="submit"
                  style={{
                    backgroundColor: '#10d9c4',
                    color: 'white',
                    padding: '15px 40px',
                    border: 'none',
                    borderRadius: '25px',
                    fontSize: '16px',
                    fontWeight: '600',
                    fontFamily: 'Arial, sans-serif',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#0bc5b0';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#10d9c4';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;