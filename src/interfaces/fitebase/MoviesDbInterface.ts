export default interface MoviesDbInterface {
    name: string
    description: string
    images: string[]
    tags: string[]
    type: string
    user: string | null
    userUpdate?: string | null
    createdAt: string
    updatedAt?: string
}