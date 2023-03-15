<template>
    <header class="py-5">
        <div class="container flex justify-between">
            <logo />
            <header-menu />
            <auth />
        </div>
    </header>
</template>

<script setup lang="ts">
import {defineAsyncComponent, DefineComponent} from "vue";

const Logo = defineAsyncComponent<DefineComponent>(() => import('@c/Logo.vue') as any);
const HeaderMenu = defineAsyncComponent<DefineComponent>(() => import('@c/Header/Menu.vue') as any);
const Auth = defineAsyncComponent<DefineComponent>(() => import('@c/Header/Auth.vue') as any);
</script>

<style scoped lang="scss">
header {
    flex: 0 0 auto;
    background-color: #000123;
}
</style>