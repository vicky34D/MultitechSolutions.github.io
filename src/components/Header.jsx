import React from 'react';

const Header = () => {
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
        padding: '0.6rem 0.6rem 0.6rem 1.5rem',
        maxWidth: '1200px',
        width: '100%',
        backgroundColor: 'rgba(20, 20, 20, 0.4)', // Increased transparency for better glass effect
        backdropFilter: 'blur(40px) saturate(180%)', // Increased blur
        WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        borderRadius: '9999px',
        border: '1px solid rgba(255, 255, 255, 0.15)', // Slightly more visible border
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <div style={{ fontWeight: '800', fontSize: '1.5rem', letterSpacing: '-1px', color: '#ffffff' }}>VEED</div>
          <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', color: '#D1D5DB', fontWeight: '500' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#E5E7EB' }}>Product <span style={{ fontSize: '0.7em', color: '#9CA3AF' }}>▼</span></a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#E5E7EB' }}>Use Cases <span style={{ fontSize: '0.7em', color: '#9CA3AF' }}>▼</span></a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#E5E7EB' }}>
              <span style={{ color: '#818CF8' }}>✦</span> AI <span style={{ fontSize: '0.7em', color: '#9CA3AF' }}>▼</span>
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#E5E7EB' }}>APIs <span style={{ fontSize: '0.7em', color: '#9CA3AF' }}>▼</span></a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#E5E7EB' }}>Resources <span style={{ fontSize: '0.7em', color: '#9CA3AF' }}>▼</span></a>
            <a href="#" style={{ color: '#E5E7EB' }}>Pricing</a>
          </nav>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="#" style={{ fontSize: '0.85rem', fontWeight: '500', color: '#E5E7EB', marginRight: '0.5rem' }}>Contact Sales</a>
          <button style={{
            backgroundColor: '#FFFFFF',
            border: 'none',
            color: '#111827',
            padding: '0.6rem 1.2rem',
            fontSize: '0.85rem',
            borderRadius: '9999px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>Login</button>
          <button style={{
            backgroundColor: '#374151',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#FFFFFF',
            padding: '0.6rem 1.2rem',
            fontSize: '0.85rem',
            borderRadius: '9999px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>Sign Up</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
