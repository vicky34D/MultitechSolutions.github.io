import React from 'react';

export const SocialMediaFeature = () => {
    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '4rem 2rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
        }}>
            {/* Left Image Side */}
            <div style={{ position: 'relative' }}>
                {/* Main background blob/shape */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '-10%',
                    width: '80%',
                    height: '90%',
                    backgroundColor: '#DEF9C4', // Light green bg
                    borderRadius: '40px',
                    zIndex: 0
                }}></div>

                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: '32px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                }}>
                    <img
                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Man wearing headphones"
                        style={{ width: '100%', display: 'block' }}
                    />
                </div>

                {/* Overlay UI Card */}
                <div style={{
                    position: 'absolute',
                    top: '40%',
                    left: '-20px',
                    backgroundColor: 'white',
                    padding: '1.5rem',
                    borderRadius: '16px',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                    width: '280px',
                    zIndex: 2,
                    fontFamily: 'sans-serif'
                }}>
                    <div style={{ marginBottom: '1rem' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#6B7280', marginBottom: '0.25rem' }}>Quality <span style={{ fontWeight: 'normal' }}>Custom</span></div>
                        <div style={{
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                            padding: '0.75rem',
                            fontSize: '0.9rem',
                            color: '#374151',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            Youtube 720p <span>▼</span>
                        </div>
                    </div>
                    {/* Active Selection */}
                    <div style={{
                        position: 'relative',
                        background: 'linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        color: 'white',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.4)',
                        transform: 'scale(1.05)',
                        marginBottom: '0.5rem'
                    }}>
                        Instagram
                        {/* Cursor Icon */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-15px',
                            right: '20px',
                            fontSize: '24px'
                        }}>👆</div>
                    </div>
                    <div style={{
                        padding: '0.75rem',
                        fontSize: '0.9rem',
                        color: '#374151',
                    }}>
                        Twitter
                    </div>
                </div>
            </div>

            {/* Right Text Side */}
            <div>
                <h2 style={{
                    fontSize: '3rem',
                    fontWeight: '800', // Extra bold
                    lineHeight: '1.1',
                    color: '#111827',
                    marginBottom: '2rem',
                    letterSpacing: '-1px'
                }}>
                    Compress video files for seamless social media posting
                </h2>
                <p style={{
                    fontSize: '1.25rem',
                    color: '#4B5563',
                    lineHeight: '1.6'
                }}>
                    Keep your audience engaged by ensuring your content loads fast on all social media platforms. Effortlessly share captivating videos even on mobile while keeping their video quality intact. You no longer need to worry about data consumption! Plus, you have a full range of social media optimization tools at your fingertips. Create crisp, high-quality videos and add your logo to create brand awareness.
                </p>
            </div>
        </section>
    );
};

export const VersatileFeature = () => {
    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '4rem 2rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
        }}>
            {/* Left Text Side */}
            <div>
                <h2 style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    lineHeight: '1.1',
                    color: '#111827',
                    marginBottom: '2rem',
                    letterSpacing: '-1px'
                }}>
                    Powerful, versatile, and efficient
                </h2>
                <p style={{
                    fontSize: '1.25rem',
                    color: '#4B5563',
                    lineHeight: '1.6',
                    marginBottom: '1rem'
                }}>
                    VEED is the best online video compression software - simple, automatic, and compatible with all popular file formats. Upload and compress MOV, MKV, AVI, MP4, YouTube videos, and more. It also works as a GIF compressor. Quickly compress and share GIFs via email, instant messaging platforms, and chat apps to increase engagement in your online communities. It's an all-in-one powerful editor, video compressor, and <a href="#" style={{ color: '#6366F1', textDecoration: 'none' }}>video converter</a>!
                </p>
            </div>

            {/* Right Image Side */}
            <div style={{ position: 'relative' }}>
                {/* Main background blob/shape */}
                <div style={{
                    position: 'absolute',
                    top: '5%',
                    right: '-5%',
                    width: '90%',
                    height: '95%',
                    backgroundColor: '#D1FAE5', // Mint green bg
                    borderRadius: '40px',
                    zIndex: 0
                }}></div>

                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: '32px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                }}>
                    <img
                        src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Woman gesturing"
                        style={{ width: '100%', display: 'block' }}
                    />
                </div>

                {/* Floating Icons */}
                <div style={{ position: 'absolute', top: '20px', right: '-20px', display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 2 }}>
                    {/* Share Icon */}
                    <div style={{ width: '48px', height: '48px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
                        <span style={{ fontSize: '20px' }}>↗️</span>
                    </div>
                    {/* Translate Icon */}
                    <div style={{ width: '48px', height: '48px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
                        <span style={{ fontSize: '20px' }}>文</span>
                    </div>
                    {/* Download Icon */}
                    <div style={{ width: '48px', height: '48px', backgroundColor: '#0EA5E9', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
                        <span style={{ fontSize: '20px' }}>⬇</span>
                    </div>
                </div>

                {/* Overlay Download UI Card */}
                <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    right: '-30px',
                    backgroundColor: 'white',
                    padding: '1.5rem',
                    borderRadius: '16px',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                    width: '300px',
                    zIndex: 2
                }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#111827', fontSize: '0.9rem' }}>Download</h4>
                    <p style={{ margin: '0 0 1rem 0', color: '#6B7280', fontSize: '0.75rem' }}>Choose download format</p>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {/* MP4 Button */}
                        <button style={{
                            flex: 1,
                            padding: '0.75rem 0.5rem',
                            borderRadius: '8px',
                            border: 'none',
                            backgroundColor: '#0EA5E9', // Active blue
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '4px',
                            position: 'relative'
                        }}>
                            <span style={{ fontSize: '1.2rem' }}>🎬</span>
                            <span style={{ fontSize: '0.7rem' }}>MP4</span>
                            {/* Cursor */}
                            <div style={{ position: 'absolute', bottom: '-15px', right: '-5px', fontSize: '20px' }}>👆</div>
                        </button>

                        {/* MP3 Button */}
                        <button style={{
                            flex: 1,
                            padding: '0.75rem 0.5rem',
                            borderRadius: '8px',
                            border: '1px solid #E5E7EB',
                            backgroundColor: '#F9FAFB',
                            color: '#6B7280',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '4px'
                        }}>
                            <span style={{ fontSize: '1.2rem' }}>🎵</span>
                            <span style={{ fontSize: '0.7rem' }}>MP3</span>
                        </button>

                        {/* GIF Button */}
                        <button style={{
                            flex: 1,
                            padding: '0.75rem 0.5rem',
                            borderRadius: '8px',
                            border: '1px solid #E5E7EB',
                            backgroundColor: '#F9FAFB',
                            color: '#6B7280',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '4px'
                        }}>
                            <span style={{ fontSize: '1.2rem' }}>🖼️</span>
                            <span style={{ fontSize: '0.7rem' }}>GIF</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
