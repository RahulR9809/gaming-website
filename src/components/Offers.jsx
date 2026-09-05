import React from 'react';
import { Sparkles, Users2, Clock } from 'lucide-react';

export default function Offers() {
  const offersData = [
    {
      id: 1,
      icon: <Sparkles size={24} color="var(--text-white)" />,
      tag: 'Promotions',
      title: 'SPECIAL OFFERS',
      subtitle: 'Something exciting is always happening.',
      desc: 'Ask our team on-site about seasonal passes, weekly leaderboard perks, and student hours.',
    },
    {
      id: 2,
      icon: <Users2 size={24} color="var(--text-white)" />,
      tag: 'Multiplayer',
      title: 'GROUP SESSIONS',
      subtitle: 'Bring the squad and make it a session to remember.',
      desc: 'Multi-controller setups configured for 2-4 player competitive tournaments and co-op campaigns.',
    },
    {
      id: 3,
      icon: <Clock size={24} color="var(--text-white)" />,
      tag: 'Extended Sessions',
      title: '3+ HOURS',
      subtitle: 'Planning to stay longer?',
      desc: 'Special conditions may apply for gaming-house usage beyond 3 hours. Inquire at the front desk.',
    },
  ];

  return (
    <section id="offers" className="section" style={{ backgroundColor: 'var(--bg-black)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '680px', marginBottom: '4.5rem' }}>
          <span className="tag-label">Offers &amp; Sessions</span>
          <h2 className="section-heading-large">
            MORE TIME.<br />MORE FUN.
          </h2>
          <p className="section-desc">
            Flexible session formats designed to fit everything from a fast lunchtime match to marathon squad showdowns.
          </p>
        </div>

        {/* 3 Clean Editorial Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
          className="offers-grid"
        >
          {offersData.map((item) => (
            <div
              key={item.id}
              className="editorial-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '320px',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                  {item.icon}
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                    {item.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    color: 'var(--text-white)',
                    marginBottom: '0.6rem',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--text-offwhite)',
                    fontWeight: 500,
                    marginBottom: '1rem',
                  }}
                >
                  {item.subtitle}
                </p>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>

              <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)', marginTop: '2rem' }}>
                <a href="#contact" className="btn-link">
                  Learn More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .offers-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
