<template>
    <button @click="pressionarBotao0">0</button>
</template>

<script>
export default {
    name: 'botaoZeroComponent',
    props: {
        displayLocal: String
    },
    methods: {
        pressionarBotao0(){
            let novoValor = this.displayLocal
            novoValor += 0
            this.$emit('pressionar-botao0', novoValor)
        }
    }
}
</script>

<style scoped>
    button{
            cursor: pointer;
    }
</style>