/* ==========================================================================
   NEXUS GAMING HUB - SCROLL ANIMATIONS, STATS COUNTERS & CONFETTI
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Intersection Observer for Scroll Reveals
  const revealElements = document.querySelectorAll(
    '.reveal-on-scroll, .reveal-fade, .reveal-scale, .reveal-left, .reveal-right'
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { root: null, threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach(el => revealObserver.observe(el));

  // 2. Animated Numbers / Stats Counter
  const statElements = document.querySelectorAll('.stat-number');
  let statsCounted = false;

  const statsObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsCounted) {
          statsCounted = true;
          statElements.forEach(stat => {
            const targetText = stat.getAttribute('data-target') || stat.textContent.trim();
            animateCounter(stat, targetText);
          });
          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  function animateCounter(el, targetText) {
    if (targetText.includes('99')) {
      let current = 0;
      const target = 99;
      const interval = setInterval(() => {
        current += 3;
        if (current >= target) {
          current = target;
          clearInterval(interval);
          el.textContent = '₹99+';
        } else {
          el.textContent = '₹' + current + '+';
        }
      }, 35);
    } else if (targetText.includes('3+')) {
      let current = 0;
      const interval = setInterval(() => {
        current++;
        if (current >= 3) {
          clearInterval(interval);
          el.textContent = '3+ Hours';
        } else {
          el.textContent = current + '+ Hours';
        }
      }, 250);
    } else {
      el.textContent = targetText;
    }
  }

  // 3. 3D Card Tilt Effect on Mouse Move
  const tiltCards = document.querySelectorAll('.why-card, .exp-card, .offer-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      if (window.innerWidth < 1024) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // 4. Subtle Confetti for Birthday Section
  const birthdaySection = document.getElementById('parties');
  let confettiFired = false;

  if (birthdaySection) {
    const birthdayObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !confettiFired) {
            confettiFired = true;
            triggerConfetti();
          }
        });
      },
      { threshold: 0.3 }
    );

    birthdayObserver.observe(birthdaySection);
  }

  function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = birthdaySection.offsetWidth;
    canvas.height = birthdaySection.offsetHeight;

    const pieces = [];
    const colors = ['#00f0ff', '#ff007f', '#9d4edd', '#ffd166', '#00ff88'];

    for (let i = 0; i < 45; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -100,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 2,
        vy: Math.random() * 3 + 2,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10
      });
    }

    let frames = 0;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frames++;

      for (let p of pieces) {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.rotSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }

      if (frames < 220) {
        requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    render();
  }
});
