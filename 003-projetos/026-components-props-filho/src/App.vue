<template>
  <div id="app">
    <component-pai /> <!-- Chamando o component pai -->
  </div>
</template>

<script>
import componentPai from './components/componentPai.vue' // importando component
export default {
  name: 'App',
  components: {componentPai} // declarando component no vue
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
