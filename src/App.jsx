import React, { useState, Suspense, useCallback, useEffect } from 'react';
import SurpriseBox from './components/SurpriseBox';
import Sparkles from './components/Sparkles';
import LinkGenerator from './components/LinkGenerator';
import './index.css';

const HeroSection = React.lazy(() => import('./components/HeroSection'));
const DetailsSection = React.lazy(() => import('./components/DetailsSection'));
const WhatsAppButton = React.lazy(() => import('./components/WhatsAppButton'));

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isGenerator, setIsGenerator] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const hash = window.location.hash;
    setIsGenerator(hash === '#generar');
    
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get('invitado');
    if (name) {
      setGuestName(name);
    }
    
    const urlPhone = queryParams.get('telefono');
    if (urlPhone) {
      setPhone(urlPhone);
    }
    
    const handleHashChange = () => {
      setIsGenerator(window.location.hash === '#generar');
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpened(true);
  }, []);

  if (isGenerator) {
    return <LinkGenerator />;
  }

  return (
    <div className="app-container">
      <Sparkles />
      {!isOpened && (
        <SurpriseBox onOpen={handleOpen} guestName={guestName} />
      )}

      {isOpened && (
        <main className="invitation-content">
          <Suspense fallback={<div className="loading-spinner" style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-primary-dark)' }}>Cargando la magia...</div>}>
            <HeroSection guestName={guestName} />
            <DetailsSection />
            <WhatsAppButton phone={phone} />
          </Suspense>
        </main>
      )}
    </div>
  );
}

export default App;
