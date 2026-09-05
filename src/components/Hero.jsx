import React, { useEffect, useState } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const STATS = [
  { val: '₹99', sup: '+', lbl: 'Per Hour' },
  { val: 'PS4', lbl: '& PS5 Ready' },
  { val: '10AM', lbl: '– 10PM Daily' },
  { val: '3HR+', lbl: 'Special Deals' },
];

export default function Hero() {
  const [ready, setReady] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 40 });

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - left) / width) * 100);
    const y = Math.round(((e.clientY - top) / height) * 100);
    setMousePos({ x, y });
  };

  const wa = () => {
    const msg = encodeURIComponent("Hi Gaming Hub! I'd like to check availability and visit.");
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
  };

  return (
    <section id="top" className="hero" onMouseMove={handleMouseMove}>

      {/* ── Background ──────────────────────────── */}
      <div className="hero__bg">
        {/* Gameplay video background */}
        <video
          className="hero__bg-video"
          src="/videos/hero-gameplay.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1800&q=90"
        />
        {/* Dark overlay to preserve readability */}
        <div className="hero__bg-overlay" />
        {/* Deep dark vignette so text always reads */}
        <div className="hero__vignette" />
        {/* Dynamic interactive spotlight */}
        <div
          className="hero__spotlight"
          style={{
            background: `radial-gradient(circle 550px at ${mousePos.x}% ${mousePos.y}%, rgba(59, 130, 246, 0.16), transparent 70%)`
          }}
        />
        {/* Bottom fade to site bg */}
        <div className="hero__fade-bottom" />
        {/* Subtle top fade */}
        <div className="hero__fade-top" />
        {/* Ambient coloured glow blobs */}
        <div className="hero__blob hero__blob--blue" />
        <div className="hero__blob hero__blob--purple" />

        {/* Floating dust particles */}
        <div className="hero__particles">
          {[...Array(6)].map((_, i) => (
            <span key={i} className={`hero__particle hero__particle--${i + 1}`} />
          ))}
        </div>
      </div>

      {/* ── Content ─────────────────────────────── */}
      <div className="hero__body">

        {/* Status pill */}
        <div className={`hero__pill ${ready ? 'hero__pill--in' : ''}`}>
          <span className="hero__dot" />
          Open Every Day &nbsp;·&nbsp; 10 AM – 10 PM
        </div>

        {/* Main headline — sleek, modern, balanced */}
        <h1 className="hero__h1">
          <span className={`hero__line hero__line--eyebrow ${ready ? 'hero__line--in' : ''}`}>
            The Ultimate
          </span>
          <span className={`hero__line hero__line--main ${ready ? 'hero__line--in' : ''}`}>
            Gaming Lounge<span className="hero__accent">.</span>
          </span>
        </h1>

        {/* Sub-copy */}
        <p className={`hero__sub ${ready ? 'hero__sub--in' : ''}`}>
          PS4 &amp; PS5 lounge — hourly sessions, squad battles, birthday parties &amp; private bookings.
          <br />
          <strong>Starting at ₹99.</strong>
        </p>

        {/* CTAs */}
        <div className={`hero__ctas ${ready ? 'hero__ctas--in' : ''}`}>
          <button type="button" onClick={wa} className="hero__btn hero__btn--wa">
            <MessageCircle size={18} />
            Book on WhatsApp
          </button>
          <a href="#experience" className="hero__btn hero__btn--ghost">
            Explore
            <ArrowRight size={17} />
          </a>
        </div>

        {/* Stats strip */}
        <div className={`hero__stats ${ready ? 'hero__stats--in' : ''}`}>
          {STATS.map((s, i) => (
            <div key={i} className="hero__stat">
              <strong>
                {s.val}
                {s.sup && <sup>{s.sup}</sup>}
              </strong>
              <span>{s.lbl}</span>
            </div>
          ))}
        </div>

      </div>

      {/* ── Scroll cue ──────────────────────────── */}
      <div className="hero__scroll-cue">
        <div className="hero__scroll-line" />
      </div>

      {/* ── Scoped CSS ──────────────────────────── */}
      <style>{`
        /* ─── Root ───────────────────────────── */
        .hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: var(--nav-h);
        }

        /* ─── Background layers ──────────────── */
        .hero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero__bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          transform: scale(1.04);
          transition: transform 10s ease;
        }
        .hero:hover .hero__bg-video {
          transform: scale(1.07);
        }

        /* Semi-opaque overlay so video doesn't overpower text */
        .hero__bg-overlay {
          position: absolute;
          inset: 0;
          background: rgba(8, 9, 12, 0.62);
        }

        /* Dense centre-to-edge vignette */
        .hero__vignette {
          position: absolute; inset: 0;
          background: radial-gradient(
            ellipse 90% 90% at 50% 50%,
            rgba(10,11,14,0.15) 0%,
            rgba(10,11,14,0.78) 70%,
            rgba(10,11,14,0.96) 100%
          );
        }

        /* Bottom solid fade into site background */
        .hero__fade-bottom {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 280px;
          background: linear-gradient(to bottom, transparent 0%, var(--bg-main) 100%);
        }

        /* Subtle top shade */
        .hero__fade-top {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 160px;
          background: linear-gradient(to top, transparent 0%, rgba(10,11,14,0.6) 100%);
        }

        /* Coloured ambient blobs */
        .hero__blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          opacity: 0.55;
          animation: blob-drift 10s ease-in-out infinite alternate;
        }
        .hero__blob--blue {
          width: 600px; height: 600px;
          top: -100px; left: -100px;
          background: rgba(37, 99, 235, 0.18);
          animation-delay: 0s;
        }
        .hero__blob--purple {
          width: 500px; height: 500px;
          bottom: -80px; right: -80px;
          background: rgba(124, 58, 237, 0.14);
          animation-delay: -5s;
        }
        @keyframes blob-drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(30px, -30px) scale(1.08); }
        }

        /* Dynamic interactive spotlight */
        .hero__spotlight {
          position: absolute;
          inset: 0;
          pointer-events: none;
          transition: background 0.25s ease-out;
          mix-blend-mode: screen;
        }

        /* Ambient floating particles */
        .hero__particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }
        .hero__particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(147, 197, 253, 0.45);
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
          animation: float-particle linear infinite;
        }
        .hero__particle--1 { width: 4px; height: 4px; left: 18%; bottom: -10px; animation-duration: 11s; animation-delay: 0s; }
        .hero__particle--2 { width: 3px; height: 3px; left: 32%; bottom: -10px; animation-duration: 14s; animation-delay: 2s; }
        .hero__particle--3 { width: 5px; height: 5px; left: 52%; bottom: -10px; animation-duration: 10s; animation-delay: 4.5s; }
        .hero__particle--4 { width: 3px; height: 3px; left: 68%; bottom: -10px; animation-duration: 15s; animation-delay: 1.5s; }
        .hero__particle--5 { width: 4px; height: 4px; left: 84%; bottom: -10px; animation-duration: 12s; animation-delay: 3s; }
        .hero__particle--6 { width: 2px; height: 2px; left: 24%; bottom: -10px; animation-duration: 16s; animation-delay: 6s; }

        @keyframes float-particle {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          15% { opacity: 0.75; }
          85% { opacity: 0.55; }
          100% { transform: translateY(-105vh) scale(1.2); opacity: 0; }
        }

        /* ─── Content ────────────────────────── */
        .hero__body {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 4rem 1.5rem 5rem;
          width: 100%;
          max-width: 820px;
          margin: 0 auto;
        }

        /* ─── Status pill ────────────────────── */
        .hero__pill {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.42rem 1.05rem;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 9999px;
          font-family: var(--font-mono);
          font-size: 0.74rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.62);
          margin-bottom: 1.4rem;
          /* entrance */
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .hero__pill--in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .hero__dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #22c55e;
          flex-shrink: 0;
          box-shadow: 0 0 0 0 rgba(34,197,94,0.6);
          animation: pulse-dot 2.4s ease infinite;
        }
        @keyframes pulse-dot {
          0%   { box-shadow: 0 0 0 0 rgba(34,197,94,0.6); }
          70%  { box-shadow: 0 0 0 9px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }

        /* ─── Headline ───────────────────────── */
        .hero__h1 {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: var(--font-display);
          letter-spacing: -0.03em;
          margin-bottom: 1.4rem;
          gap: 0.2rem;
        }

        /* Each line animates individually */
        .hero__line {
          display: block;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero__line--in { opacity: 1 !important; transform: translateY(0) !important; }

        @keyframes title-shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 250% 0; }
        }

        .hero__line--eyebrow {
          font-size: clamp(0.97rem, 1.85vw, 1.33rem);
          font-weight: 700;
          color: rgba(255,255,255,0.48);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition-delay: 0.05s;
        }
        .hero__line--main {
          font-size: clamp(2.46rem, 5.3vw, 4.4rem);
          font-weight: 800;
          line-height: 1.06;
          text-transform: uppercase;
          letter-spacing: -0.03em;
          transition-delay: 0.15s;
          background: linear-gradient(
            110deg,
            #ffffff 0%,
            #ffffff 38%,
            #93c5fd 48%,
            #dbeafe 52%,
            #ffffff 62%,
            #ffffff 100%
          );
          background-size: 240% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: title-shimmer 7s ease-in-out infinite;
          filter: drop-shadow(0 2px 24px rgba(59,130,246,0.22));
        }

        .hero__accent { color: #3b82f6; }

        /* ─── Sub-copy ───────────────────────── */
        .hero__sub {
          color: rgba(255,255,255,0.52);
          font-size: clamp(0.97rem, 1.23vw, 1.07rem);
          line-height: 1.65;
          max-width: 530px;
          margin-bottom: 2rem;
          /* entrance */
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.65s ease 0.3s, transform 0.65s ease 0.3s;
        }
        .hero__sub--in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .hero__sub strong { color: rgba(255,255,255,0.92); font-weight: 600; }

        /* ─── CTAs ───────────────────────────── */
        .hero__ctas {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 2.8rem;
          /* entrance */
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.65s ease 0.42s, transform 0.65s ease 0.42s;
        }
        .hero__ctas--in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .hero__btn {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.88rem 1.85rem;
          border-radius: 10px;
          font-family: var(--font-body);
          font-size: 0.94rem;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
          white-space: nowrap;
        }

        .hero__btn--wa {
          background: #25d366;
          color: #fff;
          border: none;
          box-shadow: 0 8px 28px rgba(37,211,102,0.38);
        }
        .hero__btn--wa:hover {
          background: #20ba5a;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 16px 40px rgba(37,211,102,0.5);
        }

        .hero__btn--ghost {
          background: rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.75);
          border: 1px solid rgba(255,255,255,0.15);
        }
        .hero__btn--ghost:hover {
          background: rgba(255,255,255,0.13);
          border-color: rgba(255,255,255,0.32);
          color: #fff;
          transform: translateY(-3px);
        }

        /* ─── Stats strip ────────────────────── */
        .hero__stats {
          display: flex;
          align-items: center;
          gap: 0;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(12px);
          overflow: hidden;
          /* entrance */
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.65s ease 0.7s, transform 0.65s ease 0.7s;
        }
        .hero__stats--in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .hero__stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.85rem 1.3rem;
          position: relative;
        }
        .hero__stat + .hero__stat::before {
          content: '';
          position: absolute;
          left: 0; top: 20%; bottom: 20%;
          width: 1px;
          background: rgba(255,255,255,0.08);
        }

        .hero__stat strong {
          font-family: var(--font-display);
          font-size: clamp(1.23rem, 2.05vw, 1.58rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          letter-spacing: -0.03em;
        }
        .hero__stat strong sup {
          font-size: 0.6em;
          font-weight: 700;
          vertical-align: super;
        }
        .hero__stat span {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 600;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 0.25rem;
        }

        /* ─── Scroll cue ─────────────────────── */
        .hero__scroll-cue {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero__scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
          animation: scroll-line 2s ease-in-out infinite;
          transform-origin: top;
        }
        @keyframes scroll-line {
          0%   { transform: scaleY(0); opacity: 1; }
          100% { transform: scaleY(1); opacity: 0; }
        }

        /* ─── Responsive ─────────────────────── */
        @media (max-width: 640px) {
          .hero__body { padding: 3rem 1.2rem 6rem; }
          .hero__ctas { flex-direction: column; align-items: stretch; }
          .hero__btn { justify-content: center; }
          .hero__stats { flex-direction: column; border-radius: 12px; }
          .hero__stat + .hero__stat::before {
            top: 0; bottom: auto;
            left: 15%; right: 15%;
            width: auto; height: 1px;
          }
          .hero__stat { padding: 1rem 1.2rem; }
        }
      `}</style>
    </section>
  );
}
