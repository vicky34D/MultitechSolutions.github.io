import React, { useState } from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

/* ─── Service Data ─────────────────────────────────────────────────────── */
const services = [
    {
        id: '01',
        title: 'UX / UI Design',
        description:
            'We craft intuitive, beautiful interfaces that solve real business problems. From wireframes to pixel-perfect prototypes, every design decision is rooted in research and validated through testing.',
        tags: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing'],
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
        ),
    },
    {
        id: '02',
        title: 'Web Development',
        description:
            'Modern, performant web applications built with cutting-edge technologies. We develop scalable solutions that grow with your business — from blazing-fast marketing sites to complex SaaS platforms.',
        tags: ['React / Next.js', 'Node.js', 'APIs', 'CMS Integration', 'Performance'],
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
                <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
        ),
    },
    {
        id: '03',
        title: 'Mobile Apps',
        description:
            'Native and cross-platform mobile experiences that delight users and drive engagement. We build apps that feel natural on every device with smooth animations and offline capabilities.',
        tags: ['React Native', 'iOS', 'Android', 'Flutter', 'App Store Optimization'],
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        ),
    },
    {
        id: '04',
        title: 'Brand Strategy',
        description:
            'We define and elevate your brand identity to resonate with your target audience. From positioning and messaging to visual identity systems, we shape how the world perceives your business.',
        tags: ['Brand Identity', 'Logo Design', 'Messaging', 'Guidelines', 'Positioning'],
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
    },
    {
        id: '05',
        title: 'AI & Automation',
        description:
            'Leverage artificial intelligence to streamline operations, enhance user experiences, and unlock new revenue streams. We integrate smart solutions that learn, adapt, and scale with your business.',
        tags: ['Machine Learning', 'ChatBots', 'NLP', 'Computer Vision', 'Predictive Analytics'],
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 1 4 4v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a4 4 0 0 1 4-4z" />
                <path d="M12 8v4" />
                <circle cx="12" cy="16" r="4" />
                <path d="M8 16H4" />
                <path d="M20 16h-4" />
                <path d="M12 20v2" />
            </svg>
        ),
    },
    {
        id: '06',
        title: 'Cloud & DevOps',
        description:
            'Reliable, secure cloud infrastructure that keeps your applications running at peak performance. We design and manage scalable architectures on AWS, GCP, and Azure with CI/CD best practices.',
        tags: ['AWS / GCP / Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Monitoring'],
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
            </svg>
        ),
    },
];

/* ─── Process Steps ──────────────────────────────────────────────────── */
const processSteps = [
    {
        step: '01',
        title: 'Discovery & Research',
        description: 'We immerse ourselves in your business, audience, and competitive landscape. Through stakeholder interviews, user research, and data analysis, we uncover the insights that drive every decision.',
    },
    {
        step: '02',
        title: 'Strategy & Planning',
        description: 'Armed with insights, we craft a clear product roadmap and design strategy. We define success metrics, set priorities, and align on the vision that will guide the entire project.',
    },
    {
        step: '03',
        title: 'Design & Prototyping',
        description: 'Ideas take shape through wireframes, mockups, and interactive prototypes. We iterate rapidly, testing with real users at every stage to ensure the solution feels intuitive and delightful.',
    },
    {
        step: '04',
        title: 'Development & QA',
        description: 'Our engineering team brings designs to life with clean, scalable code. Rigorous testing and quality assurance ensure a polished product that performs flawlessly across all platforms.',
    },
    {
        step: '05',
        title: 'Launch & Growth',
        description: 'We don\'t just deliver and disappear. Post-launch, we monitor performance, gather feedback, and iterate — helping you scale, optimize, and stay ahead of the competition.',
    },
];

