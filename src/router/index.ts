import {
	createRouter,
	createWebHashHistory,
	createWebHistory,
	NavigationGuardNext,
	RouteLocationNormalized,
	RouteRecordRaw,
} from 'vue-router'
import Home from '@p/Home.vue'
import Register from '@p/Register.vue'
import Login from '@p/Login.vue'
import { useAuthStore } from '@s/useAuth'
import NotFound from '@p/NotFound.vue'

/** Admin **/
import Admin from '@p/Admin/index.vue'
/* Movies */
import AdminMovies from '@p/Admin/Movies/index.vue'
import AdminMoviesShow from '@p/Admin/Movies/Show.vue'
import AdminMoviesCreate from '@p/Admin/Movies/Create.vue'
import AdminMoviesEdit from '@p/Admin/Movies/Edit.vue'
import AdminMoviesArchive from '@p/Admin/Movies/Archive.vue'

const guest = (
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	next: NavigationGuardNext,
) => {
	useAuthStore().user ? next({ name: 'home' }) : next()
	// useAuthStore().user ? next() : next({name: 'notFound'});
}

const admin = (
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	next: NavigationGuardNext,
) => {
	useAuthStore().user ? next() : next({ name: 'notFound' })
	// useAuthStore().user ? next({name: 'home'}) : next();
}

const routes: Array<RouteRecordRaw> = [
	{
		name: 'notFound',
		path: '/404',
		component: NotFound,
		meta: {
			layout: 'Default',
		},
	},
	{
		name: 'home',
		path: '/',
		component: Home,
		meta: {
			layout: 'Default',
		},
	},
	{
		name: 'films',
		path: '/',
		component: Home,
		meta: {
			layout: 'Default',
		},
	},
	{
		name: 'series',
		path: '/',
		component: Home,
		meta: {
			layout: 'Default',
		},
	},
	{
		name: 'anime',
		path: '/',
		component: Home,
		meta: {
			layout: 'Default',
		},
	},
	{
		name: 'register',
		path: '/register',
		component: Register,
		beforeEnter: guest,
		meta: {
			layout: 'Default',
		},
	},
	{
		name: 'login',
		path: '/login',
		component: Login,
		beforeEnter: guest,
		meta: {
			layout: 'Default',
		},
	},

	/** Admin **/
	{
		name: 'admin',
		path: '/admin',
		component: Admin,
		beforeEnter: admin,
		meta: {
			layout: 'Admin',
		},
	},
	{
		name: 'adminMovies',
		path: '/admin/movies',
		component: AdminMovies,
		beforeEnter: admin,
		meta: {
			layout: 'Admin',
		},
	},
	{
		name: 'adminMoviesItem',
		path: '/admin/movies/:id',
		component: AdminMoviesShow,
		beforeEnter: admin,
		props: true,
		meta: {
			layout: 'Admin',
		},
	},
	{
		name: 'adminMoviesCreate',
		path: '/admin/movies/create',
		component: AdminMoviesCreate,
		beforeEnter: admin,
		meta: {
			layout: 'Admin',
		},
	},
	{
		name: 'adminMoviesEdit',
		path: '/admin/movies/edit/:id',
		component: AdminMoviesEdit,
		beforeEnter: admin,
		props: true,
		meta: {
			layout: 'Admin',
		},
	},
	{
		name: 'adminMoviesArchive',
		path: '/admin/movies/archive',
		component: AdminMoviesArchive,
		beforeEnter: admin,
		meta: {
			layout: 'Admin',
		},
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
