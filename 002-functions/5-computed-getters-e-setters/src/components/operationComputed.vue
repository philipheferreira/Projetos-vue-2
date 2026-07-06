
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
        }
    }

</script>

<style>



</style>