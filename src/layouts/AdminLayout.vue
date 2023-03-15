<template>
    <admin-header/>
    <div class="flex h-full">
        <admin-menu />
        <main class="w-full">
            <slot/>
        </main>
    </div>
</template>

<script setup lang="ts">
import {defineAsyncComponent, DefineComponent} from "vue";

const AdminHeader = defineAsyncComponent<DefineComponent>(() => import('@c/Admin/Header/index.vue') as any);
const AdminMenu = defineAsyncComponent<DefineComponent>(() => import('@c/Admin/Menu.vue') as any);
</script>

<style scoped lang="scss">

</style>