<template>
    <div class="image-upload">
        <div class="image-upload__uploader relative">
            <input
                id="image-upload"
                type="file"
                multiple
                @change="onFileChanged($event)"
                accept="image/*"
                @dragenter="setActive"
                @dragover="setActive"
                @dragleave="setInactive"
                @drop="setInactive"
            >
            <label for="image-upload" class="mb-0 !flex justify-center items-center" :class="{'focus': active}">
                <span>{{ !active ? 'Загрузить изображение' : 'Перетащите сюда файлы' }}</span>
            </label>
        </div>
        <div v-if="images || newImages" class="image-upload__list grid grid-cols-4 mt-2 gap-2">
            <div v-if="images" class="image-upload__list_container relative" v-for="(image, key) in images">
                <suspense>
                    <image-field :src="image.path" :alt="image.name"/>
                </suspense>
                <div class="image-upload__list_wrapper flex justify-end items-end gap-2">
                    <button @click.prevent="remove(key)">Удалить</button>
                </div>
            </div>
            <div v-if="newImages" class="image-upload__list_container relative" v-for="(image, key) in newImages">
                <img :src="image.path" :alt="image.name"/>
                <div class="image-upload__list_wrapper flex justify-end items-end gap-2">
                    <button @click.prevent="remove(key,true)">Удалить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import ImageField from '@c/Form/ImageField.vue'

interface Image {
    path: string
    name: string
    file?: Blob
}

const {modelValue} = defineProps<{ modelValue: Image[] }>()
const emits = defineEmits(['update:modelValue'])
const active = ref(false)
const images: Image[] = reactive(modelValue);

const newImages: Image[] = reactive([]);

const onFileChanged = (event: Event) => {
    const target = event.target as HTMLInputElement
    if (target && target.files) {
        for (const fileIndex in Array.from(target.files)) {
            const file = target.files[fileIndex]
            newImages.push({
                path: URL.createObjectURL(file),
                name: file.name,
                file
            });

            updateModel();
        }
    }
}
const setActive = () => active.value = true;
const setInactive = () => active.value = false;
const remove = (key: number, isNewImage: boolean = false) => (isNewImage ? newImages : images).splice(key, 1);
const updateModel = () => emits('update:modelValue', [...images, ...newImages]);
</script>

<style scoped lang="scss">
.image-upload {
    input {
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        cursor: pointer;

        &:hover + label {
            background-color: #3a3a3a44;
        }
    }

    &__uploader {
        label {
            width: 100%;
            height: 120px;
            margin-bottom: 0;
            border: 1px solid darkblue;
            transition: all ease-in-out .3s;

            &.focus {
                background-color: #3a3a3a44;
                border: 2px dotted #3a3a3a;
            }
        }
    }

    &__list {
        &_container {
            &:hover {
                .image-upload__list_wrapper {
                    opacity: 1;
                }
            }

            img {
                object-fit: cover;
                display: flex;
                width: 100%;
                height: 160px;
            }
        }

        &_wrapper {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            opacity: 0;
            transition: all ease-in-out .3s;
            background-color: rgba(58, 58, 58, 0.5);
        }
    }
}
</style>