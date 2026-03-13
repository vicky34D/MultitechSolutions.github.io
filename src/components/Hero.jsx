import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

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
              Beyond Ordinary<br />
              HR Solutions
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
              Empowering Modern Businesses,
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
              with Integrated HR, Finance, & IT Solutions
            </p>
          </AnimatedSection>
        </div>

        {/* Client Logos section */}
        <AnimatedSection delay={0.3} direction="up" style={{ width: '100%', maxWidth: '1200px', marginTop: '4rem', padding: '0 2rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            opacity: 0.5,
          }}>
            {['descript', 'Basecamp', 'Booking.com', 'himalayas', 'coinbase', 'contentful'].map((logo, i) => (
              <span key={i} style={{
                fontSize: '1.1rem',
                fontWeight: '700',
                color: '#374151',
                letterSpacing: '-0.01em',
                fontFamily: 'var(--kiros-font)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                transition: 'opacity 0.3s',
              }}>
                {logo === 'descript' && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#374151"><rect x="2" y="2" width="16" height="16" rx="3" strokeWidth="0"/></svg>
                )}
                {logo === 'Basecamp' && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#374151" strokeWidth="2"/><path d="M7 10l3 3 3-3" stroke="#374151" strokeWidth="2" strokeLinecap="round"/></svg>
                )}
                {logo === 'Booking.com' && null}
                {logo === 'himalayas' && (
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="#374151"><path d="M0 16L7 4L11 10L15 2L22 16H0Z"/></svg>
                )}
                {logo === 'coinbase' && null}
                {logo === 'contentful' && (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="#374151" strokeWidth="2"/></svg>
                )}
                {logo}
              </span>
            ))}
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
              Simplify Your Business with<br />
              Streamlined Solutions
            </h2>
            <p style={{
              fontSize: '1.05rem',
              color: '#6B7280',
              maxWidth: '550px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              Consolidate Your People Operations with Our All-in-One
              HR Software and Say Goodbye to Fragmented Tools.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="up">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
            }}>
              {[
                { number: '4K+', label: 'Companies Worldwide', sub: 'Put Their Trust in Multitech Solutions', color: '#3B5BFF' },
                { number: '24+', label: 'Countries Spanning', sub: 'Across the Globe', color: '#3B5BFF' },
                { number: '5K+', label: 'Positive Reviews from', sub: 'Happy Users', color: '#3B5BFF' },
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
