<template>
  <div id="app">
    <botaoSoma></botaoSoma>
    <botaoSub></botaoSub>
  </div>
</template>

<script>
import botaoSoma from './components/botaoSoma.vue'
import botaoSub from './components/botaoSub.vue';
export default {
  name: 'App',
  components: {
    botaoSoma, 
    botaoSub
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
