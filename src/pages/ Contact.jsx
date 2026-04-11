import React, { useState } from 'react';
import Footer from '../components/Footer';
import './Pages.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // This would typically send to an API
    window.location.href = `mailto:himadribhardwaj56@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0AReply to: ${formData.email}`;
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <div className="page contact-page">
      <div className="page-header">
        <h1 className="animate-fadeInUp">Get In Touch</h1>
        <p className="animate-fadeInUp">Let's discuss your next project or collaboration</p>
      </div>
      
      <div className="contact-wrapper">
        <div className="contact-info-panel">
          <h3><i className="fas fa-comment-dots"></i> Let's Talk</h3>
          <p>I'm currently available for freelance work and collaborations. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!</p>
          
          <div className="contact-details">
            <div className="detail">
              <i className="fas fa-envelope"></i>
              <div>
                <strong>Email</strong>
                <p>himadribhardwaj56@gmail.com</p>
              </div>
            </div>
            <div className="detail">
              <i className="fab fa-github"></i>
              <div>
                <strong>GitHub</strong>
                <p>github.com/HimadriBh28</p>
              </div>
            </div>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="btn-primary">
            <i className="fas fa-paper-plane"></i> Send Message
          </button>
        </form>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;