<template>
    <div>
        <componentHora @atualizar-horas-local="atualizarHora
        "  /> : <componentMinuto /> : <componentSegundo @atualizar-segundos-local="atualizarSegundo"/>
    </div>
</template>

<script>
import componentHora from './horas.vue'
import componentMinuto from './minutos.vue'
import componentSegundo from './segundos.vue'

    export default {
        name: 'componentRelogio',
        components: {
            componentHora,
            componentMinuto,
            componentSegundo
        },
        methods: {
            atualizarHora(valor){
                this.hora = valor
            },
            atualizarSegundo(valor) {
                this.segundo = valor
            }
        }
    }

</script>

<style>


</style>