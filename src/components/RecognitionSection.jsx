import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const MetricCard = ({ title, value, highlight = false, delay }) => (
    <AnimatedSection delay={delay} direction="up">
        <div style={{
            backgroundColor: highlight ? '#D3E95F' : '#FFFFFF',
            borderRadius: '24px',
            border: `1px solid ${highlight ? '#D3E95F' : 'rgba(0, 0, 0, 0.06)'}`,
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            transition: 'all 0.3s ease',
            boxShadow: highlight ? '0 12px 30px rgba(211, 233, 95, 0.2)' : '0 4px 15px rgba(0,0,0,0.02)',
            height: '100%',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {highlight && (
                <div style={{ position: 'absolute', top: '-50%', right: '-20%', width: '150%', height: '150%', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)', filter: 'blur(20px)', pointerEvents: 'none' }} />
            )}
            <div style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: '700',
                color: '#1A1A1A',
                letterSpacing: '-0.03em',
                marginBottom: '0.5rem',
                lineHeight: '1',
                zIndex: 1
            }}>
                {value}
            </div>
            <div style={{
                fontSize: '1.05rem',
                fontWeight: '600',
                color: highlight ? 'rgba(0,0,0,0.6)' : '#6B7280',
                zIndex: 1
            }}>
                {title}
            </div>
        </div>
    </AnimatedSection>
);


const RecognitionSection = () => {
    return (
        <section className="responsive-padding" style={{
            backgroundColor: '#F8F9FA',
            padding: '8rem 2rem',
            fontFamily: "'Inter', sans-serif"
        }}>
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
            }}>
                {/* Section header */}
                <AnimatedSection delay={0} direction="up">
                    <div style={{ marginBottom: '4rem', maxWidth: '600px' }}>
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
                            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#1A1A1A', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Enterprise Scale</span>
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                            fontWeight: '700',
                            lineHeight: '1.05',
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.03em',
                            color: '#1A1A1A',
                        }}>
                            Proven Enterprise Reliability.
                        </h2>
                        <p style={{
                            fontSize: '1.15rem',
                            fontWeight: '500',
                            color: '#4A4A4A',
                            lineHeight: '1.7',
                        }}>
                            Multitech operates with industry-leading infrastructure, providing unmatched security and performance for your organizational workloads and data.
                        </p>
                    </div>
                </AnimatedSection>

                {/* Badges grid */}
                <div className="responsive-grid-4" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1.5rem',
                    marginBottom: '4rem'
                }}>
                    <MetricCard title="Enterprise Clients" value="500+" delay={0.1} />
                    <MetricCard title="Uptime SLA" value="99.9%" delay={0.2} highlight={true} />
                    <MetricCard title="Total Deployments" value="2.5K+" delay={0.3} />
                    <MetricCard title="Global Datacenters" value="25+" delay={0.4} />
                </div>

                {/* Secondary compliance row */}
                <AnimatedSection delay={0.3} direction="up">
                    <div className="responsive-grid-3" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '2rem',
                        padding: '3rem 0',
                        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1A1A1A' }}>ISO 27001 Certified</div>
                            <div style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: '1.6' }}>Our infrastructure meets the highest international standards for information security management.</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1A1A1A' }}>Tier IV Datacenters</div>
                            <div style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: '1.6' }}>Fault-tolerant site infrastructure ensuring continuous availability without interruptions.</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1A1A1A' }}>24/7 Managed Support</div>
                            <div style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: '1.6' }}>Expert, around-the-clock technical assistance backed by service level agreements.</div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default RecognitionSection;
