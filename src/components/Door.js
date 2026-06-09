import React from "react";

function Door({ door }) {
  return (
    <div className={`door door-${door.id}`} style={{ left: door.x, top: door.y }}>
      <div className="door-roof" />
      <div className="door-body">
        <span className="door-glow" />
        <span className="door-knob" />
      </div>
      <p>{door.label}</p>
    </div>
  );
}

export default Door;
