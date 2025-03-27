<template>
    <button @click="pressionarBotao6">6</button>
</template>

<script>
export default {
    name: 'botaoSeisComponent',
    props: {
        displayLocal: String
    },
    methods: {
        pressionarBotao6(){
            let novoValor = this.displayLocal
            novoValor += 6
            this.$emit('pressionar-botao6', novoValor)
        }
    }
}
</script>

<style scoped>
    button{
            cursor: pointer;
        }
</style>