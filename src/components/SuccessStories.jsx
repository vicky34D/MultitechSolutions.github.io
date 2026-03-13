import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Director of IT',
    title: 'Government Enterprise',
    text: '"Multitech Solutions has completely transformed our IT infrastructure. Their execution in migrating us to Oracle Cloud was flawless and zero-disruption."',
    color: '#3B82F6',
  },
  {
    name: 'Operations Head',
    title: 'Public Sector Undertaking',
    text: '"Their deep understanding of enterprise applications and prompt Managed Services makes Multitech our most trusted technology partner."',
    color: '#10B981',
  },
  {
    name: 'Chief Technology Officer',
    title: 'Enterprise Client',
    text: '"The hardware supply and network implementation by the Multitech team was executed precisely to our strict specifications and security standards."',
    color: '#6366F1',
  },
  {
    name: 'Head of Analytics',
    title: 'Financial Institution',
    text: '"Working with Multitech for our Data Management transformation unlocked secure, real-time insights we didn\'t know were possible."',
    color: '#F59E0B',
  },
  {
    name: 'Security Director',
    title: 'Mission-Critical Agency',
    text: '"We rely heavily on their robust security and surveillance systems. Their end-to-end accountability is exactly what our organisation needs."',
    color: '#EF4444',
  },
  {
    name: 'IT Procurement Manager',
    title: 'Global Manufacturing Firm',
    text: '"25 years of experience truly shows in their work. From Oracle licensing advisory to actual deployments, Multitech Solutions is exceptional."',
    color: '#8B5CF6',
  },
];

const SuccessStories = () => {
  return (
    <section style={{
      width: '100%',
      backgroundColor: '#F8F9FB',
      padding: '6rem 0',
      fontFamily: 'var(--kiros-font)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        <AnimatedSection delay={0} direction="up" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: '700',
            color: '#111827',
            letterSpacing: '-0.03em',
            marginBottom: '0.75rem',
            lineHeight: '1.2',
          }}>
            Hear from Our Customers
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: '#6B7280',
            maxWidth: '550px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}>
            Discover how enterprise and government organisations achieve measurable outcomes with Multitech Solutions.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15} direction="up">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid #E5E7EB',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${t.color}30`;
                  e.currentTarget.style.boxShadow = `0 12px 40px ${t.color}0A`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Avatar + Name */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: `${t.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    color: t.color,
                  }}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '0.9rem',
                      fontWeight: '700',
                      color: '#111827',
                    }}>
                      {t.name}
                    </div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: '#9CA3AF',
                    }}>
                      {t.title}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <p style={{
                  fontSize: '0.88rem',
                  color: '#4B5563',
                  lineHeight: '1.6',
                  margin: 0,
                  flex: 1,
                }}>
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SuccessStories;
