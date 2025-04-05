<template>
    <div>
        {{ hora }} : {{ minuto }} : <segundos-component />
    </div>
</template>

<script>
import segundosComponent from './Segundos.vue'
    export default{
        name: 'relogioComponent',
        components: {segundosComponent},
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