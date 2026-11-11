/**
 * AUTOMÓVIL CLUB ARGENTINO (ACA) · LA SAETA S.R.L. - LANDING PAGE INTERACTIVE ENGINE
 * Tasteskill 2.5.1 + Impeccable + UI/UX Pro Max Micro-interactions & A11y
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdownTimer();
  initHeaderScroll();
  initHeroTelemetryLoop();
  initCounters();
  initSavingsCalculator();
  initBenefitsFilter();
  initLeadFormWizard();
  initFaqAccordion();
  initModals();
  initAccessibilityControls();
  initBackToTop();
  initMobileNav();
});

/* ==========================================================================
   1. COUNTDOWN TIMER
   ========================================================================== */
function initCountdownTimer() {
  const timerEl = document.getElementById('promo-countdown');
  if (!timerEl) return;

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 2);
  targetDate.setHours(23, 59, 59, 999);

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function updateTimer() {
    const now = Date.now();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
      timerEl.textContent = '00d 00h 00m 00s';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerEl.textContent = `${pad(days)}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ==========================================================================
   2. STICKY HEADER & SCROLL BEHAVIOR
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   3. HERO LIVE TELEMETRY LOOP (3.2s cycle + restart on hover + 32px pause disc)
   ========================================================================== */
function initHeroTelemetryLoop() {
  const card = document.getElementById('hero-telemetry-card');
  const badgeEl = document.getElementById('telemetry-badge-text');
  const counterEl = document.getElementById('telemetry-counter');
  const unitEl = document.getElementById('telemetry-unit-text');
  const routeEl = document.getElementById('telemetry-route-text');
  const pauseBtn = document.getElementById('telemetry-pause-btn');

  if (!badgeEl || !unitEl || !routeEl) return;

  const events = [
    {
      badge: 'Despacho Activo',
      unit: 'Unidad #14 · Grúa Pesada',
      route: 'RN 38 · Tramo La Rioja – Chamical — En ruta (ETA 12 min)'
    },
    {
      badge: 'Asistencia Resuelta',
      unit: 'Unidad #08 · Taller Móvil',
      route: 'San Fernando del Valle de Catamarca — Puesta en marcha ($0)'
    },
    {
      badge: 'Base Operativa',
      unit: 'Unidad #21 · Rescate Rutero',
      route: 'RN 60 · Corredor Tinogasta — Guardia 24/7 disponible'
    }
  ];

  let idx = 0;
  let paused = window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.body.classList.contains('reduce-motion');

  function render(i) {
    const ev = events[i];
    badgeEl.textContent = ev.badge;
    unitEl.textContent = ev.unit;
    routeEl.textContent = ev.route;
    if (counterEl) counterEl.textContent = `${i + 1} / ${events.length}`;
  }

  let intervalId = setInterval(() => {
    if (paused || document.body.classList.contains('reduce-motion')) return;
    idx = (idx + 1) % events.length;
    render(idx);
  }, 3200);

  if (card) {
    card.addEventListener('mouseenter', () => {
      if (!paused && !document.body.classList.contains('reduce-motion')) {
        idx = 0;
        render(idx);
      }
    });
  }

  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      paused = !paused;
      pauseBtn.textContent = paused ? '▶' : '❚❚';
      pauseBtn.setAttribute('aria-label', paused ? 'Reanudar monitor de despacho en vivo' : 'Pausar monitor de despacho en vivo');
    });
  }
}

/* ==========================================================================
   4. ANIMATED KPIS COUNTERS
   ========================================================================== */
function initCounters() {
  const counterEls = document.querySelectorAll('[data-counter-target]');
  if (!counterEls.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.body.classList.contains('reduce-motion')) {
    return;
  }

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counterEls.forEach(el => animateSingleCounter(el));
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-banner');
  if (statsSection) {
    observer.observe(statsSection);
  }

  function animateSingleCounter(el) {
    const target = parseInt(el.getAttribute('data-counter-target'), 10);
    const prefix = el.getAttribute('data-counter-prefix') || '';
    const suffix = el.getAttribute('data-counter-suffix') || '';
    const duration = 1100;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * ease);

      el.textContent = `${prefix}${current.toLocaleString('es-AR')}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = `${prefix}${target.toLocaleString('es-AR')}${suffix}`;
      }
    }

    requestAnimationFrame(step);
  }
}

/* ==========================================================================
   5. INTERACTIVE SAVINGS CALCULATOR
   ========================================================================== */
function initSavingsCalculator() {
  const kmSlider = document.getElementById('calc-km');
  const kmValue = document.getElementById('calc-km-val');
  const toggleYpf = document.getElementById('toggle-ypf');
  const toggleHotels = document.getElementById('toggle-hotels');
  const toggleTow = document.getElementById('toggle-tow');
  const togglePaperwork = document.getElementById('toggle-paperwork');
  const resultDisplay = document.getElementById('calc-total-savings');

  if (!kmSlider || !resultDisplay) return;

  [toggleYpf, toggleHotels, toggleTow, togglePaperwork].forEach(btn => {
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isNowActive = btn.classList.toggle('active');
      btn.setAttribute('aria-pressed', String(isNowActive));
      calculateSavings();
    });
  });

  kmSlider.addEventListener('input', () => {
    if (kmValue) {
      kmValue.textContent = `${parseInt(kmSlider.value, 10).toLocaleString('es-AR')} km/mes`;
    }
    calculateSavings();
  });

  function calculateSavings() {
    const km = parseInt(kmSlider.value, 10);
    let annualSavings = 48000;

    if (toggleYpf && toggleYpf.classList.contains('active')) {
      const litersPerMonth = (km / 100) * 9;
      const avgFuelPrice = 1150;
      const fuelDiscountPerMonth = litersPerMonth * avgFuelPrice * 0.05;
      annualSavings += Math.round(fuelDiscountPerMonth * 12);
    }

    if (toggleHotels && toggleHotels.classList.contains('active')) {
      annualSavings += 95000;
    }

    if (toggleTow && toggleTow.classList.contains('active')) {
      annualSavings += 120000;
    }

    if (togglePaperwork && togglePaperwork.classList.contains('active')) {
      annualSavings += 35000;
    }

    resultDisplay.textContent = `$${annualSavings.toLocaleString('es-AR')}`;
  }

  calculateSavings();
}

