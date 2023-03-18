<template>
    <div class="table w-full">
        <div class="table__header">
            <div v-for="item in header" class="table__header-column">{{ item }}</div>
        </div>
        <div class="table__content" v-for="({id, images, name, type, tags}, key) in movies">
            <div class="table__content_item">{{ generateKey(key) }}</div>
            <div class="table__content_item">
                <image-field v-for="image in images" :src="image" :alt="name"/>
            </div>
            <div class="table__content_item">{{ name }}</div>
            <div class="table__content_item">{{ type }}</div>
            <div class="table__content_item">
                <div class="tag" v-for="tag in tags">{{ tag }}</div>
            </div>
            <div class="table__content_item">
                <router-link :to="{name: 'adminMoviesEdit', params: {id}}">Изменить</router-link>
                <button>Удалить</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {adminMoviesStore} from "@s/admin/movies";
import ImageField from '@c/Form/ImageField.vue';

const {getMovies} = adminMoviesStore()

const header = [
    '#',
    'Изображение',
    'Название',
    'Тип',
    'Теги',
    '',
];

const movies: any = await getMovies();
const generateKey = (key: number) => ++key;
</script>


<style scoped lang="scss">
.table {
    display: grid;
    grid-template-columns: 50px 160px 1fr 80px 1fr 100px;
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