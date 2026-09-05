import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function TheSpace() {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Game Room! I'm interested in booking the space for a birthday party / group event / whole-house booking.");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="space" className="content-section section-wrap">
      <div className="space-section">
        {/* Left Space Photography */}
        <div className="space-photo">
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
            alt="The Lounge and Gaming Room Space"
            loading="lazy"
          />
        </div>

        {/* Right Copy */}
        <div className="space-copy">
          <div className="eyebrow">04 / THE ROOM</div>
          <h2>
            MORE THAN<br />
            <span>A SETUP.</span>
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: '1.5rem 0', lineHeight: 1.6 }}>
            Come for the hardware. Stay for the energy. GAME//ROOM is a social entertainment space for solo grinders, competitive squads, family hangouts, and unforgettable birthday parties.
          </p>

          <div className="feature-list">
            <span><strong>01</strong> Private Booths</span>
            <span><strong>02</strong> 4K Projector Arena</span>
            <span><strong>03</strong> Birthday Celebrations</span>
            <span><strong>04</strong> 3+ Hour VIP Bookings</span>
          </div>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="text-link"
            style={{ fontSize: '1rem', marginTop: '1rem' }}
          >
            Plan an event or party on WhatsApp <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
