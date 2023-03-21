<template>
	<div class='menu h-full' :class='{ close: menuToggleState }'>
		<ul>
			<li>
				<router-link class='menu__link' :to="{ name: 'admin' }">
					<span class='icon'>⌂</span>
					<span class='title'>Главная</span>
				</router-link>
			</li>
			<li>
				<router-link class='menu__link' :to="{ name: 'adminMovies' }">
					<span class='icon'>❆</span>
					<span class='title'>Список</span>
				</router-link>
			</li>
		</ul>
		<div class='menu__toggle' @click='menuToggleState = !menuToggleState'>
			{{ menuToggleState ? '>' : '<' }}
		</div>
	</div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const menuToggleState = ref(false)
</script>

<style scoped lang='scss'>
.menu {
	width: 240px;
	border: 1px solid #3a3a3a;
	position: relative;
	transition: ease-in-out 0.3s;

	&.close {
		width: 50px;

		.menu__link {
			.title {
				opacity: 0;
			}
		}
	}

	&__toggle {
		transition: ease-in-out 0.3s;
		cursor: pointer;
		position: absolute;
		display: flex;
		justify-content: center;
		font-size: 24px;
		line-height: 1;
		border: 1px solid #000123;
		border-radius: 50%;
		height: 32px;
		width: 32px;
		background-color: white;
		right: -16px;
		top: calc(50% - 32px);
	}

	&__link {
		padding: 8px 16px;
		width: 100%;
		display: flex;
		align-items: center;

		.icon {
			display: block;
			font-size: 24px;
			line-height: 1;
			font-weight: bolder;
		}

		.title {
			transition: ease-in-out 0.3s;
			display: block;
			line-height: 1;
			opacity: 1;
		}
	}

	ul {
		li {
			border-bottom: 1px solid #3a3a3a;
		}
	}
}
</style>
