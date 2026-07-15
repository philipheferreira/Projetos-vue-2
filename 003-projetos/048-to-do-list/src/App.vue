<template>
  <div id="app">
    <lista></lista>
  </div>
</template>

<script>
import Lista from './components/list.vue'
export default {
  name: 'App',
  components: {
    Lista
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
