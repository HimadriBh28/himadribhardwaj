import React, { useEffect, useState } from 'react';
import './LoadingAnimation.css';

const LoadingAnimation = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Animation sequence
    const timer1 = setTimeout(() => setStage(1), 100);
    const timer2 = setTimeout(() => setStage(2), 500);
    const timer3 = setTimeout(() => setStage(3), 1200);
    const timer4 = setTimeout(() => setStage(4), 2000);
    const timer5 = setTimeout(() => {
      setStage(5);
      setTimeout(onComplete, 500);
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <div className={`loading-overlay ${stage === 5 ? 'fade-out' : ''}`}>
      <div className="loading-container">
        {stage >= 1 && (
          <div className="hb-logo">
            <span className="h-letter">H</span>
            <span className="b-letter">B</span>
          </div>
        )}
        
        {stage >= 2 && <div className="red-flash"></div>}
        
        {stage >= 3 && (
          <div className="scanning-lines">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="scan-line"></div>
            ))}
          </div>
        )}
        
        {stage >= 4 && (
          <div className="reveal-text">
            <h1>PORTFOLIO</h1>
            <p>Himadri Bhardwaj</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingAnimation;
