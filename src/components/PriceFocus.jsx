import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PriceFocus() {
  return (
    <section
      className="section-tight"
      style={{
        backgroundColor: 'var(--bg-dark-1)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '3rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <span className="tag-label">Accessible Value</span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                color: 'var(--text-white)',
                marginBottom: '1.2rem',
              }}
            >
              START PLAYING<br />FROM ₹99
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--text-offwhite)',
                lineHeight: 1.6,
                marginBottom: '0.8rem',
              }}
            >
              Affordable gaming sessions without compromising the experience.
            </p>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>
              Ask us about current offers and session options.
            </p>
          </div>

          <div style={{ alignSelf: 'center' }}>
            <a href="#contact" className="btn btn-primary" style={{ padding: '1.2rem 2.4rem', fontSize: '0.9rem' }}>
              COME PLAY <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
