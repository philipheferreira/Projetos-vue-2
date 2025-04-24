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
            let nome = 'Isabella Siqueira Ferrreira'
            barramento.$emit('comando-alterar-nome', nome)
        }
    }
}
</script>

<style>

</style>