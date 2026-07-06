<template>
  <div id="app">
    <Menu/>
    <router-view/><!-- Ativa os comandos de rotas para essa pagina -->
  </div>
</template>

<script>
import Menu from './components/template/Menu.vue';
export default {
  name: 'App',
  components: {Menu}
}
</script>

<style>
#app {
  display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
