import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {VueFire, VueFireAuth} from 'vuefire'
import {onAuthStateChanged, User} from 'firebase/auth'
import '@/styles/index.scss'
import router from '@r/index'
import {auth, firebaseApp} from '@/firebase/config'
import {useAuthStore} from "@s/useAuth";
import App from '@/App.vue'

const pinia = createPinia()

onAuthStateChanged(auth, async (user: User|null) => {
    createApp(App)
        .use(pinia)
        .use(router)
        .use(VueFire, {
            firebaseApp,
            modules: [
                VueFireAuth(),
            ],
        })
        .mount('#app')

    useAuthStore().user = user;
});
