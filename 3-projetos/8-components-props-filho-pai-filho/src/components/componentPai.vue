<template>
    <div>
        <component-filho1 :nomeLocal1="nome" />
        <component-filho2 :nomeLocal2="nome" />
    </div>
</template>

<script>
import componentFilho1 from './componentFilho1'
import componentFilho2 from './componentFilho2'
    export default {
        name: 'componentPai',
        components: {
            componentFilho1,
            componentFilho2
        },
        data () {
            return{
                nome: 'Philiphe Siqueira Ferreira'
            }
        }
    }
</script>

<style scoped>

</style>