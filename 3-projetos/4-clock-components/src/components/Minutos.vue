<template>
    <div>
        {{  minuto }}
    </div>
</template>

<script>

    export default {
        name: 'componentMinutos',
        mounted () {
            this.atualizarMinutos()
            setInterval(this.atualizarMinutos, 1000)
        },
        data () {
            return{
                minuto: ''
            }
        },
        methods: {
            atualizarMinutos(){
                let agora = new Date()
                this.minuto = agora.getMinuts()
            }
        }

    }

</script>


<style>


</style>