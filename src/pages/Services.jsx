import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const styleTag = `
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
`;

const services = [
    {
        title: "Implementation and Consulting",
        icon: "⚡",
        description: "End-to-end consulting and implementation services for complex enterprise transitions.",
        features: ["Oracle Enterprise Integration", "EBS to Cloud Migration", "Oracle Custom Application Development", "Reporting Analytics (BI,OTBI)", "PaaS Development"]
    },
    {
        title: "Oracle Managed Services (AMS)",
        icon: "🛡️",
        description: "Reliable managed services ensuring your Oracle ecosystem runs smoothly 24/7.",
        features: ["Fusion AMS – Support Services", "Technical Support", "Integrated Support Model", "Reporting Analytics (BI,OTBI)"]
    },
    {
        title: "OCI (Oracle Cloud Infrastructure)",
        icon: "☁️",
        description: "Scalable, secure, and highly available cloud infrastructure solutions.",
        features: ["Identity & Access Management (IAM)", "Compute & Networking", "Disaster Recovery & High Availability", "DevOps on OCI"]
    },
    {
        title: "Oracle Fusion Cloud Services",
        icon: "🔗",
        description: "Modernize your back-office with integrated Fusion applications.",
        features: ["ERP", "Supply Chain", "Finance", "EPM"]
    },
    {
        title: "Low Code Application Development",
        icon: "💻",
        description: "Accelerate your digital transformation with rapid application development.",
        features: ["VBCS (Oracle Visual Builder Cloud Services)", "Oracle APEX", "Oracle Forms to APEX migration", "Reporting Analytics (BI,OTBI)"]
    },
    {
        title: "Artificial Intelligence (AI) Services",
        icon: "🧠",
        description: "Inject intelligence into your business processes with advanced AI solutions.",
        features: ["Oracle Digital Assistant", "AI-Powered Chatbots & Virtual Assistants", "Document Intelligence & Automation", "Speech to Text"]
    }
];

const Services = () => {
    return (
        <>
            <style>{styleTag}</style>
            <Header />

            <main style={{ backgroundColor: '#F8F9FA', color: '#1A1A1A', overflowX: 'hidden' }}>
                {/* HERO SECTION */}
                <section style={{
                    padding: '12rem 2rem 6rem',
                    textAlign: 'center',
                    background: 'linear-gradient(180deg, rgba(235, 248, 255, 1) 0%, rgba(248, 249, 250, 1) 100%)',
                }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto', animation: 'fadeUp 0.8s ease both' }}>
                        <div style={{
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            color: '#0066FF',
                            letterSpacing: '0.15em',
                            marginBottom: '1.5rem',
                        }}>Explore Our Expertise</div>
                        <h1 style={{
                            fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                            fontWeight: '800',
                            lineHeight: 1.1,
                            letterSpacing: '-0.03em',
                            margin: '0 0 1.5rem',
                            color: '#1A1A1A',
                        }}>
                            Solutions engineered for the modern enterprise.
                        </h1>
                        <p style={{
                            fontSize: '1.2rem',
                            color: '#4A4A4A',
                            lineHeight: 1.6,
                            maxWidth: '700px',
                            margin: '0 auto',
                        }}>
                            From seamless cloud migrations to AI-powered automation, discover how our full-spectrum services can accelerate your growth.
                        </p>
                    </div>
                </section>

                {/* SERVICES GRID */}
                <section style={{ padding: '4rem 2rem 8rem' }}>
                    <div style={{
                        maxWidth: '1280px',
                        margin: '0 auto',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '2rem'
                    }}>
                        {services.map((service, index) => (
                            <div key={index} style={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: '24px',
                                padding: '3rem 2.5rem',
                                border: '1px solid rgba(0, 0, 0, 0.06)',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.03)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                animation: `fadeUp 0.6s ease ${index * 0.1}s both`
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 102, 255, 0.08)';
                                    e.currentTarget.style.border = '1px solid rgba(0, 102, 255, 0.2)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.03)';
                                    e.currentTarget.style.border = '1px solid rgba(0, 0, 0, 0.06)';
                                }}
                            >
                                <div style={{
                                    fontSize: '2.5rem',
                                    marginBottom: '1.5rem',
                                    background: '#F0F7FF',
                                    width: '70px',
                                    height: '70px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '16px'
                                }}>
                                    {service.icon}
                                </div>
                                <h2 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#1A1A1A',
                                    marginBottom: '1rem',
                                    letterSpacing: '-0.02em'
                                }}>
                                    {service.title}
                                </h2>
                                <p style={{
                                    color: '#666666',
                                    fontSize: '1.05rem',
                                    lineHeight: 1.6,
                                    marginBottom: '2rem'
                                }}>
                                    {service.description}
                                </p>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.8rem'
                                }}>
                                    {service.features.map((feature, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '0.75rem',
                                            color: '#333333',
                                            fontSize: '0.95rem',
                                            fontWeight: '500'
                                        }}>
                                            <span style={{ color: '#0066FF', marginTop: '2px' }}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA SECTION */}
                <section style={{
                    padding: '8rem 2rem',
                    textAlign: 'center',
                    backgroundColor: '#1A1A1A',
                    color: '#FFFFFF'
                }}>
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: '700',
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.02em'
                        }}>
                            Ready to upgrade your infrastructure?
                        </h2>
                        <p style={{
                            color: '#A1A1AA',
                            fontSize: '1.1rem',
                            lineHeight: 1.6,
                            marginBottom: '3rem'
                        }}>
                            Speak with our enterprise architects and discover the best way to optimize your systems.
                        </p>
                        <a href="mailto:info@multitech.com" style={{
                            display: 'inline-block',
                            backgroundColor: '#D3E95F',
                            color: '#1A1A1A',
                            padding: '1rem 2.5rem',
                            borderRadius: '12px',
                            fontWeight: '700',
                            fontSize: '1.1rem',
                            textDecoration: 'none',
                            transition: 'transform 0.2s',
                        }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            Contact Sales Today
                        </a>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
};

export default Services;
