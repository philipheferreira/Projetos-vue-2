<template>
  <div id="app">
    <ComponentLocal></ComponentLocal> /* Chamada das infomacoes do html no component principal. O component App.vue foi selecionado
    para renderizar a instancia principal do ambiente vue criado para esse projeto */
  </div>
</template>

<script>
import ComponentLocal from '@/components/ComponentLocal.vue'; /* Caminho importado para utilizar o component */

export default {
  name: 'App',
  components: {
    ComponentLocal /* Declaracao do component para realizar a operacao */
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
