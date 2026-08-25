// View: takes profile data, renders it. No logic beyond rendering.
export const ProfileView = {
  render(profile) {
    const bioEl = document.getElementById("about-bio");
    bioEl.innerHTML = profile.bio.map(p => `<p>${p}</p>`).join("");

    const skillsEl = document.getElementById("about-skills");
    skillsEl.innerHTML = Object.entries(profile.skills)
      .map(([group, items]) => `
        <div class="skill-group">
          <h4>${group}</h4>
          <div class="pill-row">
            ${items.map(i => `<span class="pill">${i}</span>`).join("")}
          </div>
        </div>
      `).join("");
  }
};
