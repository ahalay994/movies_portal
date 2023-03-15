<template>
    <img :src="imageSrc" :alt="alt"/>
</template>

<script setup lang="ts">
import {adminMainStore} from "@s/admin/main";

const {src} = defineProps<{ src: string, alt?: string }>()
const store = adminMainStore()
const imageSrc = await store.downloadImage(src)
</script>

<style scoped lang="scss">

</style>