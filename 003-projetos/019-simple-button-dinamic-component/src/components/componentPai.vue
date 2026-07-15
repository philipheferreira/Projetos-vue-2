<template>
    <div>
        <component :nomeLocal="nome" :is="componentNome" /> <!-- Component tem uma chamada geral, 
        o is seleciona o component entre os pre existentes, que no caso é a variavel componentNome que dentro
        dela possui o ComponentFilho -->
    </div>
</template>

<script>
import ComponentFilho from './ComponentFilho.vue'
export default {
    name: 'ComponentPai',
    components: {ComponentFilho},
    data () {
        return{ 
            componentNome: 'ComponentFilho',
            nome: 'Philiphe Siqueira Ferreira' 
        }
    }
}
</script>

<style>

</style>