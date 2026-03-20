import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const Product = () => {
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#F8F9FB',
      fontFamily: 'var(--kiros-font)',
      paddingTop: '6rem', 
    }}>
      {/* Product Hero Section */}
      <section style={{
        backgroundColor: '#FFFFFF',
        padding: '6rem 2rem',
        borderBottom: '1px solid #E5E7EB',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,91,255,0.06) 0%, transparent 60%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          right: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 60%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }} />
        
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <AnimatedSection delay={0} direction="up">
            <div style={{ display: 'inline-block', padding: '0.4rem 1rem', background: '#F3F4F6', borderRadius: '999px', color: '#4B5563', fontWeight: '600', fontSize: '0.85rem', marginBottom: '1.5rem', border: '1px solid #E5E7EB' }}>
              Solutions Portfolio
            </div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              color: '#111827',
              letterSpacing: '-0.04em',
              marginBottom: '1.5rem',
              lineHeight: '1.1',
            }}>
              Enterprise-Grade <br />
              <span style={{ 
                background: 'linear-gradient(135deg, #3B5BFF 0%, #10B981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>IT Products & Solutions</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.15} direction="up">
            <p style={{
              fontSize: '1.2rem',
              color: '#4B5563',
              lineHeight: '1.8',
              maxWidth: '750px',
              margin: '0 auto',
            }}>
              Equip your organisation with world-class technology infrastructure, tailored and deployed by our experts to meet the highest standards of reliability and scalability.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Categories Section */}
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            
            {[
              {
                title: 'High-Performance IT Hardware',
                desc: 'From enterprise servers to desktop workstations, we supply and configure the latest hardware from top global vendors like HPE, Dell, and Lenovo.',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
                features: ['Servers & Storage', 'Workstations & Laptops', 'Data Center Racks', 'End-User Devices'],
                color: '#3B5BFF'
              },
              {
                title: 'Advanced Networking & Wi-Fi',
                desc: 'Robust wired and wireless networking solutions ensuring zero-latency communication and complete coverage across extensive campuses.',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><line x1="2" y1="12" x2="22" y2="12"></line></svg>,
                features: ['Campus Core Routing', 'Enterprise Wi-Fi 6', 'Load Balancing', 'SD-WAN Deployment'],
                color: '#10B981'
              },
              {
                title: 'Cyber Security & Surveillance',
                desc: 'Safeguard your digital assets and physical premises with AI-powered security measures, comprehensive firewalls, and modern CCTV frameworks.',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
                features: ['Next-Gen Firewalls', 'Endpoint Protection', 'CCTV & Access Control', 'Zero Trust Architecture'],
                color: '#F59E0B'
              },
              {
                title: 'ERP & Enterprise Licensing',
                desc: 'Seamless implementation and licensing for major ERP systems and enterprise platforms like Microsoft 365, Oracle, and SAP.',
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>,
                features: ['SAP & Oracle Licensing', 'OS & Cloud Subscriptions', 'Database Management', 'Platform Migration'],
                color: '#8B5CF6'
              }
            ].map((product, idx) => (
              <AnimatedSection key={idx} delay={0.1 * idx} direction="up">
                <div style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '3rem 2.5rem',
                  border: '1px solid #E5E7EB',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.06)`;
                  e.currentTarget.style.borderColor = product.color;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#E5E7EB';
                }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '150px',
                    height: '150px',
                    background: `radial-gradient(circle at top right, ${product.color}15 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }} />
                  
                  <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '16px', 
                    background: `${product.color}15`, 
                    color: product.color, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    marginBottom: '1.5rem' 
                  }}>
                    {product.icon}
                  </div>
                  
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#111827', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                    {product.title}
                  </h3>
                  
                  <p style={{ color: '#6B7280', lineHeight: '1.6', marginBottom: '2rem', fontSize: '1rem', flexGrow: 1 }}>
                    {product.desc}
                  </p>
                  
                  <div>
                    <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#9CA3AF', fontWeight: '700', marginBottom: '1rem' }}>Key Capabilities</h4>
                    <ul style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {product.features.map((feature, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#4B5563', fontSize: '0.95rem' }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={product.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
            
          </div>
        </div>
      </section>

      {/* Cloud & Software Infrastructure CTA Banner */}
      <section style={{ padding: '0 2rem 6rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimatedSection delay={0.2} direction="up">
            <div style={{
              background: 'linear-gradient(135deg, #111827 0%, #1E293B 100%)',
              borderRadius: '32px',
              padding: '4rem 5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '4rem',
              flexWrap: 'wrap',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(59,91,255,0.2) 0%, transparent 60%)', filter: 'blur(50px)' }} />
              
              <div style={{ flex: '1 1 500px', position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
                  Looking for Customized Hardware & Licensing?
                </h2>
                <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                  Our technical consultants design multi-brand IT infrastructures precisely mapped to your operational needs and budget constraints.
                </p>
                <button style={{
                  background: '#FFFFFF',
                  color: '#111827',
                  border: 'none',
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  fontWeight: '700',
                  borderRadius: '999px',
                  cursor: 'pointer',
                  fontFamily: 'var(--kiros-font)',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,255,255,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.2)';
                }}
                >
                  Request a Consultation
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
};

export default Product;
