import React, { useState } from 'react';
import SurpriseBox from './components/SurpriseBox';
import HeroSection from './components/HeroSection';
import DetailsSection from './components/DetailsSection';
import WhatsAppButton from './components/WhatsAppButton';
import './index.css';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="app-container">
      {!isOpened && (
        <SurpriseBox onOpen={() => setIsOpened(true)} />
      )}
      
      {isOpened && (
        <main className="invitation-content">
          <HeroSection />
          <DetailsSection />
          <WhatsAppButton />
        </main>
      )}
    </div>
  );
}

export default App;
