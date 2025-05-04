<template>
    <div>
        Component Contador
        <p>Contador: {{ contador }}</p>
        <button @click="somarLocalmente">Somar</button>
        <button @click="subtrairLocalmente">Subtrair</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default{
        name: 'contadorComponents',
        computed: {
            ...mapGetters({
                contador: 'contador'
            })
        }
    }
</script>

<style scoped>

</style>