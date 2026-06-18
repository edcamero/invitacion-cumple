import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import './components.css';

const base = import.meta.env.BASE_URL;

const SurpriseBox = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTap = () => {
    setIsOpen(true);
    
    // Trigger confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFB6C1', '#C8A2C8', '#FFFACD'] // Thematic colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFB6C1', '#C8A2C8', '#FFFACD']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    setTimeout(() => {
      onOpen();
    }, 1500); // Wait for the animation to finish
  };

  return (
    <div className={`surprise-container ${isOpen ? 'open' : ''}`} onClick={!isOpen ? handleTap : undefined}>
      <div className={`surprise-box ${isOpen ? 'explode' : 'animate-shake'}`}>
        <div className="box-lid"></div>
        <div className="box-body">
          <span className="tap-text">¡Toca para abrir!</span>
        </div>
        {isOpen && <img src={`${base}images/gabby-exit.png`} alt="Surprise" className="surprise-character" />}
      </div>
    </div>
  );
};

export default SurpriseBox;
