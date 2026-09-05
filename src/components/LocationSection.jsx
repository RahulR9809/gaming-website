import React from 'react';
import { MapPin, Clock, MessageCircle, Phone, Navigation } from 'lucide-react';

export default function LocationSection() {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Gaming Hub! Can you share directions and current station availability?");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="location" className="section-padding" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Physical Lounge</div>
          <h2 className="section-title">
            FIND YOUR WAY<br />
            <span>TO THE HUB.</span>
          </h2>
          <p className="section-subtitle">
            Walk-ins are always welcome. Connect with us on WhatsApp or drop in for quick console battles and squad hangouts.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'stretch',
          }}
          className="location-grid"
        >
          {/* Info Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="hub-card" style={{ padding: '2rem', backgroundColor: 'var(--bg-main)' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={24} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.4rem' }}>Our Location</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    [Gaming Hub Address Placeholder]<br />
                    Main Boulevard, Entertainment Zone
                  </p>
                </div>
              </div>
            </div>

            <div className="hub-card" style={{ padding: '2rem', backgroundColor: 'var(--bg-main)' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Clock size={24} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.4rem' }}>Opening Hours</h3>
                  <p style={{ color: 'var(--accent-emerald)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                    10:00 AM — 10:00 PM
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Open daily for gaming sessions, birthdays, and squad events.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="btn btn-whatsapp"
              style={{ padding: '1rem', justifyContent: 'center', fontSize: '1rem' }}
            >
              <MessageCircle size={20} /> Get Directions &amp; Chat on WhatsApp
            </button>
          </div>

          {/* Interactive Visual Map Card */}
          <div
            className="hub-card"
            style={{
              backgroundColor: 'var(--bg-main)',
              position: 'relative',
              minHeight: '340px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              padding: '2rem',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, rgba(10, 11, 14, 0.9) 70%)',
              }}
            />

            <div style={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: '#2563eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  margin: '0 auto 1.5rem',
                  boxShadow: '0 0 30px rgba(37, 99, 235, 0.5)',
                }}
              >
                <Navigation size={28} />
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
                GAMING HUB LOUNGE
              </h3>
              <p style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 600 }}>
                ● Open Now · 10 AM — 10 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .location-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
