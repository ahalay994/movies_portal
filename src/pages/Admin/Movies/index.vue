<template>
    <div class="p-4">
        <h1 class="mb-4">Список фильмов</h1>

        <suspense>
            <movies-table />
        </suspense>
    </div>
</template>

<script setup lang="ts">
import MoviesTable from '@p/Admin/Movies/_components/Table.vue';
</script>