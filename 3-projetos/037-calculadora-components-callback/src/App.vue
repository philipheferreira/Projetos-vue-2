<template>
  <div id="app">
    <calculadora />
  </div>
</template>

<script>
import calculadora from './components/calculadora'

export default {
  name: 'App',
  components: {calculadora}
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