/* ==========================================================================
   6. BENEFITS FILTER
   ========================================================================== */
function initBenefitsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const benefitCards = document.querySelectorAll('.benefit-card-premium');

  if (!filterBtns.length || !benefitCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      benefitCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   7. MULTI-STEP LEAD FORM (EXPRESS ONBOARDING)
   ========================================================================== */
function initLeadFormWizard() {
  const form = document.getElementById('express-onboarding-form');
  const stepNodes = document.querySelectorAll('.wizard-step-node');
  const stepPanels = document.querySelectorAll('.wizard-step-panel');
  const nextBtn = document.getElementById('wizard-next-btn');
  const prevBtn = document.getElementById('wizard-prev-btn');
  const submitBtn = document.getElementById('wizard-submit-btn');
  const successBox = document.getElementById('form-success-state');

  if (!form || !stepPanels.length) return;

  let currentStep = 1;
  const totalSteps = stepPanels.length;

  const radioLabels = document.querySelectorAll('.radio-tile-label');
  radioLabels.forEach(label => {
    const radio = label.querySelector('input[type="radio"]');
    if (!radio) return;

    label.addEventListener('click', () => {
      const groupName = radio.name;
      document.querySelectorAll(`input[name="${groupName}"]`).forEach(r => {
        r.closest('.radio-tile-label').classList.remove('selected');
      });
      label.classList.add('selected');
      radio.checked = true;
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        currentStep++;
        updateWizardUI();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentStep--;
      updateWizardUI();
    });
  }

  function validateStep(step) {
    const panel = document.querySelector(`.wizard-step-panel[data-step="${step}"]`);
    if (!panel) return true;

    const requiredInputs = panel.querySelectorAll('[required]');
    let isValid = true;

    requiredInputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = 'var(--aca-red)';
        input.focus();
      } else {
        input.style.borderColor = 'var(--aca-border)';
      }
    });

    return isValid;
  }

  function updateWizardUI() {
    stepPanels.forEach(p => {
      if (parseInt(p.getAttribute('data-step'), 10) === currentStep) {
        p.style.display = 'block';
      } else {
        p.style.display = 'none';
      }
    });

    stepNodes.forEach((node, idx) => {
      if (idx + 1 <= currentStep) {
        node.classList.add('active');
      } else {
        node.classList.remove('active');
      }
    });

    if (prevBtn) {
      prevBtn.style.display = currentStep > 1 ? 'inline-flex' : 'none';
    }

    if (nextBtn && submitBtn) {
      if (currentStep === totalSteps) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-flex';
      } else {
        nextBtn.style.display = 'inline-flex';
        submitBtn.style.display = 'none';
      }
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    if (typeof confetti === 'function' && !document.body.classList.contains('reduce-motion')) {
      confetti({
        particleCount: 100,
        spread: 65,
        origin: { y: 0.6 }
      });
    }

    form.style.display = 'none';
    if (successBox) {
      successBox.style.display = 'block';
    }
  });

  updateWizardUI();
}

/* ==========================================================================
   8. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const answer = item.querySelector('.faq-answer');

    if (!trigger || !answer) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherTrig = otherItem.querySelector('.faq-trigger');
          const otherAns = otherItem.querySelector('.faq-answer');
          if (otherTrig) otherTrig.setAttribute('aria-expanded', 'false');
          if (otherAns) otherAns.style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
      }
    });
  });
}

/* ==========================================================================
   9. MODALS (PRIVACY & TERMS)
   ========================================================================== */
function initModals() {
  const triggers = document.querySelectorAll('[data-modal-target]');
  const closeBtns = document.querySelectorAll('.modal-close-btn');
  const overlays = document.querySelectorAll('.modal-overlay');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-modal-target');
      const modal = document.getElementById(targetId);
      if (modal) {
        openModal(modal);
      }
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) closeModal(modal);
    });
  });

  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlays.forEach(m => closeModal(m));
    }
  });

  function openModal(modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   10. LIGHT MODE ENFORCEMENT & REDUCED MOTION
   ========================================================================== */
function initAccessibilityControls() {
  document.documentElement.classList.remove('dark');
  document.body.classList.remove('dark', 'high-contrast', 'font-large');

  try {
    localStorage.removeItem('aca_high_contrast');
    localStorage.removeItem('aca_large_font');
    localStorage.removeItem('lasaeta_theme');
    localStorage.removeItem('aca_theme_dark');
  } catch (e) {}

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('reduce-motion');
  }
}

/* ==========================================================================
   11. BACK TO TOP
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   12. MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    if (isOpen) {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.backgroundColor = '#FFFFFF';
      navLinks.style.padding = '24px';
      navLinks.style.boxShadow = 'var(--shadow-lg)';
      navLinks.style.gap = '16px';
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
      }
    });
  });
}
