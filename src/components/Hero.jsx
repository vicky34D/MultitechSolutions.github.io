import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const Hero = () => {
    return (
        <section style={{
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#111111',
            fontFamily: "'Inter', sans-serif",
            paddingTop: '10rem',
            paddingBottom: '5rem',
            position: 'relative',
            overflow: 'visible'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                width: '100%',
                padding: '0 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                <AnimatedSection delay={0} direction="up" style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 7vw, 6rem)',
                        fontWeight: '800',
                        color: '#FFFFFF',
                        lineHeight: '1.05',
                        letterSpacing: '-0.03em',
                        marginBottom: '2rem',
                        maxWidth: '1000px',
                    }}>
                        Digital product design agency for AI-native B2B<br />
                        products & user experience
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        color: '#E0E0E0',
                        lineHeight: '1.5',
                        maxWidth: '800px',
                        marginBottom: '4rem',
                        fontWeight: '400',
                        letterSpacing: '-0.01em'
                    }}>
                        We redesign complex AI and data platforms into clear, high-performing digital experiences so users understand your product faster, trust it more, and keep coming back. Based in San Francisco, California.
                    </p>
                </AnimatedSection>

                {/* Stats Grid exactly like Lazarev */}
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
                            borderRadius: '16px',
                            padding: '2.5rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            aspectRatio: '1',
                            textAlign: 'left'
                        }}>
                            <span style={{ color: '#777777', fontSize: '0.9rem', fontWeight: '500' }}>/ 01</span>
                            <div>
                                <h2 style={{ fontSize: '4.5rem', fontWeight: '800', color: '#FFFFFF', margin: '0 0 0.5rem 0', letterSpacing: '-0.03em' }}>$500M+</h2>
                                <p style={{ color: '#999999', margin: 0, fontSize: '1.1rem', lineHeight: '1.3' }}>in funding secured<br />for our clients</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div style={{
                            backgroundColor: '#1C1C1C',
                            borderRadius: '16px',
                            padding: '2.5rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            aspectRatio: '1',
                            textAlign: 'left'
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
                            borderRadius: '16px',
                            padding: '2.5rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            aspectRatio: '1',
                            textAlign: 'left'
                        }}>
                            <span style={{ color: '#777777', fontSize: '0.9rem', fontWeight: '500' }}>/ 03</span>
                            <div>
                                <h2 style={{ fontSize: '4.5rem', fontWeight: '800', color: '#FFFFFF', margin: '0 0 0.5rem 0', letterSpacing: '-0.03em' }}>2015</h2>
                                <p style={{ color: '#999999', margin: 0, fontSize: '1.1rem', lineHeight: '1.3' }}>founded, 10+ years<br />of experience</p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Second row of grid */}
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
                            borderRadius: '16px',
                            padding: '2.5rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '250px',
                            textAlign: 'left'
                        }}>
                            <span style={{ color: '#777777', fontSize: '0.9rem', fontWeight: '500' }}>/ 04</span>
                            <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#FFFFFF', margin: '0', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                                San Francisco, CA
                            </h2>
                        </div>

                        {/* Card 5 */}
                        <div style={{
                            backgroundColor: '#1C1C1C',
                            borderRadius: '16px',
                            padding: '2.5rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '250px',
                            textAlign: 'left'
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
    );
};

export default Hero;
