import React, { useState } from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

/* ─── Data ─────────────────────────────────────────────────────── */
const stats = [
    { value: '25+', label: 'Years of Excellence' },
    { value: '500+', label: 'Projects Delivered' },
    { value: '150+', label: 'Enterprise Clients' },
    { value: '98%', label: 'Client Satisfaction' },
];

const milestones = [
    { year: '2000', title: 'Founded in Kolkata', desc: 'Started as a boutique Oracle consultancy with a vision to digitise Indian enterprises.' },
    { year: '2005', title: 'First Major Enterprise Win', desc: 'Secured our first Fortune-500 Oracle ERP implementation, establishing credibility nationwide.' },
    { year: '2010', title: 'Cloud-First Pivot', desc: 'Early adopters of Oracle Cloud, positioning clients for the future of enterprise computing.' },
    { year: '2015', title: 'Regional Expansion', desc: 'Opened offices across India and the Middle East, serving 100+ active enterprise clients.' },
    { year: '2020', title: 'AI & Automation Era', desc: 'Launched AI-powered solutions practice, integrating ML and RPA into legacy transformation projects.' },
    { year: '2025', title: 'Global Impact', desc: '₹500M+ in client funding secured, 300+ certified experts, and recognition as a top-tier digital partner.' },
];

const values = [
    {
        title: 'Client-First Approach',
        desc: 'Every decision we make is guided by what delivers the most value to our clients. We listen, adapt, and execute with precision.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
    },
    {
        title: 'Innovation at Core',
        desc: 'We embrace cutting-edge technologies — from AI to cloud infrastructure — to keep our clients ahead of the curve.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
    },
    {
        title: 'Long-Term Partnership',
        desc: "We don't just complete projects; we build lasting relationships that grow stronger with every engagement.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        title: 'Integrity & Trust',
        desc: 'Transparency, accountability, and ethical practices are the foundation of everything we do.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
    {
        title: 'Agility & Speed',
        desc: 'Our lean, expert teams move fast without sacrificing quality — delivering results that matter, on time.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
    {
        title: 'Global Mindset',
        desc: 'With clients across continents, we bring a global perspective paired with deep local expertise.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
    },
];

const team = [
    {
        name: 'Annurag Jhunjhunwala',
        role: 'CEO & Co-Founder',
        bio: 'Visionary leader with decades of experience driving enterprise digital transformation and strategic business growth.',
        initials: 'AJ',
        accent: '#2563EB',
    },
    {
        name: 'Aaditya Jhunjhunwala',
        role: 'CEO & Co-Founder',
        bio: 'Entrepreneurial leader focused on innovation, scaling technology solutions, and building long-term client partnerships.',
        initials: 'AJ',
        accent: '#7C3AED',
    },
    {
        name: 'Subhankar Dhar',
        role: 'CTO',
        bio: 'Cloud architect and technology strategist who leads cutting-edge Oracle and AI-powered solution development.',
        initials: 'SD',
        accent: '#059669',
    },
    {
        name: 'Chanchal Banerjee',
        role: 'VP – Client Success',
        bio: 'Bridges technology and business strategy to ensure every client realises measurable ROI.',
        initials: 'CB',
        accent: '#D97706',
    },
    {
        name: 'Debashis Sapui',
        role: 'General Manager IT',
        bio: 'Seasoned IT leader managing end-to-end delivery operations and ensuring enterprise-grade service excellence.',
        initials: 'DS',
        accent: '#DC2626',
    },
];

/* ─── ValueCard Component ──────────────────────────────────────── */
const ValueCard = ({ value, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                background: isHovered
                    ? 'linear-gradient(145deg, rgba(37, 99, 235, 0.08) 0%, #1A1A1A 60%)'
                    : '#1A1A1A',
                borderRadius: '20px',
                padding: '2.2rem',
                border: isHovered
                    ? '1px solid rgba(37, 99, 235, 0.3)'
                    : '1px solid rgba(255, 255, 255, 0.06)',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {isHovered && (
                <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                    pointerEvents: 'none',
                }} />
            )}
            <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: isHovered ? 'rgba(37, 99, 235, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                transition: 'background 0.4s ease',
                color: isHovered ? '#60A5FA' : '#777777',
            }}>
                {value.icon}
            </div>
            <h3 style={{
                fontSize: '1.15rem',
                fontWeight: '600',
                color: '#FFFFFF',
                margin: '0 0 0.6rem 0',
                letterSpacing: '-0.01em',
            }}>
                {value.title}
            </h3>
            <p style={{
                fontSize: '0.9rem',
                lineHeight: '1.65',
                color: '#888888',
                margin: '0',
            }}>
                {value.desc}
            </p>
        </div>
    );
};

