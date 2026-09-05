import React from 'react';
import { Gamepad2, Users, Heart } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--bg-black)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '4.5rem' }}>
          <span className="tag-label">The Hub Concept</span>
          <h2 className="section-heading-large">
            MORE THAN<br />JUST A GAME.
          </h2>
          <p className="section-desc">
            Whether you're here for a quick session, a competitive match with friends or a relaxed family hangout, the gaming hub is built for good times.
          </p>
        </div>

        {/* 2-Column Minimal Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="exp-grid"
        >
          {/* Left: Large Real Photograph */}
          <div className="img-zoom-wrap" style={{ height: '520px' }}>
            <img
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"
              alt="Console Gaming Experience Lounge"
              className="img-zoom"
              loading="lazy"
            />
          </div>

          {/* Right: Three Minimal Feature Blocks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Block 1 */}
            <div style={{ paddingBottom: '2rem', borderBottom: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
                <Gamepad2 size={22} color="var(--text-white)" />
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    color: 'var(--text-white)',
                  }}
                >
                  PS4 + PS5
                </h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                Play your favorite console games in a comfortable gaming environment with ultra-low latency displays and wireless pro controllers.
              </p>
            </div>

            {/* Block 2 */}
            <div style={{ paddingBottom: '2rem', borderBottom: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
                <Users size={22} color="var(--text-white)" />
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    color: 'var(--text-white)',
                  }}
                >
                  WITH YOUR SQUAD
                </h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                Bring your friends and turn every session into a competition. Local multiplayer, head-to-head battles and team campaigns.
              </p>
            </div>

            {/* Block 3 */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
                <Heart size={22} color="var(--text-white)" />
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    color: 'var(--text-white)',
                  }}
                >
                  FAMILY TIME
                </h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                A fun place for families and groups to spend time together with intuitive co-op titles and relaxed lounge seating.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .exp-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
