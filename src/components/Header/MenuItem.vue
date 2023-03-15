<template>
    <router-link :to="{name: href}">{{ title }}</router-link>
</template>

<script lang="ts">
export default {
    props: {
        href: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        }
    }
}
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