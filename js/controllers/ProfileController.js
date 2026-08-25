import { ProfileModel } from "../models/ProfileModel.js";
import { ProfileView } from "../views/ProfileView.js";

export const ProfileController = {
  init() {
    ProfileView.render(ProfileModel);
  }
};