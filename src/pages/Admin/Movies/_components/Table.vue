<template>
	<div class='table w-full' v-if='movies.length'>
		<div class='table__header'>
			<div v-for='item in header' class='table__header-column'>{{ item }}</div>
		</div>
		<div class='table__content' v-for='({ id, images, name, type, tags }, key) in movies'>
			<div class='table__content_item'>{{ key + 1 }}</div>
			<div class='table__content_item flex flex-col gap-3'>
				<suspense v-for='image in images'>
					<image-field :src='image' :alt='name' />
				</suspense>
			</div>
			<div class='table__content_item'>{{ name }}</div>
			<div class='table__content_item'>{{ getTypeMovieName(type) }}</div>
			<div class='table__content_item'>
				<div class='tag' v-for='tag in tags'>{{ tag }}</div>
			</div>
			<div class='table__content_item flex flex-wrap flex-col items-center gap-2'>
				<router-link class='w-full text-center' :to="{ name: 'adminMoviesShow', params: { id } }">Подробнее</router-link>
				<router-link class='w-full text-center' :to="{ name: 'adminMoviesEdit', params: { id } }">Изменить</router-link>
				<button class='w-full text-center' v-if='isArchive' @click='restoreMovieEvent(id)'>Восстановить</button>
				<button class='w-full text-center' v-else @click='deleteMovieEvent(id)'>Удалить</button>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { adminMoviesStore } from '@s/admin/movies'
import ImageField from '@c/Form/ImageField.vue'
import { storeToRefs } from 'pinia'
import MultiSelectInterface from '@i/MultiSelectInterface'

const {isArchive} = withDefaults(defineProps<{isArchive: boolean}>(), {
	isArchive: false
})

const header = ['#', 'Изображение', 'Название', 'Тип', 'Теги', '']
const { getMovies, deleteMovie, restoreMovie, getTypesMovies } = adminMoviesStore()
const { movies, typesMovies } = storeToRefs(adminMoviesStore())

getTypesMovies()
getMovies(isArchive)

const getTypeMovieName = (slug: string) => typesMovies.value?.filter((type: MultiSelectInterface) => type.value === slug)[0]?.label
const deleteMovieEvent = async (id: string) => await deleteMovie(id)
const restoreMovieEvent = async (id: string) => {
	await restoreMovie(id)
	getMovies(isArchive)
}
</script>

<style scoped lang='scss'>
.table {
	display: grid;
	grid-template-columns: 50px 160px 1fr 80px 1fr 150px;
	grid-template-rows: auto;
	border: 1px solid #000123;

	&__header {
		display: contents;

		div {
			background: #003649;
			padding: 4px 8px;
			color: #ffffff;
		}
	}

	&__content {
		display: contents;

		&:nth-of-type(even) {
			.table__content_item {
				background-color: #c3ffc2;
			}
		}

		&_item {
			padding: 8px 8px;
		}
	}
}
</style>
