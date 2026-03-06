import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const AwardWinning = () => {
    return (
        <section style={{
            width: '100%',
            backgroundColor: '#111111',
            padding: '10rem 2rem',
            fontFamily: "'Inter', sans-serif",
            color: '#FFFFFF'
        }}>
            <div style={{
                maxWidth: '1440px',
                margin: '0 auto',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(250px, 1fr) 4fr',
                    gap: '4rem',
                    marginBottom: '8rem'
                }}>
                    {/* Left Column - Button */}
                    <AnimatedSection delay={0} direction="up" style={{ paddingTop: '1rem' }}>
                        <button style={{
                            backgroundColor: '#1EAB53',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '999px',
                            padding: '1.25rem 2.5rem',
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            letterSpacing: '0.05em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            transition: 'background-color 0.2s'
                        }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#168F43'}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1EAB53'}
                        >
                            BECOME A CLIENT
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </button>
                    </AnimatedSection>

                    {/* Right Column - Heading & Text */}
                    <div style={{ paddingRight: '1rem' }}>
                        <AnimatedSection delay={0.2} direction="up">
                            <h2 style={{
                                fontSize: 'clamp(4rem, 8vw, 7rem)',
                                fontWeight: '800',
                                letterSpacing: '-0.04em',
                                margin: '0 0 4rem 0',
                                lineHeight: '1'
                            }}>
                                Award-winning<br />
                                product design agency
                            </h2>
                        </AnimatedSection>
                        <AnimatedSection delay={0.4} direction="up">
                            <p style={{
                                fontSize: '2rem',
                                lineHeight: '1.4',
                                fontWeight: '300',
                                color: '#E0E0E0',
                                marginBottom: '2rem',
                                maxWidth: '95%'
                            }}>
                                Instead of handing off the ready design mock-ups and saying goodbye, we promote your project, build recognition for your brand, and expand your reach when winning international awards.
                            </p>
                            <p style={{
                                fontSize: '2rem',
                                lineHeight: '1.4',
                                fontWeight: '300',
                                color: '#E0E0E0',
                                margin: 0,
                                maxWidth: '95%'
                            }}>
                                Up to 2023, our design team <strong style={{ color: '#FFFFFF', fontWeight: '600' }}>won 120+ design awards</strong>, some of which had us share the stage with:
                            </p>
                        </AnimatedSection>
                    </div>
                </div>

                {/* Section 10 Component Integration: Powerhouse of AI Tech */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(250px, 1fr) 4fr',
                    gap: '4rem',
                    borderTop: '1px solid #2A2A2A',
                    paddingTop: '6rem'
                }}>
                    <AnimatedSection delay={0} direction="up">
                        <div style={{
                            width: '90px',
                            height: '90px',
                            border: '1px solid #FFFFFF',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}>
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2L2 12h3v8h14v-8h3L12 2z"></path>
                            </svg>
                            <div style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                animation: 'spin 10s linear infinite',
                            }}>
                                {/* Circular text element simulation */}
                                <svg viewBox="0 0 100 100" width="100%" height="100%">
                                    <defs>
                                        <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                                    </defs>
                                    <text fontSize="10" fill="#FFFFFF" letterSpacing="2px">
                                        <textPath href="#circlePath" startOffset="0%">MULTITECH. AGENCY •</textPath>
                                        <textPath href="#circlePath" startOffset="50%">MULTITECH. AGENCY •</textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2} direction="up">
                        <p style={{
                            fontSize: '2rem',
                            lineHeight: '1.4',
                            fontWeight: '300',
                            color: '#E0E0E0',
                            margin: 0,
                            maxWidth: '90%'
                        }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.05em', color: '#777777', textTransform: 'uppercase', display: 'block', marginBottom: '1.5rem' }}>MULTITECH.</span>
                            The powerhouse of AI tech, creative audacity, and business mindset. We work with everything digital and help you turn innovative ideas, products, services, and processes into a profitable business and then support you to scale it from pre-seed to series D and beyond.
                        </p>
                    </AnimatedSection>
                </div>
            </div>
            {/* Embedded CSS for the spinning wheel */}
            <style>{`
                @keyframes spin {
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
};

export default AwardWinning;
