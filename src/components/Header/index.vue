<template>
    <header class="py-5">
        <div class="container flex justify-between">
            <v-logo />
            <v-header-menu />
            <v-auth />
        </div>
    </header>
</template>

<script setup lang="ts">
import {defineAsyncComponent, DefineComponent} from "vue"

const VLogo = defineAsyncComponent<DefineComponent>(() => import('@c/Logo.vue') as any)
const VHeaderMenu = defineAsyncComponent<DefineComponent>(() => import('@c/Header/Menu.vue') as any)
const VAuth = defineAsyncComponent<DefineComponent>(() => import('@c/Header/Auth.vue') as any)
</script>

<style scoped lang="scss">
header {
    flex: 0 0 auto;
    background-color: #000123;
}
</style>
