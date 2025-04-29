<template>
    <div></div>
</template>

<script>
export default {
    name: 'minutosComponent',
    mounted (){
        this.atualizarMinutosLocal()
        setInterval(this.atualizarMinutosLocal, 1000)
    },
    props: {
        minutoLocal: Number
    },
    methods: {
        atualizarMinutosLocal() {
            let agora = new Date()
            let novoValor = agora.getMinutes()
            this.$emit('comando-atualizar-minutos-local', novoValor)
        }
    }
}
</script>

<style>

</style>