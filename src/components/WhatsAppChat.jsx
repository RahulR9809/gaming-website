import React, { useState } from 'react';
import { MessageCircle, X, Send, Gamepad2, Calendar, Clock, Users } from 'lucide-react';

export default function WhatsAppChat({ isOpen, onClose }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const showModal = isOpen !== undefined ? isOpen : internalOpen;

  const [consoleType, setConsoleType] = useState('PlayStation 5');
  const [players, setPlayers] = useState('2 Players');
  const [duration, setDuration] = useState('1 Hour');
  const [note, setNote] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    let msg = `🎮 *GAME//ROOM BOOKING REQUEST*\n\n`;
    msg += `🕹️ *Console:* ${consoleType}\n`;
    msg += `👥 *Players:* ${players}\n`;
    msg += `⏱️ *Duration:* ${duration}\n`;
    if (note) msg += `📝 *Note:* ${note}\n`;
    msg += `\n_Please confirm available station slot._`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919876543210?text=${encoded}`, '_blank');
    if (onClose) onClose();
    else setInternalOpen(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        type="button"
        onClick={() => {
          if (onClose && isOpen) onClose();
          else setInternalOpen(!internalOpen);
        }}
        className="whatsapp-float-btn"
        aria-label="Chat on WhatsApp"
        title="Instant WhatsApp Booking"
      >
        <MessageCircle size={28} />
        <span className="whatsapp-ping" />
      </button>

      {/* Interactive WhatsApp Booking Modal Popup */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(5, 6, 10, 0.8)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '1.5rem',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              if (onClose) onClose();
              else setInternalOpen(false);
            }
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-light)',
              borderRadius: '12px',
              padding: '2rem',
              width: '100%',
              maxWidth: '480px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
              position: 'relative',
            }}
          >
            {/* Close */}
            <button
              onClick={() => {
                if (onClose) onClose();
                else setInternalOpen(false);
              }}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#25d366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <MessageCircle size={22} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>
                  Quick WhatsApp Booking
                </h3>
                <p style={{ color: 'var(--accent-lime)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                  ● Instant Response · 10 AM — 10 PM
                </p>
              </div>
            </div>

            <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Select Console
                </label>
                <select
                  value={consoleType}
                  onChange={(e) => setConsoleType(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    padding: '0.75rem 1rem',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                >
                  <option value="PlayStation 5">PlayStation 5 (4K 120Hz)</option>
                  <option value="PlayStation 4 Pro">PlayStation 4 Pro</option>
                  <option value="Direct Drive Sim Rig">Direct Drive Racing Sim</option>
                  <option value="Whole House / Party">Whole House Event / Birthday</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Players
                  </label>
                  <select
                    value={players}
                    onChange={(e) => setPlayers(e.target.value)}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-color)',
                      color: '#fff',
                      padding: '0.75rem 1rem',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  >
                    <option value="1 Solo Player">1 Player (Solo)</option>
                    <option value="2 Players (1v1)">2 Players (1v1)</option>
                    <option value="3-4 Players Squad">3-4 Players (Squad)</option>
                    <option value="5+ Group / Party">5+ Group / Party</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Duration
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-color)',
                      color: '#fff',
                      padding: '0.75rem 1rem',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  >
                    <option value="1 Hour (from ₹99)">1 Hour (from ₹99)</option>
                    <option value="2 Hours">2 Hours</option>
                    <option value="3+ Hours (Special Offer)">3+ Hours (Special Deal)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  Preferred Time / Special Request
                </label>
                <input
                  type="text"
                  placeholder="e.g. Today 6:00 PM for EA FC 25"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    padding: '0.75rem 1rem',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-hero-primary btn-hero-whatsapp"
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '0.9rem' }}
              >
                <Send size={16} /> Open &amp; Confirm on WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
