<template>
  <div id="app">
    <Menu/>
    <!-- Envolve o router-view para controlar o espaço do conteúdo -->
    <div class="conteudo-principal">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from './template/Menu.vue';
export default {
  name: 'App',
  components: {Menu}
}
</script>

<style>
/* Reseta o corpo da página */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: row; /* Coloca Menu e Conteúdo lado a lado */
  min-height: 100vh; /* Ocupa toda a altura da tela */
}

/* Área onde o inicio.vue e usuario.vue vão aparecer */
.conteudo-principal {
  flex: 1; /* Ocupa todo o espaço restante que o menu não ocupou */
  padding: 20px;
  background-color: #f4f4f4;
}

/* No celular, o conteúdo volta a ocupar 100% pois o menu flutua por cima */
@media (max-width: 767px) {
  .conteudo-principal {
    width: 100%;
  }
}
</style>
