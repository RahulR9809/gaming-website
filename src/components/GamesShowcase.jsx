import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Star, Users, Zap } from 'lucide-react';

const GAMES = [
  {
    title: 'EA SPORTS FC 25',
    category: 'sports',
    catLabel: 'Football · Sports',
    players: '1 – 4 Players',
    badge: 'Tournament Ready',
    accent: '#10b981',
    img: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80',
    note: "The world's #1 football sim. Play local multiplayer or online leagues.",
  },
  {
    title: 'Grand Theft Auto V',
    category: 'action',
    catLabel: 'Open World · Action',
    players: '1 – 4 Players',
    badge: '4K Enhanced',
    accent: '#f59e0b',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
    note: "Los Santos in 4K. Heists, freedom, chaos — no rules.",
  },
  {
    title: 'Mortal Kombat 1',
    category: 'fighting',
    catLabel: 'Fighting · PvP',
    players: '1v1 PvP',
    badge: 'Ultra Kombat',
    accent: '#ef4444',
    img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
    note: "Brutal head-to-head action with cinematic brutalities.",
  },
  {
    title: 'Gran Turismo 7',
    category: 'racing',
    catLabel: 'Sim Racing · Precision',
    players: '1 – 2 Players',
    badge: 'Force Feedback',
    accent: '#3b82f6',
    img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80',
    note: "The most realistic driving experience on a console.",
  },
  {
    title: "Marvel's Spider-Man 2",
    category: 'action',
    catLabel: 'Action · Adventure',
    players: '1 Player',
    badge: 'Ray Traced',
    accent: '#8b5cf6',
    img: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80',
    note: "Swing through New York in breathtaking PS5 ray tracing.",
  },
  {
    title: 'Call of Duty: Warzone',
    category: 'action',
    catLabel: 'Shooter · Squad',
    players: '1 – 4 Players',
    badge: 'Squad Co-op',
    accent: '#06b6d4',
    img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80',
    note: "Drop in, squad up, and dominate the battle royale.",
  },
  {
    title: 'Tekken 8',
    category: 'fighting',
    catLabel: 'Fighting · Arcade',
    players: '1v1 PvP',
    badge: 'Heat System',
    accent: '#f97316',
    img: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&q=80',
    note: "King of Iron Fist. Precision-based one-on-one combat.",
  },
  {
    title: 'Rocket League',
    category: 'coop',
    catLabel: 'Multiplayer · Party',
    players: '2 – 4 Players',
    badge: 'Couch Party',
    accent: '#ec4899',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    note: "Cars + football = pure chaos. Best played with friends.",
  },
];

const FILTERS = [
  { id: 'all', label: 'All Titles' },
  { id: 'sports', label: 'Sports' },
  { id: 'action', label: 'Action' },
  { id: 'fighting', label: 'Fighting' },
  { id: 'racing', label: 'Racing' },
  { id: 'coop', label: 'Co-op & Party' },
];

// Strip of extra game names for the marquee
const MARQUEE_TITLES = [
  "God of War: Ragnarök", "Horizon Forbidden West", "The Last of Us Part I", "Elden Ring",
  "FIFA 23", "NBA 2K24", "WWE 2K23", "UFC 5", "Uncharted 4", "Ghost of Tsushima",
  "Demon's Souls", "Returnal", "Ratchet & Clank", "Astro's Playroom", "Resident Evil Village",
  "Cyberpunk 2077", "Red Dead Redemption 2", "Days Gone", "Far Cry 6", "Assassin's Creed",
];

