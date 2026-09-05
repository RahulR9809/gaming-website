import React from 'react';

export default function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Main Gaming Arena and Lounge Setups',
      span: 'span-2',
      caption: 'Main Gaming Arena',
    },
    {
      url: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      alt: 'PlayStation 5 Console and Controller Station',
      span: 'span-1',
      caption: 'PS5 Precision Stations',
    },
    {
      url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      alt: 'Squad Playing Video Games on Couch',
      span: 'span-1',
      caption: 'Squad Matchups',
    },
    {
      url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
      alt: 'High-End Console Display and Audio Setup',
      span: 'span-1',
      caption: 'Pro Audio & Displays',
    },
    {
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
      alt: 'Birthday and Group Celebrations Atmosphere',
      span: 'span-2',
      caption: 'Private Events',
    },
    {
      url: 'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=800&q=80',
      alt: 'Cozy Gaming Lounge Room Setup',
      span: 'span-1',
      caption: 'Cozy Lounge Zones',
    },
  ];

  return (
    <section id="gallery" className="section" style={{ backgroundColor: 'var(--bg-black)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '650px', marginBottom: '4rem' }}>
          <span className="tag-label">Visual Tour</span>
          <h2 className="section-heading-large">INSIDE THE HUB</h2>
          <p className="section-desc">
            A glimpse into our comfortable gaming lounges, clean console setups, and vibrant community spaces.
          </p>
        </div>

        {/* Asymmetric Clean Grid */}
        <div className="gallery-asymmetric-grid">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`img-zoom-wrap gallery-item ${img.span}`}
              style={{
                backgroundColor: 'var(--bg-dark-1)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="img-zoom"
                loading="lazy"
              />
              <div className="gallery-item-caption">
                <span>{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-asymmetric-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 280px;
          gap: 1.5rem;
        }
        .gallery-item.span-2 {
          grid-column: span 2;
        }
        .gallery-item.span-1 {
          grid-column: span 1;
        }
        .gallery-item-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.5rem;
          background: linear-gradient(180deg, transparent 0%, rgba(9, 9, 11, 0.85) 100%);
          color: var(--text-white);
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }
        .img-zoom-wrap:hover .gallery-item-caption {
          opacity: 1;
        }
        @media (max-width: 900px) {
          .gallery-asymmetric-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 220px !important;
          }
          .gallery-item.span-2 {
            grid-column: span 2;
          }
        }
        @media (max-width: 600px) {
          .gallery-asymmetric-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 240px !important;
          }
          .gallery-item.span-2 {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}
