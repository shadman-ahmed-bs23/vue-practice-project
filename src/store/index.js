import { createStore } from "vuex";
import userInfo from "./modules/userInfo";
import authModule from './modules/auth/index.js';
import postsModule from './modules/posts/index.js';
//console.log(userInfo);
const store = createStore({
  modules: {
    userInfo,
    auth: authModule,
    posts: postsModule,
  },
});

export default store;
