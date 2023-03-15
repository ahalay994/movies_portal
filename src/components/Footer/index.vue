<template>
    <footer class="container">
        <logo />
    </footer>
</template>

<script setup lang="ts">
import {defineAsyncComponent, DefineComponent} from "vue";

const Logo = defineAsyncComponent<DefineComponent>(() => import('@c/Logo.vue') as any);
</script>

<style scoped lang="scss">
footer {
    flex: 0 0 auto;
}
</style>