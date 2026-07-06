<template>
  <div>
    <button class="botao" @click="metodoLimparDisplay">C</button>
  </div>
</template>

<script>
export default {
    name: 'botaoLimparComponente',
    props: {
        displayLocal: String
    },
    methods: {
        metodoLimparDisplay(){
            let novoValor = ''
            this.$emit('metodo-limpar-display', novoValor)
        }
    }
}
</script>

<style scoped>

    .botao{
        width: 71.25px;
    }

</style>