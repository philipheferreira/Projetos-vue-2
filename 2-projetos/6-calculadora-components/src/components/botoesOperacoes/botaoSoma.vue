<template>
    <button @click="pressionarBotaoSoma">+</button>
</template>

<script>
export default {
    name: 'botaoSomaComponent',
    props: {
        displayLocal: String
    },
    methods: {
        pressionarBotaoSoma(){
            let novoValor = this.displayLocal
            novoValor += '+'
            this.$emit('pressionar-botao-soma', novoValor)
        }
    }
}
</script>

<style>

</style>