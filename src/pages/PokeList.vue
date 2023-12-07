<template>
    <div>
        <PostListCard />
        <Pagination @previous="previous" @next="next" :is-first="true" :is-last="false" />
    </div>
</template>

<script setup lang="ts">
import PostListCard from '../components/PokeListCard.vue'
import Pagination from '../components/Pagination.vue'

function previous() {
    console.log('previous')
}

function next() {
    console.log('next')
}
</script>