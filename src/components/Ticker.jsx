import React from 'react';
import { Zap, Sparkles, Trophy, Gamepad2 } from 'lucide-react';

export default function Ticker() {
  const items = [
    { icon: <Zap />, text: 'OPEN DAILY · 10 AM — 10 PM' },
    { icon: <Sparkles />, text: 'HOURLY GAMING FROM ₹99' },
    { icon: <Trophy />, text: 'WEEKLY TOURNAMENTS & FIGHT NIGHTS' },
    { icon: <Gamepad2 />, text: '24 PS5 & PS4 PRO STATIONS' },
    { icon: <Zap />, text: 'COUCH CO-OP & SQUAD BATTLES' },
    { icon: <Sparkles />, text: 'BIRTHDAYS & WHOLE HOUSE EVENTS' },
  ];

  return (
    <section className="ticker" aria-label="Venue updates">
      <div className="ticker-track">
        {items.concat(items).map((item, idx) => (
          <span key={idx}>
            {item.icon} {item.text}
          </span>
        ))}
      </div>
    </section>
  );
}
