import React from 'react';
import './components.css';
import { EVENT } from '../config';

const base = import.meta.env.BASE_URL;

const WhatsAppButton = () => {
  const encodedMessage = encodeURIComponent(EVENT.confirmationMessage);
  const whatsappUrl = `https://wa.me/${EVENT.confirmationPhone}?text=${encodedMessage}`;

  return (
    <div className="cta-section animate-float-up delay-2 relative">
      <img src={`${base}images/kittyfairy-hero.webp`} alt="Kitty Fairy" className="floating-character char-kittyfairy animate-float delay-1" aria-hidden="true" />
      <img src={`${base}images/pillowcat-hero.webp`} alt="Pillow Cat" className="floating-character char-pillowcat animate-float delay-2" aria-hidden="true" />
      <img src={`${base}images/Butterfly-left-bottom.webp`} alt="" className="decoration butterfly-lb animate-float" aria-hidden="true" />
      <img src={`${base}images/Butterfly-right-middle.webp`} alt="" className="decoration butterfly-rm animate-float delay-1" aria-hidden="true" />
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary animate-pop-in"
        aria-label={`Confirmar asistencia por WhatsApp al ${EVENT.confirmationPhoneDisplay}`}
      >
        <svg className="icon-whatsapp" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.133.558 4.133 1.532 5.867L.057 23.884a.5.5 0 0 0 .613.612l6.057-1.47A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.803 9.803 0 0 1-5.013-1.378l-.36-.213-3.713.9.927-3.626-.234-.373A9.797 9.797 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
        </svg>
        Confirmar Asistencia
      </a>
    </div>
  );
};

export default React.memo(WhatsAppButton);
