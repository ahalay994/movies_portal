<template>
    <div class="px-4 py-2">
        <h1 class="mb-4 text-3xl font-bold">Добавить</h1>

        <v-form @submit="save">
            <v-field-wrapper label="Название">
                <input-text v-model="fields.name"/>
            </v-field-wrapper>

            <v-field-wrapper label="Галерея">
                <input-images v-model="fields.images"/>
            </v-field-wrapper>

            <v-field-wrapper label="Тип">
                <v-select
                    v-if="mainStore.getTypesVideo.length"
                    v-model="fields.type"
                    :options="mainStore.getTypesVideo"
                />
            </v-field-wrapper>

            <v-field-wrapper label="Теги">
                <v-multi-select
                    v-if="mainStore.getTags.length"
                    v-model="fields.tags"
                    :options="mainStore.getTags"
                    @option="addCustomOptionEvent"
                />
            </v-field-wrapper>

            <v-field-wrapper label="Описание">
                <v-textarea v-model="fields.description"/>
            </v-field-wrapper>
        </v-form>
    </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {adminMainStore} from "@s/admin/main";
import {useAuthStore} from "@s/useAuth";

import VForm from '@c/Form/index.vue';
import VFieldWrapper from '@c/Form/FieldWrapper.vue';
import InputImages from '@c/Form/InputImages.vue';
import VSelect from '@c/Form/Select.vue';
import VMultiSelect from '@c/Form/MultiSelect.vue';
import VTextarea from '@c/Form/Textarea.vue';
import InputText from "@c/Form/InputText.vue";

const mainStore = adminMainStore();
const useStore = useAuthStore();

interface Image {
    path: string
    name: string
    file: Blob
}

interface FieldsInterface {
    name?: string
    images: Image[]
    type?: string
    description?: string
    tags?: string[]
}

interface SavedData {
    name: string | undefined,
    images: string[],
    type: string | undefined,
    tags: string[] | undefined,
    description: string | undefined,
    user: string | undefined | null,
    userUpdate?: string,
    createdAt?: string,
    updatedAt?: string
}

const fields: FieldsInterface = reactive({
    images: []
});

const addCustomOptionEvent = (option: string) => {
    mainStore.createTag(option);
}

const save = async () => {
    const imagesPath: string[] = [];
    for (const image of fields.images) {
        const imagePath = await mainStore.saveImage(image.file);
        imagesPath.push(imagePath);
    }

    const data: SavedData = {
        name: fields.name,
        images: imagesPath,
        type: fields.type,
        tags: fields.tags,
        description: fields.description,
        user: useStore?.user?.displayName || useStore?.user?.email,
        createdAt: (new Date()).toLocaleString('ru-RU'),
    };

    const savedData = await mainStore.saveData(data);
}
</script>
