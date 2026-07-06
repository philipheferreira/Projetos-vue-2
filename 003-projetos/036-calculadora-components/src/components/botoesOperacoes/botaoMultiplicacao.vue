<template>
    <button @click="pressionarBotaoMultiplicacao">*</button>
</template>

<script>
export default {
    name: 'botaoMultiplicacaoComponent',
    props: {
        displayLocal: String
    },
    methods: {
        pressionarBotaoMultiplicacao(){
            let novoValor = this.displayLocal
            novoValor += '*'
            this.$emit('pressionar-botao-multiplicacao', novoValor)
        }
    }
}
</script>

<style scoped>
    button{
            cursor: pointer;
    }
</style>