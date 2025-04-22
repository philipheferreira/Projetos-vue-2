<template>
<div>
    {{ nomeLocal2 }}

    <button @click="reiniciarNome">Reiniciar Nome</button>
</div>
</template>

<script>

    export default {
        name: 'componentFilho2',
        props: {
            nomeLocal2: {
                type: String,
                required: true
            }
        },
        methods: {
            reiniciarNome(){
                let novoValorNome = 'Philiphe Siqueira Ferreira'
                this.$emit('comando-reiniciar-nome', novoValorNome)
            }
        }
    }

</script>

<style>


</style>