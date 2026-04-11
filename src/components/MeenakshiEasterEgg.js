import React, { useState, useEffect } from 'react';
import './MeenakshiEasterEgg.css';

const MeenakshiEasterEgg = () => {
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
        
        if (newBuffer.toLowerCase().includes('meenakshi')) {
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
      <div className="meenakshi-easter-egg-overlay" onClick={closeModal}>
        <div className="meenakshi-final-message-container" onClick={(e) => e.stopPropagation()}>
          <div className="meenakshi-flowers-container">
            <div className="meenakshi-flower">🌻</div>
            <div className="meenakshi-flower">🌺</div>
            <div className="meenakshi-flower">🌸</div>
            <div className="meenakshi-flower">🌷</div>
            <div className="meenakshi-flower">🌹</div>
            <div className="meenakshi-flower">💐</div>
            <div className="meenakshi-flower">🌼</div>
            <div className="meenakshi-flower">🏵️</div>
            <div className="meenakshi-flower">🥰</div>
          </div>
          <div className="meenakshi-final-message">
            <h1>THANK YOU MAUSI! 💖</h1>
            <p>Your love means the world to me! ❤️</p>
            <p style={{ fontSize: '18px', marginTop: '10px' }}>I love you forever and always! 🥰</p>
            <button className="meenakshi-close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>
    );
  }

  if (showFlowers) {
    return (
      <div className="meenakshi-easter-egg-overlay">
        <div className="meenakshi-flowers-animation">
          <div className="meenakshi-flower-rain">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="meenakshi-falling-flower" style={{ 
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}>
                {['🌸', '🌷', '🌹', '🌻', '🌺', '��', '🌼', '💖', '🥰'][Math.floor(Math.random() * 9)]}
              </div>
            ))}
          </div>
          <div className="meenakshi-loading-message">
            <h2>Sending love to my dear Mausi... 💕</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="meenakshi-easter-egg-overlay" onClick={closeModal}>
      <div className="meenakshi-easter-egg-modal" onClick={(e) => e.stopPropagation()}>
        <button className="meenakshi-close-modal" onClick={closeModal}>×</button>
        
        <div className="meenakshi-easter-egg-header">
          <h1>✨ Himadri is powered by Meenakshi ✨</h1>
        </div>
        
        <div className="meenakshi-easter-egg-message">
          <p>Dear Mausi 🥰</p>
          <p>Will you be my Mausi forever and love me forever? 💕</p>
        </div>
        
        <div className="meenakshi-easter-egg-buttons">
          <button className="meenakshi-yes-btn" onClick={handleYes}>
            Yes! Forever 💖
          </button>
          <button 
            className="meenakshi-no-btn"
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
        
        <div className="meenakshi-easter-egg-hint">
          <p>💕 P.S. The "No" button is playing hide and seek! 💕</p>
          <p style={{ fontSize: '12px', marginTop: '5px', color: '#ff69b4' }}>You can only say YES to love! 🥰</p>
        </div>
      </div>
    </div>
  );
};

export default MeenakshiEasterEgg;
