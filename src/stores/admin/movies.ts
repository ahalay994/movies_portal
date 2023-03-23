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
	updateDoc,
	where,
	query,
	limit,
	startAfter,
	getCountFromServer,
	onSnapshot,
	deleteDoc,
	increment,
	setDoc,
} from 'firebase/firestore'
import { AdminMoviesStateInterface } from '@i/stores/AdminMoviesInterface'
import {
	MovieDbInterface,
	TagDbInterface,
	TypeVideoInterface,
} from '@i/fitebase/MoviesDbInterface'
import { QueryConstraint, QueryDocumentSnapshot } from '@firebase/firestore'

export const adminMoviesStore = defineStore('adminMovies', {
	state: () =>
		({
			movies: [],
			movie: {},
			typesMovies: [],
			tags: [],
			lastSnapshots: null,
			searchString: '',
			count: 0,
			currentCount: 0,
			limit: 10
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
		incField: async (typeData: string) => await setDoc(doc(db, '--stats--', 'counterFields'), { [typeData]: increment(1) }, { merge: true }),

		getTags() {
			onSnapshot(collection(db, 'tags'), (querySnapshot) => {
				const tags: any = []
				querySnapshot.forEach((doc) => {
					tags.push({
						id: doc.id,
						value: doc.data().name,
						label: doc.data().name,
					})
				})
				this.tags = tags
			})
		},
		getTagsList: async () => (await getDocs(collection(db, 'tags'))).docs.map((doc: QueryDocumentSnapshot) => doc.data().name),
		async createTag(tag: TagDbInterface) {
			await getDoc(doc(db, '--stats--', 'counterFields')).then(async (el: any) => {
				const counterFields = el.data()
				await setDoc(doc(db, 'tags', (counterFields['tags'] || 1).toString()), tag)
				await this.incField('tags')
			})
		},
		deleteTags: async (id: string) => await deleteDoc(doc(db, 'tags', id)),

		getTypesMovies() {
			onSnapshot(collection(db, 'typesVideo'), (querySnapshot) => {
				const typesMovies: any = []
				querySnapshot.forEach((doc) => {
					typesMovies.push({
						id: doc.id,
						value: doc.data().slug,
						label: doc.data().name,
					})
				})
				this.typesMovies = typesMovies
			})
		},
		async createTypesMovies(typeVideo: TypeVideoInterface) {
			await getDoc(doc(db, '--stats--', 'counterFields')).then(async (el: any) => {
				const counterFields = el.data()
				await setDoc(doc(db, 'typesVideo', (counterFields['typesVideo'] || 1).toString()), typeVideo)
				await this.incField('typesVideo')
			})
		},
		updateTypesMovies: async (data: object, id: string) => await updateDoc(doc(db, 'typesVideo', id), data),
		deleteTypesMovies: async (id: string) => await deleteDoc(doc(db, 'typesVideo', id)),

		getMovie: async (id: string) => (await getDoc(doc(db, 'movies', id))).data(),
		getMovieShow(id: string) {
			onSnapshot(doc(db, 'movies', id), (doc) => {
				this.movie = doc.data()
			})
		},
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
		async createMovie(movie: MovieDbInterface) {
			await getDoc(doc(db, '--stats--', 'counterFields')).then(async (el: any) => {
				const counterFields = el.data()
				await setDoc(doc(db, 'movies', (counterFields['movies'] || 1).toString()), movie)
				await this.incField('movies')
			})
		},
		updateMovie: async (data: object, id: string) => await updateDoc(doc(db, 'movies', id), data),
		deleteMovie: async (id: string) => await updateDoc(doc(db, 'movies', id), { deletedAt: new Date().toLocaleString('RU-ru') }),
		restoreMovie: async (id: string) => await updateDoc(doc(db, 'movies', id), { deletedAt: '-' }),

		getImage: async (urlImage: string) => await getDownloadURL(storageRef(storage, urlImage)),
		saveImage: async (image: Blob) => (await uploadBytes(storageRef(storage, image.name), image)).metadata.fullPath,
	},
})
