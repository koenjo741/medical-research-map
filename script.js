/**
 * Medical Research Resources Map – Application Logic
 *
 * Responsibilities:
 *  1. Render column titles, cards, and legend from APP_DATA.
 *  2. Tooltip on hover over ⓘ icon (anchored above icon, matching HIS Standard Map).
 *  3. Real-time search / filter.
 */

;(function () {
  "use strict";

  // ─── DOM refs ───
  const elTitles    = document.getElementById("column-titles");
  const elDashboard = document.getElementById("dashboard");
  const elLegend    = document.getElementById("legend");
  const elSearch    = document.getElementById("search-input");

  // ─── Set CSS custom property for column count ───
  const colCount = APP_DATA.categories.length;
  document.documentElement.style.setProperty("--col-count", colCount);

  // ═══════════════ SVG Helpers ═══════════════

  /** Create an SVG element with Feather-style attributes */
  function makeSvg(className, pathD) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("card__icon", className);
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");

    // Support multiple path segments
    pathD.forEach((d) => {
      const el = /^[MLHVCSQTAZ]/i.test(d)
        ? (() => { const p = document.createElementNS("http://www.w3.org/2000/svg", "path"); p.setAttribute("d", d); return p; })()
        : null;
      if (el) svg.appendChild(el);
    });

    return svg;
  }

  /** Info (ⓘ) icon paths – Feather "info" */
  const INFO_PATHS = [
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z",
    "M12 16v-4",
    "M12 8h.01",
  ];

  /** External link (↗) icon paths – Feather "external-link" */
  const EXTLINK_PATHS = [
    "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    "M15 3h6v6",
    "M10 14L21 3",
  ];

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
    a.dataset.tooltipTitle = card.title;
    a.dataset.tooltipBody  = card.tooltip;
    a.dataset.title = card.title.toLowerCase();

    // ── Header row (title + icons) ──
    const header = document.createElement("div");
    header.className = "card__header";

    const title = document.createElement("h3");
    title.className = "card__title";
    title.textContent = card.title;
    header.appendChild(title);

    const icons = document.createElement("div");
    icons.className = "card__icons";

    // Info icon (ⓘ) – tooltip anchor
    const infoIcon = makeSvg("card__icon--info", INFO_PATHS);
    icons.appendChild(infoIcon);

    // External link icon (↗)
    const extIcon = makeSvg("card__icon--link", EXTLINK_PATHS);
    icons.appendChild(extIcon);

    // Tooltip element (lives inside icons wrapper for absolute positioning)
    const tooltipEl = document.createElement("div");
    tooltipEl.className = "tooltip";
    tooltipEl.setAttribute("role", "tooltip");

    const tooltipTitle = document.createElement("div");
    tooltipTitle.className = "tooltip__title";
    tooltipTitle.textContent = card.title;
    tooltipEl.appendChild(tooltipTitle);

    const tooltipBody = document.createElement("div");
    tooltipBody.className = "tooltip__body";
    tooltipBody.textContent = card.tooltip;
    tooltipEl.appendChild(tooltipBody);

    const tooltipArrow = document.createElement("div");
    tooltipArrow.className = "tooltip__arrow";
    tooltipEl.appendChild(tooltipArrow);

    icons.appendChild(tooltipEl);
    header.appendChild(icons);
    a.appendChild(header);

    // ── Description (first 2 lines of tooltip text, light grey) ──
    const desc = document.createElement("p");
    desc.className = "card__desc";
    desc.textContent = card.tooltip;
    a.appendChild(desc);

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

  // ═══════════════ Tooltip (hover on card) ═══════════════

  /** Show tooltip anchored above the icons area when hovering the card */
  elDashboard.addEventListener("mouseenter", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;

    const tooltipEl = card.querySelector(".tooltip");
    if (tooltipEl) tooltipEl.classList.add("tooltip--visible");
  }, true);

  elDashboard.addEventListener("mouseleave", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;

    const tooltipEl = card.querySelector(".tooltip");
    if (tooltipEl) tooltipEl.classList.remove("tooltip--visible");
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
