<template>
    <div></div>
</template>

<script>
    export default {
        name: 'ComponentSegundo',
        mounted () {
            setInterval(() => {
                this.atualizarSegundosLocal()
                this.$emit('atualizar-segundos-local', this.segundoLocal)
            }, 1000)
        },
        data () {
            return{
                segundoLocal: null
            }
        },
        methods: {
            atualizarSegundosLocal(){
                let agora = new Date()
                this.segundoLocal = agora.getSeconds()
            }
        }
    }
</script>

<style>


</style>