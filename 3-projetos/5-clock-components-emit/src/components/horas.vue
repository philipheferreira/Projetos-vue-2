<template>
    <div>
        {{ horaLocal }}
    </div>
</template>

<script>
    export default{ 
        name: 'componentHora',
        mounted () {
            setInterval(() => {
                this.atualizarHorasLocal()
                this.$emit('atualizar-horas-local', this.horaLocal)
            }, 1000)
        },

        data () {
            return {
                horaLocal: null
            }
        },
        methods: {
            atualizarHorasLocal(){
                let agora = new Date()
                this.horaLocal = agora.getHours()
            }
        }
    }
</script>

<style>


</style>