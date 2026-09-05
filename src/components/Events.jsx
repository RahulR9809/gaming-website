import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Events() {
  const events = [
    {
      date: '28',
      month: 'SEP',
      day: 'SAT',
      type: 'TOURNAMENT · 7:00 PM',
      title: 'EA FC 25 Weekend Cup',
      desc: '1v1 Double elimination bracket. Cash prize pool + free gaming hours.',
    },
    {
      date: '05',
      month: 'OCT',
      day: 'SAT',
      type: 'FIGHT NIGHT · 8:00 PM',
      title: 'Tekken 8 & Mortal Kombat 1',
      desc: 'Best of 3 matches. Free entry for spectators & walk-in challengers.',
    },
  ];

  const handleRegister = (eventTitle) => {
    const text = encodeURIComponent(`Hi Game Room! I want to register for the "${eventTitle}" event.`);
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="events" className="content-section">
      <div className="section-wrap">
        <div className="eyebrow">05 / UPCOMING</div>
        
        <div className="section-heading">
          <div>
            <h2>
              THE WEEKLY<br />
              <span>GRIND.</span>
            </h2>
          </div>
          <p>Compete in weekly tournaments, test your skills, and earn prizes.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {events.map((ev, idx) => (
            <div key={idx} className="event-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }}>
                <div className="event-date">
                  <strong>{ev.date}</strong>
                  <span>{ev.month}<br />{ev.day}</span>
                </div>

                <div>
                  <p className="event-type">{ev.type}</p>
                  <h3>{ev.title}</h3>
                  <p>{ev.desc}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleRegister(ev.title)}
                className="event-btn"
                title="Register on WhatsApp"
              >
                <ArrowUpRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
