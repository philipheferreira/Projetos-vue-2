<template>
  <div id="app">
    <app-pai /> <!-- O component está sendo chamado globalmente. ele foi criado globalmente no arquivo main -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
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
