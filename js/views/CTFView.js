// View: takes CTF log data, renders cards in a responsive grid
// (5 columns on wide screens, collapsing down on smaller ones — see css/style.css .ctf-grid).
function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

// Logo path comes from the "logo" field in data/ctf.json (e.g. "logoctf/BINGOlogo.png").
// Fallback shown when a logo file is missing or the field is left blank: initials in a mono badge.
function getInitials(name) {
  const words = name.replace(/[^\w\s]/g, " ").trim().split(/\s+/).filter(Boolean);
  return words.slice(0, 2).map(w => w[0].toUpperCase()).join("") || "?";
}

export const CTFView = {
  render(entries) {
    const grid = document.getElementById("ctf-grid");

    if (!entries.length) {
      grid.innerHTML = `<div class="empty-state">No CTFs logged yet — add one in data/ctf.json</div>`;
      return;
    }

    grid.innerHTML = entries.map(c => {
      const isOffline = /offline/i.test(c.leaderboard);
      return `
      <article class="ctf-card">
        <div class="ctf-card-head">
          <div class="ctf-logo-wrap" data-name="${c.name.replace(/"/g, "&quot;")}">
            ${c.logo
          ? `<img class="ctf-logo" src="${c.logo}" alt="${c.name} logo" loading="lazy">`
          : `<span class="ctf-logo-fallback">${getInitials(c.name)}</span>`}
          </div>
          <span class="rank${isOffline ? " offline" : ""}">${c.leaderboard}</span>
        </div>
        <h4>${c.name}</h4>
        <p class="meta">${formatDate(c.date)}</p>
        <p class="desc">${c.description}</p>
      </article>
    `;
    }).join("");

    // Swap any missing/broken logo image for an initials badge instead of a broken-image icon.
    grid.querySelectorAll(".ctf-logo").forEach(img => {
      img.addEventListener("error", () => {
        const wrap = img.closest(".ctf-logo-wrap");
        const fallback = document.createElement("span");
        fallback.className = "ctf-logo-fallback";
        fallback.textContent = getInitials(wrap.dataset.name);
        img.replaceWith(fallback);
      }, { once: true });
    });
  }
};