<template>
    <div>
        <button @click="subtrairContador">botao subtração</button>
    </div>
</template>

<script>
    export default {
        name: 'botaoSubComponent',
        props: {
            contadorLocal: Number // Define que a prop esperada é um número
        },
        methods: {
            subtrairContador(){
                let novoValor = this.contadorLocal - 1;
                this.$emit('subtrair-contador', novoValor)
            }
        }
    }
</script>

<style scoped>

</style>