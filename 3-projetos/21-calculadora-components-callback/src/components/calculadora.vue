<template>
    <div>
        <div class="calculadora">
            <input type="text" v-model="display" disabled />
            <div class="botoes">
                <botao-numero7 :pressionarFn="pressionar"/>
                <botao-numero8 :pressionarFn="pressionar"/>
                <botao-numero9 :pressionarFn="pressionar"/>
                <botao-numero4 :pressionarFn="pressionar"/>
                <botao-numero5 :pressionarFn="pressionar"/>
                <botao-numero6 :pressionarFn="pressionar"/>
                <botao-numero1 :pressionarFn="pressionar"/>
                <botao-numero2 :pressionarFn="pressionar"/>
                <botao-numero3 :pressionarFn="pressionar"/>
                <botao-numero0 :pressionarFn="pressionar"/>
            </div>
        </div>
    </div>
</template>

<script>
import botaoNumero0 from './botoesNumeros/botao0'
import botaoNumero1 from './botoesNumeros/botao1'
import botaoNumero2 from './botoesNumeros/botao2'
import botaoNumero3 from './botoesNumeros/botao3'
import botaoNumero4 from './botoesNumeros/botao4'
import botaoNumero5 from './botoesNumeros/botao5'
import botaoNumero6 from './botoesNumeros/botao6'
import botaoNumero7 from './botoesNumeros/botao7'
import botaoNumero8 from './botoesNumeros/botao8'
import botaoNumero9 from './botoesNumeros/botao9'


    export default {
        name: 'calculadoraComponent',
        components: {
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
        },
        data () {
            return{
                display: ''
            }
        },
        methods: {
            calcular(){
                try {
                    this.display = eval(this.display)
                } catch (e) {
                    this.display = 'erro'
                }
            },
            limpar(){
                this.display = ''
            },
            pressionar(valor){
                this.display += valor
            }
        }
    }
</script>

<style scoped>
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