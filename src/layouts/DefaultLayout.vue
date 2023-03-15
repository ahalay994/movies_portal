<template>
    <main-header/>
    <main>
        <slot/>
    </main>
    <main-footer/>
</template>

<script setup lang="ts">
import {defineAsyncComponent, DefineComponent} from "vue";

const MainHeader = defineAsyncComponent<DefineComponent>(() => import('@c/Header/index.vue') as any);
const MainFooter = defineAsyncComponent<DefineComponent>(() => import('@c/Footer/index.vue') as any);
</script>

<style scoped lang="scss">
main {
    flex: 1 0 auto;
}
</style>