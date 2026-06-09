import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PixelAvatar from "../components/PixelAvatar";
import Door from "../components/Door";
import { doors, facts } from "../data";

const WORLD_WIDTH = 1660;
const WORLD_HEIGHT = 620;
const STEP = 18;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function distance(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function playStepSound(enabled) {
  if (!enabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.value = 145;
    gain.gain.value = 0.025;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.045);
  } catch (err) {
    // Audio is optional. Ignore if the browser blocks it.
  }
}

function GameWorld() {
  const navigate = useNavigate();
  const [player, setPlayer] = useState({ x: 80, y: 390 });
  const [walking, setWalking] = useState(false);
  const [sound, setSound] = useState(false);
  const [visitorName, setVisitorName] = useState(() => localStorage.getItem("visitorName") || "");
  const [showNameBox, setShowNameBox] = useState(() => !localStorage.getItem("visitorName"));
  const [bubble, setBubble] = useState("Hi, I am Himadri — AI/ML Intern at BISAG-N, MeitY and B.Tech student at JUIT Solan ");
  const [factIndex, setFactIndex] = useState(0);
  const [transitionDoor, setTransitionDoor] = useState(null);
  const timerRef = useRef(null);

  const nearestDoor = useMemo(() => {
    const p = { x: player.x + 44, y: player.y + 70 };
    return doors.find((door) => distance(p, { x: door.x + 48, y: door.y + 92 }) < 120);
  }, [player]);

  useEffect(() => {
    timerRef.current = setTimeout(() => setBubble(""), 6500);
    return () => clearTimeout(timerRef.current);
  }, []);

  const showBubble = (text, duration = 5200) => {
    clearTimeout(timerRef.current);
    setBubble(text);
    timerRef.current = setTimeout(() => setBubble(""), duration);
  };

  const movePlayer = (dx, dy) => {
    setPlayer((prev) => ({
      x: clamp(prev.x + dx, 25, WORLD_WIDTH - 110),
      y: clamp(prev.y + dy, 280, WORLD_HEIGHT - 140),
    }));
    setWalking(true);
    playStepSound(sound);
    setTimeout(() => setWalking(false), 180);
  };

  const enterDoor = (door) => {
    if (!door) {
      showBubble("Walk close to a glowing door, then press E or Enter to enter that stage.");
      return;
    }
    setTransitionDoor(door.id);
    showBubble(`Entering ${door.label} stage...`, 1200);
    setTimeout(() => navigate(`/stage/${door.id}`), 900);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      const key = event.key.toLowerCase();
      if (["arrowup", "w"].includes(key)) movePlayer(0, -STEP);
      if (["arrowdown", "s"].includes(key)) movePlayer(0, STEP);
      if (["arrowleft", "a"].includes(key)) movePlayer(-STEP, 0);
      if (["arrowright", "d"].includes(key)) movePlayer(STEP, 0);
      if (["e", "enter"].includes(key)) enterDoor(nearestDoor);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    
  }, [nearestDoor, sound]);

  const saveName = (event) => {
    event.preventDefault();
    const clean = visitorName.trim();
    if (clean) {
      localStorage.setItem("visitorName", clean);
      showBubble(`Nice to meet you, ${clean}! Explore the doors and press E near them.`);
    } else {
      showBubble("No worries, explorer. You can still play through the portfolio.");
    }
    setShowNameBox(false);
  };

  const talkToPlayer = () => {
    const prefix = visitorName.trim() ? `${visitorName.trim()}, ` : "Explorer, ";
    showBubble(prefix + facts[factIndex % facts.length]);
    setFactIndex((i) => i + 1);
  };

  return (
    <main className={`world-page ${transitionDoor ? "warp-active" : ""}`}>
      <div className="scanlines" />
      <header className="hud">
        <div>
          <p className="eyebrow">HIMADRI.EXE</p>
          <h1>Portfolio Quest</h1>
        </div>
        <div className="hud-actions">
          <button onClick={() => setSound((value) => !value)} type="button">
            {sound ? "Sound On" : "Sound Off"}
          </button>
          <button onClick={() => setShowNameBox(true)} type="button">
            {visitorName ? `Hi, ${visitorName}` : "Your Name?"}
          </button>
        </div>
      </header>

      {showNameBox && (
        <form className="name-card" onSubmit={saveName}>
          <label htmlFor="visitor-name">Optional: what should I call you?</label>
          <div>
            <input
              id="visitor-name"
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)}
              placeholder="Your name"
            />
            <button type="submit">Enter</button>
            <button type="button" onClick={() => setShowNameBox(false)}>Skip</button>
          </div>
        </form>
      )}

      <section className="viewport" aria-label="Playable portfolio map">
        <div className="map" style={{ width: WORLD_WIDTH, height: WORLD_HEIGHT }}>
          <div className="sky-glow" />
          <div className="pixel-moon" />
          <div className="cloud cloud-one" />
          <div className="cloud cloud-two" />
          <div className="neon-city" />
          {doors.map((door) => (
            <Door key={door.id} door={door} />
          ))}

          <div
            className="player-wrap"
            style={{ transform: `translate(${player.x}px, ${player.y}px)` }}
          >
            {bubble && <div className="speech-bubble">{bubble}</div>}
            <PixelAvatar walking={walking} onClick={talkToPlayer} />
          </div>

          <div className="road" />
        </div>
      </section>

      <footer className="game-help">
        <span>Move: WASD / Arrow Keys</span>
        <span>Enter door: E / Enter</span>
        <span>{nearestDoor ? `Nearby: ${nearestDoor.label}` : "Find a glowing door"}</span>
      </footer>

      <div className="mobile-pad">
        <button onClick={() => movePlayer(0, -STEP)}>↑</button>
        <button onClick={() => movePlayer(-STEP, 0)}>←</button>
        <button onClick={() => enterDoor(nearestDoor)}>E</button>
        <button onClick={() => movePlayer(STEP, 0)}>→</button>
        <button onClick={() => movePlayer(0, STEP)}>↓</button>
      </div>
    </main>
  );
}

export default GameWorld;
