import React from 'react';
import { ArrowRight, Cake, Trophy, Sparkles } from 'lucide-react';

export default function BirthdayParties() {
  return (
    <section id="parties" className="section" style={{ backgroundColor: 'var(--bg-black)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: '4.5rem',
            alignItems: 'center',
          }}
          className="birthday-grid"
        >
          {/* Content Side */}
          <div>
            <span className="tag-label">Celebrations</span>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '0.8rem',
              }}
            >
              MAKE YOUR BIRTHDAY DIFFERENT.
            </div>

            <h2
              className="section-heading-large"
              style={{ marginBottom: '1.8rem' }}
            >
              YOUR PARTY.<br />YOUR GAMES.
            </h2>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
              }}
            >
              Celebrate with your friends, play your favorite games and turn your birthday into an experience everyone remembers.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Cake size={20} color="var(--text-white)" />
                <span style={{ color: 'var(--text-offwhite)', fontSize: '1rem', fontWeight: 500 }}>
                  Dedicated lounge zones for birthday squads
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Trophy size={20} color="var(--text-white)" />
                <span style={{ color: 'var(--text-offwhite)', fontSize: '1rem', fontWeight: 500 }}>
                  Custom multiplayer tournaments and scoreboards
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Sparkles size={20} color="var(--text-white)" />
                <span style={{ color: 'var(--text-offwhite)', fontSize: '1rem', fontWeight: 500 }}>
                  Full console access for casual &amp; competitive play
                </span>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">
              PLAN A GAMING PARTY <ArrowRight size={16} />
            </a>
          </div>

          {/* Real Photo Side */}
          <div className="img-zoom-wrap" style={{ height: '540px' }}>
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
              alt="Birthday Party Gathering at Gaming Lounge"
              className="img-zoom"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .birthday-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
