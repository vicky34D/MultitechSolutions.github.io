import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#000000',
      color: '#FFFFFF',
      padding: '4rem 2rem 2rem',
      fontFamily: 'var(--kiros-font)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Top Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Logo & Description */}
          <div>
            <Link to="/" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontWeight: '800',
              fontSize: '1.2rem',
              color: '#FFFFFF',
              textDecoration: 'none',
              marginBottom: '1rem',
            }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="8" fill="url(#footerLogoGrad)" />
                <path d="M8 18V10L14 14L20 10V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="28" y2="28">
                    <stop stopColor="#4F6BFF" />
                    <stop offset="1" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>
              Multitech Solutions
            </Link>
            <p style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.9rem',
              lineHeight: '1.6',
              maxWidth: '280px',
            }}>
              Empowering modern businesses with integrated HR, Finance, & IT solutions.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 style={{
              fontSize: '0.85rem',
              fontWeight: '700',
              color: 'rgba(255,255,255,0.4)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1.25rem',
            }}>
              Product
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Features', 'Integrations', 'Pricing', 'Updates'].map((item, i) => (
                <li key={i}>
                  <a href="#" style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{
              fontSize: '0.85rem',
              fontWeight: '700',
              color: 'rgba(255,255,255,0.4)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1.25rem',
            }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['About', 'Careers', 'Blog', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a href="#" style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{
              fontSize: '0.85rem',
              fontWeight: '700',
              color: 'rgba(255,255,255,0.4)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1.25rem',
            }}>
              Resources
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Help Center', 'Documentation', 'API Reference', 'Community'].map((item, i) => (
                <li key={i}>
                  <a href="#" style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{
            color: 'rgba(255,255,255,0.4)',
            fontSize: '0.85rem',
          }}>
            © 2024 Multitech Solutions. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy', 'Terms', 'Cookies'].map((item, i) => (
              <a key={i} href="#" style={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: '0.85rem',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
