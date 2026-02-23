import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const InfoSection = () => {
    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '8rem 2rem',
            fontFamily: "'Inter', sans-serif",
        }}>
            <AnimatedSection delay={0} direction="up">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.4rem 1rem',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                        borderRadius: '9999px',
                        marginBottom: '1.5rem',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                    }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#1A1A1A', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Infrastructure</span>
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '700',
                        color: '#000000',
                        marginBottom: '1rem',
                        letterSpacing: '-0.04em',
                    }}>
                        Scalable Enterprise Infrastructure.
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#4A4A4A',
                        maxWidth: '700px',
                        margin: '0 auto',
                        lineHeight: '1.6',
                        fontWeight: '500'
                    }}>
                        Multitech connects modern enterprise systems with scalable cloud environments, providing highly reliable networks for your workloads.
                    </p>
                </div>
            </AnimatedSection>

            {/* Bento Grid layout */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gridTemplateRows: 'auto auto',
                gap: '1.5rem',
            }}>
                {/* Huge Card */}
                <AnimatedSection delay={0.1} direction="up" style={{ gridColumn: '1 / span 8', gridRow: '1' }}>
                    <div style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '24px',
                        padding: '3rem',
                        height: '100%',
                        border: '1px solid rgba(0, 0, 0, 0.06)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.04)',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        minHeight: '400px'
                    }}>
                        {/* Placeholder Graphic - Security Nodes */}
                        <div style={{ position: 'absolute', top: 0, right: 0, bottom: '40%', left: 0, padding: '2rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', background: 'radial-gradient(circle at 50% 10%, rgba(211, 233, 95, 0.15) 0%, transparent 60%)' }}>
                            <svg width="250" height="250" viewBox="0 0 100 100" style={{ transform: 'perspective(500px) rotateX(45deg) rotateZ(-45deg)', filter: 'drop-shadow(0 20px 20px rgba(0,0,0,0.1))' }}>
                                <rect x="25" y="25" width="50" height="50" fill="#FFFFFF" stroke="#D3E95F" strokeWidth="2" rx="8" />
                                <rect x="35" y="35" width="30" height="30" fill="rgba(211, 233, 95, 0.2)" stroke="#D3E95F" strokeWidth="1" rx="4" />
                                <circle cx="50" cy="50" r="5" fill="#1A1A1A" />
                                <line x1="10" y1="50" x2="25" y2="50" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
                                <line x1="75" y1="50" x2="90" y2="50" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
                                <line x1="50" y1="10" x2="50" y2="25" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
                                <line x1="50" y1="75" x2="50" y2="90" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
                            </svg>
                        </div>
                        <div style={{ zIndex: 1, position: 'relative' }}>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.75rem', color: '#1A1A1A', letterSpacing: '-0.02em' }}>Enterprise-Grade Security</h3>
                            <p style={{ color: '#4A4A4A', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '500px' }}>
                                Workloads execute in highly secure cloud environments. With leading access controls, not even internal staff can compromise data endpoints.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Small Card 1 */}
                <AnimatedSection delay={0.2} direction="up" style={{ gridColumn: '9 / span 4', gridRow: '1' }}>
                    <div style={{
                        backgroundColor: '#1A1A1A', // Dark contrasting card
                        borderRadius: '24px',
                        padding: '2.5rem',
                        height: '100%',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '400px'
                    }}>
                        <div style={{ width: 48, height: 48, borderRadius: '12px', backgroundColor: 'rgba(211, 233, 95, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(211, 233, 95, 0.3)' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D3E95F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                            </svg>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem', color: '#FFFFFF', letterSpacing: '-0.02em' }}>Optimized Performance</h3>
                            <p style={{ color: '#9CA3AF', fontSize: '1rem', lineHeight: '1.6' }}>
                                Experience peak operational efficiency with minimal overhead across our Oracle ERP implementations and custom corporate workloads.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Small Card 2 */}
                <AnimatedSection delay={0.3} direction="up" style={{ gridColumn: '1 / span 5', gridRow: '2' }}>
                    <div style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '24px',
                        padding: '2.5rem',
                        border: '1px solid rgba(0, 0, 0, 0.06)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.04)',
                    }}>
                        <div style={{ width: 48, height: 48, borderRadius: '12px', backgroundColor: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2">
                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem', color: '#1A1A1A', letterSpacing: '-0.02em' }}>Unified Integrations</h3>
                        <p style={{ color: '#4A4A4A', fontSize: '1rem', lineHeight: '1.6' }}>
                            Multitech acts as your primary integration partner. Easily bridge older on-premises databases to any modern cloud solutions seamlessly.
                        </p>
                    </div>
                </AnimatedSection>

                {/* Wide Card */}
                <AnimatedSection delay={0.4} direction="up" style={{ gridColumn: '6 / span 7', gridRow: '2' }}>
                    <div style={{
                        backgroundColor: '#D3E95F', // Lime accent block!
                        borderRadius: '24px',
                        padding: '2.5rem',
                        boxShadow: '0 20px 60px rgba(211, 233, 95, 0.15)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Huge outline text watermark */}
                        <div style={{ position: 'absolute', top: -10, right: -20, fontSize: '10rem', fontWeight: '900', color: 'rgba(0,0,0,0.03)', userSelect: 'none', lineHeight: 1 }}>ERP</div>
                        <div style={{ position: 'relative', zIndex: 1, marginTop: '8rem' }}>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.75rem', color: '#1A1A1A', letterSpacing: '-0.02em' }}>Data Integrity</h3>
                            <p style={{ color: 'rgba(0,0,0,0.7)', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '400px' }}>
                                Every transaction generates automated audit trails. Maintain complete governance and reporting compliance over your business operations.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default InfoSection;
