import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content animate-fadeInUp">
        <div className="hero-badge">
          <i className="fas fa-code"></i> FULL-STACK & GAME DEVELOPER
        </div>
        <h1 className="hero-title">
          Himadri <span className="gradient-text">Bhardwaj</span>
        </h1>
        <p className="hero-description">
          Building innovative apps, immersive games, and automation tools that solve real problems. 
          Passionate about Flutter, React Native, Unity, and full-stack development.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <i className="fas fa-code"></i>
            <span>10+ Projects</span>
          </div>
          <div className="stat">
            <i className="fab fa-github"></i>
            <span>Active on GitHub</span>
          </div>
          <div className="stat">
            <i className="fas fa-gamepad"></i>
            <span>Game Dev</span>
          </div>
        </div>
        <div className="hero-buttons">
          <Link to="/projects" className="btn-primary">
            <i className="fas fa-play"></i> Explore My Work
          </Link>
          <a href="mailto:himadribhardwaj56@gmail.com" className="btn-secondary">
            <i className="fas fa-envelope"></i> Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;