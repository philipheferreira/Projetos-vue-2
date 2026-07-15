<template>
    <div>
        <component-hora :horaLocal="horaRelogio" @comando-atualizar-horas-local="horaRelogio = $event"/>
        <component-minuto :minutoLocal="minutoRelogio" @comando-atualizar-minutos-local="minutoRelogio = $event" />
        <component-segundo :segundoLocal="segundoRelogio" @comando-atualizar-segundos-local="segundoRelogio = $event" />

        {{ horaRelogio }} : {{ minutoRelogio }} : {{ segundoRelogio }}
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