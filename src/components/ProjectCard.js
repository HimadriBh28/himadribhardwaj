import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, featured }) => {
  return (
    <div className={`project-card ${featured ? 'featured' : ''}`}>
      <div className="card-image" style={{ backgroundImage: `url(${project.image})` }}>
        <div className="card-overlay">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
            <i className="fab fa-github"></i> View Code
          </a>
        </div>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{project.name}</h3>
          <span className="card-year">{project.year}</span>
        </div>
        <p className="card-description">{project.description}</p>
        <div className="card-tech">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;