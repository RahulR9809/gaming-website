import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

export default function OpeningHours() {
  return (
    <section
      className="section"
      style={{
        backgroundColor: 'var(--bg-black)',
        textAlign: 'center',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container" style={{ maxWidth: '750px' }}>
        <span className="tag-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <Clock size={14} /> COME PLAY
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            color: 'var(--text-white)',
            lineHeight: 1,
            margin: '1.5rem 0',
          }}
        >
          10 AM — 10 PM
        </h2>

        <p
          style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            marginBottom: '2.5rem',
          }}
        >
          Open from 10 AM to 10 PM.
        </p>

        <div>
          <a href="#contact" className="btn btn-primary" style={{ padding: '1.1rem 2.4rem' }}>
            PLAN YOUR VISIT <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
