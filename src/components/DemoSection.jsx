import React from 'react';

const DemoSection = () => {
    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '4rem 2rem 8rem 2rem',
            textAlign: 'center'
        }}>
            <h2 style={{
                fontSize: '4rem',
                fontWeight: '800',
                color: '#111827',
                marginBottom: '1rem',
                letterSpacing: '-2px',
                textTransform: 'uppercase',
                lineHeight: '0.9'
            }}>
                Connect with Us
            </h2>
            <p style={{
                fontSize: '1.5rem',
                color: '#4B5563',
                marginBottom: '4rem',
                maxWidth: '800px',
                margin: '0 auto 4rem auto'
            }}>
                Let’s Transform Your Business. Explore how Oracle solutions can accelerate your digital roadmap.
            </p>

            <div style={{
                maxWidth: '1000px',
                margin: '0 auto',
                position: 'relative'
            }}>
                {/* Video Container */}
                <div style={{
                    borderRadius: '32px',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    aspectRatio: '16/9',
                    position: 'relative'
                }}>
                    <img
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                        alt="Demo Video Thumbnail"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />

                    {/* Play Button Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80px',
                        height: '80px',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 0 0 10px rgba(255, 255, 255, 0.3)'
                    }}>
                        <div style={{
                            width: '0',
                            height: '0',
                            borderTop: '12px solid transparent',
                            borderBottom: '12px solid transparent',
                            borderLeft: '20px solid #111827',
                            marginLeft: '4px'
                        }}></div>
                    </div>
                </div>

                {/* Advanced Settings Overlay Card */}
                <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    right: '-40px',
                    backgroundColor: 'white',
                    padding: '1.5rem',
                    borderRadius: '20px',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                    width: '320px',
                    textAlign: 'left'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '1.2rem' }}>⚙️</span>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: 0 }}>Advanced</h3>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#6B7280', marginBottom: '0.25rem' }}>Resolution</label>
                        <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', padding: '0.5rem', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between' }}>
                            720p <span>▼</span>
                        </div>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#6B7280', marginBottom: '0.25rem' }}>Quality</label>
                        <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', padding: '0.5rem', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between' }}>
                            High <span>▼</span>
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: '#818CF8', // Indigo/Purple
                        color: 'white',
                        padding: '1rem',
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontWeight: '600',
                        boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.4)'
                    }}>
                        <div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>Compression</div>
                            <div>Faster Render</div>
                        </div>
                        <span style={{ fontSize: '1.2rem' }}>⌄</span>
                    </div>

                    {/* Cursor */}
                    <div style={{ position: 'absolute', bottom: '-10px', right: '10px', fontSize: '24px' }}>👆</div>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;
