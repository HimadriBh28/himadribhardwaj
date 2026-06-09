import React from "react";

function PixelAvatar({ walking = false, onClick }) {
  return (
    <button
      className={`pixel-avatar ${walking ? "walking" : ""}`}
      onClick={onClick}
      aria-label="Talk to Himadri"
      type="button"
    >
      <span className="avatar-shadow" />
      <span className="hair hair-volume" />
      <span className="hair hair-crown" />
      <span className="hair hair-bangs-one" />
      <span className="hair hair-bangs-two" />
      <span className="hair hair-left-lock" />
      <span className="hair hair-right-lock" />
      <span className="face">
        <span className="brow brow-left" />
        <span className="brow brow-right" />
        <span className="eye eye-left" />
        <span className="eye eye-right" />
        <span className="liner liner-left" />
        <span className="liner liner-right" />
        <span className="blush blush-left" />
        <span className="blush blush-right" />
        <span className="lip" />
      </span>
      <span className="ear ear-left" />
      <span className="ear ear-right" />
      <span className="neck" />
      <span className="jacket" />
      <span className="top" />
      <span className="bag-strap" />
      <span className="arm arm-left" />
      <span className="arm arm-right" />
      <span className="jeans" />
      <span className="leg leg-left" />
      <span className="leg leg-right" />
      <span className="shoe shoe-left" />
      <span className="shoe shoe-right" />
    </button>
  );
}

export default PixelAvatar;
