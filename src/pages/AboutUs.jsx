import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

/* ─── Keyframe injection ─────────────────────────────────────── */
const styleTag = `
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
`;

/* ─── Data ─────────────────────────────────────────────────────── */
const stats = [
    { value: '25+', label: 'Years of Excellence' },
    { value: '500+', label: 'Projects Delivered' },
    { value: '150+', label: 'Enterprise Clients' },
    { value: '98%', label: 'Client Satisfaction' },
];

const values = [
    {
        title: 'Client-First Approach',
        desc: 'Every decision we make is guided by what delivers the most value to our clients. We listen, adapt, and execute with precision.',
    },
    {
        title: 'Innovation at Core',
        desc: 'We embrace cutting-edge technologies — from AI to cloud infrastructure — to keep our clients ahead of the curve.',
    },
    {
        title: 'Long-Term Partnership',
        desc: "We don't just complete projects; we build lasting relationships that grow stronger with every engagement.",
    },
    {
        title: 'Integrity & Trust',
        desc: 'Transparency, accountability, and ethical practices are the foundation of everything we do.',
    },
    {
        title: 'Agility & Speed',
        desc: 'Our lean, expert teams move fast without sacrificing quality — delivering results that matter, on time.',
    },
    {
        title: 'Global Mindset',
        desc: 'With clients across continents, we bring a global perspective paired with deep local expertise.',
    },
];

const team = [
    {
        name: 'Annurag Jhunjhunwala',
        role: 'CEO & Co-Founder',
        bio: 'Visionary leader with decades of experience driving enterprise digital transformation and strategic business growth.',
        initials: 'AJ',
    },
    {
        name: 'Aaditya Jhunjhunwala',
        role: 'CEO & Co-Founder',
        bio: 'Entrepreneurial leader focused on innovation, scaling technology solutions, and building long-term client partnerships.',
        initials: 'AJ',
    },
    {
        name: 'Subhankar Dhar',
        role: 'CTO',
        bio: 'Cloud architect and technology strategist who leads cutting-edge Oracle and AI-powered solution development.',
        initials: 'SD',
    },
    {
        name: 'Chanchal Banerjee',
        role: 'VP – Client Success',
        bio: 'Bridges technology and business strategy to ensure every client realises measurable ROI.',
        initials: 'CB',
    },
    {
        name: 'Debashis Sapui',
        role: 'General Manager IT',
        bio: 'Seasoned IT leader managing end-to-end delivery operations and ensuring enterprise-grade service excellence.',
        initials: 'DS',
    },
];

const timeline = [
    { year: '2000', event: 'Founded in Mumbai as an Oracle consulting boutique.' },
    { year: '2008', event: 'Expanded to the Middle East; secured first enterprise AMS contract.' },
    { year: '2014', event: 'Launched OCI practice and AI-powered chatbot division.' },
    { year: '2018', event: 'Reached 100 enterprise clients milestone across 15 countries.' },
    { year: '2022', event: 'Launched Low-Code VBCS & Oracle APEX practice to accelerate digital apps.' },
    { year: '2025', event: 'Celebrating 25 years — 500+ projects, still innovating every day.' },
];

/* ─── Component ─────────────────────────────────────────────── */
const AboutUs = () => {
    return (
        <>
            <style>{styleTag}</style>
            <Header />

            <main style={{ background: '#F8F9FA', color: '#1A1A1A', overflowX: 'hidden' }}>

                {/* ── HERO ──────────────────────────────────────────── */}
                <section style={{
                    minHeight: '80vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '10rem 2rem 6rem',
                    maxWidth: '1280px',
                    margin: '0 auto',
                    position: 'relative',
                }}>
                    <div style={{ animation: 'fadeUp 0.9s ease both', position: 'relative', zIndex: 1 }}>
                        <div style={{
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            color: '#888888',
                            letterSpacing: '0.1em',
                            marginBottom: '1.5rem',
                        }}>About Multitech</div>

                        <h1 style={{
                            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                            fontWeight: '600',
                            lineHeight: 1.05,
                            letterSpacing: '-0.03em',
                            margin: '0 0 2rem',
                            color: '#1A1A1A',
                            maxWidth: '900px',
                        }}>
                            25 years of powering enterprise transformation
                        </h1>

                        <p style={{
                            fontSize: '1.1rem',
                            color: '#4A4A4A',
                            lineHeight: 1.7,
                            maxWidth: '600px',
                            marginBottom: '2.5rem',
                        }}>
                            A trusted technology partner delivering Oracle enterprise solutions, cloud infrastructure,
                            and AI-powered transformation to enterprises across the globe.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: '#D3E95F',
                                color: '#1A1A1A', textDecoration: 'none',
                                padding: '0.85rem 2rem', borderRadius: '12px',
                                fontWeight: '600', fontSize: '1.05rem',
                                transition: 'opacity 0.2s',
                                boxShadow: '0 4px 14px rgba(211, 233, 95, 0.3)',
                            }}
                                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                            >
                                Explore Our Services
                            </Link>
                            <a href="mailto:info@multitech.com" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: 'transparent',
                                border: '1px solid rgba(0, 0, 0, 0.1)',
                                color: '#1A1A1A', textDecoration: 'none',
                                padding: '0.85rem 2rem', borderRadius: '12px',
                                fontWeight: '600', fontSize: '1.05rem',
                                transition: 'all 0.2s',
                            }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.3)'; e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.03)'; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── STATS ─────────────────────────────────────────── */}
                <section style={{
                    padding: '4rem 2rem',
                    borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                        {stats.map((s, i) => (
                            <div key={i} style={{ animation: `fadeUp 0.7s ease ${i * 0.12}s both` }}>
                                <div style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                    fontWeight: '600',
                                    color: '#1A1A1A',
                                    lineHeight: 1.1,
                                    marginBottom: '0.4rem',
                                    letterSpacing: '-0.02em',
                                }}>{s.value}</div>
                                <div style={{ color: '#888888', fontSize: '0.95rem', fontWeight: '500' }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── MISSION ───────────────────────────────────────── */}
                <section style={{ padding: '8rem 2rem', maxWidth: 1280, margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
                        {/* Left */}
                        <div>
                            <div style={{
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                color: '#888888',
                                letterSpacing: '0.1em',
                                marginBottom: '1rem',
                            }}>Our Mission</div>
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                fontWeight: '600',
                                lineHeight: 1.1,
                                color: '#1A1A1A',
                                margin: '0 0 1.5rem',
                                letterSpacing: '-0.03em',
                            }}>
                                Powering Enterprise Transformation Through Technology
                            </h2>
                            <p style={{ color: '#4A4A4A', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                                At Multitech, our mission is simple: empower enterprises to achieve their full potential
                                through world-class Oracle implementations, cloud-native solutions, and intelligent automation.
                            </p>
                            <p style={{ color: '#4A4A4A', lineHeight: 1.7, fontSize: '1.05rem' }}>
                                Founded in 2000, we've grown from a boutique Oracle consultancy into a full-spectrum
                                technology solutions partner — with a team of 300+ certified experts spanning Oracle Fusion,
                                OCI, AI/ML, and Low-Code development.
                            </p>
                        </div>

                        {/* Right – vision card */}
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            border: '1px solid rgba(0, 0, 0, 0.06)',
                            borderRadius: 24,
                            padding: '3rem',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.03)',
                        }}>
                            <h3 style={{ fontWeight: '600', fontSize: '1.25rem', color: '#1A1A1A', marginBottom: '1rem', letterSpacing: '-0.01em' }}>Our Vision</h3>
                            <p style={{ color: '#4A4A4A', lineHeight: 1.7, fontSize: '1rem' }}>
                                To be the most trusted Oracle and cloud technology partner in the Asia-Pacific and Middle East regions —
                                known for delivering measurable business outcomes, not just technical solutions.
                            </p>
                            <div style={{ marginTop: '2rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {['Oracle Certified', 'OCI Partner', 'AI-Ready', 'ISO 27001'].map(tag => (
                                    <span key={tag} style={{
                                        backgroundColor: '#F8F9FA',
                                        border: '1px solid rgba(0, 0, 0, 0.08)',
                                        color: '#4A4A4A',
                                        borderRadius: 9999,
                                        padding: '0.3rem 0.85rem',
                                        fontSize: '0.8rem',
                                        fontWeight: '500',
                                    }}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── TIMELINE ──────────────────────────────────────── */}
                <section style={{
                    padding: '6rem 2rem',
                    borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                }}>
                    <div style={{ maxWidth: 800, margin: '0 auto' }}>
                        <div style={{
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            color: '#888888',
                            letterSpacing: '0.1em',
                            marginBottom: '1rem',
                        }}>Our Journey</div>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: '600',
                            color: '#1A1A1A',
                            margin: '0 0 4rem',
                            letterSpacing: '-0.03em',
                        }}>25 Years of Milestones</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                            {timeline.map((item, i) => (
                                <div key={i} style={{
                                    display: 'grid',
                                    gridTemplateColumns: '100px 1fr',
                                    gap: '2rem',
                                    padding: '1.5rem 0',
                                    borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                                }}>
                                    <div style={{
                                        fontWeight: '600',
                                        fontSize: '1.05rem',
                                        color: '#1A1A1A',
                                    }}>{item.year}</div>
                                    <div style={{
                                        color: '#4A4A4A',
                                        fontSize: '1.05rem',
                                        lineHeight: 1.6,
                                    }}>{item.event}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── VALUES ────────────────────────────────────────── */}
                <section style={{ padding: '8rem 2rem' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                        <div style={{ marginBottom: '4rem' }}>
                            <div style={{
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                color: '#888888',
                                letterSpacing: '0.1em',
                                marginBottom: '1rem',
                            }}>What We Stand For</div>
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                fontWeight: '600',
                                color: '#1A1A1A',
                                margin: 0,
                                letterSpacing: '-0.03em',
                            }}>Our Core Values</h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
                            {values.map((v, i) => (
                                <div
                                    key={i}
                                    style={{
                                        backgroundColor: '#FFFFFF',
                                        border: '1px solid rgba(0, 0, 0, 0.06)',
                                        borderRadius: 24,
                                        padding: '2rem',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.12)';
                                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.05)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
                                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)';
                                    }}
                                >
                                    <h3 style={{ fontWeight: '600', fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{v.title}</h3>
                                    <p style={{ color: '#4A4A4A', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── TEAM ──────────────────────────────────────────── */}
                <section style={{
                    padding: '6rem 2rem',
                    borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                        <div style={{ marginBottom: '4rem' }}>
                            <div style={{
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                color: '#888888',
                                letterSpacing: '0.1em',
                                marginBottom: '1rem',
                            }}>The People Behind It</div>
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                fontWeight: '600',
                                color: '#1A1A1A',
                                margin: 0,
                                letterSpacing: '-0.03em',
                            }}>Meet Our Leadership</h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                            {team.map((member, i) => (
                                <div
                                    key={i}
                                    style={{
                                        backgroundColor: '#FFFFFF',
                                        border: '1px solid rgba(0, 0, 0, 0.06)',
                                        borderRadius: 24,
                                        padding: '2rem',
                                        textAlign: 'center',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.12)';
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.05)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)';
                                    }}
                                >
                                    {/* Avatar */}
                                    <div style={{
                                        width: 64, height: 64, borderRadius: '50%',
                                        background: '#F5F5F5',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        margin: '0 auto 1.2rem',
                                        fontSize: '1.1rem', fontWeight: '600', color: '#1A1A1A',
                                        border: '1px solid rgba(0,0,0,0.04)',
                                    }}>
                                        {member.initials}
                                    </div>
                                    <h3 style={{ fontWeight: '600', fontSize: '1.05rem', color: '#1A1A1A', margin: '0 0 0.25rem' }}>{member.name}</h3>
                                    <div style={{ color: '#888888', fontSize: '0.85rem', marginBottom: '0.8rem', fontWeight: '500' }}>{member.role}</div>
                                    <p style={{ color: '#4A4A4A', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ───────────────────────────────────────────── */}
                <section style={{
                    padding: '8rem 2rem',
                    borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                }}>
                    <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: '600',
                            color: '#1A1A1A',
                            marginBottom: '1.2rem',
                            letterSpacing: '-0.03em',
                        }}>
                            Ready to Transform Your Business?
                        </h2>
                        <p style={{ color: '#4A4A4A', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                            Let's talk about how Multitech can accelerate your digital transformation journey.
                        </p>
                        <a href="mailto:info@multitech.com" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: '#D3E95F',
                            color: '#1A1A1A', textDecoration: 'none',
                            padding: '0.85rem 2rem', borderRadius: '12px',
                            fontWeight: '600', fontSize: '1.05rem',
                            transition: 'opacity 0.2s',
                            boxShadow: '0 4px 14px rgba(211, 233, 95, 0.3)',
                        }}
                            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                        >
                            Get in Touch →
                        </a>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
};

export default AboutUs;
