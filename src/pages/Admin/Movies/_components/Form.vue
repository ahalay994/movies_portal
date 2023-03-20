<template>
	<v-form @submit='save'>
		<v-field-wrapper label='Название'>
			<input-text v-model='formFields.name' />
		</v-field-wrapper>

		<v-field-wrapper label='Галерея'>
			<input-images v-model='formFields.images' />
		</v-field-wrapper>

		<v-field-wrapper label='Тип'>
			<v-select v-model='formFields.type' :options='typesMoviesList' />
		</v-field-wrapper>

		<v-field-wrapper label='Теги'>
			<v-multi-select
				v-model='formFields.tags'
				:options='tagsList'
				@option='addCustomOptionEvent'
			/>
		</v-field-wrapper>

		<v-field-wrapper label='Описание'>
			<v-textarea v-model='formFields.description' />
		</v-field-wrapper>
	</v-form>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, DefineComponent, reactive } from 'vue'
import ImageInterface from '@i/ImageInterface'
import { MovieFormInterface } from '@i/form/MovieFormInterface'
import { adminMoviesStore } from '@s/admin/movies'
import MultiSelectInterface from '@i/MultiSelectInterface'

const VForm = defineAsyncComponent<DefineComponent>(() => import('@c/Form/index.vue') as any)
const VFieldWrapper = defineAsyncComponent<DefineComponent>(() => import('@c/Form/FieldWrapper.vue') as any)
const InputImages = defineAsyncComponent<DefineComponent>(() => import('@c/Form/InputImages.vue') as any)
const VSelect = defineAsyncComponent<DefineComponent>(() => import('@c/Form/Select.vue') as any)
const VMultiSelect = defineAsyncComponent<DefineComponent>(() => import('@c/Form/MultiSelect.vue') as any)
const VTextarea = defineAsyncComponent<DefineComponent>(() => import('@c/Form/Textarea.vue') as any)
const InputText = defineAsyncComponent<DefineComponent>(() => import('@c/Form/InputText.vue') as any)

const { getTags, getTypesMovies, getMovie, createTag } = adminMoviesStore()
const { id } = defineProps<{ id: string }>()
const emits = defineEmits(['save'])

const tagsList: string[] = await getTags()
const typesMoviesList: MultiSelectInterface[] = await getTypesMovies()

let formFields: MovieFormInterface = reactive({
	name: '',
	description: '',
	type: '',
	images: [],
	tags: [],
})

if (id) {
	const data: any = await getMovie(id)
	const images: ImageInterface[] = data.images.map((url: string) => ({
		path: url,
		name: url.split('/').pop(),
	}))
	formFields = reactive({ ...data, images })
}
const addCustomOptionEvent = (option: string) => createTag({ name: option })
const save = () => emits('save', formFields)
</script>
