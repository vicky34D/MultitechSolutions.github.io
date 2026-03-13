import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B5BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Streamline',
    description: 'Simplify complex HR processes. Automate routine tasks, reduce manual workloads, and boost overall efficiency.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B5BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Tailored',
    description: 'Enjoy streamlined processes, letting your team focus on what matters most — building a thriving workplace.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B5BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Simplify',
    description: 'Integrate payroll, benefits, and time tracking in one platform with smart analytics and reporting.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B5BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Automate',
    description: 'Automate onboarding, compliance, and scheduling. Save time and focus on core business strategy.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B5BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: 'Optimize',
    description: 'Gain instant insights, easy device management. Get key workforce insights, manage devices, and automate tasks.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B5BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'Maximize',
    description: 'Simplify benefits and minimize downtime. Maximize employee satisfaction and productivity.',
  },
];

const FeaturesSection = () => {
  return (
    <section style={{
      width: '100%',
      backgroundColor: '#FFFFFF',
      padding: '5rem 0 6rem',
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
            marginBottom: '1rem',
            lineHeight: '1.2',
          }}>
            Explore Our Product's<br />
            Features and Benefits
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: '#6B7280',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}>
            Everything you need to manage your workforce, all in one powerful platform.
          </p>
        </AnimatedSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
        }}>
          {features.map((feature, i) => (
            <AnimatedSection key={i} delay={0.1 * i} direction="up">
              <div style={{
                background: '#F8F9FB',
                borderRadius: '20px',
                padding: '2rem 1.75rem',
                border: '1px solid #E5E7EB',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'default',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(59, 91, 255, 0.15)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(59, 91, 255, 0.06)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Icon */}
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(59, 91, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#111827',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.01em',
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#6B7280',
                  lineHeight: '1.6',
                  margin: 0,
                  flex: 1,
                }}>
                  {feature.description}
                </p>
                <div style={{
                  marginTop: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: '#3B5BFF',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'gap 0.3s',
                }}
                  onMouseEnter={e => e.currentTarget.style.gap = '0.6rem'}
                  onMouseLeave={e => e.currentTarget.style.gap = '0.35rem'}
                >
                  Find Out More
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 7h12M8 2l5 5-5 5"/>
                  </svg>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
