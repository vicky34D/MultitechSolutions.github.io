import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

import OurClients from './components/OurClients';
import SuccessStories from './components/SuccessStories';
import CaseStudiesList from './components/CaseStudiesList';
import ServicesOffered from './components/ServicesOffered';
import DesignProcess from './components/DesignProcess';
import AwardWinning from './components/AwardWinning';

function HomePage() {
  return (
    <>
      <Hero />
      <OurClients />
      <SuccessStories />
      <CaseStudiesList />
      <ServicesOffered />
      <DesignProcess />
      <AwardWinning />
    </>
  );
}

function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white w-full overflow-hidden font-sans">
      <Header />

      <main className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
