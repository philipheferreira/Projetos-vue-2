<template>
  <div id="app">
    <contador-component />
  </div>
</template>

<script>
import ContadorComponent from './components/contador.vue'
export default {
  name: 'App',
  components: {ContadorComponent}
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
