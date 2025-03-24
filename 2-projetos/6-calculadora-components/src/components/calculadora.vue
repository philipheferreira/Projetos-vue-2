<template>
    <div>
        <div class="calculadora">
            <input type="text" v-model="display" disabled/>
            <div class="botoes">
                <button v-for="botao in botoes" :key="botao" @click="pressionar(botao)"> {{ botao }} </button>
                <botao-limpar :displayLocal="display" @metodo-limpar-display="display = $event"></botao-limpar>
                <button @click="calcular">=</button>
            </div>
        </div>
    </div>
</template>

<script>
import botaoLimpar from './botaoLimpar.vue'
    export default {
        name: 'calculadoraComponent',
        data () {
            return {
                display: '',
                botoes: ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '+']
            }
        },
        components: {botaoLimpar},
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