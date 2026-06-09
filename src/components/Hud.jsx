export default function Hud({ unlockedCount, total, onOpenPanel }) {
  return (
    <header className="hud pixel-border">
      <div>
        <p className="hud-label">Current Quest</p>
        <strong>Explore Himadri&apos;s World</strong>
      </div>
      <div className="hud-progress">
        <span>{unlockedCount}/{total} areas unlocked</span>
        <div className="progress-track">
          <div style={{ width: `${(unlockedCount / total) * 100}%` }} />
        </div>
      </div>
      <button onClick={() => onOpenPanel('map')}>Quest Log</button>
    </header>
  );
}
