import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const OurClients = () => {
    return (
        <section style={{
            width: '100%',
            backgroundColor: '#111111',
            padding: '5rem 2rem 10rem',
            fontFamily: "'Inter', sans-serif",
            color: '#FFFFFF'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                <AnimatedSection delay={0} direction="up">
                    <h2 style={{
                        fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                        fontWeight: '800',
                        marginBottom: '2rem',
                        letterSpacing: '-0.03em'
                    }}>
                        Our clients
                    </h2>

                    <p style={{
                        fontSize: '1.5rem',
                        lineHeight: '1.5',
                        color: '#E0E0E0',
                        maxWidth: '1000px',
                        marginBottom: '5rem',
                        fontWeight: '400',
                        letterSpacing: '-0.01em'
                    }}>
                        Whether you're an AI startup aiming for Series D or an established brand seeking a digital transformation, our award-winning team will take your user-experience to the next level.
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.2} direction="up">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem 2rem'
                    }}>
                        {/* Shopify */}
                        <div>
                            <div style={{ marginBottom: '1.5rem', height: '40px', display: 'flex', alignItems: 'center' }}>
                                <svg viewBox="0 0 24 24" fill="currentColor" height="40" width="120">
                                    <path d="M21.5 5.5l-2-2-12 3-2 12 12-3 2-12z" fill="#95BF47" />
                                    <text x="35" y="16" fontSize="16" fontWeight="bold" fill="#FFF">shopify</text>
                                </svg>
                            </div>
                            <p style={{ color: '#888888', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                We enhanced the UX for advanced Shopify analytics, helping Peel raise $5M and leading to its acquisition by Shopify.
                            </p>
                        </div>

                        {/* Boeing */}
                        <div>
                            <div style={{ marginBottom: '1.5rem', height: '40px', display: 'flex', alignItems: 'center' }}>
                                <svg viewBox="0 0 100 24" fill="currentColor" height="30" width="100">
                                    <text x="0" y="18" fontSize="20" fontWeight="900" fontStyle="italic" fill="#FFF" letterSpacing="2">BOEING</text>
                                </svg>
                            </div>
                            <p style={{ color: '#888888', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                Streamlining Boeing's blueprint approval process, we optimized and simplified company-wide procedures.
                            </p>
                        </div>

                        {/* Blade */}
                        <div>
                            <div style={{ marginBottom: '1.5rem', height: '40px', display: 'flex', alignItems: 'center' }}>
                                <svg viewBox="0 0 100 24" fill="currentColor" height="30" width="100">
                                    <text x="0" y="20" fontSize="20" fontWeight="800" fill="#FFF" letterSpacing="4">B L A D E</text>
                                </svg>
                            </div>
                            <p style={{ color: '#888888', fontSize: '1.05rem', lineHeight: '1.6' }}>
                                Supporting Blade's marketing activities in the US and Europe, we boosted their market presence and engagement.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default OurClients;
