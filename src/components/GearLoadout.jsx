import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function GearLoadout({ onSelectGear }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const gearItems = [
    {
      index: '01',
      tag: 'PS5',
      type: 'ps5',
      name: 'PlayStation 5',
      spec: '4K / 120 FPS HDR',
      color: 'cyan',
      img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&q=80',
    },
    {
      index: '02',
      tag: 'PS4 PRO',
      type: 'ps4',
      name: 'PlayStation 4 Pro',
      spec: 'Enhanced 4K Gaming',
      color: 'lime',
      img: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80',
    },
    {
      index: '03',
      tag: 'DUALSENSE',
      type: 'ps5',
      name: 'DualSense Edge',
      spec: 'Haptic Feedback Pro',
      color: 'coral',
      img: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=800&q=80',
    },
    {
      index: '04',
      tag: 'SIM RIG',
      type: 'racing',
      name: 'Direct Drive Wheel',
      spec: 'Force Feedback Cockpit',
      color: 'violet',
      img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&q=80',
    },
    {
      index: '05',
      tag: 'OLED',
      type: 'display',
      name: 'Curved 4K OLED',
      spec: '0.03ms Ultra Response',
      color: 'amber',
      img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
    },
    {
      index: '06',
      tag: 'PS VR2',
      type: 'ps5',
      name: 'PlayStation VR2',
      spec: '4K HDR Eye Tracking',
      color: 'cyan',
      img: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?w=800&q=80',
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? gearItems
    : gearItems.filter(item => item.type === activeFilter || item.tag.toLowerCase().includes(activeFilter));

  return (
    <section id="gear" className="content-section section-wrap">
      <div className="section-heading">
        <div>
          <div className="eyebrow">01 / LOADOUT</div>
          <h2>
            YOUR NEXT<br />
            <span>MAIN CHARACTER.</span>
          </h2>
        </div>
        <p>Top-tier hardware, tuned for the win. Pick your poison and settle in.</p>
      </div>

      {/* Filter Row */}
      <div className="filter-row" role="group" aria-label="Filter equipment">
        <button
          className={`filter ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All gear
        </button>
        <button
          className={`filter ${activeFilter === 'ps5' ? 'active' : ''}`}
          onClick={() => setActiveFilter('ps5')}
        >
          PlayStation 5
        </button>
        <button
          className={`filter ${activeFilter === 'ps4' ? 'active' : ''}`}
          onClick={() => setActiveFilter('ps4')}
        >
          PlayStation 4
        </button>
        <button
          className={`filter ${activeFilter === 'racing' ? 'active' : ''}`}
          onClick={() => setActiveFilter('racing')}
        >
          Sim Racing
        </button>
      </div>

      {/* Console Grid */}
      <div className="console-grid">
        {filteredItems.map((gear) => (
          <article
            key={gear.index}
            className={`console-card ${gear.color}`}
            onClick={() => onSelectGear && onSelectGear(gear.name)}
          >
            <div className="card-top">
              <span className="card-index">{gear.index}</span>
              <span className="card-tag">{gear.tag}</span>
            </div>

            <div className="console-visual">
              <img
                src={gear.img}
                alt={gear.name}
                loading="lazy"
              />
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
            </div>

            <div className="card-bottom">
              <div>
                <h3>{gear.name}</h3>
                <p>{gear.spec}</p>
              </div>
              <ArrowUpRight />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
