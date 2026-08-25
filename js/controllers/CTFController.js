import { CTFModel } from "../models/CTFModel.js";
import { CTFView } from "../views/CTFView.js";

export const CTFController = {
  async init() {
    try {
      const entries = await CTFModel.getAll();
      CTFView.render(entries);
    } catch (err) {
      console.error(err);
      CTFView.render([]);
    }
  }
};
