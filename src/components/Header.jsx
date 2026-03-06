import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 1000,
      fontFamily: "'Inter', sans-serif",
      backgroundColor: 'rgba(17, 17, 17, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 2.5rem',
        maxWidth: '1440px',
        width: '100%',
      }}>
        {/* Logo */}
        <div>
          <Link to="/" style={{
            fontWeight: '900',
            fontSize: '1.4rem',
            letterSpacing: '0.5px',
            color: '#FFFFFF',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            textTransform: 'uppercase'
          }}>
            Multitech.
          </Link>
        </div>

        {/* Nav */}
        <nav style={{
          display: 'flex',
          gap: '2.5rem',
          fontSize: '0.8rem',
          fontWeight: '600',
          letterSpacing: '0.5px',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', color: '#FFFFFF' }}>
            WHAT WE DO
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <Link to="/cases" style={{ color: '#FFFFFF', textDecoration: 'none' }}>CASES</Link>
          <Link to="/outcomes" style={{ color: '#FFFFFF', textDecoration: 'none' }}>OUTCOMES</Link>
          <Link to="/news" style={{ color: '#FFFFFF', textDecoration: 'none' }}>NEWS</Link>
        </nav>

        {/* Right side Button */}
        <div>
          <button style={{
            backgroundColor: '#0BBC5C', // Vibrant Green
            border: 'none',
            color: '#FFFFFF',
            padding: '0.75rem 1.5rem',
            fontSize: '0.85rem',
            borderRadius: '999px',
            fontWeight: '700',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            transition: 'background-color 0.2s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0AA350'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0BBC5C'}
          >
            LET'S TALK
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19l7-7 3 3-7 7-3-3z" />
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="M2 2l7.586 7.586" />
              <circle cx="11" cy="11" r="2" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
