<template>
    <input
        class="w-full"
        type="text"
        v-model="modelValue"
        :required="required"
        @input="inputEvent"
    >
</template>

<script setup lang="ts">
const {modelValue, required} = withDefaults(defineProps<{
    modelValue: string,
    required: boolean
}>(), {
    required: false
})

const emits = defineEmits(['update:modelValue'])
const inputEvent = (event: Event) => emits('update:modelValue', event.target?.value)
</script>

<style scoped lang="scss">
input {
    border: 1px solid #d1d5db;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    line-height: 1.2;
}
</style>