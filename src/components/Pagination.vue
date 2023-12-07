<template>
    <nav>
        <ul class="pagination">
            <li><a :class="{ disabled: isFirst }" @click="previous" href="#">Previous</a></li>
            <li><a :class="{ disabled: isLast }" @click="next" href="#">Next</a></li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
defineProps<{
    isFirst: boolean
    isLast: boolean
}>()

const emit = defineEmits<{
    (e: 'previous'): void
    (e: 'next'): void
}>();

function previous() {
    emit('previous');
}

function next() {
    emit('next');
}

</script>

<style scoped>
ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
}

a {
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
</style>