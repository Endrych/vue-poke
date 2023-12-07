<template>
    <div @click="openDetail" class="card">
        <img :src="url">
        <h2>{{ name }}</h2>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { getPokemonImage } from "../utils";
import { ROUTE_PATH } from "../constants";

const router = useRouter()
const props = defineProps<{
    name: String
    index: Number
}>();

const url = computed(() => {
    return getPokemonImage(props.index);
})

function openDetail() {
    router.push(ROUTE_PATH.POKE_DETAIL);
}

</script>

<style scoped>
.card {
    cursor: pointer;
    display: inline-block;
    min-width: 215px;
    background: #fff;
    border-radius: 15px;
    -webkit-box-shadow: 7px 1px 15px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 7px 1px 15px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 7px 1px 15px 0px rgba(0, 0, 0, 0.75);
}

h2 {
    color: #000;
    text-transform: capitalize;
}
</style>