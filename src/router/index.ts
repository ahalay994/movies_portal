import {createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw} from 'vue-router';
import Home from "@p/Home.vue";
import Register from "@p/Register.vue";
import Login from "@p/Login.vue";
import {useAuthStore} from "@s/useAuth";
import NotFound from "@p/NotFound.vue";

/** Admin **/
import Admin from "@p/Admin/index.vue";
/* List */
import AdminList from "@p/Admin/List/index.vue";
import AdminListShow from "@p/Admin/List/Show.vue";
import AdminListCreate from "@p/Admin/List/Create.vue";
import AdminListEdit from "@p/Admin/List/Edit.vue";
import AdminListArchive from "@p/Admin/List/Archive.vue";

const guest = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    useAuthStore().user ? next({name: 'home'}) : next();
    // useAuthStore().user ? next() : next({name: 'notFound'});
}

const admin = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    useAuthStore().user ? next() : next({name: 'notFound'});
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
        name: 'adminList',
        path: '/admin/list',
        component: AdminList,
        beforeEnter: admin,
        meta: {
            layout: 'Admin',
        },
    },
    {
        name: 'adminListItem',
        path: '/admin/list/:id',
        component: AdminListShow,
        beforeEnter: admin,
        props: true,
        meta: {
            layout: 'Admin',
        },
    },
    {
        name: 'adminListCreate',
        path: '/admin/list/create',
        component: AdminListCreate,
        beforeEnter: admin,
        meta: {
            layout: 'Admin',
        },
    },
    {
        name: 'adminListEdit',
        path: '/admin/list/edit/:id',
        component: AdminListEdit,
        beforeEnter: admin,
        props: true,
        meta: {
            layout: 'Admin',
        },
    },
    {
        name: 'adminListArchive',
        path: '/admin/list/archive',
        component: AdminListArchive,
        beforeEnter: admin,
        meta: {
            layout: 'Admin',
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
