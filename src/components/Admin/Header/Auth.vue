<template>
	<div class='dropdown'>
		<button class='dropdown__toggle' @click='expanded = !expanded'>
			{{ user?.displayName || user?.email }}
		</button>
		<collapse v-model='expanded' dimension='height'>
			<ul>
				<li>
					<button class='w-full' @click.prevent='logout()'>Выйти</button>
				</li>
			</ul>
		</collapse>
	</div>
</template>

<script setup lang='ts'>
import Collapse from 'vue3-collapse'
import { useAuthStore } from '@s/useAuth'
import { ref } from 'vue'

const expanded = ref(false)
const { user, logout } = useAuthStore()
</script>

<style scoped lang='scss'>
* {
	will-change: height;
	transform: translateZ(0);
	backface-visibility: hidden;
	perspective: 1000px;
}

.dropdown {
	position: relative;
	color: #fff;
	width: 150px;

	&__toggle {
		cursor: pointer;
		border: 1px solid #3a3a3a;
		padding: 4px 12px;
		text-align: center;
		border-radius: 4px;
		width: 100%;

		& + div {
			position: absolute;
			right: 0;
			top: 100%;
			width: 100%;
		}
	}

	ul {
		li {
			color: #000236;
			background-color: #ffffff;
			padding: 4px 12px;
			border: 1px solid #000236;
		}
	}
}
</style>