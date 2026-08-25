// Model: responsible only for fetching/holding project data.
export const ProjectModel = {
  async getAll() {
    const res = await fetch("data/projects.json");
    if (!res.ok) throw new Error("Failed to load projects.json");
    return res.json();
  }
};
