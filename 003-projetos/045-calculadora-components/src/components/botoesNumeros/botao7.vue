<template>
    <button @click="pressionarBotao7">7</button>
</template>

<script>
export default {
    name: 'botaoSeteComponent',
    props: {
        displayLocal: String
    },
    methods: {
        pressionarBotao7(){
            let novoValor = this.displayLocal
            novoValor += 7
            this.$emit('pressionar-botao7', novoValor)
        }
    }
}
</script>

<style scoped>
    button{
            cursor: pointer;
    }
</style>