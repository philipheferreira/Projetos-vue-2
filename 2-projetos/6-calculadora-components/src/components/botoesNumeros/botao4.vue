<template>
    <button @click="pressionarBotao4">4</button>
</template>

<script>
export default {
    name: 'botaoQuatroComponent',
    props: {
        displayLocal: String
    },
    methods: {
        pressionarBotao4(){
            let novoValor = this.displayLocal
            novoValor += 4
            this.$emit('pressionar-botao4', novoValor)
        }
    }
}
</script>

<style>

</style>