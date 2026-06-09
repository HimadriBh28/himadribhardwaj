import { useEffect, useMemo, useState } from 'react';
import { PLAYER_START, zones } from '../data/gameData';
import DialogueBox from './DialogueBox';
import Hud from './Hud';
import InfoPanel from './InfoPanel';

const STEP = 2.5;

function overlaps(player, zone) {
  return (
    player.x + 4 >= zone.x &&
    player.x <= zone.x + zone.w &&
    player.y + 6 >= zone.y &&
    player.y <= zone.y + zone.h
  );
}

export default function GameWorld() {
  const [player, setPlayer] = useState(PLAYER_START);
  const [activeZone, setActiveZone] = useState(null);
  const [dialogueZone, setDialogueZone] = useState(null);
  const [activePanel, setActivePanel] = useState(null);
  const [unlocked, setUnlocked] = useState(() => new Set(['about']));

  const unlockedCount = unlocked.size;

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'w', 'a', 's', 'd', 'e', 'enter'].includes(key)) {
        event.preventDefault();
      }

      if (key === 'e' || key === 'enter') {
        if (activeZone) {
          setDialogueZone(activeZone);
          setUnlocked((prev) => new Set(prev).add(activeZone.id));
        }
        return;
      }

      setPlayer((prev) => {
        let next = { ...prev };
        if (key === 'arrowup' || key === 'w') next.y -= STEP;
        if (key === 'arrowdown' || key === 's') next.y += STEP;
        if (key === 'arrowleft' || key === 'a') next.x -= STEP;
        if (key === 'arrowright' || key === 'd') next.x += STEP;
        next.x = Math.max(2, Math.min(94, next.x));
        next.y = Math.max(5, Math.min(87, next.y));
        return next;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeZone]);

  useEffect(() => {
    const found = zones.find((zone) => overlaps(player, zone));
    setActiveZone(found || null);
  }, [player]);

  const mobileControls = useMemo(() => ([
    ['↑', 0, -STEP], ['←', -STEP, 0], ['↓', 0, STEP], ['→', STEP, 0]
  ]), []);

  const moveMobile = (dx, dy) => {
    setPlayer((prev) => ({
      x: Math.max(2, Math.min(94, prev.x + dx)),
      y: Math.max(5, Math.min(87, prev.y + dy))
    }));
  };

  return (
    <main className="game-shell">
      <Hud unlockedCount={unlockedCount} total={zones.length} onOpenPanel={setActivePanel} />

      <section className="game-stage pixel-border" aria-label="Playable portfolio map">
        <div className="tile-map">
          <div className="river" />
          <div className="path path-one" />
          <div className="path path-two" />
          {zones.map((zone) => (
            <button
              key={zone.id}
              className={`zone ${zone.type} ${unlocked.has(zone.id) ? 'unlocked' : ''}`}
              style={{ left: `${zone.x}%`, top: `${zone.y}%`, width: `${zone.w}%`, height: `${zone.h}%` }}
              onClick={() => {
                setDialogueZone(zone);
                setUnlocked((prev) => new Set(prev).add(zone.id));
              }}
              aria-label={zone.title}
            >
              <span>{zone.emoji}</span>
              <small>{zone.title}</small>
            </button>
          ))}

          <div className="player" style={{ left: `${player.x}%`, top: `${player.y}%` }}>
            <span className="player-head" />
            <span className="player-body" />
          </div>

          {activeZone && (
            <div className="interaction-tip pixel-border">
              {activeZone.prompt}: <strong>{activeZone.title}</strong> — press E
            </div>
          )}
        </div>
      </section>

      <section className="mobile-controls pixel-border">
        {mobileControls.map(([label, dx, dy]) => (
          <button key={label} onClick={() => moveMobile(dx, dy)}>{label}</button>
        ))}
        <button className="wide" onClick={() => {
          if (activeZone) {
            setDialogueZone(activeZone);
            setUnlocked((prev) => new Set(prev).add(activeZone.id));
          }
        }}>Interact</button>
      </section>

      <DialogueBox
        zone={dialogueZone}
        onClose={() => setDialogueZone(null)}
        onOpenPanel={(panel) => {
          setActivePanel(panel);
          setDialogueZone(null);
        }}
      />
      <InfoPanel activePanel={activePanel} onClose={() => setActivePanel(null)} />
    </main>
  );
}
