import React, { useEffect, useState } from 'react';
import './LoadingAnimation.css';

const LoadingAnimation = ({ onComplete }) => {
  const [animationState, setAnimationState] = useState('loading');
  const [soundPlayed, setSoundPlayed] = useState(false);

  useEffect(() => {
    // Play sound automatically (browser requires user interaction first)
    const playSound = () => {
      const audio = new Audio('/tudum-sound.mp3');
      audio.volume = 0.5;
      audio.play().catch(e => console.log('Audio play failed:', e));
      setSoundPlayed(true);
    };

    // Start animation sequence
    setTimeout(() => setAnimationState('logo'), 100);
    setTimeout(() => setAnimationState('split'), 800);
    setTimeout(() => setAnimationState('lines'), 1200);
    setTimeout(() => setAnimationState('reveal'), 1800);
    setTimeout(() => {
      setAnimationState('complete');
      setTimeout(onComplete, 500);
    }, 2500);

    // Try to play sound (will work after user interaction)
    document.body.addEventListener('click', playSound, { once: true });
    
    return () => {
      document.body.removeEventListener('click', playSound);
    };
  }, [onComplete]);

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
      </div>
    </div>
  );
};

export default LoadingAnimation;
