import { ProjectModel } from "../models/ProjectModel.js";
import { ProjectView } from "../views/ProjectView.js";

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
