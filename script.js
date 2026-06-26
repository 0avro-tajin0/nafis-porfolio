/* ============================================================
   NAFIS IQBAL TAZIN — Portfolio Script
   ============================================================
   DATA LAYER: To connect a Headless CMS later, replace the
   arrays below with API fetches (e.g., fetch('/api/experience'))
   and pass the resolved data into renderCards(). The render
   logic does not need to change.
   ============================================================ */

// ─────────────────────────────────────────────
// 1. EXPERIENCE DATA
//    Update this array from your CMS dashboard.
// ─────────────────────────────────────────────
const experienceData = [
  {
    id: "exp-packly",
    period: "Nov 2025 – Present",
    badge: "Current Role",
    badgeActive: true,
    title: "Customer Service Executive — Merchant Operations",
    company: "Packly, Dhanmondi, Dhaka",
    excerpt:
      "Team Lead for a customer care unit handling 50–150 merchant tickets daily — covering onboarding, escalations, and cross-team coordination.",
    tags: ["Team Lead", "SLA Monitoring", "Escalation Handling", "Ticketing Systems"],
    details: {
      highlights: [
        "Lead a Customer Care team handling 50–150 merchant tickets a day, covering onboarding, account activation, and order issues.",
        "Act as the escalation point for cases other agents can't close — delivery disputes, account access problems, urgent parcel issues — seeing each one through to resolution.",
        "Coordinate hub pickups directly with the logistics team so merchant pickup requests don't sit waiting; track requests through to confirmed pickup.",
        "Work daily with Product Approval and Order Management teams to keep merchant-facing issues from stalling between departments.",
        "Track SLA compliance across the team and flag patterns in recurring issues so they get fixed at the source, not just patched ticket by ticket.",
        "Won Best Customer Care Team Lead of the Month for clearing the highest volume of critical/escalated cases with top satisfaction ratings.",
      ],
    },
  },
  {
    id: "exp-surgiicare",
    period: "Jan 2025 – Apr 2025",
    badge: "Freelance",
    badgeActive: false,
    title: "Web Manager",
    company: "Surgiicare BD",
    excerpt:
      "Rebuilt a bloated WooCommerce medical e-commerce store — audited 100+ plugins, cut load times, and shipped a lean, maintainable production build.",
    tags: ["WordPress", "WooCommerce", "Elementor Pro", "Performance Optimization"],
    details: {
      highlights: [
        "Built a WooCommerce medical e-commerce store from a premium Elementor UI kit, customizing product, category, and checkout pages to match client branding.",
        "Inherited a site touched by 100+ previous developers — running slow and bloated with redundant plugins.",
        "Audited every plugin and media asset on the site, removed what wasn't pulling weight, and rebuilt the setup around a lean Elementor Pro stack with caching.",
        "Cut load times noticeably and made the site easier to maintain going forward.",
      ],
    },
  },
  {
    id: "exp-lifeskills",
    period: "Jan 2023 – Jul 2025",
    badge: "Instructor",
    badgeActive: false,
    title: "Course Instructor",
    company: "LifeSkills IT Institute",
    excerpt:
      "Taught Web Design, WordPress, and Data Entry to 100+ students, with a track record of moving learners from basics to first paid work.",
    tags: ["WordPress", "Web Design", "Data Entry", "Mentorship"],
    details: {
      highlights: [
        "Taught Web Design, WordPress, and Data Entry to 100+ students across online and in-person batches.",
        "Ran one-on-one sessions for students who were falling behind, adjusting the explanation until it actually landed rather than repeating the same material.",
        "Helped multiple students move from 'learning the basics' to landing their first paid web/data entry work by walking them through realistic portfolio pieces.",
      ],
    },
  },
  {
    id: "exp-100miles",
    period: "Jan 2024 – May 2024",
    badge: "Instructor",
    badgeActive: false,
    title: "Course Instructor",
    company: "100 Miles IT Institute",
    excerpt:
      "Delivered the WordPress/web design curriculum in a fully online format, adapting pacing for remote learners and providing career guidance.",
    tags: ["WordPress", "Web Design", "Online Teaching", "Career Guidance"],
    details: {
      highlights: [
        "Taught the WordPress/web design curriculum in a fully online format, adapting pacing for a remote-only class.",
        "Provided individual career guidance to students transitioning into junior web/IT roles.",
      ],
    },
  },
];

// ─────────────────────────────────────────────
// 2. PROJECTS DATA
//    Update this array from your CMS dashboard.
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
        "Features include agent task logging, shift time tracking, and a manager dashboard with color-coded status chips.",
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
    company: "Surgiicare BD",
    excerpt:
      "Full build-to-launch e-commerce site for a medical supplies client — from a bloated, multi-developer mess to a lean, fast, branded WooCommerce store.",
    tags: ["WooCommerce", "Elementor Pro", "WordPress", "E-Commerce"],
    details: {
      highlights: [
        "Built a WooCommerce medical e-commerce store from a premium Elementor UI kit.",
        "Customized product, category, and checkout pages to match the client's branding.",
        "Audited and cleaned a site that had been touched by 100+ previous developers.",
        "Removed all redundant plugins and rebuilt around a lean Elementor Pro stack with caching.",
        "Delivered a noticeably faster, easier-to-maintain production site.",
      ],
    },
  },
];

// ─────────────────────────────────────────────
// 3. CARD RENDERER
// ─────────────────────────────────────────────
/**
 * Renders an array of card data objects into a target container element.
 * @param {Array}       data      - experienceData or projectsData
 * @param {HTMLElement} container - The grid container element
 * @param {string}      type      - 'experience' | 'project' (used for aria labels)
 */
function renderCards(data, container, type) {
  if (!container) return;
  container.innerHTML = "";

  data.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card reveal";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `${item.title} — click to expand`);
    card.dataset.id = item.id;

    const tagsHTML = item.tags
      .map((t) => `<span class="tag">${t}</span>`)
      .join("");

    card.innerHTML = `
      <div class="card-meta">
        <span class="card-period mono">${item.period}</span>
        <span class="card-badge ${item.badgeActive ? "card-badge--active" : ""}">${item.badge}</span>
      </div>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-company">${item.company}</p>
      <p class="card-excerpt">${item.excerpt}</p>
      <div class="card-tags">${tagsHTML}</div>
      <p class="card-cta">View details →</p>
    `;

    // Open modal on click
    card.addEventListener("click", () => openModal(item));
    // Keyboard accessibility
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(item);
      }
    });

    container.appendChild(card);
  });

  // Trigger scroll reveal for newly added cards
  observeRevealElements();
}

// ─────────────────────────────────────────────
// 4. MODAL
// ─────────────────────────────────────────────
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalClose   = document.getElementById("modalClose");

/**
 * Opens the modal and populates it with item details.
 * @param {Object} item - A data entry from experienceData or projectsData
 */
function openModal(item) {
  const tagsHTML = item.tags
    .map((t) => `<span class="tag">${t}</span>`)
    .join("");

  const bulletHTML = item.details.highlights
    .map((h) => `<li>${h}</li>`)
    .join("");

  modalContent.innerHTML = `
    <p class="modal-eyebrow">${item.badge} · ${item.period}</p>
    <h2 class="modal-title" id="modalTitle">${item.title}</h2>
    <p class="modal-subtitle">${item.company}</p>
    <hr class="modal-divider" />
    <p class="modal-section-label">Highlights</p>
    <ul>${bulletHTML}</ul>
    <div class="modal-tags">${tagsHTML}</div>
  `;

  modalOverlay.classList.add("open");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Focus the close button for accessibility
  requestAnimationFrame(() => modalClose.focus());
}

function closeModal() {
  modalOverlay.classList.remove("open");
  modalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);

// Close on overlay backdrop click
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("open")) closeModal();
});

// ─────────────────────────────────────────────
// 5. NAVBAR
// ─────────────────────────────────────────────
const navbar    = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navLinks  = document.getElementById("navLinks");
const allNavLinks = document.querySelectorAll(".nav-link");

// Scroll shadow
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
}, { passive: true });

// Hamburger toggle
navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Close nav on link click (mobile)
allNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Active nav link on scroll (Intersection Observer)
const sections = document.querySelectorAll("section[id]");
const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        allNavLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
sections.forEach((s) => navObserver.observe(s));

// ─────────────────────────────────────────────
// 6. SCROLL REVEAL
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
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) =>
    revealObserver.observe(el)
  );
}

// ─────────────────────────────────────────────
// 7. CONTACT FORM (Netlify)
//    Netlify handles submission. This just adds
//    a polite success state for the user.
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
// 8. INIT
// ─────────────────────────────────────────────
(function init() {
  // Render cards from data arrays
  renderCards(experienceData, document.getElementById("experienceGrid"), "experience");
  renderCards(projectsData,   document.getElementById("projectsGrid"),   "project");

  // Observe static reveal elements (about section, etc.)
  document.querySelectorAll(".glass, .section-header, .stat, .timeline-item")
    .forEach((el) => el.classList.add("reveal"));
  observeRevealElements();
})();
