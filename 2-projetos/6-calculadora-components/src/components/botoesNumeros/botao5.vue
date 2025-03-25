<template>
    <button @click="pressionarBotao5">5</button>
</template>

<script>
export default {
    name: 'botaoCincoComponent',
    props: {
        displayLocal: String
    },
    methods: {
        pressionarBotao5(){
            let novoValor = this.displayLocal
            novoValor += 5
            this.$emit('pressionar-botao5', novoValor)
        }
    }
}
</script>

<style>

</style>