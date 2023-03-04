<template>
    <ul>
        <li v-for="todo in someTodo" :key="todo.id">
            <span>{{ todo.text }}</span>
        </li>
    </ul>
    <pre>{{user}}</pre>
</template>

<script setup lang="ts">
import {useDatabaseList, useDatabaseObject} from 'vuefire'
import { ref as dbRef } from 'firebase/database'
import {db} from "@/firebase/config";

const todos = useDatabaseList(dbRef(db, 'todos'))
const someTodo = useDatabaseObject(dbRef(db, 'todos'))

import { useCurrentUser } from 'vuefire'

const user = useCurrentUser()

</script>

<style scoped lang="scss">

</style>
