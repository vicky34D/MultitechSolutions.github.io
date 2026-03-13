import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const AboutUs = () => {
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#F8F9FB',
      fontFamily: 'var(--kiros-font)',
      paddingTop: '6rem', // Offset for sticky header
    }}>
      {/* Hero Section of About Us */}
      <section style={{
        backgroundColor: '#FFFFFF',
        padding: '5rem 2rem',
        borderBottom: '1px solid #E5E7EB',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,91,255,0.08) 0%, transparent 60%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 60%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }} />
        
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <AnimatedSection delay={0} direction="up">
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              color: '#111827',
              letterSpacing: '-0.04em',
              marginBottom: '1.5rem',
              lineHeight: '1.1',
            }}>
              25 Years of Excellence in <br />
              <span style={{ 
                background: 'linear-gradient(135deg, #3B5BFF 0%, #10B981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Digital Transformation</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.15} direction="up">
            <p style={{
              fontSize: '1.2rem',
              color: '#4B5563',
              lineHeight: '1.8',
              maxWidth: '800px',
              margin: '0 auto',
            }}>
              Multitech Solutions is an end-to-end IT solutions and services company, delivering cutting-edge technology solutions to enterprises across different industry verticals.
            </p>
          </AnimatedSection>

          {/* Stats Bar */}
          <AnimatedSection delay={0.3} direction="up">
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '3rem',
              marginTop: '4rem',
              flexWrap: 'wrap',
            }}>
              {[
                { number: '25+', label: 'Years Experience' },
                { number: '500+', label: 'Projects Delivered' },
                { number: '10+', label: 'Global IT Partners' },
                { number: '100%', label: 'Government Trust' }
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', marginBottom: '0.25rem' }}>{stat.number}</div>
                  <div style={{ fontSize: '0.9rem', color: '#6B7280', fontWeight: '600' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Mission/Vision Box */}
          <AnimatedSection delay={0.2} direction="up">
            <div style={{
              background: 'linear-gradient(135deg, #111827 0%, #1E293B 100%)',
              borderRadius: '32px',
              padding: '5rem 4rem',
              color: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              marginBottom: '6rem',
              boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,91,255,0.2) 0%, transparent 70%)', filter: 'blur(50px)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)', filter: 'blur(50px)' }} />
              
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem', letterSpacing: '-0.03em', position: 'relative', zIndex: 1 }}>
                Your Dedicated In-House IT Department
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
                We engage with organisations as their in-house IT department for designing their IT road map and management of their IT landscape. Our strong focus is always on reliability, performance, and long-term value for our clients.
              </p>
            </div>
          </AnimatedSection>

          {/* Grid for Services & Partners */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2.5rem' }}>
            
            {/* Portfolio Card */}
            <AnimatedSection delay={0.3} direction="up">
              <div style={{
                background: '#FFFFFF',
                borderRadius: '32px',
                padding: '3.5rem',
                border: '1px solid #E5E7EB',
                height: '100%',
                transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.06)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#E5E7EB';
              }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0.05) 100%)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#111827', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>Our Comprehensive Portfolio</h3>
                <p style={{ color: '#6B7280', lineHeight: '1.6', marginBottom: '2rem', fontSize: '1.05rem' }}>
                  Delivering large IT infrastructure and solutions across the entire technological spectrum. Our core offerings include:
                </p>
                <ul style={{ color: '#4B5563', lineHeight: '1.8', paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Supply & Installation of IT Hardware',
                    'Advanced Networking Solutions',
                    'Cyber Security & Surveillance Systems',
                    'ERP Licensing & Implementation',
                    'Cloud Infrastructure Provisioning',
                    'Ongoing Managed IT Services'
                  ].map((item, i) => (
                    <li key={i} style={{ position: 'relative', listStyleType: 'none' }}>
                      <span style={{ position: 'absolute', left: '-1.5rem', top: '0.5rem', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Partners Card */}
            <AnimatedSection delay={0.4} direction="up">
              <div style={{
                background: '#FFFFFF',
                borderRadius: '32px',
                padding: '3.5rem',
                border: '1px solid #E5E7EB',
                height: '100%',
                transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.06)';
                e.currentTarget.style.borderColor = 'rgba(59, 91, 255, 0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#E5E7EB';
              }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(59,91,255,0.1) 0%, rgba(59,91,255,0.05) 100%)', color: '#3B5BFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#111827', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>Global Premium Partners</h3>
                <p style={{ color: '#6B7280', lineHeight: '1.6', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
                  We are premium partners with the world's leading IT innovators, ensuring our clients get access to enterprise-grade technologies.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {['Oracle', 'SAP', 'HPE', 'Dell', 'Microsoft', 'Veeam', 'Emerson'].map((partner, i) => (
                    <span key={i} style={{
                      background: '#F8F9FB',
                      border: '1px solid #E5E7EB',
                      padding: '0.6rem 1.25rem',
                      borderRadius: '999px',
                      fontSize: '0.9rem',
                      fontWeight: '700',
                      color: '#374151',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                    }}>
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
