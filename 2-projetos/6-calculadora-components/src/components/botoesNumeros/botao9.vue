<template>
    <button @click="pressionarBotao9">9</button>
</template>

<script>
export default {
    name: 'botaoNoveComponent',
    props: {
        displayLocal: String
    },
    methods: {
        pressionarBotao9(){
            let novoValor = this.displayLocal
            novoValor += 9
            this.$emit('pressionar-botao9', novoValor)
        }
    }
}
</script>

<style>

</style>