<template>
    <button @click="pressionarFn">+</button>
</template>

<script>
export default {
    name: 'botaoSomaComponent',
    props: {pressionarFn: Function}
}
</script>

<style scoped>
    button{
            cursor: pointer;
    }
</style>