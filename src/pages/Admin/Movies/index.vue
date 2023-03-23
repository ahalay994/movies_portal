<template>
	<div class='p-4'>
		<div class='flex justify-between mb-3'>
			<h1 class='mb-4'>Список фильмов</h1>
			<div class='flex gap-4'>
				<router-link
					class='border py-2 px-4 hover:bg-amber-50 transition-all hover:-translate-x-2/4 hover:translate-y-4'
					:to='{name: "adminMoviesArchive"}'>Архив
				</router-link>
				<router-link
					class='border py-2 px-4 hover:bg-amber-50 transition-all hover:translate-x-2 hover:translate-y-4'
					:to='{name: "adminMoviesCreate"}'>Добавить фильм
				</router-link>
			</div>
		</div>

		<movies-table :is-archive='false' />
	</div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, DefineComponent } from 'vue'

const MoviesTable = defineAsyncComponent<DefineComponent>(() => import('@p/Admin/Movies/_components/Table.vue') as any)
</script>
