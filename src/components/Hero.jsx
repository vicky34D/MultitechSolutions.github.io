import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';
import AbstractTechModel from './AbstractTechModel';

const Hero = () => {
    return (
        <section style={{
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#FCFCFC',
            fontFamily: "'Inter', sans-serif",
            paddingTop: '6rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                width: '100%',
                padding: '0 2rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Left Content */}
                <AnimatedSection delay={0} direction="up" style={{ zIndex: 2 }}>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        fontWeight: '800',
                        color: '#262626',
                        lineHeight: '1.05',
                        letterSpacing: '-0.02em',
                        marginBottom: '3rem',
                        textTransform: 'uppercase'
                    }}>
                        Embrace Cloud-Based SaaS For<br />
                        Your Business
                    </h1>

                    <h3 style={{
                        fontSize: '1.35rem',
                        fontWeight: '600',
                        color: '#333333',
                        marginBottom: '1rem',
                        letterSpacing: '-0.01em'
                    }}>
                        Build AI People Can Trust
                    </h3>

                    <p style={{
                        fontSize: '1.05rem',
                        color: '#6B7280',
                        lineHeight: '1.6',
                        maxWidth: '460px',
                        marginBottom: '3rem',
                        fontWeight: '400'
                    }}>
                        Leveraging the power of AI and cloud-based infrastructure to meet business needs.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button style={{
                            backgroundColor: '#C8F353',
                            color: '#1A1A1A',
                            padding: '0.85rem 1.75rem',
                            borderRadius: '8px',
                            fontWeight: '600',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            transition: 'all 0.2s',
                        }}
                            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                            onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(0.95)'}
                            onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'}
                        >
                            Get started
                        </button>
                        <button style={{
                            backgroundColor: '#FFFFFF',
                            color: '#4B5563',
                            padding: '0.85rem 1.75rem',
                            borderRadius: '8px',
                            fontWeight: '600',
                            border: '1px solid #E5E7EB',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            transition: 'all 0.2s',
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
                        >
                            Request a demo
                        </button>
                    </div>
                </AnimatedSection>

                {/* Right Image Container */}
                <AnimatedSection delay={0.2} direction="left" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '140%',
                        height: '140%',
                        background: 'radial-gradient(circle at 70% 40%, rgba(200, 243, 83, 0.4) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
                        filter: 'blur(50px)',
                        zIndex: 0
                    }} />

                    {/* 3D Model Container */}
                    <div style={{ position: 'relative', zIndex: 1, width: '100%', minHeight: '500px', height: '100%' }}>
                        <AbstractTechModel />
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Hero;
