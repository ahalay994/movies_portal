import {defineStore} from "pinia";

export const mainStore = defineStore('main', {
    state: () => {
        return {
            menu: [
                {
                    title: 'Фильмы',
                    slug: 'films',
                },
                {
                    title: 'Сериалы',
                    slug: 'series',
                },
                {
                    title: 'Аниме',
                    slug: 'anime',
                },
            ]
        }
    },
    getters: {

    },
    actions: {

    },
})

