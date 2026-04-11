import React, { useState, useEffect } from 'react';

// Simple Navigation Component
const Navigation = () => {
  const [activePage, setActivePage] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => setActivePage('home')}>HIMADRI<span>_BH</span></div>
        <div className="nav-links">
          <button onClick={() => setActivePage('home')}>Home</button>
          <button onClick={() => setActivePage('projects')}>Projects</button>
          <button onClick={() => setActivePage('contact')}>Contact</button>
          <a href="https://github.com/HimadriBh28" target="_blank" rel="noopener noreferrer" className="github-btn">GitHub</a>
        </div>
      </div>
    </nav>
  );
};

// Home Page Component
const HomePage = () => {
  const featuredProjects = [
    { name: "MusicBoard", desc: "Flutter music app to rate and review albums", tech: "Flutter, Dart", icon: "🎵" },
    { name: "movie_review_app", desc: "React Native app for reviewing movies with ratings", tech: "React Native, TypeScript", icon: "🎬" },
    { name: "DodgeIt! Game", desc: "Unity game where players navigate through obstacles", tech: "Unity, C#", icon: "🎮" },
    { name: "AlumniConnect", desc: "Full-stack alumni management platform", tech: "MERN Stack", icon: "👥" }
  ];

  const skills = ["Flutter", "React Native", "Unity", "MongoDB", "Express.js", "React", "Node.js", "PHP", "Dart", "TypeScript", "Shell Scripting", "Firebase"];
  const [githubStats, setGithubStats] = useState({ repos: 12, stars: 45, followers: 25 });

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

  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-badge">🎨 FULL-STACK & GAME DEVELOPER</div>
          <h1>Himadri <span className="gradient-text">Bhardwaj</span></h1>
          <p>Building innovative apps, immersive games, and automation tools that solve real problems. Passionate about Flutter, React Native, Unity, and full-stack development.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.querySelector('.projects-section').scrollIntoView({ behavior: 'smooth' })}>
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
              <div className="project-icon">{project.icon}</div>
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <div className="project-tech">
                <span className="tech-tag">{project.tech}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="section">
        <h2>Tech Stack & Skills</h2>
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill} className="skill-card">
              <i className="fas fa-code"></i>
              <span>{skill}</span>
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
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

// Projects Page Component
const ProjectsPage = () => {
  const allProjects = [
    { name: "MusicBoard", desc: "A Flutter music app that lets users rate and review albums.", tech: ["Flutter", "Dart", "Firebase"], year: "2024", link: "https://github.com/HimadriBh28/MusicBoard" },
    { name: "movie_review_app", desc: "React Native app for reviewing movies with ratings and comments.", tech: ["React Native", "TypeScript", "Node.js"], year: "2024", link: "https://github.com/HimadriBh28/movie_review_app" },
    { name: "DodgeIt! Game", desc: "My first Unity game where players navigate through obstacles.", tech: ["Unity", "C#", "ShaderLab"], year: "2023", link: "https://github.com/HimadriBh28/DodgeIt-" },
    { name: "AlumniConnect", desc: "Full-stack alumni management platform connecting graduates with current students.", tech: ["MongoDB", "Express.js", "React", "Node.js"], year: "2024", link: "https://github.com/HimadriBh28/AlumniConnect" },
    { name: "Secure Login System", desc: "Secure authentication system built with PHP and MySQL.", tech: ["PHP", "MySQL", "HTML/CSS"], year: "2023", link: "https://github.com/HimadriBh28/Team-8-Secure-Login-System" },
    { name: "Duplicate Cleaner", desc: "UNIX tool to scan and clean duplicate files efficiently.", tech: ["Shell", "Bash", "UNIX"], year: "2023", link: "https://github.com/HimadriBh28/DuplicateCleanerProject" }
  ];

  return (
    <div>
      <div className="page-header">
        <h1>All Projects</h1>
        <p>Explore my complete portfolio of work</p>
      </div>
      <div className="section">
        <div className="projects-grid">
          {allProjects.map(project => (
            <div key={project.name} className="project-card large">
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
              <div className="project-meta">
                <div className="project-tech">
                  {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
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
  );
};

// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:himadribhardwaj56@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0AReply to: ${formData.email}`;
  };

  return (
    <div>
      <div className="page-header">
        <h1>Get In Touch</h1>
        <p>Let's discuss your next project or collaboration</p>
      </div>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3><i className="fas fa-comment-dots"></i> Let's Talk</h3>
          <p>I'm currently available for freelance work and collaborations. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!</p>
          <div className="contact-details">
            <p><i className="fas fa-envelope"></i> himadribhardwaj56@gmail.com</p>
            <p><i className="fab fa-github"></i> github.com/HimadriBh28</p>
            <p><i className="fas fa-map-marker-alt"></i> India</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" onChange={e => setFormData({...formData, name: e.target.value})} required />
          <input type="email" placeholder="Your Email" onChange={e => setFormData({...formData, email: e.target.value})} required />
          <textarea placeholder="Your Message" rows="5" onChange={e => setFormData({...formData, message: e.target.value})} required></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleNavClick = () => {
      const buttons = document.querySelectorAll('.nav-links button');
      buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const page = e.target.innerText.toLowerCase();
          if (page === 'home') setCurrentPage('home');
          else if (page === 'projects') setCurrentPage('projects');
          else if (page === 'contact') setCurrentPage('contact');
        });
      });
    };
    handleNavClick();
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => setCurrentPage('home')}>HIMADRI<span>_BH</span></div>
          <div className="nav-links">
            <button onClick={() => setCurrentPage('home')}>Home</button>
            <button onClick={() => setCurrentPage('projects')}>Projects</button>
            <button onClick={() => setCurrentPage('contact')}>Contact</button>
            <a href="https://github.com/HimadriBh28" target="_blank" rel="noopener noreferrer" className="github-btn">GitHub</a>
          </div>
        </div>
      </nav>
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'projects' && <ProjectsPage />}
      {currentPage === 'contact' && <ContactPage />}
      
      <footer className="footer">
        <p>© 2025 Himadri Bhardwaj — Netflix Inspired Portfolio</p>
        <p className="heart">Crafted with <i className="fas fa-heart"></i> and React</p>
      </footer>
    </div>
  );
}

export default App;
