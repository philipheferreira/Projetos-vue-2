/* 

*/

<template>
    <div>
        Eu sou o component pai
        <ComponentFilho></ComponentFilho>
    </div>
</template>

<script>
import ComponentFilho from './ComponentFilho.vue';

    export default{
        name: 'componentPai',
        components: {
            ComponentFilho
        }
    }
</script>

<style lang="scss" scoped>

</style>