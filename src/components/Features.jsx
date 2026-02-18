import React from 'react';

export const SocialMediaFeature = () => {
    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '4rem 2rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
        }}>
            {/* Left Image Side */}
            <div style={{ position: 'relative' }}>
                {/* Main background blob/shape */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '-10%',
                    width: '80%',
                    height: '90%',
                    backgroundColor: '#DEF9C4', // Light green bg
                    borderRadius: '40px',
                    zIndex: 0
                }}></div>

                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: '32px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                }}>
                    <img
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Digital Transformation Consulting"
                        style={{ width: '100%', display: 'block' }}
                    />
                </div>
            </div>

            {/* Right Text Side */}
            <div>
                <h2 style={{
                    fontSize: '3rem',
                    fontWeight: '800', // Extra bold
                    lineHeight: '1.1',
                    color: '#111827',
                    marginBottom: '2rem',
                    letterSpacing: '-1px'
                }}>
                    Your Trusted Digital Transformation Partner
                </h2>
                <p style={{
                    fontSize: '1.25rem',
                    color: '#4B5563',
                    lineHeight: '1.6'
                }}>
                    Multitech Solutions is a Digital Transformation and Advisory Entity working closely with customers to understand their business challenges and deliver measurable outcomes for expansion and future growth. From initial assessment to implementation and ongoing managed services, we partner with you at every step of your transformation journey.
                </p>
            </div>
        </section>
    );
};

export const VersatileFeature = () => {
    return (
        <section style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '4rem 2rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
        }}>
            {/* Left Text Side */}
            <div>
                <h2 style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    lineHeight: '1.1',
                    color: '#111827',
                    marginBottom: '2rem',
                    letterSpacing: '-1px'
                }}>
                    End-to-End Services
                </h2>
                <p style={{
                    fontSize: '1.25rem',
                    color: '#4B5563',
                    lineHeight: '1.6',
                    marginBottom: '1rem'
                }}>
                    As your Oracle partner, Multitech Solutions provides complete lifecycle services: Oracle Consulting & Solution Design, Implementation & Rollouts, Cloud & Application Migration, Upgrade & Modernisation, Managed Services & AMC, and Performance Optimisation. We act as a single point of accountability, ensuring faster deployments, lower risk, and better ROI.
                </p>
            </div>

            {/* Right Image Side */}
            <div style={{ position: 'relative' }}>
                {/* Main background blob/shape */}
                <div style={{
                    position: 'absolute',
                    top: '5%',
                    right: '-5%',
                    width: '90%',
                    height: '95%',
                    backgroundColor: '#D1FAE5', // Mint green bg
                    borderRadius: '40px',
                    zIndex: 0
                }}></div>

                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: '32px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                }}>
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="End-to-End IT Services Team"
                        style={{ width: '100%', display: 'block' }}
                    />
                </div>
            </div>
        </section>
    );
};
