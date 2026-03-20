import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const Pricing = () => {
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#F8F9FB',
      fontFamily: 'var(--kiros-font)',
      paddingTop: '6rem', 
    }}>
      {/* Pricing Hero Section */}
      <section style={{
        backgroundColor: '#FFFFFF',
        padding: '6rem 2rem',
        borderBottom: '1px solid #E5E7EB',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <AnimatedSection delay={0} direction="up">
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              color: '#111827',
              letterSpacing: '-0.04em',
              marginBottom: '1rem',
              lineHeight: '1.1',
            }}>
              Transparent pricing.<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #111827 0%, #4B5563 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Zero surprises.</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.15} direction="up">
            <p style={{
              fontSize: '1.15rem',
              color: '#6B7280',
              lineHeight: '1.7',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Choose the Managed IT Services tier that fits your organisational needs. Hardware supply quoted separately per project.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
          }}>
            
            {/* Standard Tier */}
            <AnimatedSection delay={0.1} direction="up">
              <div style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '3rem',
                border: '1px solid #E5E7EB',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                transition: 'all 0.3s ease',
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', marginBottom: '0.5rem' }}>Essential Care</h3>
                <p style={{ color: '#6B7280', fontSize: '0.95rem', marginBottom: '2rem' }}>Core IT maintenance for small teams.</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '2rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: '800', color: '#111827', letterSpacing: '-0.04em' }}>$499</span>
                  <span style={{ color: '#6B7280', fontWeight: '500' }}>/mo</span>
                </div>
                
                <ul style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1, marginBottom: '2.5rem' }}>
                  {[
                    'Remote Helpdesk Support',
                    'Basic Network Monitoring',
                    'Antivirus Management',
                    'Monthly System Audits',
                    'Standard SLA (Next Day)'
                  ].map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#4B5563', fontSize: '0.95rem' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button style={{
                  width: '100%',
                  padding: '1rem',
                  background: '#F3F4F6',
                  color: '#111827',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#E5E7EB'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#F3F4F6'; }}
                >
                  Get Started
                </button>
              </div>
            </AnimatedSection>

            {/* Premium Tier (Highlighted) */}
            <AnimatedSection delay={0.2} direction="up">
              <div style={{
                background: 'linear-gradient(180deg, #111827 0%, #1E293B 100%)',
                borderRadius: '24px',
                padding: '3.5rem 3rem',
                border: '1px solid #374151',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 20px 40px rgba(17,24,39,0.2)',
                transform: 'scale(1.02)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(90deg, #3B5BFF, #10B981)', color: '#FFF', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', padding: '0.4rem 1.5rem', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', letterSpacing: '0.05em' }}>
                  Most Popular
                </div>
                
                <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(59,91,255,0.2) 0%, transparent 60%)', filter: 'blur(30px)' }} />

                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.5rem', marginTop: '1rem' }}>Professional</h3>
                <p style={{ color: '#9CA3AF', fontSize: '0.95rem', marginBottom: '2rem' }}>Comprehensive IT managed services.</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '2rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: '800', color: '#FFFFFF', letterSpacing: '-0.04em' }}>$999</span>
                  <span style={{ color: '#9CA3AF', fontWeight: '500' }}>/mo</span>
                </div>
                
                <ul style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1, marginBottom: '2.5rem', position: 'relative', zIndex: 1 }}>
                  {[
                    '24/7 Dedicated Helpdesk',
                    'Proactive Network Management',
                    'Cloud Backup & Disaster Recovery',
                    'Next-Gen Firewall Security',
                    'Priority SLA (2-Hour Response)',
                    'Quarterly IT Strategy Review'
                  ].map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#E5E7EB', fontSize: '0.95rem' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B5BFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'linear-gradient(135deg, #3B5BFF 0%, #2541DB 100%)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '0 4px 12px rgba(59,91,255,0.3)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(59,91,255,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(59,91,255,0.3)'; }}
                >
                  Get Started
                </button>
              </div>
            </AnimatedSection>

            {/* Enterprise Tier */}
            <AnimatedSection delay={0.3} direction="up">
              <div style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '3rem',
                border: '1px solid #E5E7EB',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                transition: 'all 0.3s ease',
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', marginBottom: '0.5rem' }}>Enterprise</h3>
                <p style={{ color: '#6B7280', fontSize: '0.95rem', marginBottom: '2rem' }}>Scale gracefully with a full virtual CIO.</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '2rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', letterSpacing: '-0.04em' }}>Custom</span>
                </div>
                
                <ul style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1, marginBottom: '2.5rem' }}>
                  {[
                    'On-Site Engineer Deployment',
                    'Custom ERP Licensing (SAP/Oracle)',
                    'Multi-Campus Networking',
                    'Zero Trust Architecture',
                    'Custom SLA Agreements',
                    'Dedicated Virtual CIO'
                  ].map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#4B5563', fontSize: '0.95rem' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button style={{
                  width: '100%',
                  padding: '1rem',
                  background: '#FFFFFF',
                  color: '#111827',
                  border: '1px solid #D1D5DB',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#111827'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#D1D5DB'; }}
                >
                  Contact Sales
                </button>
              </div>
            </AnimatedSection>
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default Pricing;
