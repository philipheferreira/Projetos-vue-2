<template>
    <button @click="pressionarBotao66666">6</button>
</template>

<script>
export default {
    name: 'botaoSeisComponent',
    props: {

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

<style>

</style>