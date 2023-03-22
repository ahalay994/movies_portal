export interface MovieDbInterface {
	name: string
	description: string
	images: string[]
	tags: string[]
	type: string
	user: string | null | undefined
	userUpdate: string | null | undefined | boolean
	createdAt: string
	updatedAt: string | boolean
	deletedAt: string | boolean | null
}

export interface TagDbInterface {
	name: string
}

export interface TypeVideoInterface {
	id?: string | null | undefined
	name: string
	slug: string
}
