import React from 'react';
import './SkillsSection.css';

const SkillsSection = ({ skills }) => {
  return (
    <div className="skills-section">
      <h2 className="section-title">
        <i className="fas fa-cogs"></i> Tech Stack & Skills
      </h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-code"></i>
            </div>
            <span className="skill-name">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;