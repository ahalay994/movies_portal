<template>
    <div class="p-4">
        <div class="table w-full">
                <div class="table__header">
                    <div v-for="item in header" class="table__header-column">{{ item }}</div>
                </div>
                <div class="table__content" v-for="({id, images, name, type, tags}, key) in mainStore.list">
                    <div class="table__content_item">{{ ++key }}</div>
                    <div class="table__content_item">
                        <suspense>
                            <image-field v-for="image in images" :src="image" :alt="name" />
                        </suspense>
                    </div>
                    <div class="table__content_item">{{ name }}</div>
                    <div class="table__content_item">{{ type }}</div>
                    <div class="table__content_item">
                        <div class="tag" v-for="tag in tags">{{ tag }}</div>
                    </div>
                    <div class="table__content_item">
                        <router-link :to="{name: 'adminListItem', params: {id}}">Изменить</router-link>
                    </div>
                </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {adminMainStore} from "@s/admin/main";
import ImageField from '@c/Form/ImageField.vue';

const mainStore = adminMainStore()

const header = [
    '#',
    'Изображение',
    'Название',
    'Тип',
    'Теги',
    '',
];

const getImage = async (url: string) => await mainStore.downloadImage(url);
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