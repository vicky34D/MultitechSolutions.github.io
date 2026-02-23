import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const PhalaGraphic1 = () => (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#F8F9FA', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.6 }} />
        <svg viewBox="0 0 200 150" style={{ width: '80%', zIndex: 1, filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.05))' }}>
            <rect x="50" y="30" width="100" height="90" rx="12" fill="#FFFFFF" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
            <path d="M70 50 L130 50" stroke="#E5E7EB" strokeWidth="4" strokeLinecap="round" />
            <path d="M70 70 L110 70" stroke="#E5E7EB" strokeWidth="4" strokeLinecap="round" />
            <circle cx="100" cy="95" r="16" fill="rgba(211, 233, 95, 0.2)" stroke="#D3E95F" strokeWidth="2" />
            <circle cx="100" cy="95" r="6" fill="#1A1A1A" />
            <path d="M30 75 L50 75" stroke="#D3E95F" strokeWidth="2" strokeDasharray="4 2" />
            <path d="M150 75 L170 75" stroke="#D3E95F" strokeWidth="2" strokeDasharray="4 2" />
        </svg>
    </div>
);

const PhalaGraphic2 = () => (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#1A1A1A', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 50% 50%, rgba(211, 233, 95, 0.1) 0%, transparent 70%)' }} />
        <svg viewBox="0 0 200 150" style={{ width: '80%', zIndex: 1 }}>
            <rect x="40" y="40" width="120" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="50" y="65" fontFamily="monospace" fontSize="8" fill="#D3E95F">0x81fa...92c</text>
            <text x="50" y="80" fontFamily="monospace" fontSize="8" fill="#fff">&gt; Verifying proof</text>
            <text x="50" y="95" fontFamily="monospace" fontSize="8" fill="#fff">&gt; State accepted</text>
            <rect x="140" y="85" width="10" height="10" rx="2" fill="#D3E95F" />
        </svg>
    </div>
);

const PhalaGraphic3 = () => (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#D3E95F', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <svg viewBox="0 0 200 150" style={{ width: '80%', zIndex: 1, filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }}>
            <polygon points="100,30 160,65 100,100 40,65" fill="#FFFFFF" fillOpacity="0.9" stroke="rgba(0,0,0,0.1)" />
            <polygon points="100,50 160,85 100,120 40,85" fill="#FFFFFF" fillOpacity="0.6" stroke="rgba(0,0,0,0.1)" />
            <polygon points="100,70 160,105 100,140 40,105" fill="#FFFFFF" fillOpacity="0.3" stroke="rgba(0,0,0,0.1)" />
            <circle cx="100" cy="50" r="8" fill="#1A1A1A" />
            <circle cx="70" cy="75" r="4" fill="#1A1A1A" opacity="0.5" />
            <circle cx="130" cy="75" r="4" fill="#1A1A1A" opacity="0.5" />
            <line x1="100" y1="50" x2="100" y2="100" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="4 2" />
        </svg>
    </div>
);

const HowToCard = ({ step, title, description, GraphicComponent, delay = 0 }) => (
    <AnimatedSection delay={delay} direction="up">
        <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '420px',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            fontFamily: "'Inter', sans-serif",
            boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.12)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.08)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.02)';
            }}
        >
            <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                <GraphicComponent />
            </div>
            <div style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: '#888888',
                    letterSpacing: '0.05em',
                    marginBottom: '0.75rem',
                }}>{step}</div>

                <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#1A1A1A',
                    marginBottom: '1rem',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.2',
                }}>{title}</h3>

                <p style={{
                    fontSize: '1rem',
                    color: '#4A4A4A',
                    lineHeight: '1.6',
                    marginTop: 'auto',
                    fontWeight: '500'
                }}>{description}</p>
            </div>
        </div>
    </AnimatedSection>
);

const HowToSection = () => {
    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '4rem 2rem 8rem 2rem',
            fontFamily: "'Inter', sans-serif",
        }}>
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
                    Solutions Built for Enterprise Businesses
                </h2>
            </AnimatedSection>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem'
            }}>
                <HowToCard
                    step="01 / Cloud Setup"
                    title="Cloud Infrastructure"
                    description="Design scalable architectures that securely handle workloads across public and private cloud models."
                    GraphicComponent={PhalaGraphic1}
                    delay={0.1}
                />

                <HowToCard
                    step="02 / Migration"
                    title="Seamless ERP Transition"
                    description="Offload complex data migrations to our managed support tier. Validate all transitions with comprehensive testing."
                    GraphicComponent={PhalaGraphic2}
                    delay={0.2}
                />

                <HowToCard
                    step="03 / Operations"
                    title="Managed Support Services"
                    description="Perform 24/7 proactive monitoring across multiple systems to ensure your critical databases remain available."
                    GraphicComponent={PhalaGraphic3}
                    delay={0.3}
                />
            </div>
        </section>
    );
};

export default HowToSection;
