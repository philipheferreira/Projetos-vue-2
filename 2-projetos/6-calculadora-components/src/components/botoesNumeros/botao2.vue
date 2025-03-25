<template>
    <button @click="pressionarBotao2">2</button>
</template>

<script>
export default {
    name: 'botaoDoisComponent',
    props: {
        displayLocal: String
    },
    methods: {
        pressionarBotao2(){
            let novoValor = this.displayLocal
            novoValor += 2
            this.$emit('pressionar-botao2', novoValor)
        }
    }
}
</script>

<style>

</style>