<template>
    <div>
        <h1>Contador: {{ contador }}</h1>
        <button @click="incrementar">Incrementar</button>
        <button @click="decrementar">Decrementar</button>
        <button @click="resetar">Resetar</button>
    </div>
</template>

<script>
    export default{
        name: 'contadorComponent',
        data() {
            return{
                contador: 0
            }
        },
        methods: {
            incrementar() {
                this.contador++;
            },
            decrementar() {
                this.contador--;
            },
            resetar() {
                this.contador = 0;
            }
        }
    }
</script>

<style scoped>

</style>