/* ─── ServiceCard Component ──────────────────────────────────────────── */
const ServiceCard = ({ service }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                background: isHovered
                    ? 'linear-gradient(145deg, rgba(37, 99, 235, 0.12) 0%, rgba(20, 20, 20, 0.95) 60%)'
                    : '#1A1A1A',
                borderRadius: '20px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '380px',
                border: isHovered
                    ? '1px solid rgba(37, 99, 235, 0.35)'
                    : '1px solid rgba(255, 255, 255, 0.06)',
                transition: 'all 0.45s cubic-bezier(0.23, 1, 0.32, 1)',
                transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Glow */}
            {isHovered && (
                <div style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '-30px',
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.18) 0%, transparent 70%)',
                    filter: 'blur(30px)',
                    pointerEvents: 'none',
                }} />
            )}

            <div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '2rem',
                }}>
                    <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '14px',
                        background: isHovered
                            ? 'rgba(37, 99, 235, 0.2)'
                            : 'rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background 0.4s ease',
                        color: isHovered ? '#60A5FA' : '#888888',
                    }}>
                        {service.icon}
                    </div>
                    <span style={{
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        color: '#555555',
                        letterSpacing: '0.05em',
                    }}>
                        /{service.id}
                    </span>
                </div>

                <h3 style={{
                    fontSize: '1.6rem',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    margin: '0 0 1rem 0',
                    letterSpacing: '-0.02em',
                }}>
                    {service.title}
                </h3>
                <p style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.65',
                    color: '#999999',
                    margin: '0',
                }}>
                    {service.description}
                </p>
            </div>

            {/* Tags */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginTop: '1.5rem',
            }}>
                {service.tags.map((tag, idx) => (
                    <span key={idx} style={{
                        fontSize: '0.72rem',
                        fontWeight: '500',
                        color: isHovered ? 'rgba(96, 165, 250, 0.9)' : '#777777',
                        border: isHovered
                            ? '1px solid rgba(96, 165, 250, 0.25)'
                            : '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '999px',
                        padding: '0.35rem 0.85rem',
                        transition: 'all 0.35s ease',
                        letterSpacing: '0.02em',
                    }}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

/* ─── ProcessStep Component ──────────────────────────────────────────── */
const ProcessStep = ({ step, isLast }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '2.5rem',
                padding: '3rem 0',
                borderBottom: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.06)',
                cursor: 'default',
                transition: 'padding-left 0.3s ease',
                paddingLeft: isHovered ? '1rem' : '0',
            }}
        >
            {/* Step Number */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
            }}>
                <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    border: isHovered
                        ? '2px solid #2563EB'
                        : '2px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    color: isHovered ? '#60A5FA' : '#666666',
                    transition: 'all 0.35s ease',
                    background: isHovered
                        ? 'rgba(37, 99, 235, 0.1)'
                        : 'transparent',
                }}>
                    {step.step}
                </div>
                {!isLast && (
                    <div style={{
                        width: '2px',
                        flex: 1,
                        minHeight: '30px',
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0.08), transparent)',
                    }} />
                )}
            </div>

            {/* Content */}
            <div>
                <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '600',
                    color: isHovered ? '#FFFFFF' : '#E0E0E0',
                    margin: '0 0 0.75rem 0',
                    letterSpacing: '-0.02em',
                    transition: 'color 0.3s ease',
                }}>
                    {step.title}
                </h3>
                <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.7',
                    color: '#888888',
                    margin: '0',
                    maxWidth: '700px',
                }}>
                    {step.description}
                </p>
            </div>
        </div>
    );
};

