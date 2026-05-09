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

  // ─── Tooltip element (singleton) ───
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.setAttribute("role", "tooltip");

  const tooltipTitle = document.createElement("div");
  tooltipTitle.className = "tooltip__title";
  tooltip.appendChild(tooltipTitle);

  const tooltipBody = document.createElement("div");
  tooltipBody.className = "tooltip__body";
  tooltip.appendChild(tooltipBody);

  const tooltipArrow = document.createElement("div");
  tooltipArrow.className = "tooltip__arrow";
  tooltip.appendChild(tooltipArrow);

  document.body.appendChild(tooltip);

  // ─── Set CSS custom property for column count ───
  const colCount = APP_DATA.categories.length;
  document.documentElement.style.setProperty("--col-count", colCount);

  // ═══════════════ SVG Helpers ═══════════════
  // ... (SVG code omitted for brevity but preserved)

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

    pathD.forEach((d) => {
      const el = document.createElementNS("http://www.w3.org/2000/svg", "path");
      el.setAttribute("d", d);
      svg.appendChild(el);
    });

    return svg;
  }

  const INFO_PATHS = ["M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z", "M12 16v-4", "M12 8h.01"];
  const EXTLINK_PATHS = ["M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", "M15 3h6v6", "M10 14L21 3"];
  const CHEVRON_PATHS = ["M6 9l6 6 6-6"];

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
    a.dataset.title = card.title.toLowerCase();
    a.dataset.tooltipTitle = card.title;
    a.dataset.tooltipBody = card.tooltip;

    const header = document.createElement("div");
    header.className = "card__header";

    const title = document.createElement("h3");
    title.className = "card__title";
    title.textContent = card.title;
    header.appendChild(title);

    const icons = document.createElement("div");
    icons.className = "card__icons";
    icons.appendChild(makeSvg("card__icon--info", INFO_PATHS));
    icons.appendChild(makeSvg("card__icon--link", EXTLINK_PATHS));

    header.appendChild(icons);
    a.appendChild(header);

    const desc = document.createElement("p");
    desc.className = "card__desc";
    desc.textContent = card.tooltip;
    a.appendChild(desc);

    return a;
  }

  /** Render column titles row */
  function renderTitles() {
    const frag = document.createDocumentFragment();
    APP_DATA.categories.forEach((cat, idx) => {
      const div = document.createElement("div");
      div.className = "column-title";
      div.dataset.index = idx;

      const name = document.createElement("div");
      name.className = "column-title__name";
      name.textContent = cat.name;
      div.appendChild(name);

      const desc = document.createElement("div");
      desc.className = "column-title__desc";
      desc.textContent = cat.description || "";
      div.appendChild(desc);

      // Add chevron for mobile
      const chevron = makeSvg("column-title__chevron", CHEVRON_PATHS);
      div.appendChild(chevron);

      frag.appendChild(div);
    });
    elTitles.appendChild(frag);
  }

  function renderDashboard() {
    const frag = document.createDocumentFragment();
    let globalIndex = 0;
    APP_DATA.categories.forEach((cat, idx) => {
      const col = document.createElement("div");
      col.className = "column";
      col.dataset.index = idx;
      cat.cards.forEach((card) => {
        col.appendChild(createCard(card, globalIndex++));
      });
      frag.appendChild(col);
    });
    elDashboard.appendChild(frag);
  }

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

  function showTooltip(card) {
    tooltipTitle.textContent = card.dataset.tooltipTitle;
    tooltipBody.textContent = card.dataset.tooltipBody;

    const iconArea = card.querySelector(".card__icons");
    const rect = iconArea.getBoundingClientRect();

    // Position tooltip
    const tooltipWidth = 256;
    const padding = 10;
    
    let left = rect.left + rect.width / 2 - tooltipWidth / 2;
    let top = rect.top - padding; // Base position (above)

    // Ensure it doesn't go off left/right
    left = Math.max(10, Math.min(window.innerWidth - tooltipWidth - 10, left));

    // Visibility before measuring height
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `-9999px`;
    tooltip.classList.add("tooltip--visible");
    
    const tooltipHeight = tooltip.offsetHeight;
    
    // Check if it fits above (considering titles row ~60px)
    const spaceAtTop = rect.top;
    if (spaceAtTop < tooltipHeight + 20) {
      // Flip below
      top = rect.bottom + padding;
      tooltip.classList.add("tooltip--flipped");
    } else {
      top = rect.top - tooltipHeight - padding;
      tooltip.classList.remove("tooltip--flipped");
    }

    tooltip.style.top = `${top}px`;
  }

  function hideTooltip() {
    tooltip.classList.remove("tooltip--visible");
  }

  elDashboard.addEventListener("mouseenter", (e) => {
    const card = e.target.closest(".card");
    if (card) showTooltip(card);
  }, true);

  elDashboard.addEventListener("mouseleave", (e) => {
    const card = e.target.closest(".card");
    if (card) hideTooltip();
  }, true);

  // ═══════════════ Accordion Toggle (Mobile) ═══════════════

  elTitles.addEventListener("click", (e) => {
    // Only toggle if we are in mobile view (< 1024px)
    if (window.innerWidth > 1024) return;

    const title = e.target.closest(".column-title");
    if (!title) return;

    const idx = title.dataset.index;
    const col = elDashboard.querySelector(`.column[data-index="${idx}"]`);
    
    if (col) {
      const isExpanded = col.classList.toggle("column--expanded");
      title.classList.toggle("column-title--expanded", isExpanded);
    }
  });

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
