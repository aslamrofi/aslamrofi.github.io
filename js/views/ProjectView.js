// View: takes project data, renders cards. No logic beyond rendering.
export const ProjectView = {
  render(projects) {
    const grid = document.getElementById("project-grid");

    if (!projects.length) {
      grid.innerHTML = `<div class="empty-state">No projects yet — add one in data/projects.json</div>`;
      return;
    }

    grid.innerHTML = projects.map(p => `
      <article class="project-card">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="tag-row">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="project-links">
          ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">repo →</a>` : ""}
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">demo →</a>` : ""}
        </div>
      </article>
    `).join("");
  }
};
