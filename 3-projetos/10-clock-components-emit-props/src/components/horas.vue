<template>
    <div></div>
</template>

<script>
export default {
    name: 'horaComponent',
    mounted () {
        this.atualizarHorasLocal()
        setInterval(this.atualizarHorasLocal, 1000)
    },
    props: {
        horaLocal: Number
    },
    methods: {
        atualizarHorasLocal() {
            let agora = new Date()
            let novoValor = agora.getHours()
            this.$emit('comando-atualizar-horas-local', novoValor)
        }
    }
}
</script>

<style>

</style>