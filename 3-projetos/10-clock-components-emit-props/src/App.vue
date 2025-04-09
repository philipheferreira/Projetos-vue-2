<template>
  <div id="app">
    <relogio-component />
  </div>
</template>

<script>
import relogioComponent from './components/relogio.vue'
export default {
  name: 'App',
  components: {relogioComponent}
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
