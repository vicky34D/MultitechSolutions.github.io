import React from 'react';

const Footer = () => {
    const servicesLeft = [
        'UX audit', 'SaaS', 'Digital product design', 'B2B design agency', 'Design system', 'Web design consultancy', 'AI consulting services', 'Webflow design agency', 'Digital transformation services', 'Corporate website design agency', 'Branding design agency'
    ];

    const servicesMid1 = [
        'UI design', 'Web app', 'Website redesign', 'UX research consultancy', 'Product redesign', 'MVP product design', 'Usability testing services', 'Generative AI consulting services', 'Digital transformation consulting', 'Law firm website design services'
    ];

    const servicesMid2 = [
        'UX design', 'Mobile app', 'UX/UI design', 'Digital product consulting', 'Startup web design', 'Conversational AI consulting', 'Product growth design services', 'AI conversational design', 'Creative web design services', 'Outsourced design services'
    ];

    const servicesRight = [
        'UX research', 'Web design services', 'UX design team', 'UX strategy agency', 'Responsive web design', 'Hire AI designers', 'Branding agency', 'UX prototyping services', 'Landing page web design services', 'SaaS MVP design'
    ];

    const columns = [servicesLeft, servicesMid1, servicesMid2, servicesRight];

    return (
        <footer style={{
            backgroundColor: '#111111',
            color: '#FFFFFF',
            padding: '6rem 2rem 2rem 2rem',
            fontFamily: "'Inter', sans-serif",
            borderTop: '1px solid #2A2A2A',
            position: 'relative',
        }}>
            <div style={{
                maxWidth: '1440px',
                margin: '0 auto',
            }}>
                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={{
                        color: '#777777',
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        letterSpacing: '0.05em',
                        marginBottom: '2.5rem',
                        textTransform: 'uppercase'
                    }}>
                        SERVICES:
                    </h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '2rem'
                    }}>
                        {columns.map((col, colIdx) => (
                            <ul key={colIdx} style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.25rem'
                            }}>
                                {col.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" style={{
                                            color: '#E0E0E0',
                                            textDecoration: 'none',
                                            fontSize: '0.95rem',
                                            transition: 'all 0.2s',
                                            fontWeight: '400'
                                        }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.color = '#FFFFFF';
                                                e.currentTarget.style.textDecoration = 'underline';
                                                e.currentTarget.style.textUnderlineOffset = '4px';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.color = '#E0E0E0';
                                                e.currentTarget.style.textDecoration = 'none';
                                            }}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid #2A2A2A',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: '#E0E0E0',
                    fontSize: '0.95rem'
                }}>
                    <div>
                        Multitech. — AI + Product Design Agency.
                    </div>
                    <div>
                        All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
