/* ==========================================================================
   NEXUS GAMING HUB - MAIN APP & MICRO INTERACTIONS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation Scroll Glassmorphism & Active Link Spy
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll Spy for active nav link
    let currentSectionId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  // 2. Mobile Menu Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }

  // 3. Custom Cyber Crosshair Cursor (Desktop only)
  const cursor = document.querySelector('.custom-cursor');
  const cursorDot = document.querySelector('.custom-cursor-dot');

  if (cursor && cursorDot && window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', e => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    });

    const hoverTargets = document.querySelectorAll('a, button, .glass-card, .game-card, .gallery-item, .filter-btn');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.6)';
        cursor.style.borderColor = 'var(--neon-magenta)';
        cursorDot.style.background = 'var(--neon-cyan)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.borderColor = 'var(--neon-cyan)';
        cursorDot.style.background = 'var(--neon-pink)';
      });
    });
  }

  // 4. Hero Parallax Mouse Effect
  const heroMedia = document.querySelector('.hero-bg-image');
  const heroSection = document.querySelector('.hero-section');

  if (heroMedia && heroSection && window.innerWidth >= 1024) {
    heroSection.addEventListener('mousemove', e => {
      const x = (window.innerWidth / 2 - e.clientX) / 45;
      const y = (window.innerHeight / 2 - e.clientY) / 45;
      heroMedia.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
    });

    heroSection.addEventListener('mouseleave', () => {
      heroMedia.style.transform = 'scale(1.05) translate(0px, 0px)';
    });
  }

  // 5. Synthesized Web Audio Cyber Sound Effects
  let audioCtx = null;
  let soundEnabled = false;
  const soundBtn = document.getElementById('sound-toggle-btn');

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playCyberBeep(freq = 440, type = 'sine', duration = 0.08) {
    if (!soundEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + duration);

      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (err) {
      console.warn('Audio SFX notice:', err);
    }
  }

  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      initAudio();
      soundEnabled = !soundEnabled;
      soundBtn.classList.toggle('active', soundEnabled);
      const icon = soundBtn.querySelector('span');
      if (icon) {
        icon.textContent = soundEnabled ? '🔊' : '🔇';
      }
      if (soundEnabled) playCyberBeep(880, 'triangle', 0.12);
    });
  }

  // Attach subtle audio beeps to interactive buttons and cards
  document.querySelectorAll('.btn, .filter-btn, .game-card, .offer-card, .nav-link').forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (soundEnabled) playCyberBeep(520, 'sine', 0.05);
    });
    el.addEventListener('click', () => {
      if (soundEnabled) playCyberBeep(1040, 'triangle', 0.09);
    });
  });
});
