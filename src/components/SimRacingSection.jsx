import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Gauge, MonitorPlay, Wifi } from 'lucide-react';

const SPECS = [
  { icon: <Gauge size={17} />, label: 'Direct Drive Steering Wheel', color: '#f59e0b' },
  { icon: <MonitorPlay size={17} />, label: 'Ultra-Wide Curved Display', color: '#06b6d4' },
  { icon: <Gauge size={17} />, label: 'Load-Cell Brake Pedals', color: '#10b981' },
  { icon: <Wifi size={17} />, label: 'Gran Turismo 7 · F1 24 Ready', color: '#3b82f6' },
];

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export default function SimRacingSection() {
  const [ref, visible] = useInView(0.15);

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Gaming Hub! I'd like to try the Sim Racing Cockpit — is it available?");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="racing" className="section-padding sim-section">
      <div className="container" ref={ref}>
        <div className={`sim-wrapper ${visible ? 'sim-visible' : ''}`}>

          {/* ── Image side ─────────────────────── */}
          <div className="sim-img-col">
            <div className="sim-img-frame">
              <img
                src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=900&q=85"
                alt="Sim Racing Cockpit at Gaming Hub"
                className="sim-img"
                loading="lazy"
              />
              {/* Floating pill on the image */}
              <div className="sim-floating-pill">
                <div className="sim-pulse-dot" />
                <span>Available Now</span>
              </div>
            </div>
          </div>

          {/* ── Content side ───────────────────── */}
          <div className="sim-content-col">
            <div className="section-badge sim-badge-color">
              <MonitorPlay size={13} /> Immersive Experience
            </div>

            <h2 className="section-title sim-heading">
              RACE LIKE<br />
              <span>A PRO.</span>
            </h2>

            <p className="sim-desc">
              Strap in to our full simulator cockpit — built for those who demand more than a couch and a controller. Force feedback, realistic resistance, and inch-perfect braking pressure that separates genuine drivers from the rest.
            </p>

            {/* Spec list */}
            <ul className="sim-specs">
              {SPECS.map((s, i) => (
                <li key={i} className="sim-spec-item" style={{ transitionDelay: visible ? `${0.1 + i * 0.08}s` : '0s' }}>
                  <span className="sim-spec-icon" style={{ color: s.color }}>{s.icon}</span>
                  <span className="sim-spec-label">{s.label}</span>
                </li>
              ))}
            </ul>

            <button type="button" onClick={handleWhatsApp} className="btn btn-whatsapp sim-cta">
              <MessageCircle size={18} /> Inquire via WhatsApp
            </button>
          </div>

        </div>
      </div>

      <style>{`
        .sim-section { background: var(--bg-main); }

        /* Wrapper — side by side */
        .sim-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4.5rem;
          align-items: center;
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .sim-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Image */
        .sim-img-col { position: relative; }
        .sim-img-frame {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border-medium);
          background: var(--bg-card);
          box-shadow: 0 30px 70px rgba(0,0,0,0.55);
        }
        .sim-img {
          width: 100%; aspect-ratio: 4/3;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .sim-img-frame:hover .sim-img { transform: scale(1.04); }

        /* Floating status pill */
        .sim-floating-pill {
          position: absolute;
          bottom: 1.4rem; left: 1.4rem;
          display: flex; align-items: center; gap: 0.55rem;
          background: rgba(10,11,14,0.82);
          backdrop-filter: blur(16px);
          border: 1px solid var(--border-medium);
          border-radius: 9999px;
          padding: 0.45rem 1rem;
          font-family: var(--font-mono);
          font-size: 0.75rem; font-weight: 600;
          color: var(--text-secondary);
          letter-spacing: 0.06em;
        }
        .sim-pulse-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 0 rgba(16,185,129,0.6);
          animation: sim-pulse 2s ease-in-out infinite;
        }
        @keyframes sim-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(16,185,129,0.6); }
          70%  { box-shadow: 0 0 0 7px rgba(16,185,129,0); }
          100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
        }

        /* Content */
        .sim-badge-color { color: var(--accent-amber); }
        .sim-heading { font-size: clamp(2.2rem, 4vw, 3.4rem) !important; }

        .sim-desc {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 2.2rem;
        }

        /* Spec list */
        .sim-specs {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 2.5rem;
        }
        .sim-spec-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          opacity: 0;
          transform: translateX(-14px);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
        .sim-visible .sim-spec-item {
          opacity: 1;
          transform: translateX(0);
        }
        .sim-spec-icon {
          width: 34px; height: 34px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border-dim);
          flex-shrink: 0;
        }
        .sim-spec-label {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .sim-cta { margin-top: 0.5rem; }

        /* Responsive */
        @media (max-width: 900px) {
          .sim-wrapper {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .sim-img { aspect-ratio: 16/9; }
          .sim-content-col { order: -1; }
        }
      `}</style>
    </section>
  );
}