/* ─── Main Page Component ────────────────────────────────────────────── */
const WhatWeDo = () => {
    return (
        <>
            <style>{`
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes floatBadge {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-6px); }
                }
                @keyframes pulseDot {
                    0%, 100% { opacity: 0.4; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.3); }
                }
            `}</style>

            {/* ──────────── HERO SECTION ──────────── */}
            <section style={{
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#111111',
                fontFamily: "'Inter', sans-serif",
                paddingTop: '8rem',
                paddingBottom: '6rem',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center',
            }}>
                {/* Background Glows */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '800px',
                    height: '800px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 60%)',
                    filter: 'blur(80px)',
                    pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                }} />

                <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', padding: '0 2rem' }}>
                    <AnimatedSection delay={0} direction="up">
                        <span style={{
                            display: 'inline-block',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            color: '#60A5FA',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            marginBottom: '2rem',
                            padding: '0.5rem 1.2rem',
                            borderRadius: '999px',
                            border: '1px solid rgba(96, 165, 250, 0.25)',
                            background: 'rgba(37, 99, 235, 0.08)',
                            animation: 'floatBadge 3s ease-in-out infinite',
                        }}>
                            What We Do
                        </span>
                    </AnimatedSection>

                    <AnimatedSection delay={0.15} direction="up">
                        <h1 style={{
                            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                            fontWeight: '800',
                            color: '#FFFFFF',
                            lineHeight: '1.05',
                            letterSpacing: '-0.04em',
                            marginBottom: '2rem',
                        }}>
                            We design & build<br />
                            <span style={{
                                background: 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 50%, #60A5FA 100%)',
                                backgroundSize: '200% 200%',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                animation: 'gradientShift 4s ease infinite',
                            }}>
                                digital products
                            </span>
                            <br />that drive real growth
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3} direction="up">
                        <p style={{
                            fontSize: '1.15rem',
                            color: 'rgba(180, 190, 210, 0.75)',
                            lineHeight: '1.7',
                            maxWidth: '620px',
                            margin: '0 auto 3rem auto',
                            fontWeight: '400',
                        }}>
                            From strategy and design to engineering and growth — we partner with visionary
                            companies to create exceptional digital experiences that captivate users and
                            accelerate business outcomes.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.45} direction="up">
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
                                Start a Project →
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
                                View Our Work
                            </button>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Scroll indicator */}
                <AnimatedSection delay={0.6} direction="up" style={{
                    position: 'absolute',
                    bottom: '2.5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                }}>
                    <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: '#666666', textTransform: 'uppercase' }}>Scroll</span>
                    <div style={{
                        width: '1px',
                        height: '40px',
                        background: 'linear-gradient(to bottom, #555555, transparent)',
                    }} />
                </AnimatedSection>
            </section>

            {/* ──────────── SERVICES GRID ──────────── */}
            <section style={{
                width: '100%',
                backgroundColor: '#111111',
                padding: '6rem 2rem 8rem',
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
                                    Our Services
                                </span>
                                <h2 style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                    fontWeight: '800',
                                    letterSpacing: '-0.04em',
                                    margin: '0',
                                    lineHeight: '1.1',
                                }}>
                                    Capabilities that<br />move the needle
                                </h2>
                            </div>
                            <p style={{
                                fontSize: '1rem',
                                color: '#888888',
                                lineHeight: '1.7',
                                maxWidth: '400px',
                                margin: '0',
                            }}>
                                End-to-end digital expertise, from first concept to
                                scaled product. Every service is designed to create
                                measurable impact.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
                        gap: '1.5rem',
                    }}>
                        {services.map((service, idx) => (
                            <AnimatedSection key={service.id} delay={idx * 0.1} direction="up">
                                <ServiceCard service={service} />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ──────────── NUMBERS STRIP ──────────── */}
            <section style={{
                width: '100%',
                background: 'linear-gradient(135deg, #0D1117 0%, #111827 100%)',
                fontFamily: "'Inter', sans-serif",
                padding: '5rem 2rem',
                borderTop: '1px solid rgba(255,255,255,0.04)',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
            }}>
                <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
                    <AnimatedSection delay={0} direction="up">
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '2rem',
                            textAlign: 'center',
                        }}>
                            {[
                                { value: '25+', label: 'Years of\nExperience' },
                                { value: '400+', label: 'Projects\nDelivered' },
                                { value: '₹500M+', label: 'Funding Secured\nfor Clients' },
                                { value: '98%', label: 'Client\nSatisfaction' },
                            ].map((stat, idx) => (
                                <div key={idx} style={{ padding: '1rem' }}>
                                    <h3 style={{
                                        fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                                        fontWeight: '800',
                                        color: '#FFFFFF',
                                        margin: '0 0 0.75rem 0',
                                        letterSpacing: '-0.03em',
                                    }}>
                                        {stat.value}
                                    </h3>
                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: '#777777',
                                        margin: '0',
                                        lineHeight: '1.4',
                                        whiteSpace: 'pre-line',
                                    }}>
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ──────────── PROCESS SECTION ──────────── */}
            <section style={{
                width: '100%',
                backgroundColor: '#111111',
                padding: '8rem 2rem',
                fontFamily: "'Inter', sans-serif",
                color: '#FFFFFF',
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
                                Our Process
                            </span>
                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: '800',
                                letterSpacing: '-0.04em',
                                margin: '0 0 1.5rem 0',
                                lineHeight: '1.1',
                            }}>
                                How we bring your<br />vision to life
                            </h2>
                            <p style={{
                                fontSize: '1.05rem',
                                color: '#888888',
                                lineHeight: '1.7',
                                maxWidth: '550px',
                                margin: '0 auto',
                            }}>
                                A proven, collaborative process refined over 25 years —
                                transparent at every step, engineered for results.
                            </p>
                        </div>
                    </AnimatedSection>

                    {processSteps.map((step, idx) => (
                        <AnimatedSection key={step.step} delay={idx * 0.1} direction="up">
                            <ProcessStep step={step} isLast={idx === processSteps.length - 1} />
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* ──────────── TECH STACK / WHY US ──────────── */}
            <section style={{
                width: '100%',
                background: 'linear-gradient(180deg, #111111 0%, #0D1117 100%)',
                padding: '8rem 2rem',
                fontFamily: "'Inter', sans-serif",
                color: '#FFFFFF',
            }}>
                <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '6rem',
                        alignItems: 'start',
                    }}>
                        {/* Left: Why us */}
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
                                Why Multitech
                            </span>
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                fontWeight: '800',
                                letterSpacing: '-0.03em',
                                margin: '0 0 2rem 0',
                                lineHeight: '1.1',
                            }}>
                                Built different.<br />
                                Built to last.
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {[
                                    { title: 'Partnership Mentality', desc: 'We embed ourselves in your team. Your success is our success — no handoffs, no silos.' },
                                    { title: 'Data-Driven Design', desc: 'Every pixel is backed by research, analytics, and user testing. We don\'t guess; we validate.' },
                                    { title: 'Full-Stack Delivery', desc: 'Strategy → Design → Code → Launch → Growth. One team, end to end.' },
                                    { title: 'Enterprise-Grade Quality', desc: 'Robust architectures, clean codebases, and thorough QA — built for scale from day one.' },
                                ].map((item, idx) => (
                                    <div key={idx} style={{
                                        padding: '1.5rem',
                                        borderRadius: '12px',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        transition: 'border-color 0.3s ease',
                                    }}
                                        onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.3)'}
                                        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'}
                                    >
                                        <h4 style={{
                                            fontSize: '1.05rem',
                                            fontWeight: '600',
                                            color: '#FFFFFF',
                                            margin: '0 0 0.5rem 0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                        }}>
                                            <span style={{
                                                width: '6px',
                                                height: '6px',
                                                borderRadius: '50%',
                                                background: '#2563EB',
                                                display: 'inline-block',
                                                animation: 'pulseDot 2.5s ease-in-out infinite',
                                                animationDelay: `${idx * 0.3}s`,
                                            }} />
                                            {item.title}
                                        </h4>
                                        <p style={{
                                            fontSize: '0.9rem',
                                            color: '#888888',
                                            lineHeight: '1.6',
                                            margin: '0',
                                            paddingLeft: '1rem',
                                        }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        {/* Right: Industries */}
                        <AnimatedSection delay={0.2} direction="up">
                            <span style={{
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                color: '#555555',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '1rem',
                            }}>
                                Industries We Serve
                            </span>
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                fontWeight: '800',
                                letterSpacing: '-0.03em',
                                margin: '0 0 2rem 0',
                                lineHeight: '1.1',
                            }}>
                                Deep expertise<br />
                                across verticals.
                            </h2>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '1rem',
                            }}>
                                {[
                                    'FinTech', 'HealthTech', 'EdTech', 'E-Commerce',
                                    'SaaS / B2B', 'Real Estate', 'Logistics', 'Media & Entertainment',
                                    'Travel & Hospitality', 'Social Platforms', 'AI / ML', 'Government & NGO',
                                ].map((industry, idx) => (
                                    <div key={idx} style={{
                                        padding: '1rem 1.2rem',
                                        borderRadius: '10px',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        fontSize: '0.88rem',
                                        color: '#AAAAAA',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                    }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.3)';
                                            e.currentTarget.style.color = '#FFFFFF';
                                            e.currentTarget.style.background = 'rgba(37, 99, 235, 0.06)';
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                                            e.currentTarget.style.color = '#AAAAAA';
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                        }}
                                    >
                                        <span style={{
                                            width: '4px',
                                            height: '4px',
                                            borderRadius: '50%',
                                            background: '#555555',
                                            display: 'inline-block',
                                        }} />
                                        {industry}
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ──────────── CTA SECTION ──────────── */}
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
                {/* Background glow */}
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
                            Ready to build<br />something remarkable?
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
                            Let's talk about your next project. We'd love to hear your
                            vision and show you how we can bring it to life.
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
                            Let's Talk →
                        </button>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
};

export default WhatWeDo;
