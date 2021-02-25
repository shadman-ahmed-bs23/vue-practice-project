import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  state() {
    return {
      userId: localStorage.getItem("id") || null,
      token: localStorage.getItem("token") || null,
      tokenExpiration: null,
    };
  },
  mutations,
  actions,
  getters,
};