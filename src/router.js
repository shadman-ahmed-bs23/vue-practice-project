import { createRouter, createWebHistory} from 'vue-router';

import store from './store/index.js';

import Home from './views/Home.vue';
import About from './views/About.vue';
import UserAuth from './components/UserAuth.vue';

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/about',
		component: About,
	},
	{
		path: '/auth',
		component: UserAuth,
		meta: {
			requiresUnauth: true,
		},
	},
];



const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach(function(to, from, next) {
	if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
		next('/auth');
	} else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
		next('/');
	} else {
		next();
	}
});

export default router;