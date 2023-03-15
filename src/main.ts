import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {VueFire, VueFireAuth} from 'vuefire'
import {onAuthStateChanged, User} from 'firebase/auth'
import '@/styles/index.scss'
import 'vue-select/dist/vue-select.css';
import router from '@r/index'
import {auth, firebaseApp} from '@/firebase/config'
import {useAuthStore} from "@s/useAuth";
import App from '@/App.vue'
import {registerLayouts} from "@/layouts/register";

const pinia = createPinia()

onAuthStateChanged(auth, async (user: User|null) => {
    const app = createApp(App);
    app
        .use(pinia)
        .use(router)
        .use(VueFire, {
            firebaseApp,
            modules: [
                VueFireAuth(),
            ],
        });
    app.mount('#app')
    registerLayouts(app);

    useAuthStore().user = user;
});
