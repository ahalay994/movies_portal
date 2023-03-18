<template>
    <div class="logo flex gap-4 items-center">
        <router-link :to="{name: 'home'}"><img src="/vite.svg" :alt="title" :title="title"></router-link>
        <router-link :to="{name: routeName}">{{ title }}</router-link>
    </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{title: string, routeName: string}>(), {
    title: import.meta.env.VITE_PROJECT_NAME,
    routeName: 'home'
})
</script>

<style scoped lang="scss">
.logo {
    a {
        color: #fff;
        font-size: 1.2rem;
        line-height: 120%;
    }
}
</style>