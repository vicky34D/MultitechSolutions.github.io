import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showNetwork, setShowNetwork] = React.useState(false);
  const [showSolutions, setShowSolutions] = React.useState(false);

  return (
    <div style={{
      position: 'fixed',
      top: '1rem',
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '0 1.5rem',
      fontFamily: "'Inter', sans-serif"
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.75rem 1.5rem',
        maxWidth: '1280px',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Light glass
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        borderRadius: '9999px',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
      }}>
        {/* Logo + Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
          <Link to="/" style={{
            fontWeight: '800',
            fontSize: '1.4rem',
            letterSpacing: '-1px',
            color: '#1A1A1A',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#000" />
              <rect x="6" y="6" width="5" height="5" rx="1" fill="#D3E95F" />
              <rect x="13" y="6" width="5" height="5" rx="1" fill="#FFF" />
              <rect x="6" y="13" width="5" height="5" rx="1" fill="#FFF" />
              <rect x="13" y="13" width="5" height="5" rx="1" fill="#FFF" opacity="0.4" />
            </svg>
            Multitech
          </Link>

          <nav style={{
            display: 'flex',
            gap: '0.5rem',
            fontSize: '0.95rem',
            height: '100%',
            fontWeight: '600'
          }}>
            <div
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setShowNetwork(true)}
              onMouseLeave={() => setShowNetwork(false)}
            >
              <a href="#" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                color: '#4A4A4A',
                textDecoration: 'none',
                height: '100%',
                cursor: 'default',
                padding: '0.5rem 0.75rem',
                borderRadius: '6px',
                transition: 'color 0.2s, background-color 0.2s',
              }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#1A1A1A'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4A4A4A'}
              >
                Services
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: '2px', transform: showNetwork ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              {/* Mega Menu */}
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '-10px',
                paddingTop: '0.75rem',
                opacity: showNetwork ? 1 : 0,
                visibility: showNetwork ? 'visible' : 'hidden',
                transform: showNetwork ? 'translateY(0)' : 'translateY(-8px)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: showNetwork ? 'auto' : 'none',
                zIndex: 100
              }}>
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '2.5rem',
                  color: '#1A1A1A',
                  minWidth: '400px'
                }}>
                  <div>
                    <h3 style={{ fontWeight: '700', fontSize: '0.75rem', color: '#888', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>IT Infrastructure</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      {['Cloud Migration', 'Managed IT Services', 'Cyber Security', 'Disaster Recovery'].map(item => (
                        <li key={item}><a href="#" style={{ color: '#4A4A4A', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500', display: 'block', padding: '0.5rem 0.75rem', borderRadius: '8px', transition: 'all 0.15s' }} onMouseEnter={e => { e.target.style.color = '#1A1A1A'; e.target.style.backgroundColor = '#F5F5F5'; }} onMouseLeave={e => { e.target.style.color = '#4A4A4A'; e.target.style.backgroundColor = 'transparent'; }}>{item}</a></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: '700', fontSize: '0.75rem', color: '#888', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Enterprise Apps</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      {['Oracle Fusion ERP', 'EPM Solutions', 'Data Analytics', 'System Integration'].map(item => (
                        <li key={item}><a href="#" style={{ color: '#4A4A4A', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500', display: 'block', padding: '0.5rem 0.75rem', borderRadius: '8px', transition: 'all 0.15s' }} onMouseEnter={e => { e.target.style.color = '#1A1A1A'; e.target.style.backgroundColor = '#F5F5F5'; }} onMouseLeave={e => { e.target.style.color = '#4A4A4A'; e.target.style.backgroundColor = 'transparent'; }}>{item}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setShowSolutions(true)}
              onMouseLeave={() => setShowSolutions(false)}
            >
              <a href="#" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                color: '#4A4A4A',
                textDecoration: 'none',
                height: '100%',
                cursor: 'default',
                padding: '0.5rem 0.75rem',
                borderRadius: '6px',
                transition: 'color 0.2s, background-color 0.2s',
              }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#1A1A1A'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4A4A4A'}
              >
                Solutions
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: '2px', transform: showSolutions ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              {/* Mega Menu for Solutions */}
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: showSolutions ? 'translate(-50%, 0)' : 'translate(-50%, -8px)',
                paddingTop: '0.75rem',
                opacity: showSolutions ? 1 : 0,
                visibility: showSolutions ? 'visible' : 'hidden',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: showSolutions ? 'auto' : 'none',
                zIndex: 100
              }}>
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '3rem',
                  color: '#1A1A1A',
                  minWidth: '850px'
                }}>
                  {/* Column 1 */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div>
                      <h3 style={{ fontWeight: '700', fontSize: '0.85rem', color: '#1A1A1A', marginBottom: '0.75rem' }}>Implementation and Consulting</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {['Oracle Enterprise Integration', 'EBS to Cloud Migration', 'Oracle Custom Application Development', 'Reporting Analytics (BI,OTBI)', 'PaaS Development'].map(item => (
                          <li key={item}><a href="#" style={{ color: '#4A4A4A', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '400', display: 'block', transition: 'color 0.15s' }} onMouseEnter={e => { e.target.style.color = '#1A1A1A'; }} onMouseLeave={e => { e.target.style.color = '#4A4A4A'; }}>{item}</a></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 style={{ fontWeight: '700', fontSize: '0.85rem', color: '#1A1A1A', marginBottom: '0.75rem' }}>Oracle Managed Services (AMS)</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {['Fusion AMS – Support Services', 'Technical Support', 'Integrated Support Model', 'Reporting Analytics (BI,OTBI)'].map(item => (
                          <li key={item}><a href="#" style={{ color: '#4A4A4A', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '400', display: 'block', transition: 'color 0.15s' }} onMouseEnter={e => { e.target.style.color = '#1A1A1A'; }} onMouseLeave={e => { e.target.style.color = '#4A4A4A'; }}>{item}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div>
                      <h3 style={{ fontWeight: '700', fontSize: '0.85rem', color: '#1A1A1A', marginBottom: '0.75rem' }}>OCI (Oracle Cloud Infrastructure)</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {['Identity & Access Management (IAM)', 'Compute & Networking', 'Disaster Recovery & High Availability', 'DevOps on OCI'].map(item => (
                          <li key={item}><a href="#" style={{ color: '#4A4A4A', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '400', display: 'block', transition: 'color 0.15s' }} onMouseEnter={e => { e.target.style.color = '#1A1A1A'; }} onMouseLeave={e => { e.target.style.color = '#4A4A4A'; }}>{item}</a></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 style={{ fontWeight: '700', fontSize: '0.85rem', color: '#1A1A1A', marginBottom: '0.75rem' }}>Oracle Fusion Cloud Services</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {['ERP', 'Supply Chain', 'Finance', 'EPM'].map(item => (
                          <li key={item}><a href="#" style={{ color: '#4A4A4A', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '400', display: 'block', transition: 'color 0.15s' }} onMouseEnter={e => { e.target.style.color = '#1A1A1A'; }} onMouseLeave={e => { e.target.style.color = '#4A4A4A'; }}>{item}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div>
                      <h3 style={{ fontWeight: '700', fontSize: '0.85rem', color: '#1A1A1A', marginBottom: '0.75rem' }}>Low Code Application Development</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {['VBCS (Oracle Visual Builder Cloud Services)', 'Oracle APEX', 'Oracle Forms to APEX migration', 'Reporting Analytics (BI,OTBI)'].map(item => (
                          <li key={item}><a href="#" style={{ color: '#4A4A4A', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '400', display: 'block', transition: 'color 0.15s' }} onMouseEnter={e => { e.target.style.color = '#1A1A1A'; }} onMouseLeave={e => { e.target.style.color = '#4A4A4A'; }}>{item}</a></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 style={{ fontWeight: '700', fontSize: '0.85rem', color: '#1A1A1A', marginBottom: '0.75rem' }}>Artificial Intelligence (AI) Services</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {['Oracle Digital Assistant', 'AI-Powered Chatbots & Virtual Assistants', 'Document Intelligence & Automation', 'Speech to Text'].map(item => (
                          <li key={item}><a href="#" style={{ color: '#4A4A4A', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '400', display: 'block', transition: 'color 0.15s' }} onMouseEnter={e => { e.target.style.color = '#1A1A1A'; }} onMouseLeave={e => { e.target.style.color = '#4A4A4A'; }}>{item}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/about" style={{
              display: 'flex',
              alignItems: 'center',
              color: '#4A4A4A',
              textDecoration: 'none',
              padding: '0.5rem 0.75rem',
              borderRadius: '6px',
              transition: 'color 0.2s',
            }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#1A1A1A'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#4A4A4A'}
            >
              About Us
            </Link>

          </nav>
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button style={{
            backgroundColor: '#1A1A1A', // Dark contrasting button
            border: 'none',
            color: '#D3E95F', // Lime green text
            padding: '0.5rem 1.4rem',
            fontSize: '0.95rem',
            borderRadius: '999px', // Pill shape
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            lineHeight: '1.4',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
            onClick={() => window.location.href = 'mailto:info@multitech.com'}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#000000'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1A1A1A'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Contact Sales
            <span style={{ fontSize: '1.2rem', lineHeight: '1' }}>→</span>
          </button>
        </div>
      </header >
    </div >
  );
};

export default Header;
