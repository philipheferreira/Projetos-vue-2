<template>
    <div>
        {{ hora }}
    </div>
</template>

<script>

    export default {
        name: 'componentHoras',
        mounted () {
            this.atualizarHoras()
            setInterval(this.atualizarHoras, 1000)
        },
        data () {
            return{
                hora: ''
            }
        },
        methods: {
            atualizarHoras(){
                let agora = new Date()
                this.hora = agora.getHours()
            }
        }
    }

</script>

<style>



</style>