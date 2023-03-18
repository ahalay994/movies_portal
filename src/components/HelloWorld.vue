<template>
    <pre>{{user}}</pre>
</template>

<script setup lang="ts">
import {useAuthStore} from "@s/useAuth";

const {user} = useAuthStore()
</script>
