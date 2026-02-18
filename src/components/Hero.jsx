import React from 'react';

const Hero = () => {
    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '4rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '6rem'
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center'
            }}>
                {/* Left Column */}
                <div>
                    <h1 style={{
                        fontSize: '5rem',
                        lineHeight: '0.9',
                        fontWeight: '900', // Heavy bold
                        letterSpacing: '-3px',
                        marginBottom: '1.5rem',
                        color: '#111827',
                        textTransform: 'uppercase'
                    }}>
                        Video Compressor
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#4B5563',
                        marginBottom: '2.5rem',
                        maxWidth: '500px',
                        lineHeight: '1.6'
                    }}>
                        Video compression in minutes. Shrink file sizes without visible quality loss.
                    </p>
                    <button style={{
                        backgroundColor: '#6366F1',
                        color: 'white',
                        padding: '1rem 2rem',
                        fontSize: '1.1rem',
                        borderRadius: '9999px',
                        border: 'none',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.3)'
                    }}>
                        Compress a video <span style={{ fontSize: '1.2em' }}>→</span>
                    </button>
                </div>

                {/* Right Column */}
                <div style={{ position: 'relative' }}>
                    {/* Main Image */}
                    <div style={{
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        backgroundColor: '#E5E7EB', // Placeholder bg
                        aspectRatio: '16/9' // Aspect ratio
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                            alt="Person recording audio"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block'
                            }}
                        />
                    </div>


                </div>
            </div>

            {/* Ratings Section */}
            <div style={{ textAlign: 'center' }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '1rem',
                    backgroundColor: 'white',
                    padding: '0.75rem 2rem',
                    borderRadius: '9999px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#9CA3AF' }}>4.6</span>
                    <div style={{ display: 'flex', gap: '2px', color: '#D1D5DB' }}>
                        {'★★★★★'.split('').map((star, i) => (
                            <span key={i} style={{ fontSize: '1.2rem' }}>★</span>
                        ))}
                    </div>
                    <span style={{ color: '#6B7280', fontSize: '0.9rem' }}>319 reviews</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
