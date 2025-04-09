<!-- Nesse codigo em vez de eu fazer uma conexão direta usando o Props e bind eu optei por usar uma conexão usando
 metodos e chamadas pelo emit. Eu recebo os valores do emit utilizando a recepção de methodos pelo component 
 Linkando um metodo do pai com um metodo do filho, e recebendo os valores dos metodos e repassando para
 variaveis locais no component pai
 
 variavel do component filho recebe valor => valor é repassado pelo emit atraves do metodo filho para o metodo pai => metodo pai repassa valor para variavel pai-->

<template>
    <div>
        <componentHora  @comando-atualizar-horas-local="atualizarHora" /> 
        <componentMinuto @comando-atualizar-minutos-local="atualizarMinutos" />
         <componentSegundo @comando-atualizar-segundos-local="atualizarSegundo"/>
    
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
            atualizarHora(valor){ // o metodo atualizarHora no pai recebe o metodo atualizarHorasLocal do filho pelo emit, recebendo o valor repassado no emit
                this.hora = valor
            },
            atualizarMinutos(valor){ // o metodo atualizarMinuto no pai recebe o metodo atualizarHorasLocal do filho pelo emit, recebendo o valor repassado
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