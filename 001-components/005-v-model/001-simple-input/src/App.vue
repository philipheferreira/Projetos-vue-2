<template>
  <div id="app">
    <ModalBasic/>
  </div>
</template>

<script>
import ModalBasic from './components/ModalBasic.vue'

export default {
  name: 'App',
  components: {
    ModalBasic
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
