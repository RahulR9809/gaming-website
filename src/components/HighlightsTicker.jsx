import React from 'react';
import { Zap, Sparkles, Trophy, Gamepad2, Users, Heart } from 'lucide-react';

export default function HighlightsTicker() {
  const highlights = [
    { icon: <Gamepad2 size={16} />, text: 'PS5 & PS4 PRO GAMING STATIONS' },
    { icon: <Zap size={16} />, text: 'HOURLY SESSIONS FROM ₹99' },
    { icon: <Trophy size={16} />, text: 'WEEKLY SQUAD TOURNAMENTS' },
    { icon: <Users size={16} />, text: '2 TO 4 PLAYER LOCAL MULTIPLAYER' },
    { icon: <Sparkles size={16} />, text: 'BIRTHDAYS & WHOLE HUB EVENTS' },
    { icon: <Heart size={16} />, text: 'FAMILY FRIENDLY ENVIRONMENT' },
    { icon: <Zap size={16} />, text: '3+ HOURS SPECIAL CONDITIONS' },
  ];

  return (
    <div className="highlights-bar">
      <div className="highlights-track">
        {highlights.concat(highlights).map((item, idx) => (
          <span key={idx}>
            {item.icon} {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
