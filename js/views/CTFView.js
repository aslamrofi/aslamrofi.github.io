// View: takes CTF log data, renders cards in a responsive grid
// (5 columns on wide screens, collapsing down on smaller ones — see css/style.css .ctf-grid).
export const CTFView = {
  render(entries) {
    const grid = document.getElementById("ctf-grid");

    if (!entries.length) {
      grid.innerHTML = `<div class="empty-state">No CTFs logged yet — add one in data/ctf.json</div>`;
      return;
    }

    grid.innerHTML = entries.map(c => `
      <article class="ctf-card">
        <span class="rank">${c.rank}</span>
        <h4>${c.name}</h4>
        <p class="meta">${c.date} · ${c.team}</p>
        <div class="cats">
          ${c.categories.map(cat => `<span class="cat">${cat}</span>`).join("")}
        </div>
        ${c.writeup ? `<a class="writeup" href="${c.writeup}" target="_blank" rel="noopener">write-up →</a>` : ""}
      </article>
    `).join("");
  }
};
