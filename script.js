/* ============================================================
   NAFIS IQBAL TAZIN — Portfolio Script
   ============================================================ */

// ─────────────────────────────────────────────
// 1. EXPERIENCE DATA  (updated from CV)
// ─────────────────────────────────────────────
const experienceData = [
  {
    id: "exp-packly",
    period: "Nov 2025 – Present",
    badge: "Current Role",
    badgeActive: true,
    title: "Customer Service Executive — Merchant Operations",
    company: "Packly · Jigatola, Pilkhana Gate, Dhanmondi, Dhaka",
    excerpt:
      "Team Lead for a customer care unit handling merchant onboarding, escalations, and cross-team coordination. Awarded Best CC Team Lead of the Month.",
    tags: ["Team Lead", "SLA Monitoring", "Escalation Handling", "Ticketing Systems"],
    details: {
      highlights: [
        "Led and supervised a Customer Care team handling merchant onboarding, account activation, and order management issues.",
        "Provided end-to-end merchant support, ensuring timely resolution under all circumstances.",
        "Coordinated customer support operations including parcel tracking, urgent delivery handling, and parcel issue resolution.",
        "Maintained seamless coordination between cross-functional operational teams — Product Approval and Order Management — to ensure smooth service delivery.",
        "Arranged and confirmed hub pickups when merchants submitted pickup requests, ensuring timely parcel movement.",
        "Served as the primary escalation point for critical and complex cases, ensuring high satisfaction for both merchants and customers.",
        "Monitored team performance, ensured SLA compliance, and maintained high service quality standards.",
        "Collaborated with internal teams to improve operational efficiency and reduce resolution turnaround time.",
        "🏆 Awarded Best Customer Care (CC) Team Lead of the Month — for resolving the highest number of critical issues and achieving top ratings from merchants and customers.",
      ],
    },
  },
  {
    id: "exp-lifeskills",
    period: "Jan 2023 – Jul 2025",
    badge: "Instructor",
    badgeActive: false,
    title: "Course Instructor",
    company: "LifeSkills IT Institute · Hybrid",
    excerpt:
      "Taught Web Design, WordPress, and Data Entry to 100+ students — online and offline — with a track record of moving learners into professional careers.",
    tags: ["WordPress", "Web Design", "Data Entry", "Mentorship"],
    details: {
      highlights: [
        "Guided 100+ students in Web Design, WordPress, and Data Entry across both online and offline classes.",
        "Fostered a supportive learning environment that helped students thrive regardless of format.",
        "Mentored students who successfully advanced into professional careers.",
        "Provided one-on-one consultations and tailored career advice to struggling learners.",
        "Empowered students to define clear career paths with actionable, personalised guidance.",
      ],
    },
  },
  {
    id: "exp-surgiicare",
    period: "Jan 2025 – Apr 2025",
    badge: "Freelance",
    badgeActive: false,
    title: "Web Manager",
    company: "Surgiicare BD · Remote",
    excerpt:
      "Rebuilt a bloated WooCommerce medical e-commerce store — audited 100+ plugins, cut load times, and shipped a lean, maintainable branded store.",
    tags: ["WordPress", "WooCommerce", "Elementor Pro", "Performance Optimization"],
    details: {
      highlights: [
        "Developed a fully functional WooCommerce-based medical eCommerce website tailored to client specifications.",
        "Transformed a premium Elementor UI Kit into a unique, branded shopping experience.",
        "Customised UI elements (colour palette, button styles) and redesigned product, category, and checkout pages.",
        "Ensured a niche-specific, user-friendly design through close collaboration with the client.",
        "Took ownership of a sluggish website impacted by 100+ developers and excessive plugins.",
        "Audited and optimised plugin usage, media assets, and redundant code.",
        "Streamlined the platform with a lightweight Elementor Pro setup, minimal add-ons, and smart caching strategies.",
        "Delivered a fast-loading, high-performance site with improved UX, stronger metrics, and reduced maintenance overhead.",
      ],
    },
  },
  {
    id: "exp-100miles",
    period: "Jan 2024 – May 2024",
    badge: "Instructor",
    badgeActive: false,
    title: "Course Instructor",
    company: "100 Miles IT Institute · Online",
    excerpt:
      "Delivered the WordPress/web design curriculum in a fully online format, adapting pacing for remote learners and providing career guidance.",
    tags: ["WordPress", "Web Design", "Online Teaching", "Career Guidance"],
    details: {
      highlights: [
        "Fostered a supportive learning environment across online classes.",
        "Mentored students who successfully advanced into professional careers.",
        "Provided one-on-one consultations and tailored career advice to struggling learners.",
      ],
    },
  },
];

// ─────────────────────────────────────────────
// 2. PROJECTS DATA
// ─────────────────────────────────────────────
const projectsData = [
  {
    id: "proj-ems",
    period: "2024 – Present",
    badge: "Live & In Use",
    badgeActive: true,
    title: "Employee Management System",
    company: "Internal Tool — Packly",
    excerpt:
      "A Google Apps Script + Sheets web app for a 20+ person order management team: task logging, shift tracking, and a manager dashboard. Still in active daily use.",
    tags: ["Google Apps Script", "Google Sheets", "Web App", "Automation"],
    details: {
      highlights: [
        "Built a web app for a 20+ person order management team at Packly.",
        "Features include agent task logging, shift time tracking, and a manager dashboard with colour-coded status chips.",
        "Built entirely on Google Apps Script and Google Sheets — zero external hosting cost.",
        "Replaced manual spreadsheet chaos with a structured, real-time system.",
        "Still in active daily use by the team.",
      ],
    },
  },
  {
    id: "proj-surgiicare",
    period: "Jan – Apr 2025",
    badge: "Shipped",
    badgeActive: false,
    title: "WooCommerce Medical Store",
    company: "Surgiicare BD · surgiicare.com.bd",
    excerpt:
      "Full build-to-launch e-commerce site for a medical supplies client — from a bloated, multi-developer mess to a lean, fast, branded WooCommerce store.",
    tags: ["WooCommerce", "Elementor Pro", "WordPress", "E-Commerce"],
    details: {
      highlights: [
        "Built a WooCommerce medical e-commerce store from a premium Elementor UI kit.",
        "Customised product, category, and checkout pages to match the client's branding.",
        "Audited and cleaned a site that had been touched by 100+ previous developers.",
        "Removed all redundant plugins and rebuilt around a lean Elementor Pro stack with caching.",
        "Delivered a noticeably faster, easier-to-maintain production site.",
      ],
    },
    link: "https://surgiicare.com.bd",
  },
  {
    id: "proj-surgiicare-agency",
    period: "Jan – Apr 2025",
    badge: "Shipped",
    badgeActive: false,
    title: "Agency Website",
    company: "Surgiicare BD · surgiicare.com",
    excerpt:
      "Built and managed the corporate agency website for Surgiicare BD, separate from the medical store — covering the company's service-facing web presence.",
    tags: ["WordPress", "Elementor", "Web Management"],
    details: {
      highlights: [
        "Developed and managed the corporate/agency website for Surgiicare BD at surgiicare.com.",
        "Worked alongside the medical e-commerce store build for the same client, handling both properties.",
        "Customised layout, branding, and content structure for the agency-facing site.",
        "Maintained consistent design language across both the agency site and the e-commerce store.",
      ],
    },
    link: "https://surgiicare.com",
  },
];

// ─────────────────────────────────────────────
// 3. SECTION NAVIGATION — instant, no reload-feel, no scroll motion
// ─────────────────────────────────────────────
// Replaces the old full-screen "page transition" overlay, which added a
// 700ms delay and made tab switches feel slow. This version jumps straight
// to the target section and plays a quick, lightweight fade on it only.
document.querySelectorAll(".nav-link, .btn--primary[href^='#'], .btn--ghost[href^='#'], .footer-back[href^='#']").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();

    // Close mobile nav immediately
    document.getElementById("navLinks").classList.remove("open");
    document.getElementById("navToggle").classList.remove("open");
    document.getElementById("navToggle").setAttribute("aria-expanded", "false");

    const target = document.querySelector(href);
    if (!target) return;

    // Instant jump — no smooth scroll animation, no overlay delay
    target.scrollIntoView({ behavior: "auto", block: "start" });

    // Quick, subtle fade so the switch doesn't feel jarring,
    // but with zero added wait time before content is visible
    target.classList.remove("section-flash");
    // eslint-disable-next-line no-unused-expressions
    target.offsetWidth; // force reflow so the animation can restart
    target.classList.add("section-flash");
  });
});

