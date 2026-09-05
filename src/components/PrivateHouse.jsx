import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function PrivateHouse() {
  return (
    <section
      className="section"
      style={{
        backgroundColor: 'var(--bg-dark-1)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '4.5rem',
            alignItems: 'center',
          }}
          className="private-grid"
        >
          {/* Real Photo */}
          <div className="img-zoom-wrap" style={{ height: '480px' }}>
            <img
              src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1600&q=80"
              alt="Private Whole Gaming House Arena"
              className="img-zoom"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <span className="tag-label">Exclusive Venue Booking</span>
            <h2 className="section-heading-large">
              MAKE THE<br />PLACE YOURS.
            </h2>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
              }}
            >
              Planning a bigger celebration, group session or special event? Ask us about using the gaming house exclusively with full access to all PS4 &amp; PS5 stations.
            </p>

            {/* Highlights */}
            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap',
                padding: '1.5rem 0',
                borderTop: '1px solid var(--border-subtle)',
                borderBottom: '1px solid var(--border-subtle)',
                marginBottom: '2.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Zap size={18} color="var(--accent)" />
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--text-white)' }}>
                  3+ HOUR BOOKINGS
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <ShieldCheck size={18} color="var(--accent)" />
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--text-white)' }}>
                  SPECIAL CONDITIONS AVAILABLE
                </span>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">
              ENQUIRE WITH US <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .private-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
