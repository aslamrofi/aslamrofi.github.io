// View: takes profile data, renders it. No logic beyond rendering.
export const ProfileView = {
  render(profile) {
    const bioEl = document.getElementById("about-bio");
    bioEl.innerHTML = profile.bio.map(p => `<p>${p}</p>`).join("");

    const skillsEl = document.getElementById("about-skills");
    skillsEl.innerHTML = `
      <h4 class="about-skills-title">Tools I work with</h4>
      <div class="tool-grid">
        ${profile.tools.map(t => `
          <div class="tool-item" title="${t.name}">
            <div class="tool-logo-wrap">
              <img src="${t.logo}" alt="${t.name} logo" class="tool-logo" loading="lazy"
                   onerror="this.outerHTML='<div class=&quot;tool-logo-fallback&quot;>${t.name.slice(0, 2).toUpperCase()}</div>'">
            </div>
            <span class="tool-name">${t.name}</span>
          </div>
        `).join("")}
      </div>
    `;
  }
};