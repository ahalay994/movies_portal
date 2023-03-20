<template>
	<img :src='imageSrc' :alt='alt' />
</template>

<script setup lang='ts'>
import { adminMoviesStore } from '@s/admin/movies'

const { src, alt } = defineProps<{ src: string; alt?: string }>()
const { getImage } = adminMoviesStore()
const imageSrc = await getImage(src)
</script>
