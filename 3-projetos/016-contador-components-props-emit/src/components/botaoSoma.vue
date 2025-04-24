<template>
    <div>
        <button @click="adicionarContador">Botão Soma</button> <!-- Chamada direta do metodo local pelo botão -->
    </div>
</template>

<script>
    export default {
        name: 'botaoSomaComponent',
        props: ['contadorLocal'], // Define que a prop será recebida nesse componente
        methods: {
            adicionarContador(){
                let novoValor = this.contadorLocal + 1; // nova variável criada porque a props não pode ser diretamente modificada a prop
                this.$emit('comando-adicionar-contador', novoValor); // $emit faz a comunicação direta com o component pai, realizando o link e atualizando o valor da variavel no pai
            }
        }
    }
</script>

<style scoped>

</style>