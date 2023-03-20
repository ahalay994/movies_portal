<template>
	<div class='p-4'>
		<h1 class='mb-4'>Список фильмов</h1>

		<suspense>
			<movies-table />
		</suspense>
	</div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, DefineComponent } from 'vue'

const MoviesTable = defineAsyncComponent<DefineComponent>(() => import('@p/Admin/Movies/_components/Table.vue') as any)
</script>
