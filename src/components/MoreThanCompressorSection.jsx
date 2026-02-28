import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const MoreThanCompressorSection = () => {
    return (
        <section className="responsive-padding" style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '8rem 2rem',
            borderTop: '1px solid rgba(0, 0, 0, 0.06)',
            fontFamily: "'Inter', sans-serif"
        }}>
            <AnimatedSection delay={0} direction="up">
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                    fontWeight: '700',
                    color: '#1A1A1A',
                    marginBottom: '3rem',
                    letterSpacing: '-0.03em',
                    lineHeight: '1.05',
                    maxWidth: '800px',
                }}>
                    Native Integration With<br />
                    Global Technology Leaders.
                </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.15} direction="up">
                <div className="responsive-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '4rem',
                    marginBottom: '4rem',
                    fontSize: '1.15rem',
                    lineHeight: '1.7',
                    fontWeight: '500',
                    color: '#4A4A4A',
                }}>
                    <p>
                        Multitech acts as your strategic partner. Our certified Oracle cloud practices allow organizations to execute digital transformations smoothly with minimal operational disruption.
                    </p>
                    <p>
                        Whether moving legacy workloads to OCI or implementing new analytics solutions, we securely integrate and manage your entire application stack.
                    </p>
                </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} direction="up">
                <div style={{
                    maxWidth: '100%',
                    borderRadius: '24px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                    aspectRatio: '21/9',
                    minHeight: '400px'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(#E5E7EB 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.6 }} />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(211, 233, 95, 0.1) 0%, transparent 60%)', filter: 'blur(30px)' }} />

                    <svg width="80%" height="80%" viewBox="0 0 1000 400" style={{ position: 'absolute', zIndex: 1 }}>
                        <defs>
                            <linearGradient id="glowLine2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#D3E95F" stopOpacity="0" />
                                <stop offset="50%" stopColor="#D3E95F" stopOpacity="1" />
                                <stop offset="100%" stopColor="#D3E95F" stopOpacity="0" />
                            </linearGradient>
                            <filter id="shadowGlow">
                                <feDropShadow dx="0" dy="8" stdDeviation="15" floodColor="#D3E95F" floodOpacity="0.2" />
                            </filter>
                        </defs>

                        {/* Phala Center TEE Hub */}
                        <g transform="translate(500, 200)">
                            <rect x="-80" y="-80" width="160" height="160" rx="32" fill="#1A1A1A" filter="url(#shadowGlow)" />
                            <circle cx="0" cy="0" r="40" fill="none" stroke="#D3E95F" strokeWidth="4" />
                            <circle cx="0" cy="0" r="20" fill="#D3E95F" />
                            <path d="M-60-60 L60 60 M60-60 L-60 60" stroke="#333" strokeWidth="1" strokeDasharray="4 4" />
                        </g>

                        {/* Node connections */}
                        <g stroke="rgba(0,0,0,0.15)" strokeWidth="3" strokeDasharray="8 8">
                            <path d="M 200 100 Q 350 150 420 200" fill="none" />
                            <path d="M 200 300 Q 350 250 420 200" fill="none" />
                            <path d="M 800 100 Q 650 150 580 200" fill="none" />
                            <path d="M 800 300 Q 650 250 580 200" fill="none" />
                        </g>

                        {/* Animated pulses */}
                        <path d="M 200 100 Q 350 150 420 200" fill="none" stroke="url(#glowLine2)" strokeWidth="4" strokeDasharray="50 300">
                            <animate attributeName="stroke-dashoffset" from="350" to="0" dur="2s" repeatCount="indefinite" />
                        </path>
                        <path d="M 800 300 Q 650 250 580 200" fill="none" stroke="url(#glowLine2)" strokeWidth="4" strokeDasharray="50 300">
                            <animate attributeName="stroke-dashoffset" from="350" to="0" dur="2s" repeatCount="indefinite" />
                        </path>

                        {/* Blocks */}
                        <rect x="100" y="70" width="100" height="60" rx="16" fill="#FFF" stroke="#E5E7EB" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))" />
                        <text x="150" y="105" fontFamily="Inter" fontSize="14" fontWeight="600" textAnchor="middle" fill="#000">Database</text>

                        <rect x="100" y="270" width="100" height="60" rx="16" fill="#FFF" stroke="#E5E7EB" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))" />
                        <text x="150" y="305" fontFamily="Inter" fontSize="14" fontWeight="600" textAnchor="middle" fill="#000">Cloud Server</text>

                        <rect x="800" y="70" width="100" height="60" rx="16" fill="#FFF" stroke="#E5E7EB" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))" />
                        <text x="850" y="105" fontFamily="Inter" fontSize="14" fontWeight="600" textAnchor="middle" fill="#000">ERP Cloud</text>

                        <rect x="800" y="270" width="100" height="60" rx="16" fill="#FFF" stroke="#E5E7EB" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))" />
                        <text x="850" y="305" fontFamily="Inter" fontSize="14" fontWeight="600" textAnchor="middle" fill="#000">Firewalls</text>
                    </svg>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default MoreThanCompressorSection;
