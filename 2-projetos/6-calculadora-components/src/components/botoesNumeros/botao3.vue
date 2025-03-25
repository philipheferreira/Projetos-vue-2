<template>
    <button @click="pressionarBotao3">3</button>
</template>

<script>
export default {
    name: 'botaoTresComponent',
    props: {
        displayLocal: String
    },
    methods: {
        pressionarBotao3(){
            let novoValor = this.displayLocal
            novoValor += 3
            this.$emit('pressionar-botao3', novoValor)
        }
    }
}
</script>

<style>

</style>