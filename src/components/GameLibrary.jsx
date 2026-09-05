import React from 'react';
import { Play, ArrowUpRight } from 'lucide-react';

export default function GameLibrary({ onSelectGame }) {
  const games = [
    {
      mark: 'FC25',
      title: 'EA SPORTS FC 25',
      cat: 'SPORTS · 1–4 PLAYERS',
      img: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80',
    },
    {
      mark: 'GTA',
      title: 'Grand Theft Auto V',
      cat: 'OPEN WORLD · 1–4 PLAYERS',
      img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
    },
    {
      mark: 'COD',
      title: 'Call of Duty: Warzone',
      cat: 'SHOOTER · 1–4 PLAYERS',
      img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80',
    },
    {
      mark: 'MK1',
      title: 'Mortal Kombat 1',
      cat: 'FIGHTING · 1–2 PLAYERS',
      img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
    },
    {
      mark: 'GT7',
      title: 'Gran Turismo 7',
      cat: 'SIM RACING · 1–2 PLAYERS',
      img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80',
    },
    {
      mark: 'SPM2',
      title: "Marvel's Spider-Man 2",
      cat: 'ACTION · 1 PLAYER',
      img: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80',
    },
  ];

  const handleFullLibrary = () => {
    const text = encodeURIComponent("Hi Game Room! Can you send me the complete list of available PS4 and PS5 games?");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="games" className="content-section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">02 / THE LIBRARY</div>
            <h2>
              ALL KILLER.<br />
              <span>NO FILLER.</span>
            </h2>
          </div>
          <p>From button-mashers to 80-hour epics, the shelf is stacked with your next obsession.</p>
        </div>

        {/* Games Grid */}
        <div className="games-grid">
          {games.map((game, idx) => (
            <article
              key={idx}
              className="game-card"
              onClick={() => onSelectGame && onSelectGame(game.title)}
            >
              <img
                src={game.img}
                alt={game.title}
                loading="lazy"
              />
              <div className="game-mark">{game.mark}</div>

              <div className="game-overlay">
                <span>0{idx + 1}</span>
                <Play fill="currentColor" />
              </div>

              <div className="game-info">
                <h3>{game.title}</h3>
                <p>{game.cat}</p>
              </div>
            </article>
          ))}
        </div>

        <button type="button" onClick={handleFullLibrary} className="view-all">
          Ask for full game library <ArrowUpRight size={18} />
        </button>
      </div>
    </section>
  );
}
