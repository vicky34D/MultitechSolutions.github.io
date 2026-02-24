import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';
import './LogoTicker.css';

const scrollingLogos = [
    { name: 'Spotify', url: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg' },
    { name: 'TED', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/TED_wordmark.svg' },
    { name: 'Dropbox', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Dropbox_logo_2017.svg' },
    { name: 'SoundCloud', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/SoundCloud_logo.svg' },
    { name: 'Reddit', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Reddit_logo.svg' },
    { name: 'DocuSign', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/DocuSign_logo.svg' },
];

const Card = ({ icon, title, description, accentColor }) => (
    <AnimatedSection delay={0.1} direction="up">
        <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
            height: '100%',
            fontFamily: "'Inter', sans-serif"
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = accentColor;
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 20px 40px ${accentColor}15`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)';
            }}
        >
            {/* Icon area */}
            <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: `${accentColor}1A`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${accentColor}33`,
            }}>
                {icon}
            </div>

            <div style={{ flex: 1 }}>
                <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#1A1A1A',
                    marginBottom: '0.75rem',
                    lineHeight: '1.3',
                    letterSpacing: '-0.02em',
                }}>
                    {title}
                </h3>
                <p style={{
                    color: '#4A4A4A',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    fontWeight: '500'
                }}>
                    {description}
                </p>
            </div>

            {/* Learn more link */}
            <a href="#" style={{
                color: '#1A1A1A',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginTop: 'auto',
                transition: 'color 0.2s',
            }}
                onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
                onMouseLeave={(e) => e.currentTarget.style.color = '#1A1A1A'}
            >
                Learn more <span>→</span>
            </a>
        </div>
    </AnimatedSection>
);

const MoreFromVeedSection = () => {
    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '2rem 2rem 8rem 2rem',
            fontFamily: "'Inter', sans-serif"
        }}>

            {/* Scrolling Logos */}
            <div style={{
                width: '100%',
                overflow: 'hidden',
                padding: '2rem 0 5rem 0',
                position: 'relative'
            }}>
                <div className="ticker-track">
                    {[1, 2, 3].map(set =>
                        scrollingLogos.map((logo, index) => (
                            <div key={`partner-logo-${set}-${index}`} className="ticker-item" style={{ padding: '0 2rem' }}>
                                <img
                                    src={logo.url}
                                    alt={`${logo.name} logo`}
                                    style={{
                                        height: '24px',
                                        width: 'auto',
                                        opacity: 0.6,
                                        filter: 'grayscale(100%)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.opacity = '1';
                                        e.currentTarget.style.filter = 'grayscale(0%)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.opacity = '0.6';
                                        e.currentTarget.style.filter = 'grayscale(100%)';
                                    }}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
            <AnimatedSection delay={0} direction="up">
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    fontWeight: '700',
                    color: '#1A1A1A',
                    marginBottom: '4rem',
                    letterSpacing: '-0.03em',
                    lineHeight: '1.1',
                    textAlign: 'center'
                }}>
                    Partnering with Oracle
                </h2>
            </AnimatedSection>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
                alignItems: 'stretch'
            }}>
                <Card
                    accentColor="#0070FF"
                    icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0070FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"></path>
                        </svg>
                    }
                    title="Oracle Cloud Infrastructure"
                    description="Secure, high-performance cloud for mission-critical workloads. Scalable infrastructure for enterprise use cases."
                />
                <Card
                    accentColor="#34D399"
                    icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    }
                    title="Data Management & Analytics"
                    description="Oracle Database, Autonomous Database, Data Warehousing. Advanced analytics and real-time insights for decisions."
                />
                <Card
                    accentColor="#A855F7"
                    icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                    }
                    title="Enterprise Applications"
                    description="Industry-specific enterprise solutions. Machine Learning & Automation embedded intelligence to optimise operations."
                />
            </div>
        </section>
    );
};

export default MoreFromVeedSection;
