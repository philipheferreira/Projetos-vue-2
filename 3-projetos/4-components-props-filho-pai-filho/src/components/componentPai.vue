<template>
    <div>
        <component-filho1 />
        <component-filho2 />
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
        }
    }
</script>

<style scoped>

</style>