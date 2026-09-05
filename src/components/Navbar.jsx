import React, { useState } from 'react';
import { MessageCircle, Menu, X, Gamepad2, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Gaming Hub! I would like to inquire about console availability.");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <header className="navbar">
      <div className="container nav-wrap">
        {/* Brand Logo */}
        <a href="#top" className="brand-link">
          <div className="brand-logo-badge">
            <Gamepad2 size={22} />
          </div>
          <span className="brand-name">GAMING HUB</span>
        </a>

        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#games">Games</a>
          <a href="#racing">Sim Racing</a>
          <a href="#events">Private Events</a>
          <a href="#offers">Offers</a>
          <a href="#location">Visit Us</a>
        </nav>

        {/* WhatsApp Direct CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <button
            type="button"
            onClick={handleWhatsApp}
            className="btn btn-whatsapp"
            style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
          >
            <MessageCircle size={17} />
            <span>Chat on WhatsApp</span>
          </button>

          <button
            className="menu-button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              display: 'none',
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-h)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(10, 11, 14, 0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '2.5rem 1.5rem',
            gap: '1.5rem',
            zIndex: 999,
          }}
        >
          <a href="#experience" onClick={() => setMobileOpen(false)} style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, textDecoration: 'none' }}>Experience</a>
          <a href="#games" onClick={() => setMobileOpen(false)} style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, textDecoration: 'none' }}>Games</a>
          <a href="#racing" onClick={() => setMobileOpen(false)} style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, textDecoration: 'none' }}>Sim Racing</a>
          <a href="#events" onClick={() => setMobileOpen(false)} style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, textDecoration: 'none' }}>Private Events</a>
          <a href="#offers" onClick={() => setMobileOpen(false)} style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, textDecoration: 'none' }}>Offers</a>
          <a href="#location" onClick={() => setMobileOpen(false)} style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, textDecoration: 'none' }}>Visit Us</a>

          <div style={{ marginTop: 'auto' }}>
            <button
              onClick={handleWhatsApp}
              className="btn btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .menu-button {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
