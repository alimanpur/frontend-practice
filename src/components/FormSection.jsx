import React, { useState } from 'react';
import featuresBackground from '../assets/495a76abfa6125a690a426b8fcb3bbfd55392e02.jpg';

const FormSection = () => {
  console.log('FormSection rendering...');
  const [activeTab, setActiveTab] = useState('signup');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      backgroundImage: `linear-gradient(rgba(47, 24, 147, 0.7), rgba(47, 24, 147, 0.5)), url(${featuresBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 120px',
      color: 'white',
      gap: '120px'
    }}>
      {/* Left Content */}
      <div style={{
        flex: '0 0 auto',
        marginRight: '30px',
      }}>
        <h1 style={{
          fontSize: '56px',
          width: '600px',
          height: '208px',
          fontWeight: '700',
          lineHeight: '60px',
          marginBottom: '50px',
          color: 'white'
        }}>
          We solve digital<br/>problems with an<br/>outstanding<br/>creative flare
        </h1>
        
        <p style={{
          fontSize: '22px',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '',
          width: '450px',
          height: '78px',
          maxWidth: '450px',
          fontWeight: '400'
        }}>
          We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
        </p>
      </div>

      {/* Right Form */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '15px',
        padding: '48px 40px',
        width: '470px',
        boxShadow: '0 25px 80px rgba(0, 0, 0, 0.15)',
        flex: '0 0 auto'
      }}>
        {/* Tab Headers */}
        <div style={{
          display: 'flex',
          marginBottom: '40px',
          borderBottom: '1px solid #e5e5e5'
        }}>
          <button
            onClick={() => setActiveTab('signup')}
            style={{
              flex: '1',
              padding: '16px 0',
              fontSize: '16px',
              fontWeight: '600',
              color: activeTab === 'signup' ? '#333' : '#999',
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'signup' ? '3px solid #333' : '3px solid transparent',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            SIGN UP
          </button>
          <button
            onClick={() => setActiveTab('login')}
            style={{
              flex: '1',
              padding: '16px 0',
              fontSize: '16px',
              fontWeight: '600',
              color: activeTab === 'login' ? '#333' : '#999',
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'login' ? '3px solid #333' : '3px solid transparent',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            LOGIN
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '24px' }}>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '16px 20px',
                fontSize: '16px',
                border: '1px solid #e5e5e5',
                borderRadius: '50px',
                backgroundColor: '#f8f9fa',
                color: '#333',
                outline: 'none',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#007bff';
                e.target.style.backgroundColor = 'white';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e5e5e5';
                e.target.style.backgroundColor = '#f8f9fa';
              }}
            />
          </div>

          <div style={{ marginBottom: '32px' }}>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={formData.password}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '16px 20px',
                fontSize: '16px',
                border: '1px solid #e5e5e5',
                borderRadius: '50px',
                backgroundColor: '#f8f9fa',
                color: '#333',
                outline: 'none',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#007bff';
                e.target.style.backgroundColor = 'white';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e5e5e5';
                e.target.style.backgroundColor = '#f8f9fa';
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '16px',
              fontWeight: '600',
              color: 'white',
              backgroundColor: '#00d4aa',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              marginBottom: '20px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#00c299';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#00d4aa';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Create an Account
          </button>

          <div style={{
            textAlign: 'center',
            color: '#999',
            fontSize: '14px',
            marginBottom: '20px'
          }}>
            or
          </div>

          <button
            type="button"
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '16px',
              fontWeight: '600',
              color: 'white',
              backgroundColor: '#1da1f2',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#0d8bd9';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#1da1f2';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Login via Twitter
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSection;