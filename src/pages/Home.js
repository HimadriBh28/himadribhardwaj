import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <p className="label">START MENU</p>
      <h1>Himadri Quest</h1>
      <p>Welcome to my dark pixel-game portfolio. Press Start Game to enter the world.</p>
      <div className="page-actions">
        <Link to="/game">Start Game</Link>
        <Link to="/projects">View Projects</Link>
      </div>
    </>
  );
}

export default Home;
