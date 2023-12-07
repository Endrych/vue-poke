<template>
    <div @click="openDetail" class="card">
        <PokemonImage :id="index" />
        <h2>{{ name }}</h2>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ROUTE_PATH } from "../constants";

import PokemonImage from "../components/PokemonImage.vue"


const router = useRouter()
const props = defineProps<{
    name: String
    index: Number
}>();


function openDetail() {
    router.push(ROUTE_PATH.POKE_DETAIL.replace(':id', String(props.index)));
}

</script>

<style scoped>
.card {
    cursor: pointer;
    min-width: 215px;
}
</style>