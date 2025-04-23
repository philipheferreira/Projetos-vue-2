<template>
  <div id="app">
  </div>
</template>

<script>
import botaoReset from './components/botaoReset.vue'
import botaoSub from './components/botaoSub.vue'
import botaoSoma from './components/botaoSoma.vue'
export default {
  name: 'App',
  components: {
    botaoReset,
    botaoSub,
    botaoSoma
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
