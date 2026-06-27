// ===========================================
// Nafis Iqbal Tazin — Portfolio JS
// ===========================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. Preloader ---------- */
  const preloader = document.getElementById('preloader');

  const hidePreloader = () => {
    preloader.classList.add('hide');
  };

  if (sessionStorage.getItem('seenPreloader')) {
    preloader.style.display = 'none';
  } else {
    sessionStorage.setItem('seenPreloader', '1');
    window.setTimeout(hidePreloader, 1400);
  }

  /* ---------- 2. Custom cursor ---------- */
  const cursor = document.getElementById('customCursor');
  const cursorDot = document.getElementById('cursorDot');

  if (cursor && cursorDot) {
    window.addEventListener('mousemove', (e) => {
      const { clientX: x, clientY: y } = e;
      cursorDot.style.left = `${x}px`;
      cursorDot.style.top = `${y}px`;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    });

    const hoverTargets = document.querySelectorAll('a, button, input, textarea');
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '44px';
        cursor.style.height = '44px';
        cursor.style.borderColor = '#fff';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '32px';
        cursor.style.height = '32px';
        cursor.style.borderColor = 'rgba(255,255,255,0.6)';
      });
    });

    if ('ontouchstart' in window) {
      const cursorWrapper = document.querySelector('.cursor-wrapper');
      if (cursorWrapper) cursorWrapper.style.display = 'none';
      document.body.style.cursor = 'auto';
    }
  }

  /* ---------- 3. Scroll progress bar ---------- */
  const progressLine = document.getElementById('progressLine');

  const updateProgressBar = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressLine) progressLine.style.width = `${progress}%`;
  };

  window.addEventListener('scroll', updateProgressBar, { passive: true });
  updateProgressBar();

  /* ---------- 4. Navbar: scroll-hide and scroll-style ---------- */
  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY;

  const updateNavbar = () => {
    const currentY = window.scrollY;

    if (currentY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (currentY > lastScrollY && currentY > 200) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }

    lastScrollY = currentY;
  };

  window.addEventListener('scroll', updateNavbar, { passive: true });

  /* ---------- 5. Mobile drawer ---------- */
  const hamburger = document.getElementById('navHamburger');
  const drawer = document.getElementById('mobileDrawer');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      drawer.classList.toggle('open');
      document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
    });

    // Close drawer on link click
    drawer.querySelectorAll('.drawer-link').forEach((link) => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- 6. Scroll-reveal animations ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
  });

  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- 7. Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 80;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ---------- 8. Contact form (demo) ---------- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Message Sent ✓';
      btn.style.opacity = '0.7';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.opacity = '';
        form.reset();
      }, 2500);
    });
  }

});
