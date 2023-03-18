<template>
    <app-layout />
</template>

<script setup lang="ts">
import {defineAsyncComponent, DefineComponent} from "vue"

const AppLayout = defineAsyncComponent<DefineComponent>(() => import('@l/AppLayout.vue') as any)
</script>