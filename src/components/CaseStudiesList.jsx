import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const CaseStudiesList = () => {
    return (
        <section style={{
            width: '100%',
            backgroundColor: '#111111',
            padding: '10rem 2rem 5rem 2rem',
            fontFamily: "'Inter', sans-serif",
            color: '#FFFFFF'
        }}>
            <div style={{
                maxWidth: '1440px',
                margin: '0 auto',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(250px, 1fr) 2fr 2fr',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>
                    {/* Left Column - Button */}
                    <AnimatedSection delay={0} direction="up" style={{ paddingTop: '1rem' }}>
                        <button style={{
                            backgroundColor: '#4E5FFF',
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
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#3D4DE6'}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#4E5FFF'}
                        >
                            SEE ALL CASE STUDIES
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </button>
                    </AnimatedSection>

                    {/* Middle Column - Accern */}
                    <AnimatedSection delay={0.2} direction="up">
                        <h2 style={{
                            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                            fontWeight: '800',
                            letterSpacing: '-0.03em',
                            margin: '0 0 2rem 0',
                            lineHeight: '1.1'
                        }}>
                            How we helped Accern design an AI research product that powered $40M growth and acquisition
                        </h2>
                        <p style={{
                            color: '#A0A0A0',
                            fontSize: '1.25rem',
                            lineHeight: '1.6',
                            marginBottom: '3rem',
                            fontWeight: '400',
                            maxWidth: '90%'
                        }}>
                            Discover how we helped Accern build a powerful AI research tool for analysts and VCs, setting new UX standards now used by OpenAI and other AI leaders.
                        </p>
                        <div style={{
                            width: '100%',
                            aspectRatio: '16/10',
                            backgroundColor: '#1E2A3A',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            {/* Placeholder Image element */}
                            <div style={{
                                width: '100%', height: '100%',
                                background: 'linear-gradient(135deg, #1A2980 0%, #26D0CE 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Accern Preview</span>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right Column - VTnews */}
                    <AnimatedSection delay={0.4} direction="up">
                        <h2 style={{
                            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                            fontWeight: '800',
                            letterSpacing: '-0.03em',
                            margin: '0 0 2rem 0',
                            lineHeight: '1.1'
                        }}>
                            How we built an AI media platform that reached 85k users in its first month
                        </h2>
                        <p style={{
                            color: '#A0A0A0',
                            fontSize: '1.25rem',
                            lineHeight: '1.6',
                            marginBottom: '3rem',
                            fontWeight: '400',
                            maxWidth: '90%'
                        }}>
                            See how VTnews.ai reached 240K monthly readers with a news platform exposing media bias by Multitech.
                        </p>
                        <div style={{
                            width: '100%',
                            aspectRatio: '16/10',
                            backgroundColor: '#2A1E2A',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            {/* Placeholder Image element */}
                            <div style={{
                                width: '100%', height: '100%',
                                background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}>VTnews Preview</span>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Second Row of Case Studies */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(250px, 1fr) 2fr 2fr',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>
                    {/* Left Column - Empty */}
                    <div style={{ padding: '1rem' }}></div>

                    {/* Middle Column - Blockbeat */}
                    <AnimatedSection delay={0.1} direction="up">
                        <div style={{
                            width: '100%',
                            aspectRatio: '16/10',
                            backgroundColor: '#1E2A3A',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            position: 'relative',
                            marginBottom: '2rem'
                        }}>
                            {/* Placeholder Image element */}
                            <div style={{
                                width: '100%', height: '100%',
                                background: 'linear-gradient(135deg, #8A0000 0%, #DF0000 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Blockbeat Preview</span>
                            </div>
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                            fontWeight: '800',
                            letterSpacing: '-0.03em',
                            margin: '0 0 2rem 0',
                            lineHeight: '1.1'
                        }}>
                            How we turned Blockbeat into a real-time crypto decision platform for traders
                        </h2>
                    </AnimatedSection>

                    {/* Right Column - Sportswear */}
                    <AnimatedSection delay={0.3} direction="up">
                        <div style={{
                            width: '100%',
                            aspectRatio: '16/10',
                            backgroundColor: '#2A1E2A',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            position: 'relative',
                            marginBottom: '2rem'
                        }}>
                            {/* Placeholder Image element */}
                            <div style={{
                                width: '100%', height: '100%',
                                background: 'linear-gradient(135deg, #0A2E80 0%, #001A4C 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Dashboard Preview</span>
                            </div>
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                            fontWeight: '800',
                            letterSpacing: '-0.03em',
                            margin: '0 0 2rem 0',
                            lineHeight: '1.1'
                        }}>
                            How we helped a sportswear manufacturer reduce sales team workload and boost engagement...
                        </h2>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesList;
