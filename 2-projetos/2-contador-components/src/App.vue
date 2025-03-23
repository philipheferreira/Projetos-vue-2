<template>
  <div id="app">
    <input>
    <div class="botoes">
      <botaoSoma></botaoSoma>
      <botaoSub></botaoSub>
    </div>
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
  color: #2c3e50;
  display: flex;
	flex-direction: column;
	align-items: center;
}
.botoes{
  display: flex;
}
</style>
