<template>
    <div>
        <component-filho :infoFilho="infoPai"/> <!-- Bindando o valor do pai para o filho receber -->
    </div>
</template>

<script>
import componentFilho from './componentFilho.vue'
export default {
    name: 'componentPai',
    components: {componentFilho},
    data () {
        return{
            infoPai: 'essa informação vai do pai para o filho' // criando variavel no pai
        }
    }
}
</script>

<style>

</style>