<template>
  <div id="app">
    <calculadora></calculadora>
  </div>
</template>

<script>
import Calculadora from './components/calculadora.vue';

export default {
  name: 'App',
  components: {
    Calculadora
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
