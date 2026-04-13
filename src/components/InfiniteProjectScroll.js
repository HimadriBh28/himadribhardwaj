import React from 'react';
import './InfiniteProjectScroll.css';

const InfiniteProjectScroll = () => {
  const allProjects = [
    { 
      name: "MusicBoard", 
      desc: "Flutter music app to rate and review albums", 
      tech: ["Flutter", "Dart", "Firebase"], 
      link: "https://github.com/HimadriBh28/MusicBoard",
      icon: "��"
    },
    { 
      name: "movie_review_app", 
      desc: "React Native app for reviewing movies with ratings", 
      tech: ["React Native", "TypeScript", "Node.js"], 
      link: "https://github.com/HimadriBh28/movie_review_app",
      icon: "��"
    },
    { 
      name: "DodgeIt! Game", 
      desc: "Unity game where players navigate through obstacles", 
      tech: ["Unity", "C#", "ShaderLab"], 
      link: "https://github.com/HimadriBh28/DodgeIt-",
      icon: "🎮"
    },
    { 
      name: "AlumniConnect", 
      desc: "Full-stack alumni management platform", 
      tech: ["MongoDB", "Express.js", "React", "Node.js"], 
      link: "https://github.com/HimadriBh28/AlumniConnect",
      icon: "👥"
    },
    { 
      name: "Secure Login System", 
      desc: "Secure authentication system with PHP", 
      tech: ["PHP", "MySQL", "HTML/CSS"], 
      link: "https://github.com/HimadriBh28/Team-8-Secure-Login-System",
      icon: "🔐"
    },
    { 
      name: "Duplicate Cleaner", 
      desc: "UNIX tool to scan and clean duplicate files", 
      tech: ["Shell", "Bash", "UNIX"], 
      link: "https://github.com/HimadriBh28/DuplicateCleanerProject",
      icon: "🧹"
    },
    { 
      name: "JYC Website", 
      desc: "Website with photo updates and dynamic content", 
      tech: ["HTML", "CSS", "JavaScript"], 
      link: "https://github.com/HimadriBh28/jyc-website",
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
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-scroll-link">
                View on GitHub →
              </a>
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
