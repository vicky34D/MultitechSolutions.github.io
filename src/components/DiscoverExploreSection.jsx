import React from 'react';

const LinkPill = ({ text }) => (
    <a href="#" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.75rem 1.5rem',
        backgroundColor: '#F3F4F6', // Light gray background for pill
        borderRadius: '9999px',
        fontSize: '0.95rem',
        fontWeight: '500',
        color: '#4B5563', // Gray text
        textDecoration: 'none',
        transition: 'background-color 0.2s',
        whiteSpace: 'nowrap'
    }}>
        {text}
        <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>→</span>
    </a>
);

const SectionCard = ({ title, links }) => (
    <div style={{
        backgroundColor: 'white',
        borderRadius: '32px',
        padding: '3rem',
        marginBottom: '2rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
    }}>
        <h3 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            fontFamily: '"Oswald", sans-serif',
            marginBottom: '2rem',
            textTransform: 'uppercase',
            letterSpacing: '-1px',
            color: '#111827'
        }}>
            {title}
        </h3>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem'
        }}>
            {links.map((text, index) => (
                <LinkPill key={index} text={text} />
            ))}
        </div>
    </div>
);

const DiscoverExploreSection = () => {
    const discoverLinks = [
        'Compress AVI', 'Compress MKV', 'Compress MOV', 'Compress WebM',
        'Compress WMV', 'Discord Video Compressor', 'GIF Compressor',
        'MP4 Compressor', 'Video Compressor for Android', 'YouTube Video Compressor'
    ];

    const exploreLinks = [
        'Extract Audio from Video', 'Repurpose Video', 'Resize Video',
        'Share Video', 'Video Downloader', 'Video Feedback Tool', 'YouTube to GIF'
    ];

    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '2rem'
        }}>
            <SectionCard title="Discover More" links={discoverLinks} />
            <SectionCard title="Explore Related Tools" links={exploreLinks} />
        </section>
    );
};

export default DiscoverExploreSection;
