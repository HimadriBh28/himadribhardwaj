import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import './ProjectRow.css';

const ProjectRow = ({ title, projects, viewAllLink }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="project-row">
      <div className="row-header">
        <h2>{title}</h2>
        {viewAllLink && <a href={viewAllLink}>View all <i className="fas fa-chevron-right"></i></a>}
      </div>
      <div className="slider-container">
        <button className="scroll-btn left" onClick={() => scroll('left')}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="card-slider" ref={sliderRef}>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll('right')}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ProjectRow;