import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const AwardWinning = () => {
  return (
    <section style={{
      width: '100%',
      backgroundColor: '#000000',
      padding: '6rem 0',
      fontFamily: 'var(--kiros-font)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        <AnimatedSection delay={0} direction="up">
          <div style={{
            background: 'linear-gradient(135deg, #111111 0%, #000000 100%)',
            borderRadius: '32px',
            border: '1px solid rgba(255,255,255,0.06)',
            padding: 'clamp(3rem, 6vw, 5rem)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Gradient orbs */}
            <div style={{
              position: 'absolute',
              top: '-30%',
              left: '20%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59,91,255,0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-20%',
              right: '15%',
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }} />

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              color: '#FFFFFF',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              lineHeight: '1.15',
              position: 'relative',
              zIndex: 1,
            }}>
              The Platform for<br />
              Employee Development
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '480px',
              margin: '0 auto 2rem',
              lineHeight: '1.6',
              position: 'relative',
              zIndex: 1,
            }}>
              Elevate Your Team's Potential and Transform Your Business with Multitech Solutions.
            </p>
            <button style={{
              background: '#FFFFFF',
              color: '#0F172A',
              border: 'none',
              borderRadius: '999px',
              padding: '0.875rem 2rem',
              fontSize: '0.9rem',
              fontWeight: '700',
              fontFamily: 'var(--kiros-font)',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
              position: 'relative',
              zIndex: 1,
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
              }}
            >
              Find Out More
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AwardWinning;
