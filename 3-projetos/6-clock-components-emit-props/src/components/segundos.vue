<!--  -->

<template>
    <div>
    </div>
</template>

<script>
export default {
    name: 'segundosComponent',
    mounted (){
        setInterval(() => {
            this.atualizarSegundosLocal()
            this.$$emit('atualizar-segundos-local', this.novoValor)
        }, 1000)
    },
    props: {
        segundoLocal
    },
    methods: {
        atualizarSegundosLocal() {
            let agora = new Date()
            let novoValor = this.segundoLocal
            novoValor = agora.getSeconds()
        }
    }
}
</script>

<style>

</style>