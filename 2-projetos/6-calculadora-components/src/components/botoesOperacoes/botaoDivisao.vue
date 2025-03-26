<template>
    <button @click="pressionarBotaoDivisao">/</button>
</template>

<script>
export default {
    name: 'botaoDivisaoComponent',
    props: {
        displayLocal: String
    },
    methods: {
        pressionarBotaoDivisao(){
           let novoValor = this.displayLocal
           novoValor += '/'
           this.$emit('pressionar-botao-divisao', novoValor) 
        }
    }
}
</script>

<style>

</style>