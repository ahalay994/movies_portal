<template>
    <form class="flex flex-col w-full gap-4" @submit.prevent="emits('submit')">
        <slot/>
        <input type="submit" value="Сохранить">
    </form>
</template>

<script setup lang="ts">
const emits = defineEmits(['submit'])
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style scoped lang="scss">
input {
    cursor: pointer;
    padding: 8px 12px;
    border: 1px solid #000123;
    border-radius: 4px;
    transition: ease-in-out .3s;

    &:hover {
        background-color: #00012344;
    }
}
</style>