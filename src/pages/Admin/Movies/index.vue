<template>
	<div class='p-4'>
		<h1 class='mb-4'>Список фильмов</h1>

		<suspense>
			<movies-table />
		</suspense>
	</div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, DefineComponent, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { adminMoviesStore } from '@s/admin/movies'

const MoviesTable = defineAsyncComponent<DefineComponent>(() => import('@p/Admin/Movies/_components/Table.vue') as any)
</script>
