import {defineStore} from "pinia"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {updateProfile} from 'firebase/auth'
import {auth} from "@/firebase/config"
import router from "@/router"
import {UseAuthStateInterface} from "@i/stores/UseAuthStateInterface"

export const useAuthStore = defineStore('useAuth', {
    state: (): UseAuthStateInterface => {
        return {
            email: '',
            password: '',
            name: '',
            user: null,
        }
    },
    getters: {},
    actions: {
        async signup() {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password)
                await updateProfile(userCredential.user, {
                    displayName: this.name
                })
                this.user = userCredential.user
                await router.push({name: 'home'})
            } catch (e) {
                alert(e)
            }
        },
        async login() {
            try {
                await signInWithEmailAndPassword(auth, this.email, this.password)
                await router.push({name: 'home'})
            } catch (e) {
                alert(e);
            }
        },
        async logout() {
            await signOut(auth)
            await router.push({name: 'home'})
            this.email = ''
            this.password = ''
            this.name = ''
        },
    },
})

