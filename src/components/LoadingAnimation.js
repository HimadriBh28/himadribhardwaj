import React, { useEffect, useState, useRef } from 'react';
import './LoadingAnimation.css';

const LoadingAnimation = ({ onComplete }) => {
  const [animationStage, setAnimationStage] = useState(0);
  const [needsClick, setNeedsClick] = useState(false);
  const audioRef = useRef(null);

  const startAnimation = () => {
    // Play sound
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Play error:', e));
    }
    
    // Start animation
    setAnimationStage(1);
    setTimeout(() => setAnimationStage(2), 300);
    setTimeout(() => setAnimationStage(3), 800);
    setTimeout(() => setAnimationStage(4), 1000);
    setTimeout(() => setAnimationStage(5), 1800);
    setTimeout(() => {
      setAnimationStage(6);
      setTimeout(() => onComplete(), 800);
    }, 2800);
  };

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/audio/netflix-tudum-sfx-n-c.mp3');
    audioRef.current.volume = 0.7;
    audioRef.current.load();
    
    // Try to autoplay
    const tryAutoplay = async () => {
      try {
        await audioRef.current.play();
        startAnimation();
      } catch (error) {
        console.log('Autoplay prevented, showing start button');
        setNeedsClick(true);
        setAnimationStage(0);
      }
    };
    
    tryAutoplay();
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  if (needsClick) {
    return (
      <div className="netflix-loader">
        <div className="start-screen">
          <div className="hb-logo-netflix" style={{ fontSize: '80px', marginBottom: '40px' }}>
            <span className="hb-h">H</span>
            <span className="hb-b">B</span>
          </div>
          <button className="start-button" onClick={startAnimation}>
            <i className="fas fa-play"></i> START
          </button>
          <p className="start-hint">Click anywhere to begin</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`netflix-loader ${animationStage >= 5 ? 'fade-out' : ''}`}>
      <div className={`red-flash ${animationStage >= 2 ? 'active' : ''}`}></div>
      
      <div className={`hb-container ${animationStage >= 1 ? 'show' : ''}`}>
        <div className="hb-logo-netflix">
          <span className="hb-h">H</span>
          <span className="hb-b">B</span>
        </div>
      </div>
      
      <div className={`scan-lines ${animationStage >= 3 ? 'active' : ''}`}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className="scan-line"></div>
        ))}
      </div>
      
      <div className={`reveal-text ${animationStage >= 4 ? 'active' : ''}`}>
        <h1 className="portfolio-title">PORTFOLIO</h1>
        <p className="portfolio-subtitle">Himadri Bhardwaj</p>
      </div>
      
      <div className={`sound-visualizer ${animationStage >= 2 && animationStage < 5 ? 'active' : ''}`}>
        <div className="visualizer-bar"></div>
        <div className="visualizer-bar"></div>
        <div className="visualizer-bar"></div>
        <div className="visualizer-bar"></div>
        <div className="visualizer-bar"></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
