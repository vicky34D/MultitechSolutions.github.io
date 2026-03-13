import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B5BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
      </svg>
    ),
    title: 'Oracle Cloud Infrastructure',
    description: 'Secure, high-performance cloud for mission-critical workloads. Scalable infrastructure for enterprise and government use cases.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B5BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    title: 'Data Management',
    description: 'Oracle Database, Autonomous Database, Data Warehousing. Advanced analytics and real-time insights for your business.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B5BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Enterprise Applications',
    description: 'Oracle ERP, HCM, SCM, CX. Industry-specific enterprise solutions that modernise IT and unlock data-driven insights.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B5BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
      </svg>
    ),
    title: 'AI, ML & Automation',
    description: 'Embedded intelligence to optimise operations. Predictive insights and business automation for future growth.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B5BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Security & Compliance',
    description: 'End-to-end security across infrastructure and applications. Support for Indian regulatory and data residency requirements.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B5BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'IT Hardware & Networking',
    description: 'Supply & Installation of IT Hardware and Networking solutions, Cyber security, and Surveillance systems.',
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
            Comprehensive Oracle<br />
            Solutions Offered
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: '#6B7280',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}>
            Oracle’s integrated cloud, data, and application platforms paired with Multitech’s execution expertise ensure seamless digital transformation.
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
