<template>
    <div>
        <componentHora/> : <componentMinuto/> : <componentSegundo/>
    </div>
</template>

<script>
import componentHora from './horas.vue'
import componentMinuto from './minutos.vue'
import componentSegundo from './segundos.vue'

    export default {
        name: 'componentRelogio',
        components: {
            componentHora,
            componentMinuto,
            componentSegundo
        },
        data () {
            return{

            }
        }
    }

</script>

<style>


</style>