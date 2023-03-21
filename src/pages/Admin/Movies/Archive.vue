<template>
	<div class='p-4'>
		<a @click.prevent='$router.go(-1)' class='inline-block border px-4 py-2 mb-4 bg-blue-400 hover:bg-blue-700 transition-all cursor-pointer'>&lt; Назад</a>
		<h1 class='mb-4'>Список удалённых фильмов</h1>

		<movies-table :is-archive='true' />
	</div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, DefineComponent } from 'vue'

const MoviesTable = defineAsyncComponent<DefineComponent>(() => import('@p/Admin/Movies/_components/Table.vue') as any)
</script>
