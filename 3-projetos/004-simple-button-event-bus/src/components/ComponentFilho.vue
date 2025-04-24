<template>
    <div>
        <button @click="alterarNome">Alterar Nome</button>
    </div>
</template>

<script>
import barramento from '@/barramento' // o Arroba significa que vai linkar com a raiz do projeto, que é o src
export default {
    name: 'componentFilho', // não precisa criar a aba props pois o barramento está fazendo a comunicação, não precisa fazer a ponta de resposta do props
    methods:{
        alterarNome(){
            let nomeLocal = 'Isabella Siqueira Ferrreira'
            barramento.$emit('comando-alterar-nome', nomeLocal) /* em vez de usar o this para selecionar a propria estancia, eu seleciono barramento pois é ele que será o canal
            para enviar o emit com o resultado da variavel */
        }
    }
}
</script>

<style>

</style>