import React, { useState } from 'react';
import Sparkles from './Sparkles';
import { EVENT } from '../config';

const LinkGenerator = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(EVENT.confirmationPhone || '');
  const [generatedLink, setGeneratedLink] = useState('');

  const handleGenerate = () => {
    if (!name.trim()) return;
    const baseUrl = window.location.origin + window.location.pathname;
    const url = new URL(baseUrl);
    url.searchParams.set('invitado', name.trim());
    if (phone.trim() && phone.trim() !== EVENT.confirmationPhone) {
      url.searchParams.set('telefono', phone.trim());
    }
    setGeneratedLink(url.toString());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLink);
    alert('¡Enlace copiado al portapapeles!');
  };

  return (
    <div className="app-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', padding: '2rem', textAlign: 'center' }}>
      <Sparkles />
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '2rem', borderRadius: '15px', boxShadow: 'var(--shadow-lg)', maxWidth: '400px', width: '100%', zIndex: 10 }}>
        <h2 style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem', fontFamily: "'Baloo 2', sans-serif" }}>Generar Invitación</h2>
        <p style={{ marginBottom: '1.5rem', color: 'var(--color-text)', fontSize: '1.1rem' }}>Ingresa el nombre del invitado para generar un enlace personalizado.</p>
        
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre invitado (Ej: Familia Pérez)"
          style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '2px solid var(--color-primary)', marginBottom: '1rem', fontSize: '1.1rem', outline: 'none', boxSizing: 'border-box' }}
        />

        <input 
          type="text" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Número de WhatsApp (Ej: 57321...)"
          style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '2px solid var(--color-primary)', marginBottom: '1rem', fontSize: '1.1rem', outline: 'none', boxSizing: 'border-box' }}
        />
        
        <button 
          onClick={handleGenerate}
          style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer', marginBottom: '1rem', transition: 'background-color 0.3s' }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'var(--color-primary-dark)'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'var(--color-primary)'}
        >
          Generar Enlace
        </button>

        {generatedLink && (
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'var(--color-bg)', borderRadius: '8px', wordBreak: 'break-all', border: '1px solid var(--color-accent)' }}>
            <p style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--color-secondary)' }}><strong>Enlace Generado:</strong></p>
            <a href={generatedLink} target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary-dark)', fontSize: '1rem', display: 'block', marginBottom: '1rem', textDecoration: 'none', fontWeight: 'bold' }}>
              {generatedLink}
            </a>
            <button 
              onClick={handleCopy}
              style={{ padding: '0.6rem 1.2rem', backgroundColor: 'var(--color-secondary)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}
            >
              Copiar Enlace
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkGenerator;
