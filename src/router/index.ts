import {createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw} from 'vue-router';
import Home from "@p/Home.vue";
import Register from "@p/Register.vue";
import Login from "@p/Login.vue";
import Logout from "@p/Logout.vue";
import {useAuthStore} from "@s/useAuth";

const isAuth = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    useAuthStore().user ? next({name: 'home'}) : next();
}

const routes: Array<RouteRecordRaw> = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
        beforeEnter: isAuth,
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        beforeEnter: isAuth,
    },
    {
        name: 'logout',
        path: '/logout',
        component: Logout,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
