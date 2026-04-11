import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { projectsData, techStack } from '../data/projectsData';
import './Pages.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProjects = projectsData.filter(project => {
    const matchesFilter = filter === 'all' || project.tech.includes(filter);
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  
  return (
    <div className="page projects-page">
      <div className="page-header">
        <h1 className="animate-fadeInUp">All Projects</h1>
        <p className="animate-fadeInUp">Explore my complete portfolio of work</p>
      </div>
      
      <div className="filters-section">
        <input 
          type="text" 
          placeholder="Search projects..." 
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          {[...new Set(techStack.slice(0, 8))].map(tech => (
            <button 
              key={tech}
              className={filter === tech ? 'active' : ''}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="no-results">
          <i className="fas fa-search"></i>
          <p>No projects found matching your criteria</p>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Projects;