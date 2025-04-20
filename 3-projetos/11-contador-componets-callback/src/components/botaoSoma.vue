<template>
    <div>
        <button @click="somaFn">Adicionar Contador</button>
    </div>
</template>

<script>
    export default{
        name: 'botaoSomaComponent',
        props: { somaFn: Function }
    }
</script>

<style scoped>

</style>