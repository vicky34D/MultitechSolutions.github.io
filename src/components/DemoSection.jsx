import React, { useState } from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const DemoSection = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '8rem 2rem',
            fontFamily: "'Inter', sans-serif",
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.25fr)',
            gap: '5rem',
            alignItems: 'center'
        }}>
            <AnimatedSection delay={0} direction="left">
                <div style={{ marginBottom: '3rem', maxWidth: '600px' }}>
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
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#1A1A1A', textTransform: 'uppercase', letterSpacing: '0.05em' }}>IT Engineers</span>
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                        fontWeight: '700',
                        color: '#1A1A1A',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.03em',
                        lineHeight: '1.05',
                    }}>
                        Initialize Secure Deployments<br />with Ease.
                    </h2>
                    <p style={{
                        fontSize: '1.15rem',
                        color: '#4A4A4A',
                        lineHeight: '1.7',
                        fontWeight: '500',
                        marginBottom: '2rem'
                    }}>
                        Use Multitech's orchestrated automation to execute secure migrations seamlessly. No downtime, and zero guesswork required.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button style={{
                            padding: '0.85rem 1.5rem',
                            backgroundColor: '#D3E95F',
                            color: '#1A1A1A',
                            borderRadius: '12px',
                            fontWeight: '600',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            boxShadow: '0 4px 14px rgba(211,233,95,0.4)',
                            transition: 'all 0.2s',
                        }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            Read Documentation
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
                <div style={{
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                    backgroundColor: '#0A0A0A', // Dark terminal aesthetic
                }}>
                    {/* Terminal Header */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1rem 1.5rem',
                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                        backgroundColor: 'rgba(255,255,255,0.02)'
                    }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FF5F56' }} />
                            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                            <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27C93F' }} />
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'monospace' }}>deploy.py</div>
                        <button
                            onClick={handleCopy}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: copied ? '#D3E95F' : 'rgba(255,255,255,0.5)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                fontSize: '0.75rem'
                            }}
                        >
                            {copied ? 'Copied!' : 'Copy'}
                            {!copied && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>}
                        </button>
                    </div>

                    {/* Terminal Body */}
                    <div style={{ padding: '2rem', fontFamily: '"JetBrains Mono", monospace, monospace', fontSize: '0.9rem', lineHeight: '1.6', overflowX: 'auto' }}>
                        <div style={{ display: 'flex', gap: '1rem', color: 'rgba(255,255,255,0.4)', userSelect: 'none' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minWidth: '1rem' }}>
                                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
                            </div>
                            <div style={{ color: '#E2E8F0' }}>
                                <span style={{ color: '#F472B6' }}>from</span> oracle.cloud <span style={{ color: '#F472B6' }}>import</span> DBInstance<br />
                                <span style={{ color: '#F472B6' }}>from</span> multitech.sync <span style={{ color: '#F472B6' }}>import</span> Migrate<br />
                                <br />
                                <span style={{ color: '#9CA3AF', fontStyle: 'italic' }}># Initialize secure infrastructure</span><br />
                                db = DBInstance(tier=<span style={{ color: '#A78BFA' }}>"enterprise"</span>)<br />
                                <br />
                                <span style={{ color: '#9CA3AF', fontStyle: 'italic' }}># Execute automated migration</span><br />
                                sync = Migrate(target=db)<br />
                                sync.run(<span style={{ color: '#A78BFA' }}>"Transferring critical business records..."</span>)
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
};

export default DemoSection;
