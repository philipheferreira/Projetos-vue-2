<template>
    <div>
        <component nomeLocal="Philiphe Ferreira" :is="componentNome" />
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
        }
    }
}
</script>

<style>

</style>