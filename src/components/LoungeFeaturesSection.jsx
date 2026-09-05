import React, { useRef, useEffect, useState } from 'react';
import { MessageCircle, Gamepad2, Users, Cake, Trophy, Zap, Clock, Shield } from 'lucide-react';

/* ── Feature card data ──────────────────────────── */
const FEATURES = [
  {
    id: 'ps5',
    tag: '01 · Next-Gen Console',
    title: 'PS5 Ultra\nHD Gaming',
    desc: 'Breathtaking 4K resolution, 120fps silky frame-rates, and DualSense haptic feedback that makes every game feel utterly physical.',
    icon: <Gamepad2 size={28} />,
    accent: '#3b82f6',
    img: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=900&q=85',
    stat: '4K · 120fps',
    statLabel: 'Next-Gen Output',
  },
  {
    id: 'ps4',
    tag: '02 · Classic Console',
    title: 'PS4 Pro\nPower House',
    desc: 'A massive library of legendary titles — from God of War to The Last of Us. High-performance gaming for every style of player.',
    icon: <Zap size={28} />,
    accent: '#f59e0b',
    img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=900&q=85',
    stat: '500+',
    statLabel: 'Game Titles',
  },
  {
    id: 'squad',
    tag: '03 · Group Play',
    title: 'Squad Up,\nPlay Together',
    desc: 'Bring your crew. Our stations are built for multiplayer chaos — couch co-op, split-screen, tournaments, and everything in between.',
    icon: <Users size={28} />,
    accent: '#10b981',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&q=85',
    stat: '1–6',
    statLabel: 'Players Per Station',
  },
  {
    id: 'birthday',
    tag: '04 · Private Events',
    title: 'Birthday &\nCelebrations',
    desc: 'Throw the most unforgettable birthday ever. Exclusive lounge access, custom setups, and tailored gaming experiences for your crew.',
    icon: <Cake size={28} />,
    accent: '#ec4899',
    img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=900&q=85',
    stat: 'Full',
    statLabel: 'Private Lounge Hire',
  },
  {
    id: 'racing',
    tag: '05 · Sim Racing',
    title: 'Race Like\nYou Mean It',
    desc: 'Direct-drive cockpit with force-feedback steering, load-cell pedals, and curved ultra-wide display. The closest thing to a real car.',
    icon: <Trophy size={28} />,
    accent: '#f97316',
    img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=900&q=85',
    stat: 'GT7',
    statLabel: 'Force Feedback Rig',
  },
  {
    id: 'open',
    tag: '06 · Always Open',
    title: 'Every Day,\n10AM – 10PM',
    desc: 'No appointment needed for walk-ins. Just show up, pick your station, and jump in. Open every single day of the year.',
    icon: <Clock size={28} />,
    accent: '#06b6d4',
    img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&q=85',
    stat: '12h',
    statLabel: 'Open Daily',
  },
  {
    id: 'private',
    tag: '07 · Exclusive Access',
    title: 'Book The\nEntire House',
    desc: 'Corporate team events, private LAN parties, or a family gaming night — rent the full lounge for a completely exclusive experience.',
    icon: <Shield size={28} />,
    accent: '#8b5cf6',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&q=85',
    stat: '100%',
    statLabel: 'Private Exclusivity',
  },
];

