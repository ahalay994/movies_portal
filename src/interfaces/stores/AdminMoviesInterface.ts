import { MovieDbInterface } from '@i/fitebase/MoviesDbInterface'

export interface AdminMoviesStateInterface {
	movies: [] | any[] | any
	movie: MovieDbInterface | any[] | any
	typesMovies: [] | any[] | any
	tags: [] | any[] | any
	lastSnapshots: any | null
	searchString: string
	limit: number
	count: number
	currentCount: number
}
