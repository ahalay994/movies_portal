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
	getCountFromServer,
	onSnapshot,
	deleteDoc,
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
			movies: [],
			movie: {},
			typesMovies: [],
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
		updateTypesMovies: async (data: object, id: string) => await updateDoc(doc(db, 'typesVideo', id), data),
		getTypesMovies() {
			onSnapshot(collection(db, "typesVideo"), (querySnapshot) => {
				const typesMovies: any = [];
				querySnapshot.forEach((doc) => {
					typesMovies.push({
						id: doc.id,
						value: doc.data().slug,
						label: doc.data().name,
					});
				});
				this.typesMovies = typesMovies;
			});
		},
		deleteTypesMovies: async(id: string) => await deleteDoc(doc(db, "typesVideo", id)),

		getMovies(isArchive: boolean = false) {
			const conditions: QueryConstraint[] = [where('deletedAt', isArchive ? '!=' : '==', '-')]

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

			const q = query(collection(db, 'movies'), ...conditions)

			onSnapshot(q, (querySnapshot) => {
				const movies: any = []
				querySnapshot.forEach((doc) => {
					movies.push({ id: doc.id, ...doc.data() })
				})
				this.movies = movies
			})
		},
		getMovie: async (id: string) => (await getDoc(doc(db, 'movies', id))).data(),
		getMovieShow(id: string) {
			onSnapshot(doc(db, "movies", id), (doc) => {
				this.movie = doc.data()
			});
		},
		updateMovie: async (data: object, id: string) => await updateDoc(doc(db, 'movies', id), data),
		saveMovie: async (data: MovieDbInterface) => await addDoc(collection(db, 'movies'), data),
		deleteMovie: async (id: string) => await updateDoc(doc(db, 'movies', id), { deletedAt: new Date().toLocaleString('RU-ru') }),
		restoreMovie: async (id: string) => await updateDoc(doc(db, 'movies', id), { deletedAt: '-' }),

		getImage: async (urlImage: string) => await getDownloadURL(storageRef(storage, urlImage)),
		saveImage: async (image: Blob) => (await uploadBytes(storageRef(storage, image.name), image)).metadata.fullPath,
	},
})
