<template>
    <div>
        <button @click="subtrairContador">botao subtração</button> <!-- Chamada direta pelo metodo com o botão -->
    </div>
</template>

<script>
    export default {
        name: 'botaoSubComponent',
        props: ['contadorLocal'], // Define que a prop será recebida nesse componente
        methods: {
            subtrairContador(){
                let novoValor = this.contadorLocal - 1; // nova variável criada porque a props não pode ser diretamente modificada a prop
                this.$emit('comando-subtrair-contador', novoValor) // $emit faz a comunicação direta com o component pai, realizando o link es atualizando o valor da variavel no pai
            }
        }
    }
</script>

<style scoped>

</style>