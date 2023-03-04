<template>
    <form @submit.prevent="store.signup()">
        <input v-model="store.name" type="text" placeholder="Введите имя">
        <input v-model="store.email" type="email" placeholder="Введите email">
        <input v-model="store.password" type="password" placeholder="Введите пароль">
        <button type="submit">Зарегистрироваться</button>
    </form>
</template>

<script setup lang="ts">
import {useAuthStore} from "@s/useAuth";
const store = useAuthStore();
</script>