<template>
  <div id="app">
    <component-pai />
  </div>
</template>

<script>
import componentPai from './components/componentPai.vue'
export default {
  name: 'App',
  components: {componentPai}
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
