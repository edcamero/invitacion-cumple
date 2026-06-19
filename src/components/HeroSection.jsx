import React from 'react';
import './components.css';
import { EVENT } from '../config';

const base = import.meta.env.BASE_URL;

const HeroSection = () => {
  return (
    <div className="hero-section animate-float-up">
      <img src={`${base}images/Stardust.webp`} alt="" className="decoration stardust-left animate-pulse-slow" aria-hidden="true" />
      <img src={`${base}images/Stardust-Right.webp`} alt="" className="decoration stardust-right animate-pulse-slow delay-1" aria-hidden="true" />
      <img src={`${base}images/Butterfly-left-top.webp`} alt="" className="decoration butterfly-lt animate-float" aria-hidden="true" />
      <img src={`${base}images/Butterfly-right-top.webp`} alt="" className="decoration butterfly-rt animate-float delay-1" aria-hidden="true" />

      <img src={`${base}images/gabby-hero2.webp`} alt="Gabby" className="floating-character char-gabby animate-pop-in" />
      <img src={`${base}images/pandy-hero2.webp`} alt="Pandy Paws" className="floating-character char-pandy animate-pop-in delay-1" />
      <img src={`${base}images/cakey-hero2.webp`} alt="CatRat" className="floating-character char-cakey animate-pop-in delay-2" />

      <div className="hero-content glass-card with-ears">
        <img src={`${base}images/gabby-s13-logo-latam3.webp`} alt="La Casa de Muñecas de Gabby" className="main-logo" />
        <h1 className="title">{EVENT.childName}</h1>
        <h2 className="subtitle">¡Mis {EVENT.age} Añitos!</h2>
        <p className="welcome-text">
          ¡Estás invitado a la fiesta más gatástica del año en La Casa de Muñecas!
        </p>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
