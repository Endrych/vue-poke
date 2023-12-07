<template>
    <div class="card">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
        <h2>{{ "bulbasaur" }}</h2>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.card {
    display: inline-block;
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