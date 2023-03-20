<template>
	<header class='py-5'>
		<div class='px-2 flex justify-between'>
			<v-logo title='Admin Movies Portal' route-name='admin' />
			<v-auth />
		</div>
	</header>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, DefineComponent } from 'vue'

const VLogo = defineAsyncComponent<DefineComponent>(
	() => import('@c/Logo.vue') as any,
)
const VAuth = defineAsyncComponent<DefineComponent>(
	() => import('@c/Admin/Header/Auth.vue') as any,
)
</script>

<style scoped lang='scss'>
header {
	flex: 0 0 auto;
	background-color: #000123;
}
</style>
