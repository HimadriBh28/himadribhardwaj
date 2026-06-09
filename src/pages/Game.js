import { Link } from "react-router-dom";

function Game() {
  return (
    <>
      <p className="label">GAME STARTED</p>
      <h1>Choose Your Quest</h1>
      <p>You entered Himadri’s pixel world. Each quest unlocks a different part of my portfolio.</p>
      <div className="quest-grid">
        <Link to="/about">Talk to NPC: About Me</Link>
        <Link to="/projects">Enter Project Village</Link>
        <Link to="/skills">Explore Skill Forest</Link>
        <Link to="/experience">Visit Internship HQ</Link>
        <Link to="/achievements">Open Trophy Arena</Link>
        <Link to="/contact">Enter Contact Portal</Link>
      </div>
    </>
  );
}

export default Game;