/* ─── TeamCard Component ───────────────────────────────────────── */
const TeamCard = ({ member }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                background: '#1A1A1A',
                borderRadius: '20px',
                padding: '2.5rem 2rem',
                border: isHovered
                    ? `1px solid ${member.accent}40`
                    : '1px solid rgba(255, 255, 255, 0.06)',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                textAlign: 'center',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {isHovered && (
                <div style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${member.accent}15 0%, transparent 70%)`,
                    filter: 'blur(40px)',
                    pointerEvents: 'none',
                }} />
            )}

            {/* Avatar */}
            <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${member.accent}25, ${member.accent}10)`,
                border: `2px solid ${isHovered ? member.accent + '60' : 'rgba(255,255,255,0.08)'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
                fontSize: '1.3rem',
                fontWeight: '700',
                color: member.accent,
                transition: 'border-color 0.4s ease',
                position: 'relative',
                zIndex: 1,
            }}>
                {member.initials}
            </div>

            <h3 style={{
                fontWeight: '600',
                fontSize: '1.1rem',
                color: '#FFFFFF',
                margin: '0 0 0.3rem',
                letterSpacing: '-0.01em',
                position: 'relative',
                zIndex: 1,
            }}>
                {member.name}
            </h3>
            <div style={{
                color: member.accent,
                fontSize: '0.8rem',
                marginBottom: '1rem',
                fontWeight: '600',
                letterSpacing: '0.02em',
                position: 'relative',
                zIndex: 1,
            }}>
                {member.role}
            </div>
            <p style={{
                color: '#888888',
                fontSize: '0.88rem',
                lineHeight: '1.65',
                margin: 0,
                position: 'relative',
                zIndex: 1,
            }}>
                {member.bio}
            </p>
        </div>
    );
};

/* ─── Timeline Item ────────────────────────────────────────────── */
const TimelineItem = ({ milestone, index, isLast }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isEven = index % 2 === 0;

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 60px 1fr',
                gap: '0',
                alignItems: 'start',
                minHeight: '140px',
            }}
        >
            {/* Left content */}
            <div style={{
                textAlign: 'right',
                paddingRight: '2rem',
                paddingTop: '0.25rem',
            }}>
                {isEven && (
                    <>
                        <h4 style={{
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            color: isHovered ? '#FFFFFF' : '#E0E0E0',
                            margin: '0 0 0.4rem 0',
                            transition: 'color 0.3s',
                        }}>
                            {milestone.title}
                        </h4>
                        <p style={{
                            fontSize: '0.88rem',
                            color: '#777777',
                            lineHeight: '1.6',
                            margin: 0,
                        }}>
                            {milestone.desc}
                        </p>
                    </>
                )}
                {!isEven && (
                    <span style={{
                        fontSize: '2rem',
                        fontWeight: '800',
                        color: isHovered ? '#60A5FA' : '#333333',
                        letterSpacing: '-0.03em',
                        transition: 'color 0.3s',
                        display: 'block',
                        paddingTop: '0.1rem',
                    }}>
                        {milestone.year}
                    </span>
                )}
            </div>

            {/* Center line + dot */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <div style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: isHovered ? '#2563EB' : '#333333',
                    border: isHovered ? '3px solid rgba(37, 99, 235, 0.3)' : '3px solid #1A1A1A',
                    transition: 'all 0.3s',
                    zIndex: 2,
                    flexShrink: 0,
                }} />
                {!isLast && (
                    <div style={{
                        width: '2px',
                        flex: 1,
                        minHeight: '100px',
                        background: 'linear-gradient(to bottom, #2A2A2A 0%, #1A1A1A 100%)',
                    }} />
                )}
            </div>

            {/* Right content */}
            <div style={{
                paddingLeft: '2rem',
                paddingTop: '0.25rem',
            }}>
                {!isEven && (
                    <>
                        <h4 style={{
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            color: isHovered ? '#FFFFFF' : '#E0E0E0',
                            margin: '0 0 0.4rem 0',
                            transition: 'color 0.3s',
                        }}>
                            {milestone.title}
                        </h4>
                        <p style={{
                            fontSize: '0.88rem',
                            color: '#777777',
                            lineHeight: '1.6',
                            margin: 0,
                        }}>
                            {milestone.desc}
                        </p>
                    </>
                )}
                {isEven && (
                    <span style={{
                        fontSize: '2rem',
                        fontWeight: '800',
                        color: isHovered ? '#60A5FA' : '#333333',
                        letterSpacing: '-0.03em',
                        transition: 'color 0.3s',
                        display: 'block',
                        paddingTop: '0.1rem',
                    }}>
                        {milestone.year}
                    </span>
                )}
            </div>
        </div>
    );
};

/* ─── Main Page ────────────────────────────────────────────────── */
const AboutUs = () => {
    return (
        <>
            <style>{`
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes floatSlow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-12px) rotate(1deg); }
                }
                @keyframes pulseDot {
                    0%, 100% { opacity: 0.4; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.4); }
                }
                @keyframes orbitSpin {
                    0% { transform: translate(-50%, -50%) rotate(0deg); }
                    100% { transform: translate(-50%, -50%) rotate(360deg); }
                }
            `}</style>

            {/* ──────────── HERO ──────────── */}
            <section style={{
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: '#111111',
                fontFamily: "'Inter', sans-serif",
                paddingTop: '8rem',
                paddingBottom: '6rem',
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/* Background elements */}
                <div style={{
                    position: 'absolute',
                    top: '15%',
                    right: '10%',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 60%)',
                    filter: 'blur(80px)',
                    pointerEvents: 'none',
                    animation: 'floatSlow 8s ease-in-out infinite',
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '5%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 60%)',
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                }} />
                {/* Decorative orbit ring */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '75%',
                    width: '350px',
                    height: '350px',
                    borderRadius: '50%',
                    border: '1px solid rgba(37, 99, 235, 0.08)',
                    pointerEvents: 'none',
                    animation: 'orbitSpin 30s linear infinite',
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '-5px',
                        left: '50%',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: '#2563EB',
                        opacity: 0.4,
                    }} />
                </div>

                <div style={{
                    maxWidth: '1300px',
                    margin: '0 auto',
                    width: '100%',
                    padding: '0 3rem',
                    position: 'relative',
                    zIndex: 1,
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1.2fr 1fr',
                        gap: '4rem',
                        alignItems: 'center',
                    }}>
                        {/* Left */}
                        <AnimatedSection delay={0} direction="up">
                            <span style={{
                                display: 'inline-block',
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                color: '#60A5FA',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                marginBottom: '1.5rem',
                                padding: '0.45rem 1.1rem',
                                borderRadius: '999px',
                                border: '1px solid rgba(96, 165, 250, 0.25)',
                                background: 'rgba(37, 99, 235, 0.08)',
                            }}>
                                About Us
                            </span>

                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                                fontWeight: '800',
                                color: '#FFFFFF',
                                lineHeight: '1.05',
                                letterSpacing: '-0.04em',
                                marginBottom: '1.5rem',
                            }}>
                                25 years of powering{' '}
                                <span style={{
                                    background: 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 50%, #60A5FA 100%)',
                                    backgroundSize: '200% 200%',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    animation: 'gradientShift 4s ease infinite',
                                }}>
                                    enterprise transformation
                                </span>
                            </h1>

                            <p style={{
                                fontSize: '1.1rem',
                                color: 'rgba(180, 190, 210, 0.75)',
                                lineHeight: '1.7',
                                maxWidth: '520px',
                                marginBottom: '2.5rem',
                                fontWeight: '400',
                            }}>
                                A trusted technology partner delivering Oracle enterprise solutions,
                                cloud infrastructure, and AI-powered transformation to enterprises
                                across the globe.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <button
                                    style={{
                                        padding: '1rem 2.2rem',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        border: 'none',
                                        borderRadius: '999px',
                                        background: '#2563EB',
                                        color: '#FFFFFF',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        letterSpacing: '0.02em',
                                        fontFamily: "'Inter', sans-serif",
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = '#1D4ED8';
                                        e.currentTarget.style.transform = 'scale(1.04)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = '#2563EB';
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    Explore Our Services →
                                </button>
                                <button
                                    style={{
                                        padding: '1rem 2.2rem',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        border: '1.5px solid #FFFFFF',
                                        borderRadius: '999px',
                                        background: 'transparent',
                                        color: '#FFFFFF',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        letterSpacing: '0.02em',
                                        fontFamily: "'Inter', sans-serif",
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                        e.currentTarget.style.transform = 'scale(1.04)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    Contact Us
                                </button>
                            </div>
                        </AnimatedSection>

                        {/* Right — Stats Grid */}
                        <AnimatedSection delay={0.3} direction="up">
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '1.25rem',
                            }}>
                                {stats.map((stat, idx) => (
                                    <div key={idx} style={{
                                        background: '#1A1A1A',
                                        borderRadius: '18px',
                                        padding: '2rem 1.5rem',
                                        border: '1px solid rgba(255, 255, 255, 0.06)',
                                        transition: 'border-color 0.3s ease',
                                    }}
                                        onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.3)'}
                                        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)'}
                                    >
                                        <h3 style={{
                                            fontSize: '2.5rem',
                                            fontWeight: '800',
                                            color: '#FFFFFF',
                                            margin: '0 0 0.4rem 0',
                                            letterSpacing: '-0.03em',
                                        }}>
                                            {stat.value}
                                        </h3>
                                        <p style={{
                                            fontSize: '0.85rem',
                                            color: '#777777',
                                            margin: 0,
                                            fontWeight: '500',
                                        }}>
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ──────────── MISSION & VISION ──────────── */}
            <section style={{
                width: '100%',
                background: '#111111',
                padding: '8rem 2rem',
                fontFamily: "'Inter', sans-serif",
                color: '#FFFFFF',
                borderTop: '1px solid rgba(255,255,255,0.04)',
            }}>
                <div style={{
                    maxWidth: '1300px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '3rem',
                }}>
                    {/* Mission */}
                    <AnimatedSection delay={0} direction="up">
                        <div style={{
                            background: 'linear-gradient(145deg, rgba(37, 99, 235, 0.08) 0%, #1A1A1A 50%)',
                            borderRadius: '24px',
                            padding: '3rem',
                            border: '1px solid rgba(37, 99, 235, 0.15)',
                            height: '100%',
                            position: 'relative',
                            overflow: 'hidden',
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-40px',
                                right: '-40px',
                                width: '200px',
                                height: '200px',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)',
                                filter: 'blur(40px)',
                                pointerEvents: 'none',
                            }} />
                            <span style={{
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                color: '#60A5FA',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '1rem',
                            }}>
                                Our Mission
                            </span>
                            <h2 style={{
                                fontSize: '1.8rem',
                                fontWeight: '700',
                                letterSpacing: '-0.03em',
                                margin: '0 0 1.25rem 0',
                                lineHeight: '1.15',
                            }}>
                                Powering Enterprise Transformation Through Technology
                            </h2>
                            <p style={{
                                fontSize: '0.95rem',
                                color: '#999999',
                                lineHeight: '1.7',
                                margin: '0 0 1rem 0',
                            }}>
                                At Multitech, our mission is simple: empower enterprises to achieve their full potential
                                through world-class Oracle implementations, cloud-native solutions, and intelligent automation.
                            </p>
                            <p style={{
                                fontSize: '0.95rem',
                                color: '#999999',
                                lineHeight: '1.7',
                                margin: 0,
                            }}>
                                Founded in 2000, we've grown from a boutique Oracle consultancy into a full-spectrum
                                technology solutions partner — with a team of 300+ certified experts spanning Oracle Fusion,
                                OCI, AI/ML, and Low-Code development.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Vision */}
                    <AnimatedSection delay={0.2} direction="up">
                        <div style={{
                            background: 'linear-gradient(145deg, rgba(124, 58, 237, 0.08) 0%, #1A1A1A 50%)',
                            borderRadius: '24px',
                            padding: '3rem',
                            border: '1px solid rgba(124, 58, 237, 0.15)',
                            height: '100%',
                            position: 'relative',
                            overflow: 'hidden',
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-40px',
                                right: '-40px',
                                width: '200px',
                                height: '200px',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
                                filter: 'blur(40px)',
                                pointerEvents: 'none',
                            }} />
                            <span style={{
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                color: '#A78BFA',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '1rem',
                            }}>
                                Our Vision
                            </span>
                            <h2 style={{
                                fontSize: '1.8rem',
                                fontWeight: '700',
                                letterSpacing: '-0.03em',
                                margin: '0 0 1.25rem 0',
                                lineHeight: '1.15',
                            }}>
                                The Most Trusted Oracle & Cloud Partner
                            </h2>
                            <p style={{
                                fontSize: '0.95rem',
                                color: '#999999',
                                lineHeight: '1.7',
                                margin: '0 0 1.5rem 0',
                            }}>
                                To be the most trusted Oracle and cloud technology partner in the Asia-Pacific and Middle East regions —
                                known for delivering measurable business outcomes, not just technical solutions.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {['Oracle Certified', 'OCI Partner', 'AI-Ready', 'ISO 27001'].map(tag => (
                                    <span key={tag} style={{
                                        backgroundColor: 'rgba(167, 139, 250, 0.1)',
                                        border: '1px solid rgba(167, 139, 250, 0.2)',
                                        color: '#A78BFA',
                                        borderRadius: '999px',
                                        padding: '0.35rem 0.9rem',
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        letterSpacing: '0.02em',
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ──────────── VALUES ──────────── */}
            <section style={{
                width: '100%',
                background: 'linear-gradient(180deg, #111111 0%, #0D1117 100%)',
                padding: '8rem 2rem',
                fontFamily: "'Inter', sans-serif",
                color: '#FFFFFF',
            }}>
                <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
                    <AnimatedSection delay={0} direction="up">
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <span style={{
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                color: '#555555',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '1rem',
                            }}>
                                What We Stand For
                            </span>
                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: '800',
                                letterSpacing: '-0.04em',
                                margin: '0 0 1.25rem 0',
                                lineHeight: '1.1',
                            }}>
                                Our Core Values
                            </h2>
                            <p style={{
                                fontSize: '1.05rem',
                                color: '#888888',
                                lineHeight: '1.7',
                                maxWidth: '550px',
                                margin: '0 auto',
                            }}>
                                The principles that guide every decision, every project, and every relationship we build.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1.25rem',
                    }}>
                        {values.map((value, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.08} direction="up">
                                <ValueCard value={value} index={idx} />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ──────────── JOURNEY TIMELINE ──────────── */}
            <section style={{
                width: '100%',
                background: '#111111',
                padding: '8rem 2rem',
                fontFamily: "'Inter', sans-serif",
                color: '#FFFFFF',
                borderTop: '1px solid rgba(255,255,255,0.04)',
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <AnimatedSection delay={0} direction="up">
                        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                            <span style={{
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                color: '#555555',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '1rem',
                            }}>
                                Our Journey
                            </span>
                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: '800',
                                letterSpacing: '-0.04em',
                                margin: '0 0 1.25rem 0',
                                lineHeight: '1.1',
                            }}>
                                25 years of milestones
                            </h2>
                            <p style={{
                                fontSize: '1.05rem',
                                color: '#888888',
                                lineHeight: '1.7',
                                maxWidth: '500px',
                                margin: '0 auto',
                            }}>
                                A quarter-century of innovation, growth, and unwavering commitment to our clients' success.
                            </p>
                        </div>
                    </AnimatedSection>

                    {milestones.map((milestone, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.08} direction="up">
                            <TimelineItem
                                milestone={milestone}
                                index={idx}
                                isLast={idx === milestones.length - 1}
                            />
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* ──────────── TEAM ──────────── */}
            <section style={{
                width: '100%',
                background: 'linear-gradient(180deg, #0D1117 0%, #111111 100%)',
                padding: '8rem 2rem',
                fontFamily: "'Inter', sans-serif",
                color: '#FFFFFF',
            }}>
                <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
                    <AnimatedSection delay={0} direction="up">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            flexWrap: 'wrap',
                            gap: '2rem',
                            marginBottom: '4rem',
                        }}>
                            <div>
                                <span style={{
                                    fontSize: '0.8rem',
                                    fontWeight: '600',
                                    color: '#555555',
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    display: 'block',
                                    marginBottom: '1rem',
                                }}>
                                    The People Behind It
                                </span>
                                <h2 style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                    fontWeight: '800',
                                    letterSpacing: '-0.04em',
                                    margin: '0',
                                    lineHeight: '1.1',
                                }}>
                                    Meet Our Leadership
                                </h2>
                            </div>
                            <p style={{
                                fontSize: '1rem',
                                color: '#888888',
                                lineHeight: '1.7',
                                maxWidth: '400px',
                                margin: '0',
                            }}>
                                A team of industry veterans driving innovation and
                                delivering world-class solutions across every engagement.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                        gap: '1.25rem',
                    }}>
                        {team.map((member, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1} direction="up">
                                <TeamCard member={member} />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ──────────── PARTNERS / CERTIFICATIONS ──────────── */}
            <section style={{
                width: '100%',
                background: '#111111',
                padding: '6rem 2rem',
                fontFamily: "'Inter', sans-serif",
                color: '#FFFFFF',
                borderTop: '1px solid rgba(255,255,255,0.04)',
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <AnimatedSection delay={0} direction="up">
                        <span style={{
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            color: '#555555',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            display: 'block',
                            marginBottom: '1rem',
                        }}>
                            Trusted Partnerships
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                            fontWeight: '800',
                            letterSpacing: '-0.03em',
                            margin: '0 0 3rem 0',
                            lineHeight: '1.1',
                        }}>
                            Certifications & Alliances
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2} direction="up">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '1.5rem',
                            flexWrap: 'wrap',
                        }}>
                            {[
                                'Oracle Partner',
                                'AWS Select Partner',
                                'Microsoft Gold',
                                'ISO 27001',
                                'CMMI Level 3',
                                'Google Cloud',
                            ].map((cert, idx) => (
                                <div key={idx} style={{
                                    padding: '1.2rem 2rem',
                                    borderRadius: '14px',
                                    background: '#1A1A1A',
                                    border: '1px solid rgba(255, 255, 255, 0.06)',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    color: '#AAAAAA',
                                    transition: 'all 0.3s ease',
                                    cursor: 'default',
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.3)';
                                        e.currentTarget.style.color = '#FFFFFF';
                                        e.currentTarget.style.background = 'rgba(37, 99, 235, 0.06)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                                        e.currentTarget.style.color = '#AAAAAA';
                                        e.currentTarget.style.background = '#1A1A1A';
                                    }}
                                >
                                    {cert}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ──────────── CTA ──────────── */}
            <section style={{
                width: '100%',
                background: '#111111',
                padding: '8rem 2rem 10rem',
                fontFamily: "'Inter', sans-serif",
                color: '#FFFFFF',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '700px',
                    height: '700px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 60%)',
                    filter: 'blur(80px)',
                    pointerEvents: 'none',
                }} />

                <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
                    <AnimatedSection delay={0} direction="up">
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            fontWeight: '800',
                            letterSpacing: '-0.04em',
                            margin: '0 0 1.5rem 0',
                            lineHeight: '1.05',
                        }}>
                            Ready to transform<br />your business?
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection delay={0.15} direction="up">
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#888888',
                            lineHeight: '1.7',
                            maxWidth: '500px',
                            margin: '0 auto 2.5rem auto',
                        }}>
                            Let's talk about how Multitech can accelerate your digital
                            transformation journey — from vision to reality.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3} direction="up">
                        <button
                            style={{
                                padding: '1.1rem 2.8rem',
                                fontSize: '0.95rem',
                                fontWeight: '700',
                                border: 'none',
                                borderRadius: '999px',
                                background: '#2563EB',
                                color: '#FFFFFF',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                letterSpacing: '0.03em',
                                textTransform: 'uppercase',
                                fontFamily: "'Inter', sans-serif",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = '#1D4ED8';
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 0 40px rgba(37, 99, 235, 0.3)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = '#2563EB';
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            Get in Touch →
                        </button>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
