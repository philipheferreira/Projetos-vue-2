<template>
  <div id="app">
    <component-pai />
  </div>
</template>

<script>
import ComponentPai from './components/ComponentPai.vue'
export default {
  name: 'App',
  components: { ComponentPai }
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
