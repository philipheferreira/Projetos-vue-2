<template>
    <div>
        {{ hora }} : {{ minuto }} : {{ segundo }}
    </div>
</template>

<script>

    export default{
        name: 'relogioComponent',
        mounted() {
            this.atualizarRelogio() // Atualiza imediatamente ao montar o componente
                setInterval(this.atualizarRelogio, 1000) // Atualiza a cada segundo
        },
        data () {
            return{
                hora: '',
                minuto: '',
                segundo: ''
            }
        },
        methods: { 
            atualizarRelogio() {
                let agora = new Date()
                this.hora = agora.getHours()
                this.minuto = agora.getMinutes()
                this.segundo = agora.getSeconds()
            }
        }
    }

</script>

<style>

</style>