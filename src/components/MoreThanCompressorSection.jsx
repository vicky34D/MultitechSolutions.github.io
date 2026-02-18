import React from 'react';

const MoreThanCompressorSection = () => {
    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '4rem 2rem 8rem 2rem',
            textAlign: 'center',
            backgroundColor: '#fff' // Assuming white background
        }}>
            <h2 style={{
                fontSize: '4rem',
                fontWeight: '800',
                color: '#374151',
                marginBottom: '4rem',
                lineHeight: '0.9',
                textTransform: 'uppercase',
                fontFamily: '"Oswald", sans-serif',
                letterSpacing: '-2px'
            }}>
                More than just an IT Vendor
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Responsive 2 columns
                gap: '4rem',
                textAlign: 'left',
                marginBottom: '4rem',
                fontSize: '1.25rem',
                lineHeight: '1.6',
                color: '#4B5563'
            }}>
                <p>
                    We engage with organisations as their inhouse IT department for designing their IT road map and management of their IT landscape with a strong focus on reliability, performance, and long-term value.
                </p>
                <p>
                    From initial assessment to implementation and ongoing managed services, we partner with you at every step of your transformation journey. We act as a single point of accountability, ensuring faster deployments, lower risk, and better ROI.
                </p>
            </div>

            <div style={{
                maxWidth: '100%',
                margin: '0 auto',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
                {/* Using the copied image from public folder */}
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    alt="Cloud Computing and Digital Transformation"
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                    }}
                />
            </div>
        </section>
    );
};

export default MoreThanCompressorSection;
