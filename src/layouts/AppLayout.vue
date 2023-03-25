<template>
	<component :is='layout'>
		<router-view v-slot='{ Component }'>
			<transition name='scale' mode='out-in'>
				<component :is='Component' />
			</transition>
		</router-view>
	</component>
</template>

<script setup lang='ts'>
import { computed, defineAsyncComponent, DefineComponent } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const layout = computed(() => {
	const layout = route?.meta?.layout

	if (layout) {
		return defineAsyncComponent<DefineComponent>(
			() => import(`@l/${layout}Layout.vue`) as any,
		)
	}
	return defineAsyncComponent<DefineComponent>(
		() => import('@l/DefaultLayout.vue') as any,
	)
})
</script>

<style scoped lang='scss'>
.scale-enter-active,
.scale-leave-active {
	transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
	opacity: 0;
	transform: scale(0.9);
}
</style>