<template>
    <div>
        <div class="calculadora">
            <div class="botoes">

            </div>
        </div>
    </div>
</template>

<script setup>
    export default {
        name: 'calculadoraComponentCallback',
        data () {
            return{
                display: ''
            }
        }
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