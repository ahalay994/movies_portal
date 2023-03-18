import {defineStore} from "pinia";
import {useDatabaseList, useDatabaseObject} from 'vuefire';
import {push, ref as dbRef, update} from 'firebase/database';
import {db, storage} from "@/firebase/config";
import {ref as storageRef, uploadBytes, getDownloadURL} from "firebase/storage";
import {AdminMoviesStateInterface} from "@i/stores/AdminMoviesInterface";

export const adminMoviesStore = defineStore('adminMain', {
    state: () =>
        ({
            menuToggleState: false,
        } as AdminMoviesStateInterface),
    getters: {},
    actions: {
        createTag: (tag: string) => push(dbRef(db, 'tags'), tag),
        getTags: async () => (useDatabaseList(dbRef(db, 'tags'))).promise.value,

        getTypesMovies: async () => (useDatabaseList(dbRef(db, 'typesVideo'))).promise.value,

        getMovies: async () => (await useDatabaseList(dbRef(db, `list`))).promise.value,
        getMovie: async (id: string) => (await useDatabaseObject(dbRef(db, `list/${id}`))).promise.value,
        updateMovie: async (data: object, id: string) => update(dbRef(db, `list/${id}`), data),
        saveMovie: async (data: object) => push(dbRef(db, 'list'), data),

        getImage: async (urlImage: string) => await getDownloadURL(storageRef(storage, urlImage)),
        saveImage: async (image: Blob) => (await uploadBytes(storageRef(storage, image.name), image)).metadata.fullPath,
    },
})

