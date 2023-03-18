<template>
    <v-form @submit="save">
        <v-field-wrapper label="Название">
            <input-text v-model="formFields.name"/>
        </v-field-wrapper>

        <v-field-wrapper label="Галерея">
            <input-images v-model="formFields.images"/>
        </v-field-wrapper>

        <v-field-wrapper label="Тип">
            <v-select v-model="formFields.type" :options="typesMoviesList"/>
        </v-field-wrapper>

        <v-field-wrapper label="Теги">
            <v-multi-select v-model="formFields.tags" :options="tagsList" @option="addCustomOptionEvent"/>
        </v-field-wrapper>

        <v-field-wrapper label="Описание">
            <v-textarea v-model="formFields.description"/>
        </v-field-wrapper>
    </v-form>
</template>

<script setup lang="ts">
import VForm from '@c/Form/index.vue';
import VFieldWrapper from '@c/Form/FieldWrapper.vue';
import InputImages from '@c/Form/InputImages.vue';
import VSelect from '@c/Form/Select.vue';
import VMultiSelect from '@c/Form/MultiSelect.vue';
import VTextarea from '@c/Form/Textarea.vue';
import InputText from "@c/Form/InputText.vue";
import ImageInterface from "@i/ImageInterface";
import MovieFormInterface from "@i/form/MovieFormInterface";
import {adminMoviesStore} from "@s/admin/movies";
import {reactive} from "vue";

const {getTags, getTypesMovies, getMovie, createTag} = adminMoviesStore();
const {id} = defineProps<{ id: string }>()
const emits = defineEmits(['save'])

const tags: any = await getTags();
const tagsList: string[] = tags.reduce((acc: string[], item: any) => item.$value ? [...acc, item.$value] : acc, []);

const typesMovies: any = await getTypesMovies();
const typesMoviesList: string[] = typesMovies.reduce((acc: string[], item: any) => item.$value ? [...acc, item.$value] : acc, []);

let formFields: MovieFormInterface = reactive({
    name: '',
    description: '',
    type: '',
    images: [],
    tags: []
});

if (id) {
    const data: any = await getMovie(id);
    const images: ImageInterface[] = data.images.map((url: string) => ({
        path: url,
        name: url.split('/').pop()
    }));
    formFields = reactive({...data, images})
}

const addCustomOptionEvent = (option: string) => createTag(option);
const save = () => emits('save', formFields)
</script>
