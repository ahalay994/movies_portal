<template>
	<div class='px-4 py-2'>
		<a @click.prevent='$router.go(-1)' class='inline-block border px-4 py-2 mb-4 bg-blue-400 hover:bg-blue-700 transition-all cursor-pointer'>&lt; Назад</a>
		<h1 class='mb-4 text-3xl font-bold'>Добавить</h1>

		<suspense>
			<admin-movies-form @save='save' />
		</suspense>
	</div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, DefineComponent } from 'vue'
import { adminMoviesStore } from '@s/admin/movies'
import { useAuthStore } from '@s/useAuth'
import router from '@/router'
import { MovieFormInterface } from '@i/form/MovieFormInterface'

const AdminMoviesForm = defineAsyncComponent<DefineComponent>(() => import('@p/Admin/Movies/_components/Form.vue') as any)

const { saveImage, createMovie } = adminMoviesStore()
const { user } = useAuthStore()

const save = async (formFields: MovieFormInterface) => {
	const imageUrls: string[] = []
	for (const { file } of formFields.images) {
		if (file) {
			imageUrls.push(await saveImage(file))
		}
	}

	await createMovie({
		name: formFields.name,
		images: imageUrls,
		type: formFields.type,
		tags: formFields.tags,
		description: formFields.description,
		user: user?.displayName || user?.email,
		userUpdate: '-',
		createdAt: new Date().toLocaleString('ru-RU'),
		updatedAt: '-',
		deletedAt: '-',
	})
		.catch((error: Error) => console.error(error))
		.finally(() => router.push({ name: 'adminMovies' }))
}
</script>
