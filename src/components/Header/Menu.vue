<template>
    <nav class="flex items-center gap-8">
        <menu-item v-for="(item, key) in store.menu" :key="key" :title="item.title" :href="item.slug" />
    </nav>
</template>

<script setup lang="ts">
import {defineAsyncComponent, DefineComponent} from "vue";
import {mainStore} from "@s/main";

const MenuItem = defineAsyncComponent<DefineComponent>(() => import('@c/Header/MenuItem.vue') as any);
const store = mainStore();
</script>

<style scoped lang="scss">

</style>