<template>
    <div>
        <componentHora  @atualizar-horas-local="atualizarHora" /> 
        <componentMinuto @atualizar-minutos-local="atualizarMinutos" />
         <componentSegundo @atualizar-segundos-local="atualizarSegundo"/>
    
    {{ hora }} : {{ minuto }} : {{ segundo }}
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
        data() {
            return {
                hora: '',
                minuto: '',
                segundo: ''
            }
        },
        methods: {
            atualizarHora(valor){
                this.hora = valor
            },
            atualizarMinutos(valor){ // recebendo o valor da variavel minutoLocal e repassando para a variavel minuto
                this.minuto = valor
            },
            atualizarSegundo(valor) {
                this.segundo = valor
            }
        }
    }

</script>

<style>


</style>