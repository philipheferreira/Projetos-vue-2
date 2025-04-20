<template>
    <div>
        {{ nomeLocal1 }}

        <button @click="reiniciarNome">Reiniciar Nome</button>
    </div>
</template>

<script>

    export default {
        name: 'componentFilho1',
        props: {
            nomeLocal1: {
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

<style scoped>

</style>