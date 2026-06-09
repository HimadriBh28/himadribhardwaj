import { achievements, projects, skills } from '../data/gameData';

export default function InfoPanel({ activePanel, onClose }) {
  if (!activePanel) return null;

  const titleMap = {
    map: 'Quest Log',
    projects: 'Project Village',
    skills: 'Skill Forest',
    experience: 'Internship HQ',
    achievements: 'Achievement Arena',
    contact: 'Contact Portal'
  };

  return (
    <aside className="info-panel pixel-border">
      <div className="panel-header">
        <h2>{titleMap[activePanel] || 'Unlocked Area'}</h2>
        <button onClick={onClose}>✕</button>
      </div>

      {activePanel === 'map' && (
        <div className="panel-content">
          <p>Walk around the world and interact with glowing areas to unlock the full portfolio.</p>
          <ul className="quest-list">
            <li>🧙‍♀️ Talk to the intro NPC</li>
            <li>🏘️ Enter Project Village</li>
            <li>🌲 Collect Skill Forest coins</li>
            <li>🛰️ Visit Internship HQ</li>
            <li>🏆 Inspect Achievement Arena</li>
            <li>🌀 Open the Contact Portal</li>
          </ul>
        </div>
      )}

      {activePanel === 'projects' && (
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <p className="tag">{project.role}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="chip-row">
                {project.tech.map((item) => <span key={item}>{item}</span>)}
              </div>
              <a href={project.github} target="_blank" rel="noreferrer">Open GitHub →</a>
            </article>
          ))}
        </div>
      )}

      {activePanel === 'skills' && (
        <div className="skill-grid">
          {skills.map((skill) => <span key={skill}>✦ {skill}</span>)}
        </div>
      )}

      {activePanel === 'experience' && (
        <div className="panel-content timeline">
          <article>
            <p className="tag">Current Quest</p>
            <h3>AI/ML Intern — BISAG-N</h3>
            <p>
              Working with satellite imagery, roof segmentation, predicted masks, bounding boxes,
              centroid calculation, and computer vision workflows.
            </p>
          </article>
          <article>
            <p className="tag">Campus Quest</p>
            <h3>B.Tech CSE — JUIT</h3>
            <p>Building projects across AI/ML, app development, design, shell scripting, and game development.</p>
          </article>
        </div>
      )}

      {activePanel === 'achievements' && (
        <div className="trophy-grid">
          {achievements.map((item) => <div className="trophy" key={item}>🏆<span>{item}</span></div>)}
        </div>
      )}

      {activePanel === 'contact' && (
        <div className="panel-content contact-links">
          <p>Quest complete. You found the contact portal.</p>
          <a href="mailto:himadribhardwaj56@gmail.com">Email Himadri</a>
          <a href="https://github.com/HimadriBh28" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/himadri-bhardwaj-947518289/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/Himadri%20Bhardwaj_Resume.pdf" target="_blank" rel="noreferrer">Open Resume</a>
        </div>
      )}
    </aside>
  );
}
