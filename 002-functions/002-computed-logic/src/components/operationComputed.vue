<!--

Como funciona?
Se primeiroNome ou ultimoNome mudar, nomeCompleto será automaticamente atualizado.

Se nomeCompleto for chamado várias vezes sem mudanças nas dependências, ele não será recalculado (por conta do cache).

-->

<template>
    <div>
        <p>No Vue 2, a funcionalidade computed é usada para criar propriedades computadas, que são valores derivados 
          do estado reativo do componente. Diferente das propriedades normais (data), as propriedades computadas são
           reavaliadas automaticamente quando suas dependências mudam e são armazenadas em cache, evitando cálculos 
           desnecessários.</p>
           <br/>
        <h3>Operação: </h3>
        <p>Nome Completo: {{ nomeCompleto }}</p>
        
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        primeiroNome: "Philiphe",
        ultimoNome: "Ferreira"
      }
    },
    computed: {
      nomeCompleto() {
        return `${this.primeiroNome} ${this.ultimoNome}`
      }
    }
  }
  </script>

  <!--

  Quando usar computed? 
  ✅ Quando precisar de um valor derivado de outros dados.
  ✅ Quando precisar evitar cálculos desnecessários para performance.
  ✅ Quando quiser atualizar dados dinamicamente baseado no estado.

  -->