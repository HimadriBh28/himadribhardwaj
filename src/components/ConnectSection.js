import React from 'react';
import './ConnectSection.css';

const ConnectSection = () => {
  return (
    <div className="connect-section">
      <div className="connect-content">
        <h3>Let's Connect & Create Something Amazing 🚀</h3>
        <p>I'm always open to collaborating on exciting projects, discussing tech, or just having a chat!</p>
        <div className="social-links">
          <a href="https://github.com/HimadriBh28" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
          <a href="mailto:himadribhardwaj56@gmail.com">
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
            <span>Twitter</span>
          </a>
        </div>
        <div className="contact-info">
          <p><i className="fas fa-map-marker-alt"></i> India</p>
          <p><i className="fas fa-code"></i> Available for freelance work</p>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;