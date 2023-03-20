<template>
	<router-link v-if='!store.user' :to="{ name: 'login' }">Войти</router-link>
	<button v-if='store.user' @click='store.logout()'>Выйти</button>
</template>

<script setup lang='ts'>
import { useAuthStore } from '@s/useAuth'

const store = useAuthStore()
</script>

<style scoped lang='scss'>
a,
button,
pre {
	color: #fff;
}
</style>
