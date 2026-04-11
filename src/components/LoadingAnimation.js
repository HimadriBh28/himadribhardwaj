import React, { useEffect, useState, useRef } from 'react';
import './LoadingAnimation.css';

const LoadingAnimation = ({ onComplete }) => {
  const [animationState, setAnimationState] = useState('loading');
  const [showEnterButton, setShowEnterButton] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio instance
    audioRef.current = new Audio('/audio/tudum.mp3');
    audioRef.current.volume = 0.6;
    audioRef.current.load();

    // Start animation
    setTimeout(() => setAnimationState('logo'), 100);
    
    // Try to play sound
    const tryPlaySound = () => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            console.log('Tudum sound playing!');
          })
          .catch(() => {
            console.log('Browser requires user interaction');
            setShowEnterButton(true);
          });
      }
    };
    
    setTimeout(tryPlaySound, 200);
    setTimeout(() => setAnimationState('split'), 800);
    setTimeout(() => setAnimationState('lines'), 1200);
    setTimeout(() => setAnimationState('reveal'), 1800);
    
    const completeTimer = setTimeout(() => {
      setAnimationState('complete');
      setTimeout(onComplete, 500);
    }, 2500);

    return () => {
      clearTimeout(completeTimer);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [onComplete]);

  const handleEnterClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setShowEnterButton(false);
    // Complete the animation
    setAnimationState('complete');
    setTimeout(onComplete, 500);
  };

  return (
    <div className={`loading-screen ${animationState === 'complete' ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className={`hb-logo ${animationState === 'logo' ? 'show' : ''}`}>
          <span className="hb-letter">H</span>
          <span className="hb-letter">B</span>
        </div>
        
        <div className={`split-animation ${animationState === 'split' ? 'active' : ''}`}>
          <div className="split-line left"></div>
          <div className="split-line right"></div>
        </div>
        
        <div className={`lines-animation ${animationState === 'lines' ? 'active' : ''}`}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`line line-${i}`} style={{ animationDelay: `${i * 0.05}s` }}></div>
          ))}
        </div>
        
        <div className={`reveal-content ${animationState === 'reveal' ? 'active' : ''}`}>
          <div className="netflix-text">PORTFOLIO</div>
          <div className="subtitle">Himadri Bhardwaj</div>
        </div>
        
        {showEnterButton && (
          <button className="enter-button" onClick={handleEnterClick}>
            Click to Enter <i className="fas fa-play"></i>
          </button>
        )}
      </div>
      
      <div className="sound-wave">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default LoadingAnimation;
