import React from 'react';

const FooterColumn = ({ title, links }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h4 style={{
            color: 'white',
            fontWeight: '600',
            fontSize: '0.9rem',
            marginBottom: '0.5rem'
        }}>
            {title}
        </h4>
        <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
        }}>
            {links.map((link) => (
                <li key={link}>
                    <a href="#" style={{
                        color: '#9CA3AF',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        transition: 'color 0.2s'
                    }}
                        onMouseEnter={(e) => e.target.style.color = 'white'}
                        onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
                    >
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const SocialIcon = ({ children }) => (
    <a href="#" style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '1px solid #4B5563',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textDecoration: 'none',
        transition: 'all 0.2s'
    }}
        onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'white';
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#4B5563';
            e.currentTarget.style.backgroundColor = 'transparent';
        }}
    >
        {children}
    </a>
);

const Footer = () => {
    const linkGroups = [
        {
            title: 'Services',
            links: [
                'Oracle Cloud Infrastructure', 'Data Management & Analytics', 'Enterprise Applications',
                'AI, ML & Automation', 'Security & Compliance', 'Managed Services',
                'IT Hardware & Networking', 'Cyber Security', 'Surveillance Systems'
            ]
        },
        {
            title: 'Partners',
            links: [
                'Oracle', 'SAP', 'HPE', 'Dell',
                'Microsoft', 'Veeam', 'Emerson', 'VMware', 'Cisco'
            ]
        },
        {
            title: 'Contact',
            links: [
                'Contact Sales', 'Support', 'Media Enquiries', 'Office Locations',
                'Request a Quote', 'Partner with Us'
            ]
        },
        {
            title: 'Company',
            links: [
                'About Us', 'Careers', 'Privacy Policy', 'Terms of Service', 'Sustainability',
                'News & Events', 'Case Studies'
            ]
        }
    ];

    return (
        <footer style={{
            backgroundColor: '#1F1F1F', // Dark background matching screenshot
            color: 'white',
            padding: '4rem 2rem 0 2rem', // No bottom padding to let VEED text hit bottom
            borderTopLeftRadius: '32px',
            borderTopRightRadius: '32px',
            fontFamily: 'Inter, sans-serif',
            position: 'relative',
            overflow: 'hidden', // Hide the bottom part of the giant text
            marginTop: '2rem'
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '4rem',
                marginBottom: '6rem'
            }}>
                {/* Left Column: Brand & Socials */}
                <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {/* Language Selector */}
                    <button style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'white',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer',
                        padding: 0
                    }}>
                        English <span style={{ fontSize: '0.7rem' }}>▼</span>
                    </button>

                    {/* Social Icons */}
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        {/* Simple SVG Placeholders for Social Icons */}
                        <SocialIcon>𝕏</SocialIcon> {/* X Logo */}
                        <SocialIcon>▶</SocialIcon> {/* YouTube */}
                        <SocialIcon>📷</SocialIcon> {/* Instagram */}
                        <SocialIcon>in</SocialIcon> {/* LinkedIn */}
                        <SocialIcon>✉</SocialIcon> {/* Email */}
                    </div>

                    <div style={{ marginTop: 'auto' }}>
                        <div style={{
                            fontSize: '3rem',
                            fontWeight: '900',
                            marginBottom: '1rem',
                            lineHeight: 1
                        }}>
                            MS
                        </div>
                        <p style={{
                            color: '#9CA3AF',
                            fontSize: '0.85rem',
                            lineHeight: '1.6',
                            marginBottom: '1rem',
                            maxWidth: '200px'
                        }}>
                            End-end IT solutions and services company, delivering technology solutions to enterprises.
                        </p>
                        <p style={{ color: '#6B7280', fontSize: '0.75rem' }}>
                            © Copyright 2026 Multitech Solutions
                            <br />
                            SUBHANKAR DHAR
                        </p>
                    </div>
                </div>

                {/* Right Columns: Links Grid */}
                <div style={{
                    flex: '3 1 800px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '2rem 1rem'
                }}>
                    {linkGroups.map(group => (
                        <FooterColumn key={group.title} title={group.title} links={group.links} />
                    ))}

                    {/* Cookies Settings (floated to bottom right of grid area roughly) */}
                    <div style={{
                        gridColumn: '1 / -1',
                        marginTop: '2rem',
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                        <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.85rem' }}>
                            Cookies Settings
                        </a>
                    </div>
                </div>
            </div>

            {/* Giant VEED Text */}
            <div style={{
                fontSize: '15vw', // Massive viewport-based size
                fontWeight: '900',
                lineHeight: '0.75',
                textAlign: 'center',
                padding: 0,
                margin: 0,
                userSelect: 'none',
                pointerEvents: 'none',
                transform: 'translateY(10%)', // Push it down slightly to cut off
                color: '#FFFFFF'
            }}>
                MULTITECH
            </div>
        </footer>
    );
};

export default Footer;
