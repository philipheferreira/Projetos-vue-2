<!--  -->

<template>
    <div>
    </div>
</template>

<script>
export default {
    name: 'segundosComponent',
    mounted (){
        this.atualizarSegundosLocal()
        setInterval(this.atualizarSegundosLocal, 1000)
    },
    props: {
        segundoLocal: Number
    },
    methods: {
        atualizarSegundosLocal() {
            let agora = new Date()
            let novoValor = agora.getSeconds()
            this.$emit('atualizar-segundos-local', novoValor)
        }
    }
}
</script>

<style>

</style>