import React from 'react';
import { Gamepad2, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Gaming Hub! I'm reaching out with a query.");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <div className="brand-logo-badge" style={{ width: '32px', height: '32px' }}>
                <Gamepad2 size={18} />
              </div>
              <span className="brand-name" style={{ fontSize: '1.15rem' }}>GAMING HUB</span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '300px', marginBottom: '1.5rem' }}>
              The premier physical PlayStation lounge for PS4 &amp; PS5 gaming, squad competitions, birthday parties, and family hangouts.
            </p>

            <button
              type="button"
              onClick={handleWhatsApp}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(37, 211, 102, 0.15)',
                border: '1px solid rgba(37, 211, 102, 0.3)',
                color: '#25d366',
                padding: '0.45rem 0.9rem',
                borderRadius: '6px',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              <MessageCircle size={15} /> WhatsApp Desk Active
            </button>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="#experience">Gaming Experience</a></li>
              <li><a href="#games">Featured Games</a></li>
              <li><a href="#racing">Sim Racing Cockpit</a></li>
              <li><a href="#events">Birthday &amp; Events</a></li>
              <li><a href="#offers">Pricing &amp; Offers</a></li>
            </ul>
          </div>

          {/* Hours & Info */}
          <div className="footer-col">
            <h4>Hours</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
              <strong style={{ color: '#fff' }}>Open Daily:</strong><br />
              10:00 AM — 10:00 PM
            </p>
            <p style={{ color: 'var(--text-subtle)', fontSize: '0.85rem' }}>
              Walk-ins welcome anytime.
            </p>
          </div>

          {/* Connect */}
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="#whatsapp" onClick={(e) => { e.preventDefault(); handleWhatsApp(); }} style={{ color: '#25d366' }}>
                  Chat on WhatsApp <ArrowUpRight size={13} style={{ display: 'inline' }} />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram <ArrowUpRight size={13} style={{ display: 'inline' }} />
                </a>
              </li>
              <li>
                <a href="#location">
                  Google Maps Directions <ArrowUpRight size={13} style={{ display: 'inline' }} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} GAMING HUB. All rights reserved.</div>
          <div>PlayStation, PS4 &amp; PS5 are registered trademarks of Sony Interactive Entertainment Inc.</div>
        </div>
      </div>
    </footer>
  );
}
