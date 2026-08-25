import { CTFModel } from "../../../../../Users/HP/OneDrive/Desktop/aslamrofi.github.io/aslamrofi.github.io/js/models/CTFModel.js";
import { CTFView } from "../../../../../Users/HP/OneDrive/Desktop/aslamrofi.github.io/aslamrofi.github.io/js/views/CTFView.js";

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
