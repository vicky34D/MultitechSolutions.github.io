import { SocialMediaFeature, VersatileFeature } from './components/Features';
import Hero from './components/Hero';
import DemoSection from './components/DemoSection';
import Header from './components/Header';
import MoreThanCompressorSection from './components/MoreThanCompressorSection';
import MoreFromVeedSection from './components/MoreFromVeedSection';
import DiscoverExploreSection from './components/DiscoverExploreSection';
import Footer from './components/Footer';
import InfoSection from './components/InfoSection';
import LogoTicker from './components/LogoTicker';
import RecognitionSection from './components/RecognitionSection';
import HowToSection from './components/HowToSection';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero />

        {/* Logos Section */}
        {/* Logos Section - Replaced with Ticker */}
        <LogoTicker />

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

export default App;
