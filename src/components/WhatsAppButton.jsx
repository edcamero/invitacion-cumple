import React from 'react';
import './components.css';

const WhatsAppButton = () => {
  // Placeholder phone number
  const phoneNumber = "0000000000";
  const message = "¡Hola! Confirmo mi asistencia al cumpleaños gatástico de Zoe Julietta. 🐾🎂";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="cta-section animate-float-up delay-2 relative">
      <img src="/images/kittyfairy-hero.png" alt="Kitty Fairy" className="floating-character char-kittyfairy animate-float delay-1" />
      <img src="/images/pillowcat-hero.png" alt="Pillow Cat" className="floating-character char-pillowcat animate-float delay-2" />
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary animate-pop-in">
        <span className="icon-whatsapp">💬</span>
        Confirmar Asistencia
      </a>
    </div>
  );
};

export default WhatsAppButton;
