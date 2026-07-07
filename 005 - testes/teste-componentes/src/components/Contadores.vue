<template>
    <div class="contadores">
        <app-contador v-for="c in 5" :key="c"></app-contador>
    </div>
</template>

<script>
    export default {
        name: 'ContadoresOperacao',

    }
</script>

<style scoped>
</style>