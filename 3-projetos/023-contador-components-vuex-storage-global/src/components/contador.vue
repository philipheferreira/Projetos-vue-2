<template>
    <div>
        Component Contador
        <p>Contador: {{ contador }}</p>
        <button @click="somarLocalmente">Somar</button>
        <button @click="subtrairLocalmente">Subtrair</button>
    </div>
</template>

<script>
export default {
    name: 'contadorComponent',
    computed: {
        contador() {
            return this.$store.getters.contador
        }
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

<style>

</style>