import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Features from './components/Features';
import WhatSetsUsApart from './components/ServicesOffered';
import OurClients from './components/OurClients';
import SuccessStories from './components/SuccessStories';
import AwardWinning from './components/AwardWinning';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <WhatSetsUsApart />
      <OurClients />
      <SuccessStories />
      <AwardWinning />
    </>
  );
}

function App() {
  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      minHeight: '100vh',
      width: '100%',
      overflowX: 'hidden',
      fontFamily: 'var(--kiros-font)',
    }}>
      <Header />

      <main style={{ width: '100%' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
