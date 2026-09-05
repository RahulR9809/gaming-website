/* ==========================================================================
   NEXUS GAMING HUB - INTERACTIVE BOOKING MODAL & WIZARD
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.getElementById('booking-modal');
  const openModalBtns = document.querySelectorAll('.trigger-booking-modal');
  const closeModalBtn = document.getElementById('modal-close-btn');
  const bookingForm = document.getElementById('booking-form');
  const durationSelect = document.getElementById('book-duration');
  const longSessionAlert = document.getElementById('long-session-alert');
  const radioLabels = document.querySelectorAll('.radio-tile-label');

  // Open Modal Triggers
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const plan = btn.getAttribute('data-plan');
      if (plan && durationSelect) {
        if (plan === 'long') durationSelect.value = '3';
        else if (plan === 'starter') durationSelect.value = '1';
        else if (plan === 'group') durationSelect.value = '2';
      }
      checkLongSession();
      if (modalOverlay) {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close Modal
  const closeModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', e => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Radio tile selections styling
  radioLabels.forEach(label => {
    label.addEventListener('click', () => {
      const name = label.querySelector('input').name;
      document.querySelectorAll(`input[name="${name}"]`).forEach(input => {
        input.closest('.radio-tile-label').classList.remove('selected');
      });
      label.classList.add('selected');
    });
  });

  // Long Session Alert Check
  function checkLongSession() {
    if (!durationSelect || !longSessionAlert) return;
    const val = parseInt(durationSelect.value, 10);
    if (val >= 3) {
      longSessionAlert.classList.add('visible');
    } else {
      longSessionAlert.classList.remove('visible');
    }
  }

  if (durationSelect) {
    durationSelect.addEventListener('change', checkLongSession);
  }

  // Handle Form Submission / WhatsApp Dispatch
  if (bookingForm) {
    bookingForm.addEventListener('submit', e => {
      e.preventDefault();

      const name = document.getElementById('book-name').value;
      const phone = document.getElementById('book-phone').value;
      const consoleType = document.querySelector('input[name="console-choice"]:checked')?.value || 'PS5';
      const players = document.getElementById('book-players').value;
      const duration = document.getElementById('book-duration').value;
      const date = document.getElementById('book-date').value;
      const time = document.getElementById('book-time').value;

      let msg = `🎮 *NEXUS GAMING HUB BOOKING REQUEST*\n\n`;
      msg += `👤 *Name:* ${name}\n`;
      msg += `📞 *Phone:* ${phone}\n`;
      msg += `🕹️ *Console:* ${consoleType}\n`;
      msg += `👥 *Players:* ${players}\n`;
      msg += `⏱️ *Duration:* ${duration} Hour(s)${parseInt(duration) >= 3 ? ' (Long Session Special)' : ''}\n`;
      msg += `📅 *Date:* ${date}\n`;
      msg += `🕙 *Time Slot:* ${time}\n`;

      const encodedMsg = encodeURIComponent(msg);
      const whatsappUrl = `https://wa.me/?text=${encodedMsg}`;

      // Notification feedback
      const submitBtn = bookingForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '⚡ Booking Dispatched...';
      submitBtn.style.background = 'var(--neon-green)';
      submitBtn.style.color = '#000';

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        submitBtn.innerHTML = '✓ Sent via WhatsApp!';
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          submitBtn.style.color = '';
          closeModal();
          bookingForm.reset();
        }, 1500);
      }, 600);
    });
  }
});
