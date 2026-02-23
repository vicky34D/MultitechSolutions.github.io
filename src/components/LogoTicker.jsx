import React from 'react';
import './LogoTicker.css';

const logos = [
    { name: 'Oracle', url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
    { name: 'SAP', url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
    { name: 'HPE', url: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg' },
    { name: 'Dell', url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg' },
    { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Emerson', url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Logo_Emerson.svg' },
];

const LogoTicker = () => {
    return (
        <div style={{
            width: '100%',
            overflow: 'hidden',
            backgroundColor: '#F8F9FA',
            padding: '3rem 0',
            borderTop: '1px solid rgba(0, 0, 0, 0.06)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        }}>
            <div className="ticker-track">
                {[1, 2, 3].map(set =>
                    logos.map((logo, index) => (
                        <div key={`logo-${set}-${index}`} className="ticker-item">
                            <img
                                src={logo.url}
                                alt={`${logo.name} logo`}
                                style={{
                                    height: '28px',
                                    width: 'auto',
                                    opacity: 0.7,
                                    transition: 'all 0.4s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = '1';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = '0.7';
                                }}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default LogoTicker;
