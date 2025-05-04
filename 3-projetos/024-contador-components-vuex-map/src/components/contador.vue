<template>
    <div>
        Component Contador
        <p>Contador: {{ contadorLocal }}</p>
        <p>Contador Mais: {{ contadorMaisLocal }}</p>
        <p>Contador Menos: {{ contadorMenosLocal }}</p>
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
                contadorLocal: 'contador',
                contadorMaisLocal: 'contadorMais',
                contadorMenosLocal: 'contadorMenos'
            })
        },
        methods: {
            somarLocalmente() {
                this.$store.dispatch('somar')
            },
            subtrairLocalmente() {
                this.$store.dispatch('subtrair')
            }
        }
    }
</script>

<style scoped>

</style>