export default function DialogueBox({ zone, onClose, onOpenPanel }) {
  if (!zone) return null;

  return (
    <section className="dialogue pixel-border">
      <div className="dialogue-head">
        <span>{zone.emoji}</span>
        <h2>{zone.title}</h2>
      </div>
      {zone.lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
      <div className="dialogue-actions">
        {zone.id !== 'about' && (
          <button onClick={() => onOpenPanel(zone.id)}>Open Details</button>
        )}
        <button className="ghost" onClick={onClose}>Close</button>
      </div>
    </section>
  );
}
