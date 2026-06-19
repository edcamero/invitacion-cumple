import React from 'react';
import './components.css';
import { EVENT } from '../config';

const base = import.meta.env.BASE_URL;

const DetailsSection = () => {
  return (
    <div className="details-section animate-float-up delay-1 relative">
      <img src={`${base}images/djcatnip-hero2.webp`} alt="DJ Catnip" className="floating-character char-djcatnip animate-float" aria-hidden="true" />
      <img src={`${base}images/mercat-hero3.webp`} alt="Mercat" className="floating-character char-mercat animate-float delay-2" aria-hidden="true" />

      <div className="details-card glass-card">
        <h3 className="details-title">Detalles de la Fiesta</h3>

        <div className="detail-item">
          <span className="icon" aria-hidden="true">📅</span>
          <div>
            <strong>Fecha</strong>
            <p>{EVENT.date}</p>
          </div>
        </div>

        <div className="detail-item">
          <span className="icon" aria-hidden="true">⏰</span>
          <div>
            <strong>Hora</strong>
            <p>{EVENT.time}</p>
          </div>
        </div>

        <div className="detail-item">
          <span className="icon" aria-hidden="true">📍</span>
          <div>
            <strong>Lugar</strong>
            <p>{EVENT.locationName}</p>
            <p className="location-address">{EVENT.locationAddress}</p>
            <a
              href={EVENT.locationMapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
              aria-label={`Ver ${EVENT.locationName} en Google Maps`}
            >
              Ver en Google Maps
            </a>
          </div>
        </div>

        <div className="detail-item">
          <span className="icon" aria-hidden="true">📞</span>
          <div>
            <strong>Confirmación</strong>
            <a
              href={`tel:${EVENT.confirmationPhone}`}
              className="phone-link"
              aria-label={`Llamar al número de confirmación ${EVENT.confirmationPhoneDisplay}`}
            >
              {EVENT.confirmationPhoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DetailsSection);
