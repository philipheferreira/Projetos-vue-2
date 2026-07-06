<!--

    🆚 Computed vs Methods
🔹 Computed: O resultado é armazenado em cache e só recalculado quando necessário.
🔹 Methods: Sempre executa o código ao ser chamado, sem cache.
-->

<template>
    <div>
        <h3>Operação: </h3>
        <p>Nome Completo pelo Computed: {{ nomeCompleto }}</p>
        <p>Nome Completo pelo Method: {{ nomeCompletoMethodo }}</p>

    </div>
</template>

<script>

    export default {
        name: 'computedComponent',
        computed: {
            nomeCompleto() {
                return `${this.primeiroNome} ${this.ultimoNome}`
            }
        },
        data() {
            return{
                primeiroNome: "Philiphe",
                ultimoNome: "Ferreira"
            }
        },
        methods: { //Aqui, a função nomeCompleto() será chamada toda vez que for usada no template, mesmo sem mudanças nos dados.
            nomeCompletoMethodo() {
                return `${this.primeiroNome} ${this.ultimoNome}`;
            }
        }
    }

</script>

<style>



</style>