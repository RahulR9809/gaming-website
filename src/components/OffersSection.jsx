import React from 'react';
import { MessageCircle, Check, Zap, Sparkles, Clock, ShieldCheck } from 'lucide-react';

export default function OffersSection() {
  const perks = [
    'PS4 & PS5 high-performance stations',
    'Full access to all available game titles',
    'Single & multiplayer wireless controller setups',
    'Low-latency ultra-clear 4K gaming displays',
    'Special conditions for sessions 3 hours & above',
    'Private gaming-house hire & birthday party options',
  ];

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Gaming Hub! I'd like to book a session starting at ₹99/hour.");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="offers" className="section-padding offers-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Zap size={13} /> Transparent Pricing
          </div>
          <h2 className="section-title">
            PLAY BY THE HOUR.<br />
            <span>NO HIDDEN FEES.</span>
          </h2>
          <p className="section-subtitle">
            One flat, straightforward rate for everyone. Walk in and start playing from ₹99.
          </p>
        </div>

        {/* Single Premium Pricing Card */}
        <div className="single-card-wrap">
          <div className="pricing-card">
            {/* Top decorative glow */}
            <div className="card-glow" />

            <div className="card-top">
              <div className="card-badge">
                <Sparkles size={13} /> ALL-INCLUSIVE GAMING
              </div>
              <h3 className="card-heading">Start at ₹99</h3>
              <p className="card-sub">
                Hourly gaming for PS4 &amp; PS5 consoles with open game selection and multiplayer support.
              </p>
            </div>

            <div className="price-tag-wrap">
              <div className="price-amount">
                <span className="price-curr">₹</span>
                <span className="price-num">99</span>
              </div>
              <div className="price-meta">
                <span className="price-unit">/ person · per hour</span>
                <span className="price-note">Starting rate across PS4 &amp; PS5</span>
              </div>
            </div>

            {/* Feature List */}
            <div className="perks-grid">
              {perks.map((perk, idx) => (
                <div key={idx} className="perk-item">
                  <div className="perk-check">
                    <Check size={14} />
                  </div>
                  <span className="perk-text">{perk}</span>
                </div>
              ))}
            </div>

            {/* Special Conditions Callout */}
            <div className="card-note-box">
              <div className="note-left">
                <Clock size={16} />
                <span>3+ Hours Marathon Session?</span>
              </div>
              <p className="note-body">
                Extended playtime, full private house hire, and group events qualify for custom pricing and special conditions.
              </p>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={handleWhatsApp}
              className="btn btn-whatsapp card-cta"
            >
              <MessageCircle size={18} /> Book Your Station via WhatsApp
            </button>
          </div>
        </div>

        <p className="offers-footer-note">
          *Open every day from 10 AM to 10 PM. Walk-ins welcome or pre-book your spot via WhatsApp.
        </p>
      </div>

      <style>{`
        .offers-section {
          background: var(--bg-main);
          position: relative;
        }

        .single-card-wrap {
          max-width: 680px;
          margin: 0 auto;
        }

        .pricing-card {
          position: relative;
          background: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: 24px;
          padding: 3rem 2.8rem;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(0,0,0,0.55);
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }

        .pricing-card:hover {
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 40px 100px rgba(0,0,0,0.65), 0 0 40px rgba(59, 130, 246, 0.12);
        }

        .card-glow {
          position: absolute;
          top: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 380px;
          height: 240px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .card-top {
          text-align: center;
          margin-bottom: 2rem;
        }

        .card-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.35rem 0.95rem;
          background: rgba(59, 130, 246, 0.12);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 9999px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: #60a5fa;
          letter-spacing: 0.08em;
          margin-bottom: 1.2rem;
        }

        .card-heading {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3vw, 2.3rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        .card-sub {
          color: var(--text-muted);
          font-size: 0.95rem;
          max-width: 460px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .price-tag-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          padding: 1.5rem 2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-dim);
          border-radius: 16px;
          margin-bottom: 2.2rem;
        }

        .price-amount {
          display: flex;
          align-items: baseline;
        }

        .price-curr {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          margin-right: 0.15rem;
        }

        .price-num {
          font-family: var(--font-display);
          font-size: clamp(3.2rem, 5vw, 4.2rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .price-meta {
          display: flex;
          flex-direction: column;
          border-left: 1px solid var(--border-dim);
          padding-left: 1.2rem;
        }

        .price-unit {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .price-note {
          font-size: 0.8rem;
          color: var(--text-subtle);
          margin-top: 0.2rem;
        }

        .perks-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem 1.5rem;
          margin-bottom: 2rem;
        }

        .perk-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
        }

        .perk-check {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .perk-text {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .card-note-box {
          background: rgba(245, 158, 11, 0.06);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 12px;
          padding: 1rem 1.2rem;
          margin-bottom: 2rem;
        }

        .note-left {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: #f59e0b;
          letter-spacing: 0.04em;
          margin-bottom: 0.3rem;
        }

        .note-body {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .card-cta {
          width: 100%;
          justify-content: center;
          padding: 1rem 2rem;
          font-size: 1rem;
        }

        .offers-footer-note {
          text-align: center;
          color: var(--text-subtle);
          font-size: 0.82rem;
          margin-top: 2.5rem;
        }

        @media (max-width: 640px) {
          .pricing-card {
            padding: 2rem 1.5rem;
          }
          .price-tag-wrap {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
          .price-meta {
            border-left: none;
            padding-left: 0;
            border-top: 1px solid var(--border-dim);
            padding-top: 0.5rem;
          }
          .perks-grid {
            grid-template-columns: 1fr;
            gap: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}

