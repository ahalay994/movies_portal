<template>
    <div class="px-4 py-2">
        <h1 class="mb-4 text-3xl font-bold">Редактировать "{{ fields?.name }}"</h1>

        <v-form @submit="save" v-if="fields">
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
import {_RefDatabase, VueDatabaseDocumentData} from "vuefire";
import {reactive, UnwrapNestedRefs} from "vue";
import {adminMainStore} from "@s/admin/main"

import VForm from '@c/Form/index.vue';
import VFieldWrapper from '@c/Form/FieldWrapper.vue';
import InputImages from '@c/Form/InputImages.vue';
import VSelect from '@c/Form/Select.vue';
import VMultiSelect from '@c/Form/MultiSelect.vue';
import VTextarea from '@c/Form/Textarea.vue';
import InputText from "@c/Form/InputText.vue";
import {useAuthStore} from "@s/useAuth";

interface Image {
    path: string
    name: string
    file?: Blob
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

interface DataInterface {
    description?: string
    images?: string[]
    name?: string
    tags?: string[]
    type?: string
    user?: string
}

const {id} = defineProps<{ id: string }>()

const storage = adminMainStore()

const film = storage.getFilm(id);
const fields: UnwrapNestedRefs<_RefDatabase<VueDatabaseDocumentData<DataInterface> | undefined | DataInterface>> = reactive({
    ...film,
    images: film?.images.map((image: string) => ({path: image, name: image.split('/').pop() || ''}))
});

const mainStore = adminMainStore();
const addCustomOptionEvent = (option: string) => {
    mainStore.createTag(option);
}

const useStore = useAuthStore();

const save = async () => {
    const imagesPath: string[] = [];

    for (const image of fields.value?.images) {
        console.log(image);
        console.log(image.startsWith('blob:'))
        // if (image) {
        //     const imagePath = await mainStore.saveImage(image.file);
        //     imagesPath.push(imagePath);
        // } else {
        //     imagesPath.push(image.path);
        // }
    }

    // const data: SavedData = {
    //     name: fields.value.name,
    //     images: imagesPath,
    //     type: fields.value.type,
    //     tags: fields.value.tags,
    //     description: fields.value.description,
    //     userUpdate: useStore?.user?.displayName || useStore?.user?.email,
    //     updatedAt: (new Date()).toLocaleString('ru-RU')
    // };
    //
    // const updatedData = await mainStore.updateData(data, id);
    // console.log(updatedData)
}
</script>

<style scoped lang="scss">

</style>