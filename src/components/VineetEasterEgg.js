import React, { useState, useEffect } from 'react';
import './VineetEasterEgg.css';

const VineetEasterEgg = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [inputBuffer, setInputBuffer] = useState('');
  const [celebration, setCelebration] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;
      if (key.length === 1 && /[a-zA-Z]/i.test(key)) {
        const newBuffer = (inputBuffer + key).slice(-7);
        setInputBuffer(newBuffer);
        
        if (newBuffer.toLowerCase().includes('vineet')) {
          setIsVisible(true);
          setInputBuffer('');
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [inputBuffer]);

  const handleNoHover = () => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 80;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleYes = () => {
    setCelebration(true);
    setTimeout(() => {
      setShowThankYou(true);
    }, 2000);
  };

  const closeModal = () => {
    setIsVisible(false);
    setShowThankYou(false);
    setCelebration(false);
    setNoButtonPosition({ x: 0, y: 0 });
  };

  if (!isVisible) return null;

  if (celebration) {
    return (
      <div className="vineet-easter-egg-overlay">
        <div className="vineet-celebration">
          <div className="vineet-confetti">
            {[...Array(100)].map((_, i) => (
              <div key={i} className="vineet-confetti-piece" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`
              }}></div>
            ))}
          </div>
          <div className="vineet-loading">
            <h2>🎉 CELEBRATING YOU, BHAIYA! 🎉</h2>
            <p>You're the best brother ever!</p>
          </div>
        </div>
      </div>
    );
  }

  if (showThankYou) {
    return (
      <div className="vineet-easter-egg-overlay" onClick={closeModal}>
        <div className="vineet-final-container" onClick={(e) => e.stopPropagation()}>
          <div className="vineet-hearts">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="vineet-heart" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}>❤️</div>
            ))}
          </div>
          <div className="vineet-thankyou-message">
            <h1>THANK YOU VINEET! 🙏</h1>
            <p>You always did believe in me ❤️</p>
            <p style={{ fontSize: '20px', marginTop: '20px' }}>Your belief made me who I am today!</p>
            <p style={{ fontSize: '18px', marginTop: '10px', color: '#ffd700' }}>Best brother ever! 🏆</p>
            <button className="vineet-close-btn" onClick={closeModal}>Close ❤️</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="vineet-easter-egg-overlay" onClick={closeModal}>
      <div className="vineet-easter-egg-modal" onClick={(e) => e.stopPropagation()}>
        <button className="vineet-close-modal" onClick={closeModal}>×</button>
        
        <div className="vineet-easter-egg-header">
          <h1>🎮 EASTER EGG FOUND! 🎮</h1>
          <p className="vineet-subtitle">You've discovered a secret message!</p>
        </div>
        
        <div className="vineet-easter-egg-message">
          <p>Hey Bhaiya! 👋</p>
          <p>Chalo batao, kya meri website acchi hai? 🤔</p>
        </div>
        
        <div className="vineet-easter-egg-buttons">
          <button className="vineet-yes-btn" onClick={handleYes}>
            Yes! ❤️
          </button>
          <button 
            className="vineet-no-btn"
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
        
        <div className="vineet-easter-egg-hint">
          <p>💪 You can only say YES - because you always support me! 💪</p>
          <p style={{ fontSize: '11px', marginTop: '5px' }}>The "No" button is playing hide and seek! 😂</p>
        </div>
      </div>
    </div>
  );
};

export default VineetEasterEgg;
