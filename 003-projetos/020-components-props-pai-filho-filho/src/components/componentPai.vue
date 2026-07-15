<template>
<div>

    <button @click="alterarNome" >Alterar Nome</button>

    <filho1 :nomeLocal1="nome" @comando-reiniciar-nome="nome = $event"/>
    <filho2 :nomeLocal2="nome" @comando-reiniciar-nome="nome = $event"/>

</div>
</template>

<script>
import filho1 from './componentFilho1'
import filho2 from './componentFilho2'

    export default {
        name: 'componentPai',
        components: {
            filho1,
            filho2
        },
        data () {
            return{
                nome: 'Philiphe Siqueira Ferreira'
            }
        },
        methods: {
            alterarNome(){
                this.nome = "Jó Soares"
            }
        }
    }

</script>


<style>


</style>