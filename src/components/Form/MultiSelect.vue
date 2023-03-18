<template>
    <multiselect
        v-model="modelValue"
        :options="options"
        mode="tags"
        :searchable="true"
        :allow-absent="true"
        :close-on-select="false"
        :close-on-deselect="false"
        :create-option="true"
        @option="addCustomOptionEvent"
        label="Метки"
        no-results-text="Значения отсутствуют"
        no-options-text="Список пуст"
        :required="required"
        @change="changeEvent"
    />
</template>

<script setup lang="ts">
import Multiselect from '@vueform/multiselect'

const {modelValue, options, required} = withDefaults(defineProps<{
    modelValue: string[],
    options: string[],
    required: boolean
}>(), {
    required: false
})
const emits = defineEmits(['update:modelValue', 'option'])

const addCustomOptionEvent = (option: string) => emits('option', option)
const changeEvent = (value: string) => emits('update:modelValue', value)
</script>
