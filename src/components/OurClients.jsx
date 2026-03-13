import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const OurClients = () => {
  return (
    <section style={{
      width: '100%',
      backgroundColor: '#FFFFFF',
      padding: '5rem 0',
      fontFamily: 'var(--kiros-font)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        {/* Featured On */}
        <AnimatedSection delay={0} direction="up" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '0.5rem',
          }}>
            Our Global Partnerships
          </h3>
          <p style={{
            fontSize: '0.9rem',
            color: '#9CA3AF',
          }}>
            Premium partners of the world's leading IT & ITES innovators
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} direction="up">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            marginBottom: '4rem',
            opacity: 0.45,
          }}>
            {[
              { name: 'ORACLE', prefix: '' },
              { name: 'SAP', prefix: '' },
              { name: 'HPE', prefix: '' },
              { name: 'DELL', prefix: '' },
              { name: 'MICROSOFT', prefix: '' },
              { name: 'VEEAM', prefix: '' },
              { name: 'EMERSON', prefix: '' },
            ].map((pub, i) => (
              <span key={i} style={{
                fontSize: '1rem',
                fontWeight: '700',
                color: '#374151',
                letterSpacing: pub.name === 'GIZMODO' ? '0.1em' : '-0.01em',
                fontStyle: pub.name === 'The Washington Post' ? 'italic' : 'normal',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}>
                {pub.prefix && <span style={{ fontWeight: '800' }}>{pub.prefix}</span>}
                {pub.name}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Trust Pillars */}
        <AnimatedSection delay={0.2} direction="up">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}>
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="13" stroke="#3B5BFF" strokeWidth="2"/>
                    <path d="M10 14l3 3 5-5" stroke="#3B5BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Credible',
                description: 'Trust Multitech Solutions—our global success speaks volumes about our credibility.',
                color: '#3B5BFF',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="13" stroke="#10B981" strokeWidth="2"/>
                    <path d="M14 8v8l4 4" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Protected',
                description: 'Your data is safe with Multitech Solutions— robust security measures in place.',
                color: '#10B981',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="13" stroke="#6366F1" strokeWidth="2"/>
                    <path d="M10 14h8M14 10v8" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
                title: 'Dependable',
                description: 'Count on Multitech Solutions for reliable business solutions—seamless operations guaranteed.',
                color: '#6366F1',
              },
            ].map((pillar, i) => (
              <div key={i} style={{
                background: '#F8F9FB',
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid #E5E7EB',
                textAlign: 'center',
                transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${pillar.color}33`;
                  e.currentTarget.style.boxShadow = `0 12px 40px ${pillar.color}10`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: `${pillar.color}10`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                }}>
                  {pillar.icon}
                </div>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: '#111827',
                  marginBottom: '0.5rem',
                }}>
                  {pillar.title}
                </h4>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#6B7280',
                  lineHeight: '1.5',
                  margin: 0,
                }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OurClients;
