import React from 'react';

const Hero = () => {
    return (
        <section style={{
            maxWidth: '100%',
            minHeight: '100vh', // Full viewport height
            padding: '12rem 2rem 6rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '4rem',
            position: 'relative',
            position: 'relative',
            overflow: 'hidden',
            // Tech-inspired background (using user provided background)
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.6)), url('/assets/hero_bg_crusoe.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            {/* Background glowing orb effect */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{
                    fontSize: '4.5rem', // Larger font for impact
                    lineHeight: '1.1',
                    fontWeight: '900',
                    letterSpacing: '-2px',
                    marginBottom: '2rem',
                    color: '#111827',
                    textTransform: 'uppercase'
                }}>
                    End-to-End IT Solutions & Services
                </h1>
                <p style={{
                    fontSize: '1.5rem', // Increased size
                    color: '#4B5563',
                    marginBottom: '3rem',
                    maxWidth: '700px',
                    lineHeight: '1.6'
                }}>
                    Multitech Solutions is a 25 years young company delivering technology solutions to enterprises across different industry verticals. Your trusted partner for digital transformation.
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <button style={{
                        backgroundColor: '#111827', // Dark button for contrast
                        color: 'white',
                        padding: '1rem 2.5rem',
                        fontSize: '1.1rem',
                        borderRadius: '9999px',
                        border: 'none',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.2s'
                    }}
                        onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                        Connect with Us <span style={{ fontSize: '1.2em' }}>→</span>
                    </button>

                    <button style={{
                        backgroundColor: 'white',
                        color: '#111827',
                        padding: '1rem 2.5rem',
                        fontSize: '1.1rem',
                        borderRadius: '9999px',
                        border: '1px solid #E5E7EB',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                    }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#F9FAFB'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                    >
                        Learn More
                    </button>
                </div>
            </div>

            {/* Ratings Section - Centered at bottom */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.75rem 2rem',
                    borderRadius: '9999px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.5)'
                }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827' }}>4.6</span>
                    <div style={{ display: 'flex', gap: '2px', color: '#F59E0B' }}> {/* Gold stars */}
                        {'★★★★★'.split('').map((star, i) => (
                            <span key={i} style={{ fontSize: '1.2rem' }}>★</span>
                        ))}
                    </div>
                    <span style={{ color: '#4B5563', fontSize: '0.9rem' }}>319 reviews</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
