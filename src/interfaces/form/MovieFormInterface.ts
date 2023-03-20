import ImageInterface from '@i/ImageInterface'

export interface MovieFormInterface {
	name: string
	description: string
	type: string
	images: ImageInterface[]
	tags: string[]
}