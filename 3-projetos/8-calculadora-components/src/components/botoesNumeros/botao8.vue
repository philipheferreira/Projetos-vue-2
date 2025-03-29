<template>
    <button @click="pressionarBotao8">8</button>
</template>

<script>
export default {
    name: 'botaoOitoComponent',
    props: {
        displayLocal: String
    },
    methods: {
        pressionarBotao8(){
            let novoValor = this.displayLocal
            novoValor += 8
            this.$emit('pressionar-botao8', novoValor)
        }
    }
}
</script>

<style scoped>
    button{
            cursor: pointer;
        }
</style>