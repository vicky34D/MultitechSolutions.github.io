import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const LinkPill = ({ text }) => (
    <a href="#" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.6rem 1.25rem',
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        borderRadius: '9999px',
        fontSize: '0.85rem',
        fontWeight: '600', // Bolder font
        color: '#4A4A4A',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        whiteSpace: 'nowrap',
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
        fontFamily: "'Inter', sans-serif"
    }}
        onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#D3E95F';
            e.currentTarget.style.color = '#1A1A1A';
            e.currentTarget.style.backgroundColor = '#D3E95F';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(211, 233, 95, 0.3)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
            e.currentTarget.style.color = '#4A4A4A';
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
        }}
    >
        {text}
        <span style={{ fontSize: '0.9rem', lineHeight: 1, opacity: 0.5 }}>→</span>
    </a>
);

const SectionCard = ({ title, links }) => (
    <div style={{
        marginBottom: '4rem',
    }}>
        <h3 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: '700',
            marginBottom: '2rem',
            letterSpacing: '-0.02em',
            color: '#1A1A1A',
            lineHeight: '1.1',
            fontFamily: "'Inter', sans-serif"
        }}>
            {title}
        </h3>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem'
        }}>
            {links.map((text, index) => (
                <LinkPill key={index} text={text} />
            ))}
        </div>
    </div>
);

const DiscoverExploreSection = () => {
    const discoverLinks = [
        'Oracle Cloud Infrastructure', 'Oracle ERP', 'Oracle HCM', 'Oracle SCM',
        'Cyber Security', 'Surveillance Systems', 'IT Hardware',
        'Networking Solutions', 'Managed Services', 'Cloud Migration'
    ];

    const exploreLinks = [
        'Healthcare', 'Manufacturing', 'Retail',
        'BFSI', 'Government', 'Education', 'Logistics'
    ];

    return (
        <section className="responsive-padding" style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '4rem 2rem 8rem 2rem',
            borderTop: '1px solid rgba(0, 0, 0, 0.06)',
            fontFamily: "'Inter', sans-serif"
        }}>
            <AnimatedSection delay={0} direction="up">
                <SectionCard title="Technology Stack" links={discoverLinks} />
            </AnimatedSection>
            <AnimatedSection delay={0.15} direction="up">
                <SectionCard title="Industry Verticals" links={exploreLinks} />
            </AnimatedSection>
        </section>
    );
};

export default DiscoverExploreSection;
