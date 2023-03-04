<template>
    <div class="">Пока</div>
</template>

<script setup lang="ts">
import {useAuthStore} from "@s/useAuth";
import {onMounted} from "vue";
const store = useAuthStore();

onMounted(() => {
    store.logout();
})
</script>