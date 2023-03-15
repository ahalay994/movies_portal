import {defineStore} from "pinia";
import {_RefDatabase, useDatabaseList, VueDatabaseQueryData, useDatabaseObject} from 'vuefire';
import {push, ref as dbRef, update} from 'firebase/database';
import {db, storage} from "@/firebase/config";
import {ref as storageRef, uploadBytes, getDownloadURL} from "firebase/storage";

const dbTagsRef = dbRef(db, 'tags');
const dbTypesVideoRef = dbRef(db, 'typesVideo');
const dbListRef = dbRef(db, 'list');

interface List {
    id: number
    $value: string
}

interface ListInterface {
    description: string
    images: string[]
    name: string
    tags: string[]
    type: string
    user: string | null
    id?: number
}

interface StateInterface {
    menuToggleState: boolean
    typesVideo: _RefDatabase<VueDatabaseQueryData<List>>
    tags: _RefDatabase<VueDatabaseQueryData<List>>
    list: _RefDatabase<VueDatabaseQueryData<ListInterface>>
}

export const adminMainStore = defineStore('adminMain', {
    state: () =>
        ({
            menuToggleState: false,
            typesVideo: useDatabaseList(dbTypesVideoRef),
            tags: useDatabaseList(dbTagsRef),
            list: useDatabaseList(dbListRef),
        } as StateInterface),
    getters: {
        getTags(): string[] {
            return this.tags.reduce((acc: string[], item: List) => item.$value ? [...acc, item.$value] : acc, []);
        },
        getTypesVideo(): string[] {
            return this.typesVideo.reduce((acc: string[], item: List) => item.$value ? [...acc, item.$value] : acc, []);
        },
    },
    actions: {
        createTag: (tag: string) => push(dbTagsRef, tag),
        getFilm: (id: string) => useDatabaseObject(dbRef(db, `list/${id}`)),
        updateData: async (data: object, id: string) =>  update(dbRef(db, `list/${id}`), data),
        saveData: async (data: object) => push(dbRef(db, 'list'), data),
        saveImage: async (image: Blob) => (await uploadBytes(storageRef(storage, image.name), image)).metadata.fullPath,
        downloadImage: async (urlImage: string) => await getDownloadURL(storageRef(storage, urlImage)),
    },
})

