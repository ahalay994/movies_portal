<template>
	<div>
		<v-admin-header />
		<div class='flex h-full'>
			<v-admin-menu />
			<main class='w-full'>
				<slot />
			</main>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, DefineComponent } from 'vue'

const VAdminHeader = defineAsyncComponent<DefineComponent>(
	() => import('@c/Admin/Header/Index.vue') as any,
)
const VAdminMenu = defineAsyncComponent<DefineComponent>(
	() => import('@c/Admin/Menu.vue') as any,
)
</script>
