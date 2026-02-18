import React from 'react';

const Badge = ({ title, quarter, color = '#3B82F6', scale = 1, rotation = 0, zIndex = 1 }) => (
    <div style={{
        position: 'relative',
        transform: `scale(${scale}) rotate(${rotation}deg)`,
        zIndex: zIndex,
        filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.3))',
        transition: 'transform 0.3s ease',
        cursor: 'default'
    }}
        onMouseEnter={(e) => e.currentTarget.style.transform = `scale(${scale * 1.05}) rotate(${rotation}deg) translateY(-5px)`}
        onMouseLeave={(e) => e.currentTarget.style.transform = `scale(${scale}) rotate(${rotation}deg)`}
    >
        {/* Top Label */}
        <div style={{
            position: 'absolute',
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#EF4444', // Red label
            color: 'white',
            fontSize: '0.6rem',
            fontWeight: 'bold',
            padding: '2px 8px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
            zIndex: 2,
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
            {quarter}
        </div>

        {/* Badge Body */}
        <div style={{
            width: '100px',
            height: '120px',
            backgroundColor: 'white',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            textAlign: 'center',
            position: 'relative' // For pseudo-elements if needed
        }}>
            {/* G Icon */}
            <div style={{ fontSize: '1.2rem', fontWeight: '900', color: '#EF4444', marginBottom: '0.25rem' }}>G</div>

            <div style={{
                fontSize: '0.85rem',
                fontWeight: '800',
                color: '#111827',
                lineHeight: '1.2'
            }}>
                {title}
            </div>
        </div>

        {/* Bottom Accent */}
        <div style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            height: '10px',
            backgroundColor: color,
            clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)',
            transform: 'translateY(-15px)', // Tucking it in
            opacity: 0.5
        }}></div>
    </div>
);

const CenterBadge = ({ title, quarter }) => (
    <div style={{
        position: 'relative',
        zIndex: 10,
        transform: 'scale(1.2) translateY(-10px)',
        filter: 'drop-shadow(0 20px 25px rgba(0,0,0,0.4))'
    }}>
        {/* Top Label */}
        <div style={{
            position: 'absolute',
            top: '-14px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#F59E0B', // Orange/Gold
            color: 'white',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            padding: '3px 10px',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
            zIndex: 2,
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
            {quarter}
        </div>

        {/* Badge Body */}
        <div style={{
            width: '120px',
            height: '140px',
            backgroundColor: 'white',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            textAlign: 'center',
            borderTop: '4px solid #F59E0B' // Gold top border
        }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#F59E0B', marginBottom: '0.5rem' }}>G</div>
            <div style={{
                fontSize: '1.1rem',
                fontWeight: '900',
                color: '#111827',
                lineHeight: '1.1'
            }}>
                {title}
            </div>
        </div>
    </div>
);

const RecognitionSection = () => {
    return (
        <section style={{
            backgroundColor: '#0F1115',
            backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1d23 0%, #0F1115 100%)',
            padding: '6rem 2rem',
            color: 'white',
            overflow: 'hidden'
        }}>
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr',
                gap: '4rem',
                alignItems: 'center',
                '@media (max-width: 768px)': {
                    gridTemplateColumns: '1fr',
                    textAlign: 'center'
                }
            }}>
                {/* Left Content */}
                <div>
                    <div style={{
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        letterSpacing: '0.1em',
                        color: '#9CA3AF',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        fontFamily: 'monospace'
                    }}>
                        Recognition
                    </div>
                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em',
                        background: 'linear-gradient(to right, #fff, #9CA3AF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Recognized for performance
                    </h2>
                    <p style={{
                        fontSize: '1.125rem',
                        color: '#D1D5DB',
                        lineHeight: '1.6',
                        maxWidth: '500px',
                        marginBottom: '2rem'
                    }}>
                        High customer ratings and global certifications show Multitech Solutions delivers where it matters most.
                    </p>

                    {/* Star Rating */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ display: 'flex', color: '#F59E0B' }}>
                            {'★★★★★'.split('').map((star, i) => <span key={i} style={{ fontSize: '1.25rem' }}>{star}</span>)}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D1D5DB', fontSize: '0.9rem' }}>
                            <div style={{
                                backgroundColor: '#F97316',
                                color: 'white',
                                width: '24px',
                                height: '24px',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                fontSize: '0.8rem'
                            }}>G</div>
                            Based on 60+ reviews
                        </div>
                    </div>
                </div>

                {/* Right Content - Badges */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem', // Initial gap, handled by transforms
                    position: 'relative',
                    padding: '2rem 0'
                }}>
                    <Badge title="Users Most Likely To Recommend" quarter="WINTER 2026" rotation={-5} zIndex={1} color="#3B82F6" />
                    <Badge title="Regional Leader" quarter="WINTER 2026" rotation={-2} zIndex={2} color="#3B82F6" />

                    <CenterBadge title="Leader" quarter="WINTER 2026" />

                    <Badge title="Best Support" quarter="WINTER 2026" rotation={2} zIndex={2} color="#10B981" />
                    <Badge title="Easiest Setup" quarter="WINTER 2026" rotation={5} zIndex={1} color="#10B981" />
                </div>
            </div>
        </section>
    );
};

export default RecognitionSection;
