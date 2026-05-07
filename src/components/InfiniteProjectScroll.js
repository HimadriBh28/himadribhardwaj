import React from 'react';
import './InfiniteProjectScroll.css';

const InfiniteProjectScroll = () => {
  const allProjects = [
    { 
      name: "MusicBoard", 
      desc: "Flutter music app to rate and review albums", 
      tech: ["Flutter", "Dart", "Firebase"], 
      github: "https://github.com/HimadriBh28/MusicBoard",
      demo: null,
      icon: "🎵"
    },
    { 
      name: "movie_review_app", 
      desc: "React Native app for reviewing movies with ratings", 
      tech: ["React Native", "TypeScript", "Node.js"], 
      github: "https://github.com/HimadriBh28/movie_review_app",
      demo: null,
      icon: "🎬"
    },
    { 
      name: "DodgeIt! Game", 
      desc: "Unity game where players navigate through obstacles", 
      tech: ["Unity", "C#", "ShaderLab"], 
      github: "https://github.com/HimadriBh28/DodgeIt-",
      demo: null,
      icon: "🎮"
    },
    { 
      name: "AlumniConnect", 
      desc: "Full-stack alumni management platform", 
      tech: ["MongoDB", "Express.js", "React", "Node.js"], 
      github: "https://github.com/HimadriBh28/AlumniConnect",
      demo: "https://alumni-management-system.vercel.app",
      icon: "👥"
    },
    { 
      name: "Secure Login System", 
      desc: "Secure authentication system with PHP", 
      tech: ["PHP", "MySQL", "HTML/CSS"], 
      github: "https://github.com/HimadriBh28/Team-8-Secure-Login-System",
      demo: null,
      icon: "🔐"
    },
    { 
      name: "Duplicate Cleaner", 
      desc: "UNIX tool to scan and clean duplicate files", 
      tech: ["Shell", "Bash", "UNIX"], 
      github: "https://github.com/HimadriBh28/DuplicateCleanerProject",
      demo: null,
      icon: "🧹"
    },
    { 
      name: "JYC Website", 
      desc: "Website with photo updates and dynamic content", 
      tech: ["HTML", "CSS", "JavaScript"], 
      github: "https://github.com/HimadriBh28/jyc-website",
      demo: null,
      icon: "🌐"
    }
  ];

  // Triple the projects for seamless infinite scroll
  const infiniteProjects = [...allProjects, ...allProjects, ...allProjects];

  return (
    <div className="infinite-scroll-container">
      <div className="infinite-scroll-header">
        <h2>🚀 My Projects</h2>
        <p>Exploring code, building solutions — scroll through my work</p>
      </div>
      
      <div className="marquee-wrapper">
        <div className="marquee-scroll">
          {infiniteProjects.map((project, index) => (
            <div key={`${project.name}-${index}`} className="project-scroll-card">
              <div className="project-scroll-icon">{project.icon}</div>
              <h3 className="project-scroll-title">{project.name}</h3>
              <p className="project-scroll-desc">{project.desc}</p>
              <div className="project-scroll-tech">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-scroll-tag">{tech}</span>
                ))}
              </div>
              <div className="project-scroll-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-scroll-link">
                  GitHub →
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-scroll-demo-link">
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="infinite-scroll-footer">
        <p>✨ Hover to pause • Infinite scroll of creativity ✨</p>
      </div>
    </div>
  );
};

export default InfiniteProjectScroll;
