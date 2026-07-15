<template>
  <div id="app">
    <Relogio></Relogio>
  </div>
</template>

<script>
import Relogio from './components/relogio.vue'
export default {
  name: 'App',
  components: {
    Relogio
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
