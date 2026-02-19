import React from 'react';

const Header = () => {
  const [showServices, setShowServices] = React.useState(false);

  return (
    <div style={{
      position: 'fixed',
      top: '1.5rem',
      left: '0',
      right: '0',
      display: 'flex',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '0 1rem'
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.2rem 1.5rem', // Increased vertical padding to make it wider (taller)
        maxWidth: '1200px',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.05)', // Much more transparent
        backdropFilter: 'blur(16px) saturate(180%)', // Strong blur
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        borderRadius: '9999px',
        border: '1px solid rgba(255, 255, 255, 0.2)', // Slightly stronger border
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)' // Liquid effect shadows
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <div style={{ fontWeight: '800', fontSize: '1.5rem', letterSpacing: '-1px', color: '#111827' }}>Multitech</div>
          <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.95rem', color: '#374151', fontWeight: '500', height: '100%' }}>
            <div
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#1F2937', textDecoration: 'none', height: '100%', cursor: 'default' }}>
                Services
                <span style={{ fontSize: '0.7em', color: '#6B7280', transform: showServices ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▼</span>
              </a>

              {/* Mega Menu */}
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '-50px',
                paddingTop: '1.5rem', // Floating gap
                opacity: showServices ? 1 : 0,
                visibility: showServices ? 'visible' : 'hidden',
                transition: 'all 0.2s ease-in-out',
                pointerEvents: showServices ? 'auto' : 'none',
                zIndex: 100
              }}>
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  padding: '1.5rem', // Reduced padding
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(260px, 1fr))',
                  gap: '2rem', // Reduced gap
                  color: '#1F2937',
                  width: '900px',
                  // Removed maxHeight and overflow to prevent scrolling, it should fit now
                }}>
                  {/* Column 1 */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <h3 style={{ fontWeight: '700', fontSize: '0.95rem', color: '#111827', marginBottom: '0.5rem' }}>Implementation and Consulting</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {['Oracle Enterprise Integration', 'EBS to Cloud Migration', 'Oracle Custom Application Development', 'Reporting Analytics (BI,OTBI)', 'PaaS Development'].map(item => (
                          <li key={item}><a href="#" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.85rem', display: 'block' }} onMouseEnter={e => e.target.style.color = '#2563EB'} onMouseLeave={e => e.target.style.color = '#4B5563'}>{item}</a></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 style={{ fontWeight: '700', fontSize: '0.95rem', color: '#111827', marginBottom: '0.5rem' }}>Oracle Managed Services (AMS)</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {['Fusion AMS - Support Services', 'Technical Support', 'Integrated Support Model', 'Reporting Analytics (BI,OTBI)'].map(item => (
                          <li key={item}><a href="#" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.85rem', display: 'block' }} onMouseEnter={e => e.target.style.color = '#2563EB'} onMouseLeave={e => e.target.style.color = '#4B5563'}>{item}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <h3 style={{ fontWeight: '700', fontSize: '0.95rem', color: '#111827', marginBottom: '0.5rem' }}>OCI (Oracle Cloud Infrastructure)</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {['Identity & Access Management (IAM)', 'Compute & Networking', 'Disaster Recovery & High Availability', 'DevOps on OCI'].map(item => (
                          <li key={item}><a href="#" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.85rem', display: 'block' }} onMouseEnter={e => e.target.style.color = '#2563EB'} onMouseLeave={e => e.target.style.color = '#4B5563'}>{item}</a></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 style={{ fontWeight: '700', fontSize: '0.95rem', color: '#111827', marginBottom: '0.5rem' }}>Oracle Fusion Cloud Services</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {['ERP', 'Supply Chain', 'Finance', 'EPM'].map(item => (
                          <li key={item}><a href="#" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.85rem', display: 'block' }} onMouseEnter={e => e.target.style.color = '#2563EB'} onMouseLeave={e => e.target.style.color = '#4B5563'}>{item}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <h3 style={{ fontWeight: '700', fontSize: '0.95rem', color: '#111827', marginBottom: '0.5rem' }}>Low Code Application Development</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {['VBCS (Oracle Visual Builder Cloud Services)', 'Oracle APEX', 'Oracle Forms to APEX migration', 'Reporting Analytics (BI,OTBI)'].map(item => (
                          <li key={item}><a href="#" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.85rem', display: 'block' }} onMouseEnter={e => e.target.style.color = '#2563EB'} onMouseLeave={e => e.target.style.color = '#4B5563'}>{item}</a></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 style={{ fontWeight: '700', fontSize: '0.95rem', color: '#111827', marginBottom: '0.5rem' }}>Artificial Intelligence (AI) Services</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {['Oracle Digital Assistant', 'AI-Powered Chatbots & Virtual Assistants', 'Document Intelligence & Automation', 'Speech to Text'].map(item => (
                          <li key={item}><a href="#" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.85rem', display: 'block' }} onMouseEnter={e => e.target.style.color = '#2563EB'} onMouseLeave={e => e.target.style.color = '#4B5563'}>{item}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#1F2937', textDecoration: 'none' }}>Resources <span style={{ fontSize: '0.7em', color: '#6B7280' }}>▼</span></a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#1F2937', textDecoration: 'none' }}>About Us</a>
          </nav>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button style={{
            backgroundColor: '#FFFFFF',
            border: 'none',
            color: '#111827',
            padding: '0.6rem 1.2rem',
            fontSize: '0.85rem',
            borderRadius: '9999px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>Contact Sales</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
