<template>
    <div v-if="loaded">
        <div class="poke-list">
            <div class="poke-list-card" v-for="pokemon in pokemons" :key="String(pokemon.index)">
                <PokeListCard :name="pokemon.name" :index="pokemon.index" />
            </div>
        </div>
        <Pagination @previous="previous" @next="next" :is-first="isFirstPage" :is-last="isLastPage" />
    </div>
    <Loading v-else />
</template>

<script setup lang="ts">
import { onMounted, computed, ComputedRef } from 'vue';
import { useStore } from 'vuex'

import PokeListCard from '../components/PokeListCard.vue';
import Pagination from '../components/Pagination.vue';
import Loading from '../components/Loading.vue';
import { PokemonListItem } from '../models/pokemon-list-item.model';

const store = useStore();

const isFirstPage: ComputedRef<boolean> = computed(() => store.getters.isFirstPage)
const isLastPage: ComputedRef<boolean> = computed(() => store.getters.isLastPage)
const pokemons: ComputedRef<PokemonListItem[]> = computed(() => store.getters.pokemons)
const loaded: ComputedRef<boolean> = computed(() => store.getters.loaded)

function previous() {
    store.dispatch('previousItems')
}

function next() {
    store.dispatch('nextItems')
}

onMounted(function () {
    if (!loaded.value) {
        store.dispatch('loadItems');
    }
})
</script>

<style scoped>
.poke-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 25px;
}

.poke-list-card {
    margin: 10px;
}
</style>