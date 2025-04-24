<template>
    <div class="container">
        {{ numero }} - {{ indice }}
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <component-filho>
            
            <h1 slot="opcao2">Titulo da opção 2</h1>
            <h1 slot="opcao1">Titulo da opção 1</h1>
            <h2 slot="opcao1"> {{ citacoes[indice].autor }} </h2>
            <h2 slot="opcao2"> {{ citacoes[indice].textoLocal }} </h2>
            
        </component-filho>
    </div>
</template>

<script>
import ComponentFilho from './ComponentFilho.vue'
export default {
    name: 'ComponentPai',
    components: {ComponentFilho},
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    },
    data() {
        return {
            numero: 0,
            citacoes: [{
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
            }]
        }
    }
}
</script>

<style>

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>