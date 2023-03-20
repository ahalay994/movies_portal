<template>
  <textarea
	  class='w-full'
	  rows='7'
	  v-model='modelValue'
	  :required='required'
	  @input='inputEvent($event)'
  ></textarea>
</template>

<script setup lang='ts'>
const { modelValue, required } = withDefaults(
	defineProps<{
		modelValue: string;
		required: boolean;
	}>(),
	{
		required: false,
	},
)

const emits = defineEmits(['update:modelValue'])
const inputEvent = (event: Event) => {
	const target = event.target as HTMLInputElement
	emits('update:modelValue', target.value)
}
</script>

<style scoped lang='scss'>
textarea {
	resize: none;
	border: 1px solid #d1d5db;
	padding: 8px 16px;
	border-radius: 4px;
	font-size: 16px;
	line-height: 1.2;
}
</style>
