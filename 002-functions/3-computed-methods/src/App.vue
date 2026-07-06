<template>
  <div id="app">
    <operationComputed></operationComputed>
  </div>
</template>

<script>
import operationComputed from './components/operationComputed.vue';
export default {
  name: 'App',
  components: {operationComputed}
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
