/* ==========================================================================
   NEXUS GAMING HUB - GAME SHOWCASE & LIGHTBOX VIEWER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Game Showcase Filter Tabs
  const filterButtons = document.querySelectorAll('.filter-btn');
  const gameCards = document.querySelectorAll('.game-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      gameCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // 2. PS4 / PS5 Interactive Showcase Switcher
  const consoleTabs = document.querySelectorAll('.console-tab');
  const consoleBadges = document.querySelectorAll('.console-badge-dynamic');

  consoleTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      consoleTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const selectedConsole = tab.getAttribute('data-console');
      consoleBadges.forEach(badge => {
        badge.textContent = selectedConsole + ' READY';
      });
    });
  });

  // 3. Gallery Lightbox Modal
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightbox && galleryItems.length) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('.gallery-img');
        const caption = item.querySelector('.gallery-caption');

        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt || 'Gaming Lounge View';
          lightboxCaption.textContent = caption ? caption.textContent : 'Nexus Gaming Lounge';
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }
});
