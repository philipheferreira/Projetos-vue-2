<template>
    <div>
        <component-hora />
        <component-minuto :minutoLocal="minutoRelogio" @atualizar-minutos-local="minutoRelogio = $event" />
        <component-segundo :segundoLocal="segundoRelogio" @atualizar-segundos-local="segundoRelogio = $event" />

        {{ minutoRelogio }} : {{ segundoRelogio }}
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