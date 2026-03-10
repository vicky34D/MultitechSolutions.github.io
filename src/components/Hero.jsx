import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const swotData = [
    {
        title: 'Strengths',
        description: 'Deep understanding of user psychology, behavior, and accessibility principles.',
        position: 'top',
    },
    {
        title: 'Weakness',
        description: 'Limited team capacity may affect delivery timelines during high-demand periods.',
        position: 'right',
    },
    {
        title: 'Opportunities',
        description: 'Rising startups and product-driven companies need MVP design and growth-focused UI/UX.',
        position: 'bottom',
    },
    {
        title: 'Threats',
        description: 'Some clients may undervalue UX strategy or fail to see its long-term impact, requiring extra effort in selling and educating.',
        position: 'left',
    },
];

const cornerLabels = [
    { text: 'Internal\nfactors', top: '2%', left: '18%' },
    { text: 'Negative\nfactors', top: '2%', right: '18%' },
    { text: 'Positive\nfactors', bottom: '2%', left: '18%' },
    { text: 'External\nfactors', bottom: '2%', right: '18%' },
];

const Hero = () => {
    return (
        <>
            <style>{`
                @keyframes rotateGlow {
                    0% { transform: translate(-50%, -50%) rotate(0deg); }
                    100% { transform: translate(-50%, -50%) rotate(360deg); }
                }
                @keyframes pulseGlow {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.7; }
                }
                @keyframes floatUp {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                .swot-petal {
                    position: absolute;
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    border: 1.5px solid rgba(59, 130, 246, 0.3);
                    background: radial-gradient(ellipse at center, rgba(10, 30, 80, 0.6) 0%, rgba(0, 10, 40, 0.2) 70%, transparent 100%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 1.5rem;
                    box-sizing: border-box;
                    backdrop-filter: blur(4px);
                    transition: all 0.4s ease;
                }
                .swot-petal:hover {
                    border-color: rgba(59, 130, 246, 0.6);
                    background: radial-gradient(ellipse at center, rgba(10, 40, 100, 0.7) 0%, rgba(0, 15, 50, 0.3) 70%, transparent 100%);
                    box-shadow: 0 0 30px rgba(59, 130, 246, 0.2);
                }
                .swot-petal h3 {
                    font-size: 1rem;
                    font-weight: 700;
                    color: #FFFFFF;
                    margin: 0 0 0.4rem 0;
                    letter-spacing: -0.01em;
                }
                .swot-petal p {
                    font-size: 0.65rem;
                    color: rgba(200, 210, 230, 0.7);
                    margin: 0;
                    line-height: 1.4;
                    max-width: 140px;
                }
                .corner-label {
                    position: absolute;
                    background: rgba(15, 25, 50, 0.7);
                    border: 1px solid rgba(59, 130, 246, 0.25);
                    border-radius: 50%;
                    width: 72px;
                    height: 72px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    font-size: 0.6rem;
                    color: rgba(180, 200, 240, 0.8);
                    line-height: 1.3;
                    white-space: pre-line;
                    backdrop-filter: blur(4px);
                    transition: all 0.3s ease;
                }
                .corner-label:hover {
                    border-color: rgba(59, 130, 246, 0.5);
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
                }
                .hero-cta-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.9rem 1.8rem;
                    border: 1.5px solid #FFFFFF;
                    border-radius: 8px;
                    background: transparent;
                    color: #FFFFFF;
                    font-size: 0.95rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-family: 'Inter', sans-serif;
                    letter-spacing: 0.01em;
                }
                .hero-cta-btn:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: #FFFFFF;
                    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
                }
                .swot-x-line {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 260px;
                    height: 1.5px;
                    background: linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.25) 30%, rgba(59, 130, 246, 0.25) 70%, transparent 100%);
                }
            `}</style>
            <section style={{
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: '#111111',
                fontFamily: "'Inter', sans-serif",
                paddingTop: '7rem',
                paddingBottom: '5rem',
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/* Subtle background glow */}
                <div style={{
                    position: 'absolute',
                    top: '30%',
                    right: '15%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(20, 60, 160, 0.15) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                    animation: 'pulseGlow 6s ease-in-out infinite',
                }} />
                <div style={{
                    position: 'absolute',
                    top: '60%',
                    left: '40%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(10, 40, 120, 0.1) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    pointerEvents: 'none',
                }} />

                <div style={{
                    maxWidth: '1300px',
                    margin: '0 auto',
                    width: '100%',
                    padding: '0 3rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1,
                }}>
                    {/* Left Column - Text Content */}
                    <AnimatedSection delay={0} direction="up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <span style={{
                            fontSize: '0.8rem',
                            fontWeight: '500',
                            color: 'rgba(120, 160, 230, 0.8)',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            marginBottom: '1.5rem',
                        }}>
                            LET'S TALK DESIGN
                        </span>

                        <h1 style={{
                            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                            fontWeight: '700',
                            color: '#FFFFFF',
                            lineHeight: '1.1',
                            letterSpacing: '-0.03em',
                            marginBottom: '1.5rem',
                            maxWidth: '500px',
                        }}>
                            Multitech Solutions<br />

                        </h1>

                        <p style={{
                            fontSize: '0.95rem',
                            color: 'rgba(180, 190, 210, 0.75)',
                            lineHeight: '1.7',
                            maxWidth: '420px',
                            marginBottom: '2.5rem',
                            fontWeight: '400',
                        }}>
                            — Your Trusted Digital Transformation Partner with 25+ Years of Experience
                        </p>

                        <button className="hero-cta-btn">
                            Contact Us
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: '4px' }}>
                                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </AnimatedSection>

                    {/* Right Column - SWOT Diagram */}
                    <AnimatedSection delay={0.3} direction="up" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{
                            position: 'relative',
                            width: '520px',
                            height: '520px',
                        }}>
                            {/* Outer circle ring */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '460px',
                                height: '460px',
                                borderRadius: '50%',
                                border: '1px solid rgba(59, 130, 246, 0.12)',
                                pointerEvents: 'none',
                            }} />

                            {/* Inner glow center */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(30, 70, 180, 0.3) 0%, transparent 70%)',
                                filter: 'blur(20px)',
                                pointerEvents: 'none',
                            }} />

                            {/* X cross lines */}
                            <div className="swot-x-line" style={{
                                transform: 'translate(-50%, -50%) rotate(45deg)',
                            }} />
                            <div className="swot-x-line" style={{
                                transform: 'translate(-50%, -50%) rotate(-45deg)',
                            }} />
                            <div className="swot-x-line" style={{
                                transform: 'translate(-50%, -50%) rotate(0deg)',
                                opacity: 0.5,
                                width: '200px',
                            }} />
                            <div className="swot-x-line" style={{
                                transform: 'translate(-50%, -50%) rotate(90deg)',
                                opacity: 0.5,
                                width: '200px',
                            }} />

                            {/* Strengths - Top */}
                            <div className="swot-petal" style={{
                                top: '30px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                            }}>
                                <h3>Strengths</h3>
                                <p>Deep understanding of user psychology, behavior, and accessibility principles.</p>
                            </div>

                            {/* Weakness - Right */}
                            <div className="swot-petal" style={{
                                top: '50%',
                                right: '30px',
                                transform: 'translateY(-50%)',
                            }}>
                                <h3>Weakness</h3>
                                <p>Limited team capacity may affect delivery timelines during high-demand periods.</p>
                            </div>

                            {/* Opportunities - Bottom */}
                            <div className="swot-petal" style={{
                                bottom: '30px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                            }}>
                                <h3>Opportunities</h3>
                                <p>Rising startups and product-driven companies need MVP design and growth-focused UI/UX.</p>
                            </div>

                            {/* Threats - Left */}
                            <div className="swot-petal" style={{
                                top: '50%',
                                left: '30px',
                                transform: 'translateY(-50%)',
                            }}>
                                <h3>Threats</h3>
                                <p>Some clients may undervalue UX strategy or fail to see its long-term impact, requiring extra effort in selling and educating.</p>
                            </div>

                            {/* Corner Labels */}
                            {cornerLabels.map((label, idx) => (
                                <div className="corner-label" key={idx} style={{
                                    top: label.top || 'auto',
                                    bottom: label.bottom || 'auto',
                                    left: label.left || 'auto',
                                    right: label.right || 'auto',
                                }}>
                                    {label.text}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Stats Section - below the hero fold */}
            <section style={{
                width: '100%',
                background: '#111111',
                fontFamily: "'Inter', sans-serif",
                paddingBottom: '5rem',
                paddingTop: '2rem',
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    width: '100%',
                    padding: '0 2rem',
                }}>
                    <AnimatedSection delay={0.2} direction="up" style={{ width: '100%' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '1.5rem',
                            width: '100%',
                            marginBottom: '1.5rem'
                        }}>
                            {/* Card 1 */}
                            <div style={{
                                backgroundColor: '#1C1C1C',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '16px',
                                padding: '2.5rem 2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                aspectRatio: '1',
                                textAlign: 'left',
                                transition: 'border-color 0.3s ease',
                            }}>
                                <span style={{ color: '#777777', fontSize: '0.9rem', fontWeight: '500' }}>/ 01</span>
                                <div>
                                    <h2 style={{ fontSize: '4.5rem', fontWeight: '800', color: '#FFFFFF', margin: '0 0 0.5rem 0', letterSpacing: '-0.03em' }}>₹500M+</h2>
                                    <p style={{ color: '#999999', margin: 0, fontSize: '1.1rem', lineHeight: '1.3' }}>in funding secured<br />for our clients</p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div style={{
                                backgroundColor: '#1C1C1C',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '16px',
                                padding: '2.5rem 2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                aspectRatio: '1',
                                textAlign: 'left',
                                transition: 'border-color 0.3s ease',
                            }}>
                                <span style={{ color: '#777777', fontSize: '0.9rem', fontWeight: '500' }}>/ 02</span>
                                <div>
                                    <h2 style={{ fontSize: '4.5rem', fontWeight: '800', color: '#FFFFFF', margin: '0 0 0.5rem 0', letterSpacing: '-0.03em' }}>120+</h2>
                                    <p style={{ color: '#999999', margin: 0, fontSize: '1.1rem', lineHeight: '1.3' }}>awards backing<br />our excellence</p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div style={{
                                backgroundColor: '#1C1C1C',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '16px',
                                padding: '2.5rem 2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                aspectRatio: '1',
                                textAlign: 'left',
                                transition: 'border-color 0.3s ease',
                            }}>
                                <span style={{ color: '#777777', fontSize: '0.9rem', fontWeight: '500' }}>/ 03</span>
                                <div>
                                    <h2 style={{ fontSize: '4.5rem', fontWeight: '800', color: '#FFFFFF', margin: '0 0 0.5rem 0', letterSpacing: '-0.03em' }}>2000</h2>
                                    <p style={{ color: '#999999', margin: 0, fontSize: '1.1rem', lineHeight: '1.3' }}>founded, 25+ years<br />of experience</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4} direction="up" style={{ width: '100%' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '1.5rem',
                            width: '100%',
                        }}>
                            {/* Card 4 */}
                            <div style={{
                                backgroundColor: '#1C1C1C',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '16px',
                                padding: '2.5rem 2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '250px',
                                textAlign: 'left',
                                transition: 'border-color 0.3s ease',
                            }}>
                                <span style={{ color: '#777777', fontSize: '0.9rem', fontWeight: '500' }}>/ 04</span>
                                <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#FFFFFF', margin: '0', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                                    Kolkata, India
                                </h2>
                            </div>

                            {/* Card 5 */}
                            <div style={{
                                backgroundColor: '#1C1C1C',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '16px',
                                padding: '2.5rem 2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '250px',
                                textAlign: 'left',
                                transition: 'border-color 0.3s ease',
                            }}>
                                <span style={{ color: '#777777', fontSize: '0.9rem', fontWeight: '500' }}>/ 05</span>
                                <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#FFFFFF', margin: '0', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                                    full-cycle product design
                                </h2>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
};

export default Hero;
