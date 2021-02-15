import { createStore } from "vuex";
import userInfo from "./modules/userInfo";
console.log(userInfo);
const store = createStore({
  modules: {
    userInfo,
  },
});

export default store;
