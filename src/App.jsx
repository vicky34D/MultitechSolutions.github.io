import { SocialMediaFeature, VersatileFeature } from './components/Features';
import Hero from './components/Hero';
import DemoSection from './components/DemoSection';
import Header from './components/Header';
import MoreThanCompressorSection from './components/MoreThanCompressorSection';
import MoreFromVeedSection from './components/MoreFromVeedSection';
import DiscoverExploreSection from './components/DiscoverExploreSection';
import Footer from './components/Footer';
import InfoSection from './components/InfoSection';
import HowToSection from './components/HowToSection';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero />

        {/* Logos Section */}
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4rem',
          opacity: '0.4',
          filter: 'grayscale(100%)',
          flexWrap: 'wrap'
        }}>
          {['NBCUniversal', 'UBS', 'NETFLIX', 'VISA', 'Ventura Foods', 'MERCK', 'TARGET', 'PENTAX', 'P&G'].map((logo) => (
            <span key={logo} style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              fontFamily: 'serif',  // Just to vary fonts a bit
              color: '#374151'
            }}>
              {logo}
            </span>
          ))}
        </div>

        <InfoSection />
        <HowToSection />
        <SocialMediaFeature />
        <VersatileFeature />
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
