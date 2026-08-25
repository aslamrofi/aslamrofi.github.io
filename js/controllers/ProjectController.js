import { ProjectModel } from "../../../../../Users/HP/OneDrive/Desktop/aslamrofi.github.io/aslamrofi.github.io/js/models/ProjectModel.js";
import { ProjectView } from "../../../../../Users/HP/OneDrive/Desktop/aslamrofi.github.io/aslamrofi.github.io/js/views/ProjectView.js";

export const ProjectController = {
  async init() {
    try {
      const projects = await ProjectModel.getAll();
      ProjectView.render(projects);
    } catch (err) {
      console.error(err);
      ProjectView.render([]);
    }
  }
};
