import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const DesignProcess = () => {
    return (
        <section style={{
            width: '100%',
            backgroundColor: '#F5F5F5',
            padding: '10rem 2rem',
            fontFamily: "'Inter', sans-serif",
            color: '#111111'
        }}>
            <div style={{
                maxWidth: '1440px',
                margin: '0 auto',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    {/* Left Column - Heading */}
                    <AnimatedSection delay={0} direction="up">
                        <h2 style={{
                            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                            fontWeight: '800',
                            letterSpacing: '-0.04em',
                            margin: '0',
                            lineHeight: '1.1'
                        }}>
                            Digital product<br />
                            design process
                        </h2>
                    </AnimatedSection>

                    {/* Right Column - Text Paragraphs */}
                    <AnimatedSection delay={0.2} direction="up">
                        <p style={{
                            fontSize: '1.75rem',
                            lineHeight: '1.4',
                            fontWeight: '400',
                            color: '#1A1A1A',
                            marginBottom: '3rem',
                            maxWidth: '90%'
                        }}>
                            We do not take on projects that involve blind conformity or designing out of context. We won't settle for a user interface design that is misaligned with your product and digital strategy. Neither will we launch web development ventures without user testing to validate our design solutions.
                        </p>
                        <p style={{
                            fontSize: '1.75rem',
                            lineHeight: '1.4',
                            fontWeight: '400',
                            color: '#1A1A1A',
                            margin: 0,
                            maxWidth: '90%'
                        }}>
                            Instead, we create scalable digital products that meet the ever-evolving demands of our customers, ensuring long-term sustainability.
                        </p>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default DesignProcess;
