<template>
    <div class="poke-list">
        <div class="poke-list-card" v-for="pokemon in pokemons" :key="pokemon.index">
            <PokeListCard :name="pokemon.name" :index="pokemon.index" />
        </div>
    </div>
    <Pagination @previous="previous" @next="next" :is-first="isFirst" :is-last="isLast" />
</template>

<script setup lang="ts">
import PokeListCard from '../components/PokeListCard.vue';
import Pagination from '../components/Pagination.vue';
import data from '../mockData';
import { ref } from 'vue';
import { getIndexFromPokemonUrl } from '../utils';

const { pokemonResponse } = data;

const pokemons = ref(pokemonResponse.results.map((r => ({
    name: r.name,
    url: r.url,
    index: parseInt(`${getIndexFromPokemonUrl(r.url)}`)
}))));
const isFirst = ref(pokemonResponse.previous === null);
const isLast = ref(pokemonResponse.next === null);


function previous() {
    console.log('previous');
}

function next() {
    console.log('next');
}
</script>

<style scoped>
.poke-list {
    display: flex;
    flex-wrap: wrap;
}

.poke-list-card {
    margin: 10px;
}
</style>