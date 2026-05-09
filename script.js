/**
 * Medical Research Resources Map – Application Logic
 *
 * Responsibilities:
 *  1. Render column titles, cards, and legend from APP_DATA.
 *  2. Tooltip on hover (follows cursor, positioned intelligently).
 *  3. Real-time search / filter.
 */

;(function () {
  "use strict";

  // ─── DOM refs ───
  const elTitles    = document.getElementById("column-titles");
  const elDashboard = document.getElementById("dashboard");
  const elLegend    = document.getElementById("legend");
  const elSearch    = document.getElementById("search-input");

  // ─── Tooltip element (singleton) ───
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.setAttribute("role", "tooltip");
  document.body.appendChild(tooltip);

  // ─── Set CSS custom property for column count ───
  const colCount = APP_DATA.categories.length;
  document.documentElement.style.setProperty("--col-count", colCount);

  // ═══════════════ Render ═══════════════

  /** Build a single card element */
  function createCard(card, delayIndex) {
    const a = document.createElement("a");
    a.className = "card";
    a.href = card.link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.style.setProperty("--card-accent", card.color);
    a.style.animationDelay = `${delayIndex * 40}ms`;
    a.dataset.tooltip = card.tooltip;
    a.dataset.title = card.title.toLowerCase();

    // Title
    const span = document.createElement("span");
    span.className = "card__title";
    span.textContent = card.title;
    a.appendChild(span);

    // Arrow icon
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("card__arrow");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M5 12h14M12 5l7 7-7 7");
    svg.appendChild(path);
    a.appendChild(svg);

    return a;
  }

  /** Render column titles row */
  function renderTitles() {
    const frag = document.createDocumentFragment();
    APP_DATA.categories.forEach((cat) => {
      const div = document.createElement("div");
      div.className = "column-title";
      div.textContent = cat.name;
      frag.appendChild(div);
    });
    elTitles.appendChild(frag);
  }

  /** Render all columns + cards */
  function renderDashboard() {
    const frag = document.createDocumentFragment();
    let globalIndex = 0;

    APP_DATA.categories.forEach((cat) => {
      const col = document.createElement("div");
      col.className = "column";

      cat.cards.forEach((card) => {
        col.appendChild(createCard(card, globalIndex++));
      });

      frag.appendChild(col);
    });

    elDashboard.appendChild(frag);
  }

  /** Render legend */
  function renderLegend() {
    const frag = document.createDocumentFragment();
    APP_DATA.legend.forEach((item) => {
      const el = document.createElement("div");
      el.className = "legend__item";

      const dot = document.createElement("span");
      dot.className = "legend__dot";
      dot.style.backgroundColor = item.color;

      const label = document.createElement("span");
      label.textContent = item.label;

      el.appendChild(dot);
      el.appendChild(label);
      frag.appendChild(el);
    });
    elLegend.appendChild(frag);
  }

  // ═══════════════ Tooltip ═══════════════

  /** Position tooltip near cursor, keeping it on-screen */
  function positionTooltip(e) {
    const pad   = 14;
    const vw    = window.innerWidth;
    const vh    = window.innerHeight;
    const rect  = tooltip.getBoundingClientRect();

    let x = e.clientX + pad;
    let y = e.clientY + pad;

    // Flip left if it would overflow right
    if (x + rect.width > vw - pad) {
      x = e.clientX - rect.width - pad;
    }
    // Flip up if it would overflow bottom
    if (y + rect.height > vh - pad) {
      y = e.clientY - rect.height - pad;
    }

    tooltip.style.left = `${x}px`;
    tooltip.style.top  = `${y}px`;
  }

  function showTooltip(text, e) {
    tooltip.textContent = text;
    tooltip.classList.add("tooltip--visible");
    positionTooltip(e);
  }

  function hideTooltip() {
    tooltip.classList.remove("tooltip--visible");
  }

  // Delegate events from the dashboard
  elDashboard.addEventListener("mouseenter", (e) => {
    const card = e.target.closest(".card");
    if (card?.dataset.tooltip) showTooltip(card.dataset.tooltip, e);
  }, true);

  elDashboard.addEventListener("mousemove", (e) => {
    if (tooltip.classList.contains("tooltip--visible")) positionTooltip(e);
  });

  elDashboard.addEventListener("mouseleave", (e) => {
    const card = e.target.closest(".card");
    if (card) hideTooltip();
  }, true);

  // ═══════════════ Search / Filter ═══════════════

  elSearch.addEventListener("input", () => {
    const query = elSearch.value.trim().toLowerCase();
    const cards = elDashboard.querySelectorAll(".card");

    cards.forEach((card) => {
      const match = !query || card.dataset.title.includes(query);
      card.classList.toggle("card--hidden", !match);
    });
  });

  // ═══════════════ Init ═══════════════
  renderTitles();
  renderDashboard();
  renderLegend();

})();
