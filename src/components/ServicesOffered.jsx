import React, { useState } from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const ServiceItem = ({ title, description }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '2rem',
                padding: '2.5rem 0',
                borderTop: '1px solid #2A2A2A',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h3 style={{
                fontSize: '2rem',
                fontWeight: '400',
                margin: 0,
                color: isHovered ? '#FFFFFF' : '#E0E0E0',
                transition: 'color 0.3s'
            }}>
                {title}
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <p style={{
                    color: '#A0A0A0',
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    margin: 0,
                    maxWidth: '85%'
                }}>
                    {description}
                </p>
                <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: isHovered ? '#FFFFFF' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s',
                    color: isHovered ? '#111111' : '#FFFFFF'
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </div>
            </div>
        </div>
    );
};

const ServicesOffered = () => {
    return (
        <section style={{
            width: '100%',
            backgroundColor: '#111111',
            padding: '5rem 2rem 10rem 2rem',
            fontFamily: "'Inter', sans-serif",
            color: '#FFFFFF'
        }}>
            <div style={{
                maxWidth: '1440px',
                margin: '0 auto',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(250px, 1fr) 2fr 2fr',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>
                    {/* Left Column - Empty */}
                    <div style={{ padding: '1rem' }}></div>

                    {/* Middle & Right Column - Heading */}
                    <div style={{ gridColumn: '2 / span 2' }}>
                        <AnimatedSection delay={0} direction="up">
                            <h2 style={{
                                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                                fontWeight: '800',
                                letterSpacing: '-0.04em',
                                margin: '0 0 4rem 0',
                                lineHeight: '1.1'
                            }}>
                                Digital product<br />
                                design services and<br />
                                solutions we offer
                            </h2>
                        </AnimatedSection>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(250px, 1fr) 4fr',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>
                    {/* Left Column - Button */}
                    <AnimatedSection delay={0.2} direction="up" style={{ paddingTop: '1rem' }}>
                        <button style={{
                            backgroundColor: '#1EAB53',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '999px',
                            padding: '1.25rem 2.5rem',
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            letterSpacing: '0.05em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            transition: 'background-color 0.2s'
                        }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#168F43'}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1EAB53'}
                        >
                            BECOME A CLIENT
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </button>
                    </AnimatedSection>

                    {/* Right Column - Text & List */}
                    <div>
                        <AnimatedSection delay={0.4} direction="up">
                            <p style={{
                                fontSize: '2rem',
                                lineHeight: '1.4',
                                fontWeight: '300',
                                color: '#E0E0E0',
                                marginBottom: '5rem',
                                maxWidth: '100%'
                            }}>
                                We lead your startup at every step of its growth, providing unparalleled personal service at every interaction. Whether it's launching an MVP, revamping an existing product, securing funding with UI prototypes, increasing customer engagement, or boosting conversions, we develop a suite of custom-tailored design services to fulfill your expectations.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.6} direction="up">
                            <div>
                                <ServiceItem
                                    title="UX/UI design"
                                    description="UI UX design services to solve business challenges and unlock growth. We go beyond your website or digital product—shaping brand perception and positioning for lasting impact."
                                />
                                <ServiceItem
                                    title="Website redesign"
                                    description="We specialize in redesigning websites to increase business KPIs and propel your brand forward. We've helped clients increase traffic and drive conversions by 50% and beyond."
                                />
                                <ServiceItem
                                    title="UX research"
                                    description="Before making any design solutions, our team conducts UX research, leaving no stone unturned. This entails market analysis, competitor assessment, crystallizing your product positioning, and defining comprehensive feature lists."
                                />
                                <ServiceItem
                                    title="UX design"
                                    description="UX designers take on the task of transferring user research insights and design solutions onto the interface. Through a series of user tests and iterative sessions, we ensure the digital experience is both scalable and highly functional."
                                />
                                <div style={{ borderTop: '1px solid #2A2A2A', width: '100%' }}></div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOffered;
