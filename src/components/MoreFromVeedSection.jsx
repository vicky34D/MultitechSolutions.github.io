import React from 'react';

const Card = ({ color, title, description, imageTitle, imageSub }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Thumbnail with text overlay */}
        <div style={{
            backgroundColor: color,
            borderRadius: '16px',
            aspectRatio: '16/9',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '800',
                lineHeight: '1.1',
                fontFamily: '"Oswald", sans-serif', // Assuming a condensed font or similar
                textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}>
                {imageTitle}
            </h3>
            {imageSub && <p style={{ marginTop: '0.5rem', fontWeight: '500' }}>{imageSub}</p>}
        </div>

        {/* Content */}
        <div>
            <h3 style={{
                color: 'white',
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '0.5rem',
                lineHeight: '1.4'
            }}>
                {title}
            </h3>
            <p style={{
                color: '#9CA3AF',
                fontSize: '0.9rem',
                lineHeight: '1.6'
            }}>
                {description}
            </p>
        </div>
    </div>
);

const MoreFromVeedSection = () => {
    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '2rem'
        }}>
            <div style={{
                backgroundColor: '#1F1F1F', // Dark grey/black
                borderRadius: '32px',
                padding: '4rem 3rem',
                color: 'white'
            }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '3.5rem',
                    fontWeight: '800',
                    fontFamily: '"Oswald", sans-serif',
                    marginBottom: '3rem',
                    textTransform: 'uppercase',
                    letterSpacing: '-1px'
                }}>
                    Partnering with Oracle
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem'
                }}>
                    <Card
                        color="#818CF8" // Periwinkle/Blue
                        imageTitle="Oracle Cloud Infrastructure"
                        title="Secure & Scalable Cloud"
                        description="Secure, high-performance cloud for mission-critical workloads. Scalable infrastructure for enterprise and government use cases."
                    />
                    <Card
                        color="#34D399" // Green
                        imageTitle="Data Management"
                        imageSub="& Analytics"
                        title="Unlock Data-Driven Insights"
                        description="Oracle Database, Autonomous Database, Data Warehousing. Advanced analytics and real-time insights for better decision making."
                    />
                    <Card
                        color="#F472B6" // Pink/Red
                        imageTitle="Enterprise Applications"
                        imageSub="ERP, HCM, SCM, CX"
                        title="Modernise IT & Operations"
                        description="Industry-specific enterprise solutions. AI, ML & Automation embedded intelligence to optimise operations."
                    />
                </div>
            </div>
        </section>
    );
};

export default MoreFromVeedSection;
