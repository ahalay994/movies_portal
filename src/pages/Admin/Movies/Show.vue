<template>
	<div class='px-4 py-2'>
		<a @click.prevent='$router.go(-1)' class='inline-block border px-4 py-2 mb-4 bg-blue-400 hover:bg-blue-700 transition-all cursor-pointer'>&lt; Назад</a>

		<h1 class='mb-4'>{{ movie.name }}</h1>
		<div class='flex flex-col gap-2'>
			<div class='border p-4'>
				<b class='label'>{{ fieldList.name }}</b>
				<div class='text'>{{ movie.name }}</div>
			</div>
			<div class='border p-4'>
				<b class='label'>{{ fieldList.description }}</b>
				<div class='text' v-html='movie.description' />
			</div>
			<div class='columns-3'>
				<suspense v-for='(image, key) in movie.images' :key='key'>
					<image-field :src='image' :alt='movie.name' max-width='300' />
				</suspense>
			</div>
			<div class='border p-4'>
				<b class='label'>{{ fieldList.type }}</b>
				<div class='text'>{{ getTypeMovieName(movie.type) }}</div>
			</div>
			<div class='border p-4'>
				<b class='label'>{{ fieldList.tags }}</b>
				<div class='text flex flex-wrap gap-2'>
					<span v-for='tag in movie.tags' class='p-2 bg-blue-200'>{{ tag }}</span>
				</div>
			</div>
			<div class='border p-4'>
				<b class='label'>{{ fieldList.createdAt }}</b>
				<div class='text'>{{ movie.createdAt }}</div>
			</div>
			<div class='border p-4'>
				<b class='label'>{{ fieldList.user }}</b>
				<div class='text'>{{ movie.user }}</div>
			</div>
			<div class='border p-4'>
				<b class='label'>{{ fieldList.updatedAt }}</b>
				<div class='text'>{{ movie.updatedAt }}</div>
			</div>
			<div class='border p-4'>
				<b class='label'>{{ fieldList.userUpdate }}</b>
				<div class='text'>{{ movie.userUpdate }}</div>
			</div>
			<div class='border p-4'>
				<b class='label'>{{ fieldList.deletedAt }}</b>
				<div class='text'>{{ movie.deletedAt }}</div>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { adminMoviesStore } from '@s/admin/movies'
import { storeToRefs } from 'pinia'
import { defineAsyncComponent, DefineComponent } from 'vue'
import MultiSelectInterface from '@i/MultiSelectInterface'

const ImageField = defineAsyncComponent<DefineComponent>(() => import('@c/Form/ImageField.vue') as any)

const { id } = defineProps<{ id: string }>()

const { getMovieShow, getTypesMovies } = adminMoviesStore()
const { movie, typesMovies } = storeToRefs(adminMoviesStore())

getTypesMovies()
getMovieShow(id)


const getTypeMovieName = (slug: string) => typesMovies.value?.filter((type: MultiSelectInterface) => type.value === slug)[0]?.label

const fieldList = {
	name: 'Название',
	description: 'Описание',
	images: 'Изображения',
	type: 'Тип',
	tags: 'Метки',
	createdAt: 'Дата создания',
	user: 'Пользователь, создавший запись',
	updatedAt: 'Дата обновления',
	userUpdate: 'Пользователь, последний обновивший запись',
	deletedAt: 'Дата удаления',
}

</script>

<style scoped lang='scss'>

</style>
