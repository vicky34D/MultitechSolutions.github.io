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

                {/* Advanced Settings Overlay Card Removed */}
            </div>
        </section>
    );
};

export default DemoSection;
