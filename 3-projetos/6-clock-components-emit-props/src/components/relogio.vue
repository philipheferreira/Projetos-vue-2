<template>
    <div>
        <component-hora />
        <component-minuto />
        <component-segundo :segundoLocal="segundoRelogio" />
    </div>
</template>

<script>
import componentHora from './horas.vue'
import componentMinuto from './minutos.vue'
import componentSegundo from './segundos.vue'

export default {
    name: 'relogioComponent',
    components: {
        componentHora,
        componentMinuto,
        componentSegundo
    },
    data(){
        return{
            horaRelogio: '',
            minutoRelogio: '',
            segundoRelogio: ''
        }
    }
}
</script>

<style>

</style>