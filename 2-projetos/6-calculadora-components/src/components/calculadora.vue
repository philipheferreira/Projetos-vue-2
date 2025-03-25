<template>
    <div>
        <div class="calculadora">
            <input type="text" v-model="display" disabled/>
            <div class="botoes">
                <button v-for="botao in botoes" :key="botao" @click="pressionar(botao)"> {{ botao }} </button>
                <botao-limpar :displayLocal="display" @metodo-limpar-display="display = $event"></botao-limpar>
                <button @click="calcular">=</button>
                <botaoCalcular :displayLocal="display"></botaoCalcular>
            </div>
        </div>
        <botaoNumero1 :displayLocal="display" @pressionar-botao1="display = $event"></botaoNumero1>
        <botaoNumero2 :displayLocal="display" @pressionar-botao2="display = $event"></botaoNumero2>
        <botaoNumero3 :displayLocal="display" @pressionar-botao3="display = $event"></botaoNumero3>
        <botaoNumero4 :displayLocal="display" @pressionar-botao4="display = $event"></botaoNumero4>
        <botaoNumero5 :displayLocal="display" @pressionar-botao5="display = $event"></botaoNumero5>
        <botaoNumero6 :displayLocal="display" @pressionar-botao6="display = $event"></botaoNumero6>
        <botaoNumero7></botaoNumero7>
        <botaoNumero8></botaoNumero8>
        <botaoNumero9></botaoNumero9>
    </div>
</template>

<script>
import botaoLimpar from './botaoLimpar.vue'
import botaoCalcular from './botaoCalcular.vue'
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
                display: '',
                botoes: ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '+']
            }
        },
        components: {
            botaoLimpar,
            botaoCalcular,
            botaoNumero1,
            botaoNumero2,
            botaoNumero3,
            botaoNumero4,
            botaoNumero5,
            botaoNumero6,
            botaoNumero7,
            botaoNumero8,
            botaoNumero9
        },
        methods: {
            calcular(){
                try {
                    this.display = eval(this.display)
                } catch (e) {
                    this.display = 'erro'
                }
            },
            pressionar(valor){
                this.display += valor
            }
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
        botao {
            font-size: 1.2em;
            padding: 15px;
            cursor: pointer;
        }
</style>