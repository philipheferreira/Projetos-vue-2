<template>
  <div id="app">
    <formulario-tabela />
  </div>
</template>

<script>
import formularioTabela from './components/formularioTabela.vue'

export default {
  name: 'App',
  components: {
    formularioTabela
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
