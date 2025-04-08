<!--  -->

<template>
    <div>
    </div>
</template>

<script>
export default {
    name: 'segundosComponent',
    mounted (){},
    props: {
        segundoLocal
    },
    methods: {
        atualizarSegundosLocal() {
            let agora = new Date()
            let novoValor = this.segundoLocal
            novoValor = agora.getSeconds()
            this.$emit('atualizar-segundos-local', this.novoValor)
        }
    }
}
</script>

<style>

</style>