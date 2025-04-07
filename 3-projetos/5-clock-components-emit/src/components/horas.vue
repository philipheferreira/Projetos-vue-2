<template>
    <div>
        {{ hora }}
    </div>
</template>

<script>
    export default{ 
        name: 'componentHora',
        mounted () {
            this.atualizarHorasLocal()
            setInterval(() => {
                this.$emit('atualizar-horas-local', this.hora)
            }, 1000)
        },

        data () {
            return {
                hora: null
            }
        },
        methods: {
            atualizarHorasLocal(){
                let agora = new Date()
                this.hora = agora.getHours()
            }
        }
    }
</script>

<style>


</style>