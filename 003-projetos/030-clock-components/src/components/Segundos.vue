<template>
    <div>
        {{ segundo }}
    </div>
</template>

<script>


    export default{
        name: 'componentSegundos',
        mounted (){
            this.atualizarSegundos()
            setInterval(this.atualizarSegundos, 1000)
        },
        data () {
            return{
                segundo: ''
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