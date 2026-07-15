<template>
  <div id="app">
    <lista />
  </div>
</template>

<script>
import lista from './components/list.vue'
export default {
  name: 'App',
  components: {lista}
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
