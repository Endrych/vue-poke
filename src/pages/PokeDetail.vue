<template>
    <a @click="goBack" href="#">Go Back</a>
    <div class="card" v-if="pokemon">
        <h1>{{ pokemon.name }}</h1>
        <PokemonImage :id="pokemon.id" />
        <div><b>Weight:</b> {{ pokemon.weight }}</div>
        <div><b>Height:</b> {{ pokemon.height }}</div>
        <SpecialitiesTable name="Abilities" :items="pokemon.abilities" />
        <SpecialitiesTable name="Moves" :items="pokemon.moves" />
        <div class="sprites">
            <div v-for="sprite in pokemon.sprites">
                <img :src="sprite" />
            </div>
        </div>
    </div>

    <Loading v-else />
</template>

<script setup lang="ts">
import { onMounted, computed, ComputedRef } from "vue";
import { useRouter } from "vue-router"
import { useStore } from "vuex"

import PokemonImage from "../components/PokemonImage.vue"
import Loading from '../components/Loading.vue';
import { Pokemon } from "../models/pokemon.model";
import SpecialitiesTable from "../components/SpecialitiesTable.vue";

const { id } = defineProps<{
    id: string
}>()

const store = useStore()
const router = useRouter()

const pokemon: ComputedRef<Pokemon> = computed(() => store.getters.pokemon)

function goBack() {
    router.back()
}

onMounted(function () {
    store.dispatch('loadPokemon', parseInt(id))
})

</script>

<style scoped>
.card {
    width: 90%;
}

h1 {
    text-transform: capitalize;
    margin-bottom: 25px;
}

a {
    margin-bottom: 45px;
    width: 100px;
    user-select: none;
    display: block;
    border-radius: 0.25rem;
    padding: 0.5rem 0.75rem;
    line-height: 1.25;
    color: #007bff;
    background-color: #fff;
    border: 1px solid #dee2e6;

    &.disabled {
        color: #6c757d;
        pointer-events: none;
    }

    &:hover {
        background-color: #e9ecef;
    }
}

.sprites {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>