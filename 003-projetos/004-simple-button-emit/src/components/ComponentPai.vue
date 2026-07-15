<template>
    <div>
        Eu sou o componente pai
        <ComponentFilho></ComponentFilho>
    </div>
</template>

<script >
import ComponentFilho from './componentFilho.vue';

    export default{
        name: 'ComponentPai',
        components:{
            ComponentFilho
        }
    }
</script>

<style lang="scss" scoped>

</style>