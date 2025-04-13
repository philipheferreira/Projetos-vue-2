<template>
<div>

    <filho1 />
    <filho2 />

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

            }
        }
    }

</script>


<style>


</style>