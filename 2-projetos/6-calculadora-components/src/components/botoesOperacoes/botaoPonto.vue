<template>
    <button @click="pressionarBotaoPonto">.</button>
</template>

<script>
export default {
    name: 'botaoPontoComponent',
    props: {
        displayLocal: String
    },
    methods: {
        pressionarBotaoPonto(){
            let novoValor = this.displayLocal
            novoValor += '.'
            this.$emit('pressionar-botao-ponto', novoValor)
        }
    }
}
</script>

<style scoped>
    button{
            cursor: pointer;
    }
</style>