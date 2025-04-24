<template>
    <div>
        <component-filho :nomeLocal="nome" @comando-alterar-nome="nome = $event"/>
        {{ nome }}
    </div>
</template>

<script>
import ComponentFilho from './ComponentFilho.vue'
export default {
    name: 'componentPai',
    components: {
        ComponentFilho
    },
    data () {
        return {
            nome: 'Philiphe Siqueira Ferreira'
        }
    }
}
</script>

<style>

</style>