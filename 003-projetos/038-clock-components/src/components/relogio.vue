<template>
    <div class="relogio">
        <horas-component/> : <minutos-component/> : <segundos-component/>
    </div>
</template>

<script>
import horasComponent from './Horas.vue'
import minutosComponent from './Minutos.vue'
import segundosComponent from './Segundos.vue'
    export default{
        name: 'relogioComponent',
        components: {
            horasComponent,
            minutosComponent,
            segundosComponent
        }
    }

</script>

<style scoped>
    .relogio{
        display: flex;
        justify-content: center;
    }
</style>