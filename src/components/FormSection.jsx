import React, { useState } from 'react';
import { formContent } from '../data/Data.js';
import featuresBackground from '../assets/495a76abfa6125a690a426b8fcb3bbfd55392e02.jpg';

const FormSection = () => {
  const [activeTab, setActiveTab] = useState('signup');
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      className="form-section-wrapper"
      style={{ '--form-bg': `url(${featuresBackground})` }}
    >
      {/* Left Content */}
      <div className="form-left-content">
        <h1 className="form-main-title">
          {formContent.title.split('creative').map((text, i) => 
            i === 0 ? <React.Fragment key={i}>{text}<br/></React.Fragment> : `creative ${text}`
          )}
        </h1>
        <p className="form-main-description">
          {formContent.description}
        </p>
      </div>

      {/* Right Form Card */}
      <div className="form-card">
        {/* Tab Headers */}
        <div className="form-tabs">
          <button
            onClick={() => setActiveTab('signup')}
            className={`form-tab-btn ${activeTab === 'signup' ? 'active' : ''}`}
          >
            SIGN UP
          </button>
          <button
            onClick={() => setActiveTab('login')}
            className={`form-tab-btn ${activeTab === 'login' ? 'active' : ''}`}
          >
            LOGIN
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="actual-form">
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <button type="submit" className="submit-btn primary-btn">
            {activeTab === 'signup' ? 'Create an Account' : 'Login'}
          </button>

          <div className="form-divider">or</div>

          <button type="button" className="submit-btn twitter-btn">
            Login via Twitter
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;