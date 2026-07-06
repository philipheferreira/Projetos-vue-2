<template>
  <div id="app">
    <contador-components/>
  </div>
</template>

<script>
import ContadorComponents from './components/contador.vue'
export default {
  name: 'App',
  components: {ContadorComponents}
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
