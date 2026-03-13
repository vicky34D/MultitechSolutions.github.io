import React, { useState } from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const LogoItem = ({ logo }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span style={{
        fontSize: '1.5rem',
        fontWeight: '800',
        color: '#374151',
        letterSpacing: '0.05em',
        fontFamily: 'var(--kiros-font)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        whiteSpace: 'nowrap',
        textTransform: 'uppercase',
      }}>
        {logo.name}
      </span>
    );
  }

  return (
    <img 
      src={logo.url} 
      alt={logo.name}
      onError={() => setHasError(true)}
      style={{
        height: logo.name === 'DRDO' || logo.name === 'UPCL' || logo.name === 'Coal India' ? '45px' : '30px',
        width: 'auto',
        objectFit: 'contain',
        opacity: 0.8,
        filter: 'grayscale(100%) contrast(1.2)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.filter = 'grayscale(0%) contrast(1)';
        e.currentTarget.style.opacity = '1';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.filter = 'grayscale(100%) contrast(1.2)';
        e.currentTarget.style.opacity = '0.8';
      }}
    />
  );
};

const Hero = () => {
  return (
    <>
      {/* Hero Section with gradient background */}
      <section style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--kiros-font)',
        position: 'relative',
        overflow: 'hidden',
        background: '#FFFFFF',
        paddingTop: '5rem',
      }}>
        {/* Gradient Container */}
        <div style={{
          width: '92%',
          maxWidth: '1200px',
          borderRadius: '32px',
          background: 'linear-gradient(135deg, #4F6BFF 0%, #3B82F6 30%, #10B981 80%, #6EE7B7 100%)',
          padding: 'clamp(4rem, 8vw, 8rem) clamp(2rem, 5vw, 5rem)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          {/* Dot grid pattern overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
            opacity: 0.5,
            pointerEvents: 'none',
          }} />

          {/* Floating light orbs */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '15%',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'pulse 4s ease-in-out infinite',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '15%',
            right: '10%',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'pulse 5s ease-in-out infinite 1s',
            pointerEvents: 'none',
          }} />

          <AnimatedSection delay={0} direction="up">
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: '800',
              color: '#FFFFFF',
              lineHeight: '1.1',
              letterSpacing: '-0.04em',
              marginBottom: '1.5rem',
              position: 'relative',
              zIndex: 1,
              textShadow: '0 2px 30px rgba(0,0,0,0.1)',
            }}>
              End-to-End IT Solutions<br />
              & Services
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.15} direction="up">
            <p style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.6',
              maxWidth: '550px',
              marginBottom: '0.5rem',
              position: 'relative',
              zIndex: 1,
              fontWeight: '400',
            }}>
              Empowering Modern Enterprises,
            </p>
            <p style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: '1.6',
              maxWidth: '550px',
              position: 'relative',
              zIndex: 1,
              fontWeight: '400',
            }}>
              with 25 Years of Excellence in Digital Transformation
            </p>
          </AnimatedSection>
        </div>

        {/* Client Logos section */}
        <AnimatedSection delay={0.3} direction="up" style={{ width: '100%', maxWidth: '1200px', marginTop: '4rem', padding: '0 2rem', overflow: 'hidden' }}>
          <div style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            opacity: 0.5,
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}>
            <div className="logo-ticker-track" style={{ display: 'flex', width: 'fit-content' }}>
              {/* Duplicate array twice for seamless infinite looping */}
              {[...Array(2)].map((_, arrayIndex) => (
                <div key={arrayIndex} style={{ display: 'flex', gap: '5rem', paddingRight: '5rem', flexShrink: 0, alignItems: 'center' }}>
                  {[
                    { name: 'ISRO', url: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg' },
                    { name: 'Coal India', url: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Coal_India_Logo.svg' },
                    { name: 'UPCL', url: 'https://www.upcl.org/wp-content/uploads/2019/12/logo-upcl.png' },
                    { name: 'DRDO', url: 'https://upload.wikimedia.org/wikipedia/en/8/87/Defence_Research_and_Development_Organisation_Logo.png' },
                    { name: 'Oracle', url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
                    { name: 'SAP', url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
                    { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
                    { name: 'HP', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
                    { name: 'Lenovo', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg' },
                    { name: 'Dell', url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg' },
                    { name: 'Acer', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Acer_logo_2016.svg' },
                  ].map((logo, i) => (
                    <LogoItem key={`${arrayIndex}-${i}`} logo={logo} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Stats Section */}
      <section style={{
        width: '100%',
        background: '#FFFFFF',
        fontFamily: 'var(--kiros-font)',
        padding: '5rem 0 6rem',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
        }}>
          <AnimatedSection delay={0} direction="up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: '700',
              color: '#111827',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              lineHeight: '1.2',
            }}>
              Delivering World-Class<br />
              IT Infrastructure & Solutions
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: '#6B7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              We are premium partners of global IT leaders, acting as your in-house IT department to design roadmaps with a strong focus on reliability and long-term value.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="up">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
            }}>
              {[
                { number: '25+', label: 'Years of Experience', sub: 'Delivering end-to-end IT solutions', color: '#3B5BFF' },
                { number: '10+', label: 'Premium Global Partners', sub: 'Including Oracle, SAP, Microsoft', color: '#3B5BFF' },
                { number: '100%', label: 'Trusted by Government', sub: 'ISRO, DRDO, Coal India, UPCL', color: '#3B5BFF' },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: '#F8F9FB',
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  border: '1px solid #E5E7EB',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(59, 91, 255, 0.2)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(59, 91, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#E5E7EB';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h3 style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    fontWeight: '800',
                    color: stat.color,
                    letterSpacing: '-0.03em',
                    marginBottom: '1.5rem',
                  }}>
                    {stat.number}
                  </h3>
                  <p style={{
                    color: '#6B7280',
                    fontSize: '0.95rem',
                    lineHeight: '1.5',
                    margin: 0,
                  }}>
                    {stat.label}<br />{stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Hero;
