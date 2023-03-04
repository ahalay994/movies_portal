import {defineStore} from "pinia";

export const mainStore = defineStore('main', {
    state: () => {
        return {

        }
    },
    getters: {
        test: () => true,
    },
    actions: {
        test() {

        },
    },
})

