import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, MessageCircle } from 'lucide-react';

export default function Header({ onOpenBooking }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Game Room! I'd like to check console availability and book a session.");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <header className="site-header">
      {/* Brand Logo */}
      <a href="#top" className="brand" aria-label="Go to top">
        <span className="brand-mark">G</span>
        GAME<span className="brand-slash">//</span>ROOM
      </a>

      {/* Main Navigation */}
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#gear">The gear</a>
        <a href="#games">The library</a>
        <a href="#racing">Racing Sim</a>
        <a href="#space">The space</a>
        <a href="#offers">Offers</a>
        <a href="#events">Events</a>
      </nav>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="header-cta header-cta-whatsapp"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={16} />
          <span>WhatsApp</span>
        </button>

        <button
          type="button"
          onClick={onOpenBooking || handleWhatsApp}
          className="header-cta"
        >
          Book a session <ArrowUpRight size={16} />
        </button>

        <button
          className="menu-button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: '72px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(9, 10, 14, 0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '2.5rem 1.5rem',
            gap: '1.5rem',
            zIndex: 99,
          }}
        >
          <a href="#gear" onClick={() => setMobileOpen(false)} style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700, textDecoration: 'none' }}>The gear</a>
          <a href="#games" onClick={() => setMobileOpen(false)} style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700, textDecoration: 'none' }}>The library</a>
          <a href="#racing" onClick={() => setMobileOpen(false)} style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700, textDecoration: 'none' }}>Racing Sim</a>
          <a href="#space" onClick={() => setMobileOpen(false)} style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700, textDecoration: 'none' }}>The space</a>
          <a href="#offers" onClick={() => setMobileOpen(false)} style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700, textDecoration: 'none' }}>Offers</a>
          <a href="#events" onClick={() => setMobileOpen(false)} style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700, textDecoration: 'none' }}>Events</a>
          
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button onClick={handleWhatsApp} className="btn-hero-primary btn-hero-whatsapp" style={{ justifyContent: 'center' }}>
              <MessageCircle size={18} /> Chat on WhatsApp
            </button>
            <button onClick={() => { setMobileOpen(false); onOpenBooking && onOpenBooking(); }} className="btn-hero-primary" style={{ justifyContent: 'center' }}>
              Book Your Session <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