/* ── Utility: observe when element enters viewport ── */
function useInView(threshold = 0.1) {
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

/* ── Single Feature Card ─────────────────────────── */
function FeatureCard({ feature, index, trackVisible }) {
  const [hovered, setHovered] = useState(false);
  const { tag, title, desc, icon, accent, img, stat, statLabel } = feature;
  const lines = title.split('\n');

  return (
    <article
      className="lf-card"
      style={{
        '--accent': accent,
        opacity: trackVisible ? 1 : 0,
        transform: trackVisible ? 'translateX(0) scale(1)' : 'translateX(60px) scale(0.96)',
        transitionDelay: trackVisible ? `${index * 0.09}s` : '0s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <div className="lf-card-img-wrap">
        <img
          src={img}
          alt={lines.join(' ')}
          loading="lazy"
          className="lf-card-img"
          style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
        />
        {/* dark gradient overlay */}
        <div className="lf-card-overlay" />
        {/* Accent tint on hover */}
        <div
          className="lf-card-tint"
          style={{ background: `${accent}22`, opacity: hovered ? 1 : 0 }}
        />
      </div>

      {/* Content */}
      <div className="lf-card-body">
        {/* Tag */}
        <span className="lf-tag">{tag}</span>

        {/* Stat pill */}
        <div className="lf-stat-pill" style={{ borderColor: `${accent}55`, color: accent }}>
          <strong>{stat}</strong>
          <span>{statLabel}</span>
        </div>

        {/* Title */}
        <h3 className="lf-card-title">
          {lines[0]}<br />{lines[1]}
        </h3>

        {/* Description — slides up on hover */}
        <p
          className="lf-card-desc"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          {desc}
        </p>

        {/* Icon circle */}
        <div
          className="lf-icon-circle"
          style={{ background: `${accent}22`, borderColor: `${accent}44`, color: accent }}
        >
          {icon}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        className="lf-bottom-bar"
        style={{ background: accent, transform: hovered ? 'scaleX(1)' : 'scaleX(0)' }}
      />
    </article>
  );
}

/* ── Main Section ────────────────────────────────── */
export default function LoungeFeaturesSection() {
  const trackRef = useRef(null);
  const [trackVisible, setTrackVisible] = useState(false);
  const [headerRef, headerVisible] = useInView(0.3);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Reveal when track enters viewport
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTrackVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Drag-to-scroll on desktop
  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = 'grabbing';
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const stopDrag = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Gaming Hub! I'd like to book a session or ask about your experiences.");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="games" className="lf-section">

      {/* ── Section Header ──────────────────── */}
      <div className="container">
        <div
          ref={headerRef}
          className="lf-header"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <div className="section-badge">
            <Gamepad2 size={13} /> The Experience
          </div>
          <div className="lf-header-row">
            <div>
              <h2 className="section-title">
                EVERYTHING<br /><span>WE OFFER.</span>
              </h2>
              <p className="section-subtitle">
                Drag to explore the full range of experiences waiting for you — from next-gen console sessions to private lounge hire.
              </p>
            </div>
            <div className="lf-header-cta">
              <button type="button" onClick={handleWhatsApp} className="btn btn-whatsapp">
                <MessageCircle size={18} /> Book via WhatsApp
              </button>
              <p className="lf-drag-hint">← drag to explore →</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Horizontal Scroll Track ─────────── */}
      <div
        ref={trackRef}
        className="lf-track"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        <div className="lf-track-inner">
          {FEATURES.map((f, i) => (
            <FeatureCard
              key={f.id}
              feature={f}
              index={i}
              trackVisible={trackVisible}
            />
          ))}
          {/* Final CTA card */}
          <article
            className="lf-card lf-cta-card"
            style={{
              opacity: trackVisible ? 1 : 0,
              transform: trackVisible ? 'translateX(0) scale(1)' : 'translateX(60px) scale(0.96)',
              transitionDelay: `${FEATURES.length * 0.09}s`,
            }}
          >
            <div className="lf-cta-orb lf-orb-1" />
            <div className="lf-cta-orb lf-orb-2" />
            <div className="lf-cta-card-inner">
              <Gamepad2 size={42} color="rgba(255,255,255,0.2)" />
              <h3 className="lf-cta-title">Ready to<br />Play?</h3>
              <p className="lf-cta-sub">Walk in or book ahead via WhatsApp.</p>
              <button type="button" onClick={handleWhatsApp} className="btn btn-primary lf-cta-btn">
                <MessageCircle size={18} /> Chat on WhatsApp
              </button>
              <div className="lf-cta-open">Open Daily 10 AM – 10 PM</div>
            </div>
          </article>
        </div>
      </div>

      {/* ── Scroll progress indicator ───────── */}
      <div className="container">
        <div className="lf-progress-row">
          {FEATURES.map((f, i) => (
            <div
              key={f.id}
              className="lf-progress-dot"
              style={{ background: f.accent, opacity: 0.35 + i * 0.09 }}
            />
          ))}
        </div>
      </div>

      <style>{`
        /* ── Section ─── */
        .lf-section {
          padding: 7rem 0 4rem;
          background: var(--bg-card);
          overflow: hidden;
          position: relative;
        }
        .lf-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background:
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(59,130,246,0.04) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 20% 80%, rgba(16,185,129,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Header ─── */
        .lf-header {
          margin-bottom: 3.5rem;
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .lf-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .lf-header-cta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
          flex-shrink: 0;
        }
        .lf-drag-hint {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-subtle);
          letter-spacing: 0.08em;
        }

        /* ── Horizontal track ─── */
        .lf-track {
          display: flex;
          overflow-x: auto;
          padding: 0.5rem 1.5rem 2rem;
          cursor: grab;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .lf-track::-webkit-scrollbar { display: none; }

        .lf-track-inner {
          display: flex;
          gap: 1.2rem;
          padding: 0 calc((100vw - var(--max-w)) / 2);
        }

        /* ── Feature card ─── */
        .lf-card {
          position: relative;
          width: 340px;
          height: 520px;
          border-radius: 18px;
          overflow: hidden;
          flex-shrink: 0;
          scroll-snap-align: start;
          border: 1px solid var(--border-dim);
          transition:
            opacity 0.6s cubic-bezier(0.16,1,0.3,1),
            transform 0.6s cubic-bezier(0.16,1,0.3,1),
            border-color 0.3s ease,
            box-shadow 0.35s ease;
          user-select: none;
        }
        .lf-card:hover {
          border-color: rgba(255,255,255,0.2);
          box-shadow: 0 28px 65px rgba(0,0,0,0.55);
        }

        /* background image */
        .lf-card-img-wrap {
          position: absolute; inset: 0;
        }
        .lf-card-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.75s cubic-bezier(0.16,1,0.3,1);
          pointer-events: none;
        }
        .lf-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg,
            rgba(10,11,14,0.15) 0%,
            rgba(10,11,14,0.55) 45%,
            rgba(10,11,14,0.92) 100%
          );
        }
        .lf-card-tint {
          position: absolute; inset: 0;
          transition: opacity 0.4s ease;
          mix-blend-mode: screen;
        }

        /* content layer */
        .lf-card-body {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.8rem;
          gap: 0.6rem;
        }

        /* tag */
        .lf-tag {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-subtle);
          position: absolute;
          top: 1.4rem; left: 1.6rem;
        }

        /* stat pill */
        .lf-stat-pill {
          position: absolute;
          top: 1.2rem; right: 1.4rem;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0;
          background: rgba(10,11,14,0.75);
          backdrop-filter: blur(12px);
          border: 1px solid;
          border-radius: 10px;
          padding: 0.55rem 0.9rem;
          text-align: right;
        }
        .lf-stat-pill strong {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.03em;
        }
        .lf-stat-pill span {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-subtle);
        }

        /* title */
        .lf-card-title {
          font-family: var(--font-display);
          font-size: 1.7rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
          line-height: 1.1;
          text-transform: uppercase;
          margin-bottom: 0.2rem;
        }

        /* description */
        .lf-card-desc {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.6;
          transition: opacity 0.35s ease, transform 0.35s ease;
          margin-bottom: 0.4rem;
        }

        /* icon circle — top-right float */
        .lf-icon-circle {
          position: absolute;
          bottom: 1.7rem; right: 1.6rem;
          width: 48px; height: 48px;
          border-radius: 12px;
          border: 1px solid;
          display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(8px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .lf-card:hover .lf-icon-circle {
          transform: translateY(-4px) rotate(-6deg);
          box-shadow: 0 12px 28px color-mix(in srgb, var(--accent) 30%, transparent);
        }

        /* bottom accent bar */
        .lf-bottom-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
        }

        /* ── CTA end card ─── */
        .lf-cta-card {
          background: var(--bg-main);
          border-color: var(--border-medium);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
        }
        .lf-cta-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(40px);
        }
        .lf-orb-1 {
          width: 220px; height: 220px;
          top: -60px; right: -60px;
          background: rgba(59,130,246,0.18);
          animation: lf-orb-drift 6s ease-in-out infinite alternate;
        }
        .lf-orb-2 {
          width: 180px; height: 180px;
          bottom: -40px; left: -40px;
          background: rgba(16,185,129,0.14);
          animation: lf-orb-drift 8s ease-in-out infinite alternate-reverse;
        }
        @keyframes lf-orb-drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(15px, -15px) scale(1.08); }
        }
        .lf-cta-card-inner {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          padding: 2rem;
        }
        .lf-cta-title {
          font-family: var(--font-display);
          font-size: 2.4rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          color: #fff;
          line-height: 1.05;
        }
        .lf-cta-sub {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .lf-cta-btn { width: 100%; justify-content: center; }
        .lf-cta-open {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-subtle);
          letter-spacing: 0.08em;
        }

        /* ── Scroll dots ─── */
        .lf-progress-row {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin-top: 0.5rem;
        }
        .lf-progress-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          transition: transform 0.3s ease;
        }

        /* ── Responsive ─── */
        @media (max-width: 768px) {
          .lf-header-row { flex-direction: column; align-items: flex-start; }
          .lf-header-cta { align-items: flex-start; }
          .lf-card { width: 290px; height: 450px; }
          .lf-track-inner { padding: 0 1rem; }
          .lf-cta-title { font-size: 1.9rem; }
        }
      `}</style>
    </section>
  );
}
