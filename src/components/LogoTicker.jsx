import React from 'react';
import './LogoTicker.css'; // Import Styles

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
            backgroundColor: '#F9FAFB',
            padding: '2rem 0',
            borderBottom: '1px solid #E5E7EB',
            borderTop: '1px solid #E5E7EB'
        }}>
            <div className="ticker-track">
                {/* First set of logos */}
                {logos.map((logo, index) => (
                    <div key={`logo-1-${index}`} className="ticker-item">
                        <img
                            src={logo.url}
                            alt={`${logo.name} logo`}
                            style={{
                                height: '40px', // Fixed height for consistency
                                width: 'auto',
                                opacity: 0.6,
                                filter: 'grayscale(100%)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.filter = 'grayscale(0%)';
                                e.currentTarget.style.opacity = '1';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.filter = 'grayscale(100%)';
                                e.currentTarget.style.opacity = '0.6';
                            }}
                        />
                    </div>
                ))}

                {/* Duplicate set for seamless scrolling */}
                {logos.map((logo, index) => (
                    <div key={`logo-2-${index}`} className="ticker-item">
                        <img
                            src={logo.url}
                            alt={`${logo.name} logo`}
                            style={{
                                height: '40px',
                                width: 'auto',
                                opacity: 0.6,
                                filter: 'grayscale(100%)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.filter = 'grayscale(0%)';
                                e.currentTarget.style.opacity = '1';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.filter = 'grayscale(100%)';
                                e.currentTarget.style.opacity = '0.6';
                            }}
                        />
                    </div>
                ))}

                {/* Triplicate set for wider screens just in case */}
                {logos.map((logo, index) => (
                    <div key={`logo-3-${index}`} className="ticker-item">
                        <img
                            src={logo.url}
                            alt={`${logo.name} logo`}
                            style={{
                                height: '40px',
                                width: 'auto',
                                opacity: 0.6,
                                filter: 'grayscale(100%)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.filter = 'grayscale(0%)';
                                e.currentTarget.style.opacity = '1';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.filter = 'grayscale(100%)';
                                e.currentTarget.style.opacity = '0.6';
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoTicker;
