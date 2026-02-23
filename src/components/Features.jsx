import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

export const SocialMediaFeature = () => {
    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '6rem 2rem',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
            gap: '5rem',
            alignItems: 'center',
            fontFamily: "'Inter', sans-serif",
        }}>
            {/* Left Image Side - Tech/Phala Placeholder */}
            <AnimatedSection delay={0} direction="left">
                <div style={{
                    borderRadius: '24px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.05)',
                    padding: '2rem',
                    position: 'relative',
                    aspectRatio: '5/4',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    {/* Background abstract grid */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                        backgroundImage: 'radial-gradient(#E5E7EB 1.5px, transparent 1.5px)',
                        backgroundSize: '24px 24px',
                        opacity: 0.8,
                    }} />

                    {/* Header mock */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', zIndex: 1 }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#E5E7EB' }} />
                            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#E5E7EB' }} />
                            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#E5E7EB' }} />
                        </div>
                        <div style={{
                            padding: '4px 12px',
                            backgroundColor: '#F3F4F6',
                            borderRadius: '12px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            color: '#4B5563'
                        }}>TEE.Worker</div>
                    </div>

                    {/* Faux Graph/Code Layout */}
                    <div style={{ flex: 1, zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ flex: 1, backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ height: '8px', width: '40%', backgroundColor: '#D1D5DB', borderRadius: '4px', marginBottom: '1rem' }} />
                                <div style={{ height: '4px', width: '100%', backgroundColor: '#E5E7EB', borderRadius: '2px', marginBottom: '8px' }} />
                                <div style={{ height: '4px', width: '85%', backgroundColor: '#E5E7EB', borderRadius: '2px', marginBottom: '8px' }} />
                                <div style={{ height: '4px', width: '90%', backgroundColor: '#E5E7EB', borderRadius: '2px' }} />
                            </div>
                            <div style={{ width: '120px', backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                <div style={{ width: 40, height: 40, borderRadius: '50%', border: '4px solid #D3E95F', borderRightColor: 'transparent', animation: 'spin 3s linear infinite' }} />
                                <div style={{ fontSize: '0.7rem', fontWeight: '600', color: '#9CA3AF' }}>Encrypting...</div>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#1A1A1A', color: '#D3E95F', fontFamily: 'monospace', padding: '1.5rem', borderRadius: '12px', fontSize: '0.8rem', lineHeight: 1.6 }}>
                            $ oracle_db_connect --secure <br />
                            &gt; Initiating cloud instance... <br />
                            &gt; Connection established. <br />
                            <span style={{ color: '#fff' }}>&gt; Ready to process enterprise workloads.</span>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Right Text Side */}
            <AnimatedSection delay={0.15} direction="right">
                <div style={{
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: '#888888',
                    letterSpacing: '0.1em',
                    marginBottom: '1rem',
                }}>Enterprise Security</div>

                <h2 style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    fontWeight: '700',
                    lineHeight: '1.05',
                    color: '#000000',
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.03em'
                }}>
                    Robust Infrastructure. <br /> Zero Downtime.
                </h2>
                <p style={{
                    fontSize: '1.15rem',
                    color: '#4A4A4A',
                    lineHeight: '1.7',
                    fontWeight: '500'
                }}>
                    Deploy scalable Oracle ERP and cloud solutions. Build robust applications that guarantee data security using enterprise-grade architecture. Maintain 100% compliance with industry standards.
                </p>
                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {['SOC 2 Type I', 'HIPAA Compliant', 'ISO 27001'].map(tag => (
                        <span key={tag} style={{
                            padding: '0.4rem 1rem',
                            backgroundColor: '#F3F4F6',
                            color: '#1A1A1A',
                            borderRadius: '8px',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            border: '1px solid #E5E7EB'
                        }}>✓ {tag}</span>
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
};

export const VersatileFeature = () => {
    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '6rem 2rem 10rem',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.25fr)',
            gap: '5rem',
            alignItems: 'center',
            fontFamily: "'Inter', sans-serif",
        }}>
            {/* Left Text Side */}
            <AnimatedSection delay={0} direction="left">
                <div style={{
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: '#888888',
                    letterSpacing: '0.1em',
                    marginBottom: '1rem',
                }}>Managed Services</div>

                <h2 style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    fontWeight: '700',
                    lineHeight: '1.05',
                    color: '#000000',
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.03em'
                }}>
                    Proven at Enterprise Scale.
                </h2>
                <p style={{
                    fontSize: '1.15rem',
                    color: '#4A4A4A',
                    lineHeight: '1.7',
                    marginBottom: '2rem',
                    fontWeight: '500'
                }}>
                    A dedicated team of experts ready to serve your most sensitive workloads. Deploy intelligent, secure solutions that interact seamlessly with your existing infrastructure without exposing user data.
                </p>

                <a href="#" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#1A1A1A',
                    textDecoration: 'none',
                    fontSize: '1.05rem',
                    fontWeight: '600',
                    padding: '0.85rem 2rem',
                    borderRadius: '16px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.05)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)';
                    }}
                >
                    Explore Services
                    <span style={{ fontSize: '1.2rem', color: '#A3B838' }}>→</span>
                </a>
            </AnimatedSection>

            {/* Right Image Side - Abstract TEE/Network Visual */}
            <AnimatedSection delay={0.15} direction="right">
                <div style={{
                    borderRadius: '24px',
                    backgroundColor: '#1A1A1A', // Dark mode bento for contrast
                    boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                    padding: '2rem',
                    position: 'relative',
                    aspectRatio: '5/4',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* Dark grid background */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }} />

                    {/* Faux network status graphic */}
                    <div style={{ zIndex: 1, width: '100%', height: '100%', position: 'relative' }}>
                        {/* Server nodes */}
                        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 60, height: 60, backgroundColor: 'rgba(211, 233, 95, 0.1)', border: '1px solid #D3E95F', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: 12, height: 12, backgroundColor: '#D3E95F', borderRadius: '50%', boxShadow: '0 0 10px #D3E95F' }} />
                        </div>
                        <div style={{ position: 'absolute', top: '15%', right: '15%', width: 50, height: 50, backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: 8, height: 8, backgroundColor: '#888', borderRadius: '50%' }} />
                        </div>
                        <div style={{ position: 'absolute', bottom: '25%', left: '15%', width: 50, height: 50, backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: 8, height: 8, backgroundColor: '#888', borderRadius: '50%' }} />
                        </div>
                        <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: 70, height: 70, backgroundColor: 'rgba(211, 233, 95, 0.1)', border: '1px solid #D3E95F', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: 16, height: 16, backgroundColor: '#D3E95F', borderRadius: '50%', boxShadow: '0 0 15px #D3E95F', animation: 'pulse 2s infinite' }} />
                        </div>

                        {/* Central Cloud Node */}
                        <div style={{
                            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                            width: 140, height: 140, backgroundColor: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 0 100px rgba(211, 233, 95, 0.15)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <div style={{
                                width: 90, height: 90, backgroundColor: 'rgba(211, 233, 95, 0.05)',
                                border: '1.5px solid #D3E95F', borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D3E95F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                        </div>

                        {/* Connection lines (SVG overlaid) */}
                        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
                            <line x1="15%" y1="20%" x2="40%" y2="40%" stroke="#D3E95F" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
                            <line x1="85%" y1="15%" x2="60%" y2="40%" stroke="#888" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                            <line x1="15%" y1="75%" x2="40%" y2="60%" stroke="#888" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                            <line x1="90%" y1="80%" x2="65%" y2="65%" stroke="#D3E95F" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
                        </svg>

                        {/* Activity Log Overlay */}
                        <div style={{
                            position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem',
                            backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: '12px', padding: '1rem',
                            border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <span style={{ fontSize: '0.75rem', color: '#9CA3AF', fontFamily: 'monospace' }}>SYSTEM.STATUS</span>
                                <span style={{ fontSize: '0.75rem', color: '#D3E95F', fontFamily: 'monospace', fontWeight: 'bold' }}>100% UPTIME</span>
                            </div>
                            <div style={{ height: '4px', width: '100%', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                                <div style={{ height: '100%', width: '85%', backgroundColor: '#D3E95F', borderRadius: '2px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};
