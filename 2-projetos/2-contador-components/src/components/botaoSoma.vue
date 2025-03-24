<template>
    <div>
        <button @click="adicionarContador">Botão Soma</button>
    </div>
</template>

<script>
    export default {
        name: 'botaoSomaComponent',
        data () {
            return{ 

            }
        },
        props: {
            contadorLocal: Number
        },
        methods: {
            adicionarContador(){/* eslint-disable */
                let novoValor = this.contadorLocal + 1;
                this.$emit('adicionar-contador', novoValor);
            }
        }
    }
</script>

<style scoped>

</style>