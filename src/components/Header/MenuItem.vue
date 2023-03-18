<template>
    <router-link :to="{name: href}">{{ title }}</router-link>
</template>

<script setup lang="ts">
const {href, title} = defineProps<{ href: string, title: string }>()
</script>

<style scoped lang="scss">
a {
    color: white;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: antiquewhite;
    }

    &.router-link-active {
        color: antiquewhite;
    }
}
</style>