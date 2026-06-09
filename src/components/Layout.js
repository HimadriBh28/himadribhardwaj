import { NavLink, Link, Outlet } from "react-router-dom";
import PixelAvatar from "./PixelAvatar";

function Layout() {
  return (
    <main className="game">
      <div className="scanlines"></div>

      <section className="gameboy">
        <div className="top-bar">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <p>HIMADRI.EXE</p>
        </div>

        <div className="screen">
          <div className="moon"></div>
          <div className="stars"></div>

          <div className="world">
            <div className="castle">
              <div className="tower"></div>
              <div className="tower small"></div>
              <div className="castle-body"></div>
            </div>

            <Link className="floating-block block-one" to="/projects">?</Link>
            <Link className="floating-block block-two" to="/skills">★</Link>
            <Link className="floating-block block-three" to="/contact">?</Link>

            <PixelAvatar />

            <div className="ground"><div className="brick-row"></div></div>
          </div>

          <div className="dialogue">
            <Outlet />
          </div>
        </div>

        <nav className="controls">
          <NavLink to="/" end>Start</NavLink>
          <NavLink to="/game">Start Game</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/experience">Internship</NavLink>
          <NavLink to="/achievements">Trophies</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </section>
    </main>
  );
}

export default Layout;
