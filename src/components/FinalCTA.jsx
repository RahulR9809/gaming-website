import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#09090b',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      {/* Real Gaming Setup Background */}
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
          src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=2000&q=85"
          alt="PlayStation 5 Controller Close-up Setup"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(0.3) contrast(1.1)',
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
            background: 'linear-gradient(180deg, #09090b 0%, rgba(9, 9, 11, 0.6) 50%, #09090b 100%)',
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', padding: '6rem 2rem' }}>
        <span className="tag-label">The Next Session</span>
        
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            color: 'var(--text-white)',
            marginBottom: '1.5rem',
          }}
        >
          READY TO PLAY?
        </h2>

        <p
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            marginBottom: '3rem',
          }}
        >
          Bring your squad. Pick your game. Let the session begin.
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <a href="#contact" className="btn btn-primary" style={{ padding: '1.2rem 2.6rem' }}>
            VISIT THE HUB <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn btn-outline" style={{ padding: '1.2rem 2.4rem' }}>
            <MessageSquare size={16} /> GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
}
