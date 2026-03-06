import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const SuccessStories = () => {
    return (
        <section style={{
            width: '100%',
            backgroundColor: '#F5F5F5',
            padding: '8rem 2rem 10rem',
            fontFamily: "'Inter', sans-serif",
            color: '#111111'
        }}>
            <div style={{
                maxWidth: '1300px',
                margin: '0 auto',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    marginBottom: '8rem',
                    gap: '4rem'
                }}>
                    <AnimatedSection delay={0} direction="up" style={{ flex: '1', minWidth: '300px' }}>
                        <h2 style={{
                            fontSize: 'clamp(3rem, 6vw, 5rem)',
                            fontWeight: '800',
                            letterSpacing: '-0.04em',
                            margin: 0,
                            lineHeight: '1.1'
                        }}>
                            Success stories<br />
                            shaped by our user experience<br />
                            design agency
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2} direction="up" style={{ flex: '1', maxWidth: '600px', minWidth: '300px' }}>
                        <p style={{
                            fontSize: '1.5rem',
                            lineHeight: '1.5',
                            color: '#333333',
                            marginBottom: '3rem',
                            fontWeight: '400',
                            letterSpacing: '-0.01em'
                        }}>
                            Along with taking the lead in designing AI-powered solutions, we embody a partnership mentality. This exact commitment has been the bedrock of our clients' successes. When you choose to collaborate with us, we promise to be right where your audience's changing desires meet your ambitious business goals. We don't settle for mediocrity; we strive for excellence in every Figma pixel, every touchpoint, and every UX interaction.
                        </p>
                        <p style={{
                            fontSize: '1.5rem',
                            lineHeight: '1.5',
                            color: '#333333',
                            fontWeight: '400',
                            letterSpacing: '-0.01em'
                        }}>
                            That is how we've built 50+ sustainable startup products and helped 400+ brands secure millions in funding, achieve successful acquisitions, and establish themselves as globally recognized companies.
                        </p>
                    </AnimatedSection>
                </div>

                <AnimatedSection delay={0.4} direction="up">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {/* Card 1 */}
                        <div style={{
                            backgroundColor: '#EBEBEB',
                            borderRadius: '16px',
                            padding: '3rem 2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '350px'
                        }}>
                            <h2 style={{ fontSize: '4.5rem', fontWeight: '800', color: '#111111', margin: '0', letterSpacing: '-0.03em' }}>$500M</h2>
                            <div>
                                <p style={{ color: '#555555', margin: 0, fontSize: '1.1rem', lineHeight: '1.4' }}>in funding secured<br />owning to our designs</p>
                                <span style={{ color: '#999999', fontSize: '0.9rem', fontWeight: '500', display: 'block', marginTop: '1rem' }}>/001</span>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div style={{
                            backgroundColor: '#EBEBEB',
                            borderRadius: '16px',
                            padding: '3rem 2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '350px'
                        }}>
                            <h2 style={{ fontSize: '4.5rem', fontWeight: '800', color: '#111111', margin: '0', letterSpacing: '-0.03em', lineHeight: '1' }}>+1 million</h2>
                            <div>
                                <p style={{ color: '#555555', margin: 0, fontSize: '1.1rem', lineHeight: '1.4' }}>increase<br />in customer base</p>
                                <span style={{ color: '#999999', fontSize: '0.9rem', fontWeight: '500', display: 'block', marginTop: '1rem' }}>/002</span>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div style={{
                            backgroundColor: '#EBEBEB',
                            borderRadius: '16px',
                            padding: '3rem 2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '350px'
                        }}>
                            <h2 style={{ fontSize: '4.5rem', fontWeight: '800', color: '#111111', margin: '0', letterSpacing: '-0.03em', lineHeight: '1' }}>1,000,000+</h2>
                            <div>
                                <p style={{ color: '#555555', margin: 0, fontSize: '1.1rem', lineHeight: '1.4' }}>of active<br />marketplace users</p>
                                <span style={{ color: '#999999', fontSize: '0.9rem', fontWeight: '500', display: 'block', marginTop: '1rem' }}>/003</span>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default SuccessStories;
