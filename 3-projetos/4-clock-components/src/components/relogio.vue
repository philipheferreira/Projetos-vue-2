<template>
    <div>
        <horas-component/> : <minutos-component/> : <segundos-component/>
    </div>
</template>

<script>
import horasComponent from './Horas.vue'
import minutosComponent from './Minutos.vue'
import segundosComponent from './Segundos.vue'
    export default{
        name: 'relogioComponent',
        components: {
            horasComponent,
            minutosComponent,
            segundosComponent
        },
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