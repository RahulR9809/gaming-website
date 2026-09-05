import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function SimRacing({ onSelectGear }) {
  const simHardware = [
    {
      index: '01',
      tag: 'STEERING',
      name: 'Direct Drive Wheel',
      spec: '15Nm Force Feedback',
      color: 'cyan',
      img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&q=80',
    },
    {
      index: '02',
      tag: 'BRAKE',
      name: 'Load Cell Pedals',
      spec: 'Gas + Brake + Clutch',
      color: 'lime',
      img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
    },
    {
      index: '03',
      tag: 'H-PATTERN',
      name: 'Gear Shifter',
      spec: '6-Speed Manual + Sequential',
      color: 'violet',
      img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80',
    },
    {
      index: '04',
      tag: 'E-BRAKE',
      name: 'Rally Handbrake',
      spec: 'Hydraulic Drift Sensor',
      color: 'coral',
      img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
    },
  ];

  return (
    <section id="racing" className="content-section section-wrap">
      <div className="section-heading">
        <div>
          <div className="eyebrow">03 / SIM RACING</div>
          <h2>
            RACE LIKE<br />
            <span>A PRO.</span>
          </h2>
        </div>
        <p>Professional simulator hardware for the most realistic racing experience. Steering wheel, pedals, shifter, and more.</p>
      </div>

      <div className="console-grid">
        {simHardware.map((item) => (
          <article
            key={item.index}
            className={`console-card ${item.color}`}
            onClick={() => onSelectGear && onSelectGear(item.name)}
          >
            <div className="card-top">
              <span className="card-index">{item.index}</span>
              <span className="card-tag">{item.tag}</span>
            </div>

            <div className="console-visual">
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
              />
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
            </div>

            <div className="card-bottom">
              <div>
                <h3>{item.name}</h3>
                <p>{item.spec}</p>
              </div>
              <ArrowUpRight />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
