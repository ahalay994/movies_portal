<template>
    <div>
        <label class="mb-2 block font-medium" v-if="label">{{ label }}</label>
        <slot/>
    </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    label: string | null
}>(), {
    label: null
});
</script>

<style scoped lang="scss">
label {
    font-size: 16px;
}
</style>
