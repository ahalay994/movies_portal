<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script setup lang="ts">
import {computed, defineAsyncComponent, DefineComponent} from "vue"
import {useRoute} from "vue-router"

const route = useRoute()

const layout = computed(() => {
    const layout = route?.meta?.layout

    if (layout) {
        return defineAsyncComponent<DefineComponent>(() => import(`@l/${layout}Layout.vue`) as any)
    }
    return defineAsyncComponent<DefineComponent>(() => import('@l/DefaultLayout.vue') as any)
});
</script>