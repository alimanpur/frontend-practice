import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { BsBuilding } from 'react-icons/bs';
import { contactInfo, budgetOptions } from '../data/Data.js';
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
    alert('Message sent successfully!');
  };

  return (
    <section 
      id="contact-section" 
      className="contact-wrapper"
      style={{ '--contact-bg': `url(${ContactBackground})` }}
    >
      <div className="contact-container">
        <div className="contact-grid">
          
          {/* Left Content */}
          <div className="contact-left">
            <h2 className="contact-main-title">{contactInfo.title}</h2>
            <p className="contact-main-desc">{contactInfo.description}</p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <FaPhoneAlt className="contact-icon" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="contact-info-item">
                <IoIosMail className="contact-icon" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="contact-info-item">
                <BsBuilding className="contact-icon mt-1" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>YOUR NAME</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="First name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="contact-input"
                  />
                </div>
                <div className="form-group">
                  <label>BUDGET</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="contact-input"
                  >
                    {budgetOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>INPUT FIELD</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@mail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="contact-input"
                />
              </div>

              <div className="form-group">
                <label>YOUR MESSAGE</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="contact-input resize-y"
                />
              </div>

              <div className="form-footer">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="sendCopy"
                    checked={formData.sendCopy}
                    onChange={handleInputChange}
                  />
                  Send me a copy
                </label>

                <button type="submit" className="contact-submit-btn">
                  Send
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;