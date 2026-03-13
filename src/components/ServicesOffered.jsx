import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const WhatSetsUsApart = () => {
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
            What Sets Us Apart?
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: '#6B7280',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}>
            Uncover The Unique Advantages That Make Multitech Solutions
            the Leading Choice in Integrated HR, Finance, and IT Solutions.
          </p>
        </AnimatedSection>

        {/* Main grid layout with cards */}
        <AnimatedSection delay={0.2} direction="up">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.25rem',
          }}>
            {/* Left Card — Platform Overview */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E5E7EB',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '360px',
              transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.06)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Mock UI - Team Dashboard */}
              <div style={{
                background: '#F3F4F6',
                borderRadius: '16px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  {['Overview', 'Payrolls', 'Apps'].map((tab, i) => (
                    <span key={i} style={{
                      fontSize: '0.75rem',
                      fontWeight: i === 0 ? '600' : '400',
                      color: i === 0 ? '#111827' : '#9CA3AF',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '8px',
                      background: i === 0 ? '#FFFFFF' : 'transparent',
                      boxShadow: i === 0 ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
                    }}>{tab}</span>
                  ))}
                </div>
                {/* Fake list items */}
                {[
                  { name: 'Sarah Chen', role: 'Product Designer', color: '#10B981' },
                  { name: 'James Wilson', role: 'Frontend Dev', color: '#3B82F6' },
                  { name: 'Maya Patel', role: 'HR Manager', color: '#F59E0B' },
                ].map((person, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.5rem',
                    background: '#FFFFFF',
                    borderRadius: '10px',
                  }}>
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '8px',
                      background: person.color, opacity: 0.2,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: person.color }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#111827' }}>{person.name}</div>
                      <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>{person.role}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginBottom: '0.5rem' }}>
                  Unified Team Dashboard
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: '1.5', margin: 0 }}>
                  Beautifully streamline your team management with real-time insights and workflow automation.
                </p>
              </div>
              <button style={{
                marginTop: '1.25rem',
                background: '#111827',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '999px',
                padding: '0.65rem 1.25rem',
                fontSize: '0.8rem',
                fontWeight: '600',
                fontFamily: 'var(--kiros-font)',
                cursor: 'pointer',
                alignSelf: 'flex-start',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#1E293B'}
                onMouseLeave={e => e.currentTarget.style.background = '#111827'}
              >
                Find Out More
              </button>
            </div>

            {/* Right Card — Integrations */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E5E7EB',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '360px',
              transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.06)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Integration Icons Grid */}
              <div style={{
                background: '#F3F4F6',
                borderRadius: '16px',
                padding: '2rem',
                marginBottom: '1.5rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
              }}>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {[
                    { bg: '#24292E', icon: '⌘' },  // Github-like
                    { bg: '#4A154B', icon: '◈' },  // Slack-like
                    { bg: '#3B5BFF', icon: '✦' },  // App
                    { bg: '#000000', icon: '●' },  // Notion-like
                    { bg: '#10B981', icon: '◉' },  // Custom
                  ].map((app, i) => (
                    <div key={i} style={{
                      width: '48px', height: '48px', borderRadius: '12px',
                      background: app.bg, color: '#FFFFFF',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.2rem', fontWeight: '700',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      transition: 'transform 0.3s',
                      cursor: 'default',
                    }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      {app.icon}
                    </div>
                  ))}
                </div>
                {/* Alert mockups */}
                <div style={{
                  background: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  width: '100%',
                  maxWidth: '280px',
                }}>
                  <div style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: '#F59E0B',
                  }} />
                  <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>
                    Payroll cost increased by 12% this quarter
                  </span>
                </div>
                <div style={{
                  background: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  width: '100%',
                  maxWidth: '280px',
                }}>
                  <div style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: '#EF4444',
                  }} />
                  <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>
                    3 ex-employees still have access to systems
                  </span>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginBottom: '0.5rem' }}>
                  Smart Integrations & Alerts
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: '1.5', margin: 0 }}>
                  Connect with your favorite tools and get real-time alerts for critical HR events and anomalies.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
