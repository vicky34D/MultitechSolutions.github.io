import React from 'react';

const FooterColumn = ({ title, links }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <h4 style={{
            color: '#1A1A1A',
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
            gap: '0.4rem'
        }}>
            {links.map((link) => (
                <li key={typeof link === 'string' ? link : link.text}>
                    <a href="#" style={{
                        color: '#4A4A4A',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        transition: 'color 0.2s',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                    }}
                        onMouseEnter={(e) => e.target.style.color = '#1A1A1A'}
                        onMouseLeave={(e) => e.target.style.color = '#4A4A4A'}
                    >
                        {typeof link === 'string' ? link : link.text}
                        {typeof link === 'object' && link.badge && (
                            <span style={{
                                fontSize: '0.65rem',
                                fontWeight: '600',
                                backgroundColor: '#D3E95F',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                color: '#000000',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                            }}>{link.badge}</span>
                        )}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    const linkGroups = [
        {
            title: 'Services',
            links: [
                'Oracle Cloud Infrastructure',
                'Data Management & Analytics',
                'Enterprise Applications',
                'AI, ML & Automation',
                'Security & Compliance',
                'Managed Services',
                'IT Hardware & Networking',
            ]
        },
        {
            title: 'Solutions',
            links: [
                'ERP Implementation',
                'Cloud Migration',
                'Infrastructure Setup',
                'Cyber Security',
                'Surveillance Systems',
                { text: 'Custom Integration', badge: 'New' },
            ]
        },
        {
            title: 'Partners',
            links: [
                'Oracle', 'SAP', 'HPE', 'Dell',
                'Microsoft', 'Cisco', 'VMware'
            ]
        },
        {
            title: 'Resources',
            links: [
                'Case Studies', 'Blog', 'Whitepapers',
                'Documentation', 'Support', 'Contact'
            ]
        },
        {
            title: 'Company',
            links: [
                'About Us', 'Careers', 'News & Events',
                'Privacy Policy', 'Terms of Service', 'Sustainability'
            ]
        }
    ];

    return (
        <footer style={{
            backgroundColor: '#F8F9FA', // Light theme footer
            color: '#1A1A1A',
            padding: '6rem 2rem 0 2rem',
            borderTop: '1px solid rgba(0, 0, 0, 0.06)',
            fontFamily: "'Inter', sans-serif",
        }}>
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
            }}>
                {/* Main footer content */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '200px 1fr',
                    gap: '4rem',
                    marginBottom: '4rem',
                }}>
                    {/* Left Column: Brand */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {/* Logo */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect x="2" y="2" width="20" height="20" rx="4" fill="#000" />
                                <rect x="6" y="6" width="5" height="5" rx="1" fill="#D3E95F" />
                                <rect x="13" y="6" width="5" height="5" rx="1" fill="#FFF" />
                                <rect x="6" y="13" width="5" height="5" rx="1" fill="#FFF" />
                                <rect x="13" y="13" width="5" height="5" rx="1" fill="#FFF" opacity="0.4" />
                            </svg>
                            <span style={{ fontWeight: '700', fontSize: '1.2rem', letterSpacing: '-0.02em' }}>Multitech</span>
                        </div>

                        {/* Social Icons */}
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            {['𝕏', 'in', '▶', '💬'].map((icon, i) => (
                                <a key={i} href="#" style={{
                                    color: '#888888',
                                    textDecoration: 'none',
                                    fontSize: '0.95rem',
                                    transition: 'color 0.2s',
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#1A1A1A'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#888888'}
                                >{icon}</a>
                            ))}
                        </div>
                    </div>

                    {/* Right Columns: Links */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gap: '1.5rem',
                    }}>
                        {linkGroups.map(group => (
                            <FooterColumn key={group.title} title={group.title} links={group.links} />
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                    borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                    paddingTop: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <p style={{
                        color: '#888888',
                        fontSize: '0.8rem',
                    }}>
                        © Multitech Solutions 2026
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#" style={{
                            color: '#888888',
                            textDecoration: 'none',
                            fontSize: '0.8rem',
                            transition: 'color 0.2s',
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#1A1A1A'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#888888'}
                        >Cookies Settings</a>
                    </div>
                </div>

                {/* Giant PHALA watermark */}
                <div style={{
                    marginTop: '3rem',
                    overflow: 'hidden',
                    textAlign: 'center',
                    lineHeight: 0.75,
                    userSelect: 'none',
                    pointerEvents: 'none',
                    paddingBottom: '0',
                }}>
                    <span style={{
                        fontSize: 'clamp(5rem, 12vw, 10rem)',
                        fontWeight: '900',
                        letterSpacing: '-0.04em',
                        color: 'rgba(0, 0, 0, 0.03)', // Subtle dark watermark on light bg
                        fontFamily: "'Inter', sans-serif",
                        textTransform: 'uppercase',
                        display: 'block',
                        whiteSpace: 'nowrap',
                    }}>
                        MULTITECH
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
