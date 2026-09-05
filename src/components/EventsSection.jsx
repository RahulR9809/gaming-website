import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Cake, Users, Home, Sparkles } from 'lucide-react';

const OCCASIONS = [
  { icon: <Cake size={16} />, label: 'Birthday Parties' },
  { icon: <Users size={16} />, label: 'Group Gaming' },
  { icon: <Home size={16} />, label: 'Private House Hire' },
  { icon: <Sparkles size={16} />, label: 'Family Hangouts' },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export default function EventsSection() {
  const [ref, visible] = useInView();

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Gaming Hub! I'd like to book the lounge for a special occasion — can you share details?");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="events" className="section-padding ev-section">
      <div className="container">
        <div
          ref={ref}
          className={`ev-banner ${visible ? 'ev-visible' : ''}`}
        >

          {/* ── Left — image ───────────────────── */}
          <div className="ev-img-col">
            <div className="ev-img-frame">
              <img
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=85"
                alt="Birthday celebration at Gaming Hub"
                className="ev-img"
                loading="lazy"
              />
              {/* Price tag floating on image */}
              <div className="ev-price-float">
                <span className="ev-price-val">₹99</span>
                <span className="ev-price-sub">per hour / per person</span>
              </div>
            </div>
          </div>

          {/* ── Right — text content ─────────────── */}
          <div className="ev-content">

            <div className="section-badge ev-badge">
              <Cake size={13} /> Special Occasions
            </div>

            <h2 className="section-title ev-title">
              MAKE IT<br /><span>MEMORABLE.</span>
            </h2>

            <p className="ev-body">
              Whether it's a <strong>birthday party</strong>, a <strong>family hangout</strong>, a <strong>squad gaming night</strong>, or an exclusive{' '}
              <strong>private house hire</strong> — Gaming Hub is the venue. All experiences are available at our standard rate.
              Special conditions apply for sessions <strong>3 hours and above</strong>.
            </p>

            {/* Occasion chips */}
            <div className="ev-chips">
              {OCCASIONS.map((o, i) => (
                <div
                  key={i}
                  className="ev-chip"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(14px)',
                    transitionDelay: visible ? `${0.2 + i * 0.08}s` : '0s',
                  }}
                >
                  <span className="ev-chip-icon">{o.icon}</span>
                  {o.label}
                </div>
              ))}
            </div>

            {/* Rate callout */}
            <div className="ev-rate-bar">
              <div className="ev-rate-left">
                <span className="ev-rate-num">₹99</span>
                <span className="ev-rate-slash">/</span>
                <span className="ev-rate-unit">hour</span>
              </div>
              <div className="ev-rate-note">
                Flat rate for any occasion — no hidden charges.<br />
                <span>3+ hours? Ask us about special packages.</span>
              </div>
            </div>

            <button type="button" onClick={handleWhatsApp} className="btn btn-whatsapp">
              <MessageCircle size={18} /> Plan Your Event on WhatsApp
            </button>

          </div>
        </div>
      </div>

      <style>{`
        .ev-section { background: var(--bg-main); }

        /* Banner grid */
        .ev-banner {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 5rem;
          align-items: center;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1);
        }
        .ev-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Image */
        .ev-img-col { position: relative; }
        .ev-img-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--border-medium);
          box-shadow: 0 32px 80px rgba(0,0,0,0.55);
        }
        .ev-img {
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .ev-img-frame:hover .ev-img { transform: scale(1.04); }

        /* Price float */
        .ev-price-float {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          background: rgba(10,11,14,0.88);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 14px;
          padding: 1rem 1.4rem;
          text-align: center;
        }
        .ev-price-val {
          display: block;
          font-family: var(--font-display);
          font-size: 2.4rem;
          font-weight: 800;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.04em;
        }
        .ev-price-sub {
          font-family: var(--font-mono);
          font-size: 0.64rem;
          font-weight: 600;
          color: var(--text-subtle);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 0.3rem;
          display: block;
        }

        /* Content */
        .ev-badge { color: #ec4899; }
        .ev-title { margin-bottom: 1.4rem; }

        .ev-body {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.75;
          margin-bottom: 2rem;
        }
        .ev-body strong { color: var(--text-secondary); font-weight: 600; }

        /* Occasion chips */
        .ev-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-bottom: 2.2rem;
        }
        .ev-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border-medium);
          border-radius: 9999px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: opacity 0.45s ease, transform 0.45s ease, background 0.2s ease, border-color 0.2s ease;
        }
        .ev-chip:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.25);
        }
        .ev-chip-icon {
          display: flex; align-items: center;
          color: #ec4899;
        }

        /* Rate bar */
        .ev-rate-bar {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.4rem 1.8rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-medium);
          border-radius: 14px;
          margin-bottom: 2rem;
        }
        .ev-rate-left {
          display: flex;
          align-items: baseline;
          gap: 0.2rem;
          flex-shrink: 0;
        }
        .ev-rate-num {
          font-family: var(--font-display);
          font-size: 2.8rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          letter-spacing: -0.04em;
        }
        .ev-rate-slash {
          font-family: var(--font-display);
          font-size: 1.5rem;
          color: var(--text-subtle);
          margin: 0 0.1rem;
        }
        .ev-rate-unit {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .ev-rate-note {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.55;
          border-left: 1px solid var(--border-dim);
          padding-left: 1.5rem;
        }
        .ev-rate-note span {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-subtle);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .ev-banner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .ev-img { aspect-ratio: 16/9; }
          .ev-rate-bar { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .ev-rate-note { border-left: none; padding-left: 0; border-top: 1px solid var(--border-dim); padding-top: 1rem; }
        }
      `}</style>
    </section>
  );
}
