<template>
  <div id="app">
    <h2>Contador: {{ contador }}</h2>
    <div class="botoes">
      <botaoSoma :somaFn="adicionarContador" />
      <botaoSub :subFn="subtrairContador" />
    </div>
  </div>
</template>

<script>
import botaoSoma from './components/botaoSoma'
import botaoSub from './components/botaoSub'

export default {
  name: 'App',
  components: {botaoSoma, botaoSub},
  data () {
    return{
      contador: 0
    }
  },
  methods: {
    adicionarContador(){
      this.contador++
    },
    subtrairContador(){
      this.Contador--
    }
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
