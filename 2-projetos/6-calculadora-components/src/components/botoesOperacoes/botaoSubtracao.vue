<template>
    <button @click="pressionarBotaoSubtracao">-</button>
</template>

<script>
export default {
    name: 'botaoSubtracaoComponent',
    props: {
        displayLocal: String
    },
    methods: {
        pressionarBotaoSubtracao(){
            let novoValor = this.displayLocal
            novoValor += '-'
            this.$emit('pressionar-botao-subtracao', novoValor)
        }
    }
}
</script>

<style>

</style>