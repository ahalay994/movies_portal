<template>
	<form @submit.prevent='submitEvent' class='mb-4 flex gap-5'>
		<div>
			<label for='name'>Название</label>
			<input id='name' type='text' class='border' v-model='data.name'>
		</div>
		<div>
			<label for='slug'>Машинное имя</label>
			<input id='slug' type='text' class='border' v-model='data.slug' :disabled='data.id'>
		</div>
		<input type='submit' value='Сохранить' class='cursor-pointer border px-2 bg-blue-400'>
		<input @click.prevent='clearEvent' type='button' value='Очистить' class='cursor-pointer border px-2 bg-red-400'>
	</form>

	<div class='table w-full'>
		<div class='table__header'>
			<div>id</div>
			<div>Название</div>
			<div>Машинное имя</div>
			<div></div>
		</div>
		<div class='table__content py-4' v-for='(type, key) in typesMovies'>
			<div>{{ key + 1 }}</div>
			<div>{{ type.label }}</div>
			<div>{{ type.value }}</div>
			<div class='flex flex-col'>
				<button @click='editEvent(type)'>Изменить</button>
				<button @click='deleteEvent(type.id)'>Удалить</button>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { adminMoviesStore } from '@s/admin/movies'
import { storeToRefs } from 'pinia'
import MultiSelectInterface from '@i/MultiSelectInterface'
import { reactive } from 'vue'
import { TypeVideoInterface } from '@i/fitebase/MoviesDbInterface'

const { getTypesMovies, deleteTypesMovies, createTypesMovies, updateTypesMovies } = adminMoviesStore()
const { typesMovies } = storeToRefs(adminMoviesStore())

getTypesMovies()

const data: TypeVideoInterface = reactive({
	id: null,
	name: '',
	slug: ''
})

const clearEvent = () => {
	data.id = null
	data.name = ''
	data.slug = ''
}
const submitEvent = async () => {
	const type: TypeVideoInterface = data;
	if (type.id) {
		await updateTypesMovies({
			name: type.name,
			slug: type.slug
		}, type.id)
	} else {
		await createTypesMovies({
			name: type.name,
			slug: type.slug
		})
	}
	clearEvent()
}
const editEvent = (type: MultiSelectInterface) => {
	data.id = type.id
	data.name = type.label
	data.slug = type.value
}
const deleteEvent = async (id: string) => {
	const result = confirm('Вита, ты уверена, что хочешь это удалить?)');
	if (result) {
		await deleteTypesMovies(id)
		clearEvent()
	}
}
</script>

<style scoped lang='scss'>
.table {
	display: grid;
	grid-template-columns: 50px 1fr 1fr 180px;
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
