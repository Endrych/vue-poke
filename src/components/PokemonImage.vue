<template>
    <img :src="url">
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getPokemonImage } from "../utils";

const props = defineProps<{
    id: Number
}>();

const url = computed(() => {
    return getPokemonImage(props.id);
})

</script>