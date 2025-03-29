<!-- Quando usar o mounted?
Para buscar dados de uma API logo após o componente ser renderizado.

Para manipular o DOM diretamente, caso necessário.

Para inicializar bibliotecas de terceiros que dependem do DOM, como gráficos ou carrosséis. -->

<template>
    <div>
        <h5>No Vue 2, a funcionalidade mounted é um hook do ciclo de vida que é 
            chamado assim que o componente é inserido no DOM. Ele é utilizado 
            para executar código logo após a montagem do componente, como 
            requisições a APIs, manipulação do DOM ou configuração de eventos.</h5>
        <h1>{{ message }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: "Carregando..."
      };
    },
    mounted() {
      // Simulando uma requisição assíncrona
      setTimeout(() => {
        this.message = "Componente montado!";
      }, 2000);
    }
  };
  </script>