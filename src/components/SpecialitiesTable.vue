<template>
    <div v-if="items.length > 0">
        <h3>{{ name }}</h3>
        <table border="1">
            <thead>
                <tr>
                    <td><b>Name</b></td>
                    <td><b>Effect</b></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td>{{ item.name }}</td>
                    <td>{{ item.effect }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { Speciality } from '../models/speciality.model';

defineProps<{
    items: Speciality[]
    name: string
}>()

</script>

<style scoped>
td {
    padding: 10px 15px;
}
</style>