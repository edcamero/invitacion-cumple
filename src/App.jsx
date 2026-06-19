import React, { useState, Suspense, useCallback } from 'react';
import SurpriseBox from './components/SurpriseBox';
import './index.css';

const HeroSection = React.lazy(() => import('./components/HeroSection'));
const DetailsSection = React.lazy(() => import('./components/DetailsSection'));
const WhatsAppButton = React.lazy(() => import('./components/WhatsAppButton'));

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpened(true);
  }, []);

  return (
    <div className="app-container">
      {!isOpened && (
        <SurpriseBox onOpen={handleOpen} />
      )}
      
      {isOpened && (
        <main className="invitation-content">
          <Suspense fallback={<div className="loading-spinner" style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-primary-dark)' }}>Cargando la magia...</div>}>
            <HeroSection />
            <DetailsSection />
            <WhatsAppButton />
          </Suspense>
        </main>
      )}
    </div>
  );
}

export default App;
