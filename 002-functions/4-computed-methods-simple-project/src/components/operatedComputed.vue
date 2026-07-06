<template>
    <div class="container">
        {{ numero }} - {{ indice }}
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>

        <h2>{{ citacoes[indice].autor }}</h2>
        <h2>{{ citacoes[indice].textoLocal }}</h2>
    </div>
</template>

<script>
    export default{
        name: 'componentProject',
        computed: {
            indice() {
                return Math.abs(this.numero % 3)
            }
        },
        data() {
            return{
                numero: 0,
                citacoes: [
                    {
                        fonte: 'Jornal do Empreendedor',
                        textoLocal: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                        autor: 'Margaret Mead'
                    }, { 
                        fonte: 'Frases de Mãe',
                        textoLocal: 'Isso não é um quarto, é um chiqueiro.',
                        autor: 'Roberta'
                    }, {
                        fonte: 'Frases de Pai',
                        textoLocal: 'Vou contar até 3! 1, 2, 2...',
                        autor: 'Gustavo'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

