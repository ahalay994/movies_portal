<template>
    <multiselect
        v-model="modelValue"
        :options="options"
        :required="required"
        @change="changeEvent"
    />
</template>

<script setup lang="ts">
import Multiselect from '@vueform/multiselect'

const {modelValue, options, required} = withDefaults(defineProps<{
    modelValue: string,
    options: string[],
    required: boolean
}>(), {
    required: false
})

const emits = defineEmits(['update:modelValue'])
const changeEvent = (value: string) => emits('update:modelValue', value)
</script>