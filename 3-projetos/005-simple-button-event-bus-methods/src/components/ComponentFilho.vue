<template>
    <div>
        <button @click="alterarNome">Alterar Nome</button>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    name: 'componentFilho',
    methods:{
        alterarNome(){
            let nomeLocal = 'Isabella Siqueira Ferrreira'
            barramento.$emit('comando-alterar-nome', nomeLocal)
        }
    }
}
</script>

<style>

</style>