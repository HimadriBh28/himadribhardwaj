export default function StartScreen({ onStart }) {
  return (
    <main className="start-screen">
      <div className="stars" />
      <section className="start-card pixel-border">
        <p className="eyebrow">8-BIT PORTFOLIO RPG</p>
        <h1>Himadri Quest</h1>
        <p className="start-copy">
          A playable portfolio where recruiters explore projects, skills, experience, achievements,
          and contact details like an old-school video game.
        </p>
        <div className="menu-box">
          <button onClick={onStart}>▶ Press Start</button>
          <span>Move with WASD / Arrow Keys</span>
          <span>Interact with E or Enter</span>
        </div>
      </section>
    </main>
  );
}
