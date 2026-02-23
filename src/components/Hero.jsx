import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

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
                        marginBottom: '3rem'
                    }}>
                        The Neo Cloud for<br />
                        Confidential AI
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
                        Hardware-secured compute platform that delivers verifiable AI with enterprise-grade privacy. Deploy confidential AI models with TEE protection in minutes.
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

                    {/* We use an image if we have one, otherwise fallback to CSS illustration */}
                    <img
                        src="/assets/robot_human_hands_triangle.webp"
                        alt="AI Trust Hands"
                        style={{
                            position: 'relative',
                            zIndex: 1,
                            width: '140%',
                            maxWidth: '900px',
                            objectFit: 'contain',
                            transform: 'translateX(5%) scale(1.15)',
                            transformOrigin: 'right center'
                        }}
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'block';
                        }}
                    />

                    {/* Fallback graphic (visible if image fails) */}
                    <div style={{ display: 'none', position: 'relative', zIndex: 1, width: '100%', paddingBottom: '100%' }}>
                        <svg viewBox="0 0 400 400" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                            {/* Glowing Triangle */}
                            <polygon points="200,100 250,200 150,200" fill="rgba(200, 243, 83, 0.2)" stroke="#C8F353" strokeWidth="3" filter="drop-shadow(0 0 10px rgba(200, 243, 83, 0.8))" />
                            <polygon points="200,100 250,200 150,200" fill="none" stroke="#FFFFFF" strokeWidth="1" />

                            {/* Human Hand (Top Right) */}
                            <path d="M350,50 Q280,120 220,130" fill="none" stroke="url(#humanHandGradient)" strokeWidth="25" strokeLinecap="round" />
                            <circle cx="210" cy="135" r="10" fill="#E2E8F0" />

                            {/* Robot Hand (Bottom Left) */}
                            <path d="M50,350 Q130,280 180,180" fill="none" stroke="url(#robotHandGradient)" strokeWidth="25" strokeLinecap="round" />

                            {/* Mechanical details */}
                            <rect x="100" y="250" width="30" height="20" fill="#1E293B" transform="rotate(-40 100 250)" />
                            <circle cx="170" cy="190" r="10" fill="#1A1A1A" stroke="#C8F353" strokeWidth="2" />
                            <circle cx="185" cy="165" r="5" fill="#C8F353" />

                            <defs>
                                <linearGradient id="humanHandGradient" x1="100%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#4C1D95" />
                                    <stop offset="100%" stopColor="#7C3AED" />
                                </linearGradient>
                                <linearGradient id="robotHandGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#312E81" />
                                    <stop offset="100%" stopColor="#4338CA" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Hero;
