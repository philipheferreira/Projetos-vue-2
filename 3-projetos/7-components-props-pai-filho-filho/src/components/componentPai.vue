<template>
<div>

    <filho1 :nomeLocal1="nome" />
    <filho2 :nomeLocal2="nome" />

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
        }
    }

</script>


<style>


</style>