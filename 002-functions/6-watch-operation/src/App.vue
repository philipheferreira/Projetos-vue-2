<template>
  <div id="app">
    <operation-watch></operation-watch>
  </div>
</template>

<script>
import operationWatch from './components/operationWatch.vue';
export default {
  name: 'App',
  components: {operationWatch}
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
