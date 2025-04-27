<template>
  <div id="app">
    <operation-created></operation-created>
  </div>
</template>

<script>
import operationCreated from './components/operationCreated.vue';
export default {
  name: 'App',
  components: {operationCreated}
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
