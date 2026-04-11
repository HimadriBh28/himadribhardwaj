import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Home Component
const Home = () => {
  const featuredProjects = [
    { name: "MusicBoard", desc: "Flutter music app to rate and review albums", tech: "Flutter, Dart", icon: "🎵" },
    { name: "movie_review_app", desc: "React Native app for reviewing movies with ratings", tech: "React Native, TypeScript", icon: "🎬" },
    { name: "DodgeIt! Game", desc: "Unity game where players navigate through obstacles", tech: "Unity, C#", icon: "🎮" },
    { name: "AlumniConnect", desc: "Full-stack alumni management platform", tech: "MERN Stack", icon: "👥" }
  ];

  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-badge">🎨 FULL-STACK & GAME DEVELOPER</div>
          <h1>Himadri <span className="gradient-text">Bhardwaj</span></h1>
          <p>Building innovative apps, immersive games, and automation tools that solve real problems. Passionate about Flutter, React Native, Unity, and full-stack development.</p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">
              <i className="fas fa-play"></i> Explore Work
            </Link>
            <a href="mailto:himadribhardwaj56@gmail.com" className="btn-secondary">
              <i className="fas fa-envelope"></i> Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="section">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <Link to="/projects">View all <i className="fas fa-arrow-right"></i></Link>
        </div>
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
          {["Flutter", "React Native", "Unity", "MongoDB", "Express.js", "React", "Node.js", "PHP", "Dart", "TypeScript", "Shell Scripting", "Firebase"].map(skill => (
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
            <div className="stat-number" id="repoCount">Loading...</div>
            <div className="stat-label">Repositories</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" id="starsCount">Loading...</div>
            <div className="stat-label">Stars Earned</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" id="followersCount">Loading...</div>
            <div className="stat-label">Followers</div>
          </div>
        </div>
      </div>
      
      <div className="connect-section">
        <h3>Let's Connect & Create Something Amazing 🚀</h3>
        <p>I'm always open to collaborating on exciting projects, discussing tech, or just having a chat!</p>
        <div className="social-links">
          <a href="https://github.com/HimadriBh28" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="mailto:himadribhardwaj56@gmail.com">
            <i className="fas fa-envelope"></i> Email
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

// Projects Component
const Projects = () => {
  const allProjects = [
    { name: "MusicBoard", desc: "A Flutter music app that lets users rate and review albums. Features user authentication and album database.", tech: ["Flutter", "Dart", "Firebase"], year: "2024" },
    { name: "movie_review_app", desc: "React Native app for reviewing movies with ratings and comments. Real-time updates and user profiles.", tech: ["React Native", "TypeScript", "Node.js"], year: "2024" },
    { name: "DodgeIt! Game", desc: "My first Unity game where players navigate through obstacles. Built with C# and Unity Engine.", tech: ["Unity", "C#", "ShaderLab"], year: "2023" },
    { name: "AlumniConnect", desc: "Full-stack alumni management platform connecting graduates with current students.", tech: ["MongoDB", "Express.js", "React", "Node.js"], year: "2024" },
    { name: "Secure Login System", desc: "Secure authentication system built with PHP and MySQL with session management.", tech: ["PHP", "MySQL", "HTML/CSS"], year: "2023" },
    { name: "Duplicate Cleaner", desc: "UNIX tool to scan and clean duplicate files efficiently using shell scripting.", tech: ["Shell", "Bash", "UNIX"], year: "2023" }
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
              <a href={`https://github.com/HimadriBh28/${project.name.replace(/\s/g, '')}`} target="_blank" className="github-link-btn">
                <i className="fab fa-github"></i> View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });

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

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">HIMADRI<span>_BH</span></Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <a href="https://github.com/HimadriBh28" target="_blank" rel="noopener noreferrer" className="github-btn">GitHub</a>
        </div>
      </div>
    </nav>
  );
};

// Fetch GitHub stats
const fetchGitHubStats = async () => {
  try {
    const userRes = await fetch('https://api.github.com/users/HimadriBh28');
    const userData = await userRes.json();
    const reposRes = await fetch('https://api.github.com/users/HimadriBh28/repos?per_page=100');
    const repos = await reposRes.json();
    const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
    
    document.getElementById('repoCount').innerText = userData.public_repos || 0;
    document.getElementById('starsCount').innerText = totalStars;
    document.getElementById('followersCount').innerText = userData.followers || 0;
  } catch (error) {
    document.getElementById('repoCount').innerText = '12';
    document.getElementById('starsCount').innerText = '45';
    document.getElementById('followersCount').innerText = '25';
  }
};

// Main App
function App() {
  React.useEffect(() => {
    fetchGitHubStats();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="footer">
          <p>© 2025 Himadri Bhardwaj — Netflix Inspired Portfolio</p>
          <p className="heart">Crafted with <i className="fas fa-heart"></i> and React</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
