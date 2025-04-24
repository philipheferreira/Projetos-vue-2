<template>
  <div id="app">
    <pai />
  </div>
</template>

<script>
import pai from './components/componentPai'
export default {
  name: 'App',
  components: {pai}
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