// ─────────────────────────────────────────────
// 4. CARD RENDERER
// ─────────────────────────────────────────────
function renderCards(data, container, type) {
  if (!container) return;
  container.innerHTML = "";
  data.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "card reveal";
    card.style.transitionDelay = `${index * 0.08}s`;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `${item.title} — click to expand`);
    card.dataset.id = item.id;

    const tagsHTML = item.tags.map((t) => `<span class="tag">${t}</span>`).join("");
    const linkHTML = item.link
      ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="card-link" aria-label="Visit live site">Visit Site ↗</a>`
      : "";

    card.innerHTML = `
      <div class="card-meta">
        <span class="card-period mono">${item.period}</span>
        <span class="card-badge ${item.badgeActive ? "card-badge--active" : ""}">${item.badge}</span>
      </div>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-company">${item.company}</p>
      <p class="card-excerpt">${item.excerpt}</p>
      <div class="card-tags">${tagsHTML}</div>
      <div class="card-footer-row">
        <p class="card-cta">View details →</p>
        ${linkHTML}
      </div>
    `;

    card.addEventListener("click", () => openModal(item));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(item); }
    });
    const cardLinkEl = card.querySelector(".card-link");
    if (cardLinkEl) {
      cardLinkEl.addEventListener("click", (e) => e.stopPropagation());
    }
    container.appendChild(card);
  });
  observeRevealElements();
}

// ─────────────────────────────────────────────
// 5. MODAL
// ─────────────────────────────────────────────
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalClose   = document.getElementById("modalClose");

function openModal(item) {
  const tagsHTML   = item.tags.map((t) => `<span class="tag">${t}</span>`).join("");
  const bulletHTML = item.details.highlights.map((h) => `<li>${h}</li>`).join("");
  const linkHTML   = item.link
    ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn btn--ghost modal-link">Visit Live Site ↗</a>`
    : "";

  modalContent.innerHTML = `
    <p class="modal-eyebrow">${item.badge} · ${item.period}</p>
    <h2 class="modal-title" id="modalTitle">${item.title}</h2>
    <p class="modal-subtitle">${item.company}</p>
    <hr class="modal-divider" />
    <p class="modal-section-label">Highlights</p>
    <ul>${bulletHTML}</ul>
    <div class="modal-tags">${tagsHTML}</div>
    ${linkHTML}
  `;
  modalOverlay.classList.add("open");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => modalClose.focus());
}

function closeModal() {
  modalOverlay.classList.remove("open");
  modalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("open")) closeModal();
});

// ─────────────────────────────────────────────
// 6. NAVBAR
// ─────────────────────────────────────────────
const navbar    = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navLinks  = document.getElementById("navLinks");
const allNavLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
}, { passive: true });

// Hide navbar on scroll-down, reveal on scroll-up (mobile & tablet only).
// Desktop keeps the navbar always visible.
let lastScrollY = window.scrollY;
let navHideTicking = false;

function handleNavHide() {
  const isMobileOrTablet = window.innerWidth <= 900;
  const currentScrollY = window.scrollY;

  if (isMobileOrTablet) {
    const scrollDelta = currentScrollY - lastScrollY;
    const pastThreshold = currentScrollY > 80;

    // Always show navbar if mobile menu is open, near the top, or scrolling up
    if (navLinks.classList.contains("open") || !pastThreshold || scrollDelta < -4) {
      navbar.classList.remove("nav-hidden");
    } else if (scrollDelta > 4) {
      navbar.classList.add("nav-hidden");
    }
  } else {
    navbar.classList.remove("nav-hidden");
  }

  lastScrollY = currentScrollY;
  navHideTicking = false;
}

window.addEventListener("scroll", () => {
  if (!navHideTicking) {
    requestAnimationFrame(handleNavHide);
    navHideTicking = true;
  }
}, { passive: true });

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) navbar.classList.remove("nav-hidden");
});

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Active nav highlight on scroll
const sections = document.querySelectorAll("section[id]");
const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        allNavLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
sections.forEach((s) => navObserver.observe(s));

// ─────────────────────────────────────────────
// 7. SCROLL REVEAL
// ─────────────────────────────────────────────
function observeRevealElements() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  // Stagger reveal elements that share a parent, so groups cascade in
  // smoothly instead of popping in all at once.
  const groups = new Map();
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
    if (!el.style.transitionDelay) {
      const parent = el.parentElement;
      const count = groups.get(parent) || 0;
      groups.set(parent, count + 1);
      el.style.transitionDelay = `${Math.min(count * 0.08, 0.4)}s`;
    }
    revealObserver.observe(el);
  });
}

// ─────────────────────────────────────────────
// 8. CONTACT FORM
// ─────────────────────────────────────────────
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector("button[type=submit]");
    const original = btn.textContent;
    btn.textContent = "Sending…";
    btn.disabled = true;

    const formData = new FormData(contactForm);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      btn.textContent = "Message Sent ✓";
      btn.style.background = "#28c840";
      btn.style.color = "#fff";
      contactForm.reset();
    } catch {
      btn.textContent = "Failed — try WhatsApp";
      btn.disabled = false;
    }
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      btn.style.background = "";
      btn.style.color = "";
    }, 4000);
  });
}

// ─────────────────────────────────────────────
// 9. INIT
// ─────────────────────────────────────────────
(function init() {
  renderCards(experienceData, document.getElementById("experienceGrid"), "experience");
  renderCards(projectsData,   document.getElementById("projectsGrid"),   "project");

  document.querySelectorAll(".glass, .section-header, .stat, .timeline-item")
    .forEach((el) => el.classList.add("reveal"));
  observeRevealElements();
})();
