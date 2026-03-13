import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 1000,
      fontFamily: "var(--kiros-font)",
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2.5rem',
        maxWidth: '1240px',
        width: '100%',
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontWeight: '800',
          fontSize: '1.2rem',
          color: scrolled ? '#111827' : '#FFFFFF',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          letterSpacing: '-0.02em',
          transition: 'color 0.3s',
        }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="8" fill="url(#logoGrad)" />
            <path d="M8 18V10L14 14L20 10V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="28" y2="28">
                <stop stopColor="#4F6BFF" />
                <stop offset="1" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>
          Multitech Solutions
        </Link>

        {/* Nav */}
        <nav style={{
          display: 'flex',
          gap: '2.5rem',
          fontSize: '0.9rem',
          fontWeight: '500',
          alignItems: 'center'
        }}>
          {['Product', 'Pricing', 'About Us'].map((item) => (
            <Link
              key={item}
              to={item === 'About Us' ? '/about-us' : `/${item.toLowerCase()}`}
              style={{
                color: scrolled ? '#6B7280' : 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s',
                position: 'relative',
              }}
              onMouseEnter={e => e.currentTarget.style.color = scrolled ? '#111827' : '#FFFFFF'}
              onMouseLeave={e => e.currentTarget.style.color = scrolled ? '#6B7280' : 'rgba(255,255,255,0.8)'}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link
            to="/login"
            style={{
              color: scrolled ? '#6B7280' : 'rgba(255,255,255,0.8)',
              fontSize: '0.9rem',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = scrolled ? '#111827' : '#FFFFFF'}
            onMouseLeave={e => e.currentTarget.style.color = scrolled ? '#6B7280' : 'rgba(255,255,255,0.8)'}
          >
            Login
          </Link>
          <button style={{
            backgroundColor: '#111827',
            border: 'none',
            color: '#FFFFFF',
            padding: '0.7rem 1.5rem',
            fontSize: '0.85rem',
            borderRadius: '999px',
            fontWeight: '600',
            cursor: 'pointer',
            fontFamily: 'var(--kiros-font)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#1E293B';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#111827';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }}
          >
            Book a Demo
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