function useInView(threshold = 0.15) {
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

export default function GamesShowcase() {
  const [filter, setFilter] = useState('all');
  const [hovered, setHovered] = useState(null);
  const [headerRef, headerVisible] = useInView(0.2);
  const [gridRef, gridVisible] = useInView(0.1);

  const filtered = filter === 'all' ? GAMES : GAMES.filter(g => g.category === filter);

  const handleAskGame = (gameTitle) => {
    const text = encodeURIComponent(`Hi Gaming Hub! I'd like to play "${gameTitle}" — is a station available?`);
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="games" className="section-padding gh-games-section">
      <div className="container">

        {/* ── Section Header ──────────────────── */}
        <div
          ref={headerRef}
          className={`section-header gh-fade-up ${headerVisible ? 'gh-visible' : ''}`}
        >
          <div className="section-badge">
            <Star size={13} /> Game Library
          </div>
          <h2 className="section-title">
            WHAT ARE YOU<br />
            <span>PLAYING TODAY?</span>
          </h2>
          <p className="section-subtitle">
            Handpicked blockbusters across every genre — from sweaty PvP battles and cinematic adventures to couch co-op chaos. A new title drops every season.
          </p>
        </div>

        {/* ── Filter Pills ─────────────────────── */}
        <div
          className={`gh-filters gh-fade-up ${headerVisible ? 'gh-visible' : ''}`}
          style={{ transitionDelay: '0.15s' }}
        >
          {FILTERS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`gh-filter-pill ${filter === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Games Grid ───────────────────────── */}
        <div ref={gridRef} className="gh-game-grid">
          {filtered.map((game, idx) => (
            <article
              key={game.title}
              className={`gh-game-card ${gridVisible ? 'gh-card-visible' : ''}`}
              style={{ transitionDelay: `${idx * 0.07}s` }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image area */}
              <div className="gh-game-img-wrap">
                <img src={game.img} alt={game.title} loading="lazy" className="gh-game-img" />

                {/* Overlay gradient */}
                <div className="gh-game-overlay" />

                {/* Accent shimmer line */}
                <div
                  className="gh-card-shimmer"
                  style={{ background: `linear-gradient(90deg, transparent, ${game.accent}55, transparent)` }}
                />

                {/* Top-right badge */}
                <span className="gh-badge" style={{ color: game.accent, borderColor: `${game.accent}55` }}>
                  {game.badge}
                </span>

                {/* Index number */}
                <span className="gh-index-num">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Body */}
              <div className="gh-game-body">
                <div>
                  <div className="gh-game-meta">
                    <span className="gh-cat-label">{game.catLabel}</span>
                    <span className="gh-dot">·</span>
                    <span className="gh-players"><Users size={11} style={{ display: 'inline', marginRight: 3 }} />{game.players}</span>
                  </div>
                  <h3 className="gh-game-title">{game.title}</h3>
                  <p className="gh-game-note">{game.note}</p>
                </div>

                <button
                  type="button"
                  onClick={() => handleAskGame(game.title)}
                  className="gh-play-btn"
                  style={{ '--btn-accent': game.accent }}
                >
                  <MessageCircle size={15} />
                  Book This Title
                </button>
              </div>

              {/* Bottom accent bar on hover */}
              <div
                className="gh-accent-bar"
                style={{ background: game.accent, opacity: hovered === idx ? 1 : 0 }}
              />
            </article>
          ))}
        </div>

        {/* ── Marquee Strip — extended library ─── */}
        <div className="gh-marquee-wrap">
          <div className="gh-marquee-label">
            <Zap size={13} /> Also available in our library
          </div>
          <div className="gh-marquee-track-outer">
            <div className="gh-marquee-track">
              {[...MARQUEE_TITLES, ...MARQUEE_TITLES].map((t, i) => (
                <span key={i} className="gh-marquee-item">
                  <span className="gh-marquee-dot" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Scoped styles */}
      <style>{`
        /* ── Section background ─── */
        .gh-games-section {
          background: var(--bg-card);
          position: relative;
          overflow: hidden;
        }
        .gh-games-section::before {
          content: '';
          position: absolute;
          top: -200px; right: -200px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Fade-up animation ─── */
        .gh-fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1);
        }
        .gh-fade-up.gh-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Filter pills ─── */
        .gh-filters {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }
        .gh-filter-pill {
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border-dim);
          color: var(--text-subtle);
          padding: 0.48rem 1.1rem;
          border-radius: 9999px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: all 0.22s ease;
        }
        .gh-filter-pill:hover {
          border-color: var(--border-medium);
          color: var(--text-secondary);
        }
        .gh-filter-pill.active {
          background: #ffffff;
          border-color: #ffffff;
          color: #0a0b0e;
        }

        /* ── Game grid ─── */
        .gh-game-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        /* ── Game card ─── */
        .gh-game-card {
          position: relative;
          background: var(--bg-main);
          border: 1px solid var(--border-dim);
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(32px) scale(0.98);
          transition:
            opacity 0.55s cubic-bezier(0.16,1,0.3,1),
            transform 0.55s cubic-bezier(0.16,1,0.3,1),
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }
        .gh-card-visible {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }
        .gh-game-card:hover {
          border-color: rgba(255,255,255,0.22);
          box-shadow: 0 22px 50px rgba(0,0,0,0.55);
          transform: translateY(-6px) scale(1.005) !important;
        }

        /* ── Image ─── */
        .gh-game-img-wrap {
          position: relative;
          height: 195px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .gh-game-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.65s cubic-bezier(0.16,1,0.3,1);
        }
        .gh-game-card:hover .gh-game-img {
          transform: scale(1.08);
        }
        .gh-game-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(10,11,14,0.82) 100%);
        }

        /* shimmer sweep on hover */
        .gh-card-shimmer {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 0s;
        }
        .gh-game-card:hover .gh-card-shimmer {
          animation: gh-shimmer-sweep 0.55s ease forwards;
        }
        @keyframes gh-shimmer-sweep {
          from { transform: translateX(-100%); }
          to   { transform: translateX(100%); }
        }

        /* ── Badge ─── */
        .gh-badge {
          position: absolute;
          top: 0.9rem; right: 0.9rem;
          background: rgba(10,11,14,0.8);
          backdrop-filter: blur(10px);
          border: 1px solid;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 0.2rem 0.55rem;
          text-transform: uppercase;
        }

        /* ── Index number ─── */
        .gh-index-num {
          position: absolute;
          bottom: 0.75rem; left: 1rem;
          font-family: var(--font-display);
          font-size: 2.4rem;
          font-weight: 800;
          color: rgba(255,255,255,0.07);
          line-height: 1;
          letter-spacing: -0.04em;
          pointer-events: none;
          transition: color 0.3s ease;
        }
        .gh-game-card:hover .gh-index-num {
          color: rgba(255,255,255,0.15);
        }

        /* ── Body ─── */
        .gh-game-body {
          padding: 1.4rem 1.5rem 1.6rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.2rem;
        }
        .gh-game-meta {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.4rem;
        }
        .gh-cat-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--text-subtle);
        }
        .gh-dot { color: var(--border-medium); font-size: 0.8rem; }
        .gh-players {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-subtle);
        }
        .gh-game-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }
        .gh-game-note {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.55;
        }

        /* ── Play button ─── */
        .gh-play-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          width: 100%;
          justify-content: center;
          padding: 0.68rem 1rem;
          border-radius: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-medium);
          color: var(--text-secondary);
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .gh-play-btn:hover {
          background: var(--btn-accent, #fff);
          border-color: var(--btn-accent, #fff);
          color: #ffffff;
          box-shadow: 0 8px 24px color-mix(in srgb, var(--btn-accent, #fff) 35%, transparent);
          transform: translateY(-2px);
        }

        /* ── Accent bar ─── */
        .gh-accent-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          transition: opacity 0.3s ease;
        }

        /* ── Marquee ─── */
        .gh-marquee-wrap {
          border-top: 1px solid var(--border-dim);
          padding-top: 2.5rem;
        }
        .gh-marquee-label {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-subtle);
          margin-bottom: 1.2rem;
        }
        .gh-marquee-track-outer {
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }
        .gh-marquee-track {
          display: flex;
          gap: 0;
          width: max-content;
          animation: gh-marquee 35s linear infinite;
        }
        .gh-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes gh-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .gh-marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0 2.2rem;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-muted);
          white-space: nowrap;
          transition: color 0.2s ease;
        }
        .gh-marquee-item:hover { color: #ffffff; }
        .gh-marquee-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--border-medium);
          flex-shrink: 0;
        }

        /* Responsive */
        @media (max-width: 640px) {
          .gh-game-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
