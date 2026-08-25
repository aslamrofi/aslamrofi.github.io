// View: takes CTF log data, renders cards in a responsive grid
// (5 columns on wide screens, collapsing down on smaller ones — see css/style.css .ctf-grid).
function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
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
        <span class="rank${isOffline ? " offline" : ""}">${c.leaderboard}</span>
        <h4>${c.name}</h4>
        <p class="meta">${formatDate(c.date)}</p>
        <p class="desc">${c.description}</p>
      </article>
    `;
    }).join("");
  }
};