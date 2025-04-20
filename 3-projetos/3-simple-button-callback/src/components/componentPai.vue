<template>
    <div>
        alguma coisa pai
        <component-filho></component-filho>
    </div>
</template>

<script>
    import componentFilho from './componentFilho'
    export default{
        name:'componentPai',
        components: {componentFilho}
    }

</script>

<style scoped>

</style>