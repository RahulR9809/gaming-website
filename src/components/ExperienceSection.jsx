import React from 'react';
import { Gamepad, Users2, Tv, HeartHandshake } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      icon: <Gamepad size={24} color="var(--accent-cyan)" />,
      title: 'PS5 Next-Gen Gaming',
      desc: 'Experience buttery-smooth 4K 120Hz gameplay, ray-traced reflections, and immersive DualSense haptic trigger feedback.',
      img: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <Tv size={24} color="var(--accent-blue)" />,
      title: 'PS4 Pro Library',
      desc: 'Access a massive collection of iconic PlayStation 4 titles, split-screen classics, and intense story campaigns.',
      img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <Users2 size={24} color="var(--accent-amber)" />,
      title: 'Squad Multiplayer',
      desc: 'Challenge your friends in local 2 to 4 player face-offs. Battle in EA FC, Mortal Kombat, WWE, or Call of Duty.',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <HeartHandshake size={24} color="var(--accent-emerald)" />,
      title: 'Family & Casual Hangouts',
      desc: 'A safe, modern, and fun entertainment destination where parents, kids, and friend groups enjoy games together.',
      img: 'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">The Setup</div>
          <h2 className="section-title">
            NOT JUST A GAME.<br />
            <span>AN ATMOSPHERE.</span>
          </h2>
          <p className="section-subtitle">
            Engineered from the ground up for maximum visual clarity, acoustic immersion, and seamless social gaming.
          </p>
        </div>

        <div className="cards-grid">
          {experiences.map((item, idx) => (
            <div key={idx} className="hub-card">
              <div className="hub-card-media">
                <img src={item.img} alt={item.title} loading="lazy" />
              </div>
              <div className="hub-card-body">
                <div>
                  <div style={{ marginBottom: '1rem' }}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
