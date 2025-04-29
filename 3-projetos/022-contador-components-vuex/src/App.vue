<template>
  <div id="app">
    <ComponentContador />
  </div>
</template>

<script>
import ComponentContador from './components/contador.vue'
export default {
  name: 'App',
  components: {
    ComponentContador
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
