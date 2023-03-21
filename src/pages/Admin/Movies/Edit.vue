<template>
	<div class='px-4 py-2'>
		<a @click.prevent='$router.go(-1)' class='inline-block border px-4 py-2 mb-4 bg-blue-400 hover:bg-blue-700 transition-all cursor-pointer'>&lt; Назад</a>
		<h1 class='mb-4 text-3xl font-bold'>Редактировать запись</h1>

		<suspense>
			<admin-movies-form :id='id' @save='save' />
		</suspense>
	</div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, DefineComponent } from 'vue'
import { adminMoviesStore } from '@s/admin/movies'
import { useAuthStore } from '@s/useAuth'
import { MovieFormInterface } from '@i/form/MovieFormInterface'
import router from '@/router'

const AdminMoviesForm = defineAsyncComponent<DefineComponent>(() => import('@p/Admin/Movies/_components/Form.vue') as any)

const { id } = defineProps<{ id: string }>()
const { saveImage, updateMovie } = adminMoviesStore()
const { user } = useAuthStore()

const save = async (formFields: MovieFormInterface) => {
	const imageUrls: string[] = []
	for (const { path, file } of formFields.images) {
		file ? imageUrls.push(await saveImage(file)) : imageUrls.push(path)
	}

	await updateMovie(
		{
			...formFields,
			images: imageUrls,
			userUpdate: user?.displayName || user?.email,
			updatedAt: new Date().toLocaleString('ru-RU'),
		},
		id,
	).finally(() => router.push({ name: 'adminMovies' }))
}
</script>
