<template>
  <div id="app">
    <componente />
  </div>
</template>

<script>
import Componente from './components/operatedComputed'
export default {
  name: 'App',
  components: {Componente}
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
