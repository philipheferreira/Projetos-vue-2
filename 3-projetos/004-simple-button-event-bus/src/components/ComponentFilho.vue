<template>
    <div>
        <button @click="alterarNome">Alterar Nome</button>
    </div>
</template>

<script>
//import barramento from '@/barramento'
export default {
    name: 'componentFilho',
    props: {
        nomeLocal: String
    },
    methods:{
        alterarNome(){
            let nome = 'Isabella Siqueira Ferrreira'
            this.$emit('comando-alterar-nome', nome)
        }
    }
}
</script>

<style>

</style>