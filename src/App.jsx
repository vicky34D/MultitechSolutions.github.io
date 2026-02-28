import { Routes, Route } from 'react-router-dom';
import { SocialMediaFeature, VersatileFeature } from './components/Features';
import Hero from './components/Hero';
import DemoSection from './components/DemoSection';
import Header from './components/Header';
import MoreThanCompressorSection from './components/MoreThanCompressorSection';
import MoreFromVeedSection from './components/MoreFromVeedSection';
import DiscoverExploreSection from './components/DiscoverExploreSection';
import Footer from './components/Footer';
import InfoSection from './components/InfoSection';

import RecognitionSection from './components/RecognitionSection';
import HowToSection from './components/HowToSection';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';

/* ── Home page ─────────────────────────────────────────────── */
function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero />

        <InfoSection />
        <HowToSection />
        <SocialMediaFeature />
        <VersatileFeature />
        <RecognitionSection />
        <DemoSection />
        <MoreThanCompressorSection />
        <MoreFromVeedSection />
        <DiscoverExploreSection />
        <Footer />
      </main>
    </div>
  );
}

/* ── Root with routing ─────────────────────────────────────── */
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}

export default App;
