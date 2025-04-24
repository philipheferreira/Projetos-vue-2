<template>
  <div id="app">
    <component-pai /> <!-- Componente sendo chamado na aplicação e apresentado -->
  </div>
</template>

<script>
import componentPai from './components/componentPai' // componente pai sendo importado e selecionado no caminho
export default {
  name: 'App',
  components: { componentPai } // Componente sendo incluso para uso e nomeado
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
