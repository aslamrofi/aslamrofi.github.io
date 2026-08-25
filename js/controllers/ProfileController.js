import { ProfileModel } from "../../../../../Users/HP/OneDrive/Desktop/aslamrofi.github.io/aslamrofi.github.io/js/models/ProfileModel.js";
import { ProfileView } from "../../../../../Users/HP/OneDrive/Desktop/aslamrofi.github.io/aslamrofi.github.io/js/views/ProfileView.js";

export const ProfileController = {
  init() {
    ProfileView.render(ProfileModel);
  }
};
