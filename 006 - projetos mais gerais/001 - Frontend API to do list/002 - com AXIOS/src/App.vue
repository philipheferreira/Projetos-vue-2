<template>
  <div id="app">
    <ListaDeTarefas/>
  </div>
</template>

<script>
import ListaDeTarefas from './components/ListaDeTarefas.vue'

export default {
  name: 'AppPrincipal',
  components: {
    ListaDeTarefas
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
