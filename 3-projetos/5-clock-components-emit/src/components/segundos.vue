<template>
    <div>
        {{ segundo }}
    </div>
</template>

<script>
    export default {
        name: 'ComponentSegundo',
        mounted () {
            this.atualizarSegundos()
            setInterval(this.atualizarSegundos, 1000)
        },
        data () {
            return{
                segundo: null
            }
        },
        methods: {
            atualizarSegundos(){
                let agora = new Date()
                this.segundo = agora.getSeconds()
            }
        }
    }
</script>

<style>


</style>