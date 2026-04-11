import React, { useState, useEffect } from 'react';
import EntryScreen from './components/EntryScreen';
import PriyanshiEasterEgg from './components/PriyanshiEasterEgg';
import MeenakshiEasterEgg from './components/MeenakshiEasterEgg';
import VineetEasterEgg from './components/VineetEasterEgg';
import { 
  SiFlutter, 
  SiReact, 
  SiUnity, 
  SiMongodb, 
  SiExpress, 
  SiPhp, 
  SiDart, 
  SiTypescript, 
  SiGnubash, 
  SiFirebase,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiGit,
  SiMysql,
  SiPostgresql
} from 'react-icons/si';
import { FaNodeJs, FaCss3Alt, FaDownload } from 'react-icons/fa';
import './App.css';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [githubStats, setGithubStats] = useState({ repos: 12, stars: 45, followers: 25 });

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/Himadri_Bhardwaj_Resume.pdf';
    link.download = 'Himadri_Bhardwaj_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    fetch('https://api.github.com/users/HimadriBh28')
      .then(res => res.json())
      .then(data => {
        fetch('https://api.github.com/users/HimadriBh28/repos?per_page=100')
          .then(res => res.json())
          .then(repos => {
            const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
            setGithubStats({
              repos: data.public_repos || 12,
              stars: totalStars || 45,
              followers: data.followers || 25
            });
          });
      })
      .catch(() => console.log('Using fallback stats'));
  }, []);

  const skills = [
    { name: "Flutter", icon: SiFlutter, color: "#42a5f5" },
    { name: "React Native", icon: SiReact, color: "#61dafb" },
    { name: "Unity", icon: SiUnity, color: "#808080" },
    { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
    { name: "Express.js", icon: SiExpress, color: "#ffffff" },
    { name: "React", icon: SiReact, color: "#61dafb" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "PHP", icon: SiPhp, color: "#777bb4" },
    { name: "Dart", icon: SiDart, color: "#00b4ab" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "Shell Scripting", icon: SiGnubash, color: "#4eaa25" },
    { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
    { name: "Python", icon: SiPython, color: "#3776ab" },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
    { name: "Git", icon: SiGit, color: "#f05032" },
    { name: "MySQL", icon: SiMysql, color: "#4479a1" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" }
  ];

  // All projects from your GitHub
  const allProjects = [
    { 
      name: "MusicBoard", 
      desc: "A Flutter music app that lets users rate and review albums. Features include user authentication, album database, and rating system.", 
      tech: ["Flutter", "Dart", "Firebase"], 
      year: "2024", 
      link: "https://github.com/HimadriBh28/MusicBoard",
      icon: "🎵",
      featured: true
    },
    { 
      name: "movie_review_app", 
      desc: "React Native app for reviewing movies with ratings and comments. Real-time updates and user profiles.", 
      tech: ["React Native", "TypeScript", "Node.js"], 
      year: "2024", 
      link: "https://github.com/HimadriBh28/movie_review_app",
      icon: "🎬",
      featured: true
    },
    { 
      name: "DodgeIt! Game", 
      desc: "My first Unity game where players navigate through obstacles. Built with C# and Unity Engine.", 
      tech: ["Unity", "C#", "ShaderLab"], 
      year: "2023", 
      link: "https://github.com/HimadriBh28/DodgeIt-",
      icon: "🎮",
      featured: true
    },
    { 
      name: "AlumniConnect", 
      desc: "Full-stack alumni management platform connecting graduates with current students. Features user profiles, messaging, and event management.", 
      tech: ["MongoDB", "Express.js", "React", "Node.js"], 
      year: "2024", 
      link: "https://github.com/HimadriBh28/AlumniConnect",
      icon: "👥",
      featured: true
    },
    { 
      name: "Secure Login System", 
      desc: "Secure authentication system built with PHP and MySQL with session management and password hashing.", 
      tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"], 
      year: "2023", 
      link: "https://github.com/HimadriBh28/Team-8-Secure-Login-System",
      icon: "🔐",
      featured: false
    },
    { 
      name: "Duplicate Cleaner", 
      desc: "UNIX tool to scan and clean duplicate files efficiently using shell scripting. Features recursive scanning and hash-based comparison.", 
      tech: ["Shell", "Bash", "UNIX"], 
      year: "2023", 
      link: "https://github.com/HimadriBh28/DuplicateCleanerProject",
      icon: "🧹",
      featured: false
    },
    { 
      name: "JYC Website", 
      desc: "Website project with photo updates and dynamic content management.", 
      tech: ["HTML", "CSS", "JavaScript"], 
      year: "2024", 
      link: "https://github.com/HimadriBh28/jyc-website",
      icon: "🌐",
      featured: false
    }
  ];

  const featuredProjects = allProjects.filter(p => p.featured);
  const otherProjects = allProjects.filter(p => !p.featured);

  if (!hasEntered) {
    return <EntryScreen onEnter={() => setHasEntered(true)} />;
  }

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <button className="logo" onClick={() => setCurrentPage('home')}>PORTFOLIO</button>
          <div className="nav-links">
            <button onClick={() => setCurrentPage('home')}>Home</button>
            <button onClick={() => setCurrentPage('techStack')}>Tech Stack</button>
            <button onClick={() => setCurrentPage('projects')}>Projects</button>
            <button onClick={() => setCurrentPage('contact')}>Contact</button>
            <button onClick={downloadResume} className="resume-btn">
              <FaDownload /> Resume
            </button>
            <a href="https://github.com/HimadriBh28" target="_blank" rel="noopener noreferrer" className="github-btn">GitHub</a>
          </div>
        </div>
      </nav>

      {currentPage === 'home' && (
        <div>
          <div className="hero">
            <div className="hero-content">
              <div className="hero-badge">🎨 FULL-STACK & GAME DEVELOPER</div>
              <h1>Himadri <span className="gradient-text">Bhardwaj</span></h1>
              <p>Building innovative apps, immersive games, and automation tools that solve real problems. Passionate about Flutter, React Native, Unity, and full-stack development.</p>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => document.querySelector('.projects-section')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore Work
                </button>
                <a href="mailto:himadribhardwaj56@gmail.com" className="btn-secondary">Contact Me</a>
              </div>
            </div>
          </div>
          
          <div className="section projects-section">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
              {featuredProjects.map(project => (
                <div key={project.name} className="project-card">
                  <div className="project-icon" style={{ fontSize: '2.5rem' }}>{project.icon}</div>
                  <h3>{project.name}</h3>
                  <p>{project.desc}</p>
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link-btn" style={{ marginTop: '1rem' }}>
                    View on GitHub
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div className="github-section">
            <h2><i className="fab fa-github"></i> GitHub Stats</h2>
            <div className="github-stats">
              <div className="stat-card">
                <div className="stat-number">{githubStats.repos}</div>
                <div className="stat-label">Repositories</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{githubStats.stars}</div>
                <div className="stat-label">Stars Earned</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{githubStats.followers}</div>
                <div className="stat-label">Followers</div>
              </div>
            </div>
          </div>
          
          <div className="connect-section">
            <h3>Let's Connect & Create Something Amazing 🚀</h3>
            <p>I'm always open to collaborating on exciting projects, discussing tech, or just having a chat!</p>
            <div className="social-links">
              <a href="https://github.com/HimadriBh28" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="mailto:himadribhardwaj56@gmail.com">Email</a>
              <button onClick={() => window.open('https://www.linkedin.com/in/himadri-bhardwaj-947518289/', '_blank')}>LinkedIn</button>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'techStack' && (
        <div>
          <div className="page-header">
            <h1>Tech Stack & Skills</h1>
            <p>Technologies I work with</p>
          </div>
          <div className="section">
            <div className="skills-grid">
              {skills.map(skill => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.name} className="skill-card" style={{ borderLeftColor: skill.color }}>
                    <div className="skill-icon">
                      <IconComponent style={{ color: skill.color, fontSize: '2rem' }} />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {currentPage === 'projects' && (
        <div>
          <div className="page-header">
            <h1>All Projects</h1>
            <p>Explore my complete portfolio of work</p>
          </div>
          <div className="section">
            <div className="projects-grid">
              {allProjects.map(project => (
                <div key={project.name} className="project-card large">
                  <div className="project-icon" style={{ fontSize: '2rem' }}>{project.icon}</div>
                  <h3>{project.name}</h3>
                  <p>{project.desc}</p>
                  <div className="project-meta">
                    <div className="project-tech">
                      {project.tech.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <span className="year">{project.year}</span>
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link-btn">
                    View on GitHub
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {currentPage === 'contact' && (
        <div>
          <div className="page-header">
            <h1>Get In Touch</h1>
            <p>Let's discuss your next project or collaboration</p>
          </div>
          <div className="contact-wrapper">
            <div className="contact-info">
              <h3><i className="fas fa-comment-dots"></i> Let's Talk</h3>
              <p>I'm currently available for freelance work and collaborations.</p>
              <div className="contact-details">
                <p><i className="fas fa-envelope"></i> himadribhardwaj56@gmail.com</p>
                <p><i className="fab fa-github"></i> github.com/HimadriBh28</p>
                <p><i className="fab fa-linkedin"></i> linkedin.com/in/himadri-bhardwaj-947518289</p>
                <p><i className="fas fa-map-marker-alt"></i> India</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <PriyanshiEasterEgg />
      <MeenakshiEasterEgg />
      <VineetEasterEgg />
      
      <footer className="footer">
        <p>© 2025 Himadri Bhardwaj — Netflix Inspired Portfolio</p>
        <p className="heart">Crafted with <i className="fas fa-heart"></i> and React</p>
      </footer>
    </div>
  );
}

export default App;
