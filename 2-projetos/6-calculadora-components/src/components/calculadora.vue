<template>
    <div>
        <br>
        <div class="calculadora">
        <input type="text" v-model="display" disabled/>
            <div class="botoes">
                <botaoNumero7 :displayLocal="display" @pressionar-botao7="display = $event"/>
                <botaoNumero8 :displayLocal="display" @pressionar-botao8="display = $event"/>
                <botaoNumero9 :displayLocal="display" @pressionar-botao9="display = $event"/>
                <botaoDiv :displayLocal="display" @pressionar-botao-divisao="display = $event"/>
                <botaoNumero4 :displayLocal="display" @pressionar-botao4="display = $event"/>
                <botaoNumero5 :displayLocal="display" @pressionar-botao5="display = $event"/>
                <botaoNumero6 :displayLocal="display" @pressionar-botao6="display = $event"/>
                <botaoMult :display-local="display" @pressionar-botao-multiplicacao="display = $event"/>
                <botaoNumero1 :displayLocal="display" @pressionar-botao1="display = $event"/>
                <botaoNumero2 :displayLocal="display" @pressionar-botao2="display = $event"/>
                <botaoNumero3 :displayLocal="display" @pressionar-botao3="display = $event"/>
                <botaoSub :displayLocal="display" @pressionar-botao-subtracao="display = $event"/>
                <botaoNumero0 :displayLocal="display" @pressionar-botao0="display = $event"/>
                <botaoPonto :displayLocal="display" @pressionar-botao-ponto="display = $event"/>
                <botaoSoma :displayLocal="display" @pressionar-botao-soma="display = $event"/>
                <botao-limpar :displayLocal="display" @metodo-limpar-display="display = $event"/>
                <botaoCalcular :displayLocal="display" @calcular="display = $event"/>
            </div>
        </div>
    </div>
</template>

<script>
import botaoLimpar from './botoesOperacoes/botaoLimpar.vue'
import botaoPonto from './botoesOperacoes/botaoPonto.vue'
import botaoCalcular from './botoesOperacoes/botaoCalcular.vue'
import botaoSoma from './botoesOperacoes/botaoSoma.vue'
import botaoSub from './botoesOperacoes/botaoSubtracao.vue'
import botaoMult from './botoesOperacoes/botaoMultiplicacao.vue'
import botaoDiv from './botoesOperacoes/botaoDivisao.vue'
import botaoNumero0 from './botoesNumeros/botao0.vue'
import botaoNumero1 from './botoesNumeros/botao1.vue'
import botaoNumero2 from './botoesNumeros/botao2.vue'
import botaoNumero3 from './botoesNumeros/botao3.vue'
import botaoNumero4 from './botoesNumeros/botao4.vue'
import botaoNumero5 from './botoesNumeros/botao5.vue'
import botaoNumero6 from './botoesNumeros/botao6.vue'
import botaoNumero7 from './botoesNumeros/botao7.vue'
import botaoNumero8 from './botoesNumeros/botao8.vue'
import botaoNumero9 from './botoesNumeros/botao9.vue'

    export default {
        name: 'calculadoraComponent',
        data () {
            return {
                display: ''
            }
        },
        components: {
            botaoLimpar,
            botaoPonto,
            botaoCalcular,
            botaoSoma,
            botaoSub,
            botaoMult,
            botaoDiv,
            botaoNumero0,
            botaoNumero1,
            botaoNumero2,
            botaoNumero3,
            botaoNumero4,
            botaoNumero5,
            botaoNumero6,
            botaoNumero7,
            botaoNumero8,
            botaoNumero9
        }
    }
</script>

<style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        .calculadora {
            width: 300px;
            padding: 20px;
            background: white;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            text-align: center;
        }
        input {
            width: 100%;
            height: 50px;
            font-size: 1.5em;
            text-align: right;
            margin-bottom: 10px;
            padding: 5px;
        }
        .botoes {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 5px;
        }
</style>