import React from 'react';
import './components.css';

const DetailsSection = () => {
  // Placeholder data, waiting for user to provide real details
  const date = "4 de Julio";
  const time = "XX:XX PM";
  const locationName = "Lugar por definir";
  const mapLink = "#"; 

  return (
    <div className="details-section animate-float-up delay-1 relative">
      <img src="/images/djcatnip-hero2.png" alt="DJ Catnip" className="floating-character char-djcatnip animate-float" />
      <img src="/images/mercat-hero3.png" alt="Mercat" className="floating-character char-mercat animate-float delay-2" />
      
      <div className="details-card glass-card">
        <h3 className="details-title">Detalles de la Fiesta</h3>
        
        <div className="detail-item">
          <span className="icon">📅</span>
          <div>
            <strong>Fecha</strong>
            <p>{date}</p>
          </div>
        </div>

        <div className="detail-item">
          <span className="icon">⏰</span>
          <div>
            <strong>Hora</strong>
            <p>{time}</p>
          </div>
        </div>

        <div className="detail-item">
          <span className="icon">📍</span>
          <div>
            <strong>Lugar</strong>
            <p>{locationName}</p>
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="map-link">Ver en Google Maps</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
