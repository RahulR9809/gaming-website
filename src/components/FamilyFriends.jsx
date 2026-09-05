import React from 'react';

export default function FamilyFriends() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#09090b',
      }}
    >
      {/* Real Full-Width High-Resolution Photograph */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2000&q=85"
          alt="Friends and Family Playing Console Games Together"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(0.35) contrast(1.15)',
          }}
          loading="lazy"
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(180deg, #09090b 0%, rgba(9, 9, 11, 0.5) 50%, #09090b 100%)',
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '780px' }}>
          {/* Supporting Mini Labels */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '2rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                padding: '0.35rem 0.9rem',
                border: '1px solid var(--border-light)',
                borderRadius: '2px',
                color: 'var(--text-white)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              }}
            >
              FRIENDS
            </span>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                padding: '0.35rem 0.9rem',
                border: '1px solid var(--border-light)',
                borderRadius: '2px',
                color: 'var(--text-white)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              }}
            >
              FAMILY
            </span>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                padding: '0.35rem 0.9rem',
                border: '1px solid var(--border-light)',
                borderRadius: '2px',
                color: 'var(--text-white)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              }}
            >
              GROUPS
            </span>
          </div>

          {/* Heading Overlay */}
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: 'var(--text-white)',
              marginBottom: '1.5rem',
            }}
          >
            BRING YOUR PEOPLE.
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              color: 'var(--text-offwhite)',
              lineHeight: 1.6,
              maxWidth: '600px',
            }}
          >
            Friends, family, teammates — everyone has a reason to play.
          </p>
        </div>
      </div>
    </section>
  );
}
