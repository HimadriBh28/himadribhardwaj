import React, { useState } from 'react';
import './EntryScreen.css';

const EntryScreen = ({ onEnter }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const playTudumSound = () => {
    console.log('Attempting to play Netflix Tudum sound...');
    
    // Create audio element with your file
    const audio = new Audio('/audio/tudum.mp3');
    audio.volume = 1.0;
    audio.currentTime = 0;
    
    // Play the sound
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('✅ Netflix TUDUM sound is playing! 🔊');
        })
        .catch(error => {
          console.error('Sound playback failed:', error);
          // Show alert to help user
          alert('Click OK to hear the Netflix Tudum sound!');
          audio.play();
        });
    }
  };

  const handleEnter = () => {
    // Play the Tudum sound
    playTudumSound();
    
    // Start animation
    setIsAnimating(true);
    
    // After animation, enter portfolio
    setTimeout(() => {
      onEnter();
    }, 2800);
  };

  return (
    <div className="entry-screen">
      <div className="entry-container">
        <div className={`hb-logo ${isAnimating ? 'animate' : ''}`}>
          <span className="letter-h">H</span>
          <span className="letter-b">B</span>
        </div>
        
        {!isAnimating && (
          <button className="enter-btn" onClick={handleEnter}>
            🎬 ENTER PORTFOLIO
          </button>
        )}
        
        {isAnimating && (
          <div className="loading-overlay">
            <div className="red-flash"></div>
            <div className="scan-lines">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="scan-line"></div>
              ))}
            </div>
            <div className="loading-text">
              <h1>PORTFOLIO</h1>
              <p>Himadri Bhardwaj</p>
            </div>
          </div>
        )}
        
        {!isAnimating && (
          <p className="hint"> CLICK AND ENTER THE PROFILE </p>
        )}
      </div>
    </div>
  );
};

export default EntryScreen;
