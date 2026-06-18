import React from 'react';
import './components.css';

const base = import.meta.env.BASE_URL;

const HeroSection = () => {
  return (
    <div className="hero-section animate-float-up">
      {/* Background decorations */}
      <img src={`${base}images/Stardust.png`} alt="" className="decoration stardust-left animate-pulse-slow" />
      <img src={`${base}images/Stardust-Right.png`} alt="" className="decoration stardust-right animate-pulse-slow delay-1" />
      <img src={`${base}images/Butterfly-left-top.png`} alt="" className="decoration butterfly-lt animate-float" />
      <img src={`${base}images/Butterfly-right-top.png`} alt="" className="decoration butterfly-rt animate-float delay-1" />
      
      {/* Floating Characters */}
      <img src={`${base}images/gabby-hero2.png`} alt="Gabby" className="floating-character char-gabby animate-pop-in" />
      <img src={`${base}images/pandy-hero2.png`} alt="Pandy" className="floating-character char-pandy animate-pop-in delay-1" />
      <img src={`${base}images/cakey-hero2.png`} alt="Cakey" className="floating-character char-cakey animate-pop-in delay-2" />

      <div className="hero-content glass-card with-ears">
        <img src={`${base}images/gabby-s13-logo-latam3.png`} alt="La Casa de Muñecas de Gabby" className="main-logo" />
        <h1 className="title">Zoe Julietta</h1>
        <h2 className="subtitle">¡Mis 4 Añitos!</h2>
        <p className="welcome-text">
          ¡Estás invitado a la fiesta más gatástica del año en La Casa de Muñecas!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
