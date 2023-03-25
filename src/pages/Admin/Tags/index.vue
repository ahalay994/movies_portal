<template>
	<div>
		<h1 class='mb-4'>Теги</h1>

		<div class='table w-full'>
			<div class='table__header'>
				<div>id</div>
				<div>Название</div>
				<div></div>
			</div>
			<div class='table__content py-4' v-for='(tag, key) in tags'>
				<div>{{ key + 1 }}</div>
				<div>{{ tag.label }}</div>
				<div class='flex flex-col'>
					<button @click='deleteEvent(tag.id)'>Удалить</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { adminMoviesStore } from '@s/admin/movies'
import { storeToRefs } from 'pinia'

const { getTags, deleteTags } = adminMoviesStore()
const { tags } = storeToRefs(adminMoviesStore())

getTags()

const deleteEvent = async (id: string) => {
	const result = confirm('Вита, ты уверена, что хочешь это удалить?)');
	if (result) {
		await deleteTags(id)
	}
}
</script>

<style scoped lang='scss'>
.table {
	display: grid;
	grid-template-columns: 50px 1fr 180px;
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
