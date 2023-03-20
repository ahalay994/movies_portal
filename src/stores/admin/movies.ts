import { defineStore } from 'pinia'
import { db, storage } from '@/firebase/config'
import {
	ref as storageRef,
	uploadBytes,
	getDownloadURL,
} from 'firebase/storage'
import {
	collection,
	getDocs,
	doc,
	getDoc,
	addDoc,
	updateDoc,
	where,
	query,
	limit,
	orderBy,
	startAfter,
	getCountFromServer
} from 'firebase/firestore'
import { AdminMoviesStateInterface } from '@i/stores/AdminMoviesInterface'
import {
	MovieDbInterface,
	TagDbInterface,
	TypeMovieInterface,
} from '@i/fitebase/MoviesDbInterface'
import { QueryConstraint, QueryDocumentSnapshot } from '@firebase/firestore'

export const adminMoviesStore = defineStore('adminMovies', {
	state: () =>
		({
			menuToggleState: false,
			lastSnapshots: null,
			searchString: '',
			count: 0,
			currentCount: 0,
			limit: 10,
		} as AdminMoviesStateInterface),
	getters: {
		async getCount(): Promise<number> {
			if (this.count) {
				return this.count
			} else {
				const coll = collection(db, 'movies')
				const snapshot = await getCountFromServer(coll)
				return snapshot.data().count
			}
		},
	},
	actions: {
		createTag: async (tag: TagDbInterface) => await addDoc(collection(db, 'tags'), tag),
		getTags: async () => (await getDocs(collection(db, 'tags'))).docs.map((doc: QueryDocumentSnapshot) => doc.data().name),

		createTypesMovies: async (typeMovie: TypeMovieInterface) => await addDoc(collection(db, 'typesVideo'), typeMovie),
		getTypesMovies: async () => (await getDocs(collection(db, 'typesVideo'))).docs.map((doc: QueryDocumentSnapshot) => ({
			value: doc.data().slug,
			label: doc.data().name
		})),

		async getMovies() {
			const conditions: QueryConstraint[] = [where('deletedAt', '==', false)]

			/** Поиск **/
			if (this.searchString) {
				this.lastSnapshots = null
				this.count = 0
				conditions.push(where('name', '==', this.searchString))
			}

			/** Получение последнего Snapshots **/
			if (this.lastSnapshots) {
				conditions.push(startAfter(this.lastSnapshots))
			}

			/** Лимит **/
			conditions.push(limit(this.limit))

			const dbQuery = query(collection(db, 'movies'), ...conditions)
			const documentSnapshots = await getDocs(dbQuery)

			// this.lastSnapshots = documentSnapshots.docs[documentSnapshots.docs.length - 1]
			this.currentCount += this.limit
			return documentSnapshots.docs.map((doc: QueryDocumentSnapshot) => ({ id: doc.id, ...doc.data() }))
		},
		getMovie: async (id: string) => (await getDoc(doc(db, 'movies', id))).data(),
		updateMovie: async (data: object, id: string) => await updateDoc(doc(db, 'movies', id), data),
		saveMovie: async (data: MovieDbInterface) => await addDoc(collection(db, 'movies'), data),
		deleteMovie: async (id: string) => await updateDoc(doc(db, 'movies', id), { deleteAt: new Date().toLocaleString('RU-ru') }),
		restoreMovie: async (id: string) => await updateDoc(doc(db, 'movies', id), { deleteAt: null }),

		getImage: async (urlImage: string) => await getDownloadURL(storageRef(storage, urlImage)),
		saveImage: async (image: Blob) => (await uploadBytes(storageRef(storage, image.name), image)).metadata.fullPath,
	},
})
