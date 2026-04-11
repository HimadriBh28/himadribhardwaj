import React, { useState, useEffect } from 'react';
import './PriyanshiEasterEgg.css';

const PriyanshiEasterEgg = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showFlowers, setShowFlowers] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [inputBuffer, setInputBuffer] = useState('');
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;
      if (key.length === 1 && /[a-zA-Z]/i.test(key)) {
        const newBuffer = (inputBuffer + key).slice(-10);
        setInputBuffer(newBuffer);
        
        if (newBuffer.toLowerCase().includes('priyanshi')) {
          setIsVisible(true);
          setInputBuffer('');
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [inputBuffer]);

  const handleNoHover = () => {
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 60;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleYes = () => {
    setShowFlowers(true);
    setTimeout(() => {
      setShowFinalMessage(true);
    }, 500);
  };

  const closeModal = () => {
    setIsVisible(false);
    setShowFlowers(false);
    setShowFinalMessage(false);
    setNoButtonPosition({ x: 0, y: 0 });
  };

  if (!isVisible) return null;

  if (showFinalMessage) {
    return (
      <div className="easter-egg-overlay" onClick={closeModal}>
        <div className="final-message-container" onClick={(e) => e.stopPropagation()}>
          <div className="flowers-container">
            <div className="flower">🌻</div>
            <div className="flower">🌺</div>
            <div className="flower">🌸</div>
            <div className="flower">🌷</div>
            <div className="flower">🌹</div>
            <div className="flower">💐</div>
            <div className="flower">🌼</div>
            <div className="flower">🏵️</div>
          </div>
          <div className="final-message">
            <h1>THANK YOUU 💖</h1>
            <p>You've made me the happiest person! ❤️</p>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>
    );
  }

  if (showFlowers) {
    return (
      <div className="easter-egg-overlay">
        <div className="flowers-animation">
          <div className="flower-rain">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="falling-flower" style={{ 
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}>
                {['🌸', '🌷', '🌹', '🌻', '🌺', '💐', '🌼'][Math.floor(Math.random() * 7)]}
              </div>
            ))}
          </div>
          <div className="loading-message">
            <h2>Loading your surprise... 💕</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="easter-egg-overlay" onClick={closeModal}>
      <div className="easter-egg-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={closeModal}>×</button>
        
        <div className="easter-egg-header">
          <h1>✨ Himadri is powered by Priyanshi ✨</h1>
        </div>
        
        <div className="easter-egg-message">
          <p>Hi honeyyy 💕</p>
          <p>Will you be my forever and ever galentine? 🥺</p>
        </div>
        
        <div className="easter-egg-buttons">
          <button className="yes-btn" onClick={handleYes}>
            Yes! 💖
          </button>
          <button 
            className="no-btn"
            onMouseEnter={handleNoHover}
            style={{
              position: noButtonPosition.x !== 0 || noButtonPosition.y !== 0 ? 'fixed' : 'relative',
              left: noButtonPosition.x !== 0 ? noButtonPosition.x + 'px' : 'auto',
              top: noButtonPosition.y !== 0 ? noButtonPosition.y + 'px' : 'auto'
            }}
          >
            No 😢
          </button>
        </div>
        
        <div className="easter-egg-hint">
          <p>💕 P.S. The "No" button is feeling shy! 💕</p>
        </div>
      </div>
    </div>
  );
};

export default PriyanshiEasterEgg;
