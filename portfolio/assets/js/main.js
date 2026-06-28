/* =========================================================
   NAFIS IQBAL TAZIN — PORTFOLIO — MAIN JS
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- JS-ready flag (enables CSS reveal animations safely) ---------- */
  document.body.classList.add('js-ready');

  /* ---------- Preloader ---------- */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('done'), 250);
  });
  // fallback in case 'load' already fired
  setTimeout(() => preloader && preloader.classList.add('done'), 1800);

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('header-toggle');
  const header = document.getElementById('header');
  navToggle.addEventListener('click', () => {
    header.classList.toggle('header-show');
    navToggle.className = header.classList.contains('header-show') ? 'header-toggle bi bi-x' : 'header-toggle bi bi-list';
  });
  document.querySelectorAll('.navmenu a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('header-show');
      navToggle.className = 'header-toggle bi bi-list';
    });
  });

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('main .section, .hero');
  const navLinks = document.querySelectorAll('.navmenu a');
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  sections.forEach(sec => navObserver.observe(sec));

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Fallback: force-reveal anything still hidden after 2.5s ----------
     Covers fast scroll, anchor-jump (#contact), programmatic navigation —
     any case where the IntersectionObserver never fires.
  --------------------------------------------------------------------------- */
  setTimeout(() => {
    document.querySelectorAll('[data-reveal]:not(.in-view)').forEach(el => {
      el.classList.add('in-view');
    });
  }, 2500);

  /* ---------- Typed role text ---------- */
  const typedEl = document.getElementById('typed-role');
  const roles = ['Mentor', 'Executive', 'Web Developer', 'Content Creator'];
  let roleIndex = 0, charIndex = 0, deleting = false;

  function typeLoop() {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(typeLoop, deleting ? 45 : 85);
  }
  if (typedEl) setTimeout(typeLoop, 600);

  /* ---------- Stats counters ---------- */
  const counters = document.querySelectorAll('.stat-num');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(c => counterObserver.observe(c));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const duration = 1100;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }
    requestAnimationFrame(tick);
  }

  /* ---------- Skill bars ---------- */
  const skillBars = document.querySelectorAll('.skill-bar .bar div');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const div = entry.target;
        const w = div.style.width;
        div.style.width = '0%';
        requestAnimationFrame(() => {
          setTimeout(() => { div.style.width = w; }, 50);
        });
        skillObserver.unobserve(div);
      }
    });
  }, { threshold: 0.3 });
  skillBars.forEach(bar => skillObserver.observe(bar));

  /* ---------- Project modals ---------- */
  const projectCards = document.querySelectorAll('[data-modal-target]');
  const modalCloses = document.querySelectorAll('[data-modal-close]');

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const modal = document.getElementById(card.getAttribute('data-modal-target'));
      if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal(modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalCloses.forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.closest('.modal-overlay')));
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal(overlay);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(closeModal);
    }
  });

  /* ---------- Contact form (Netlify Forms compatible) ---------- */
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      formStatus.textContent = 'Sending...';
      formStatus.style.color = 'var(--text-dim)';

      try {
        const formData = new FormData(form);
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        });

        if (response.ok) {
          formStatus.textContent = 'Message sent — thank you! I\'ll get back to you soon.';
          formStatus.style.color = 'var(--green)';
          form.reset();
        } else {
          throw new Error('Submission failed');
        }
      } catch (err) {
        formStatus.textContent = 'Something went wrong. Please email me directly instead.';
        formStatus.style.color = 'var(--amber)';
      }
    });
  }

});
