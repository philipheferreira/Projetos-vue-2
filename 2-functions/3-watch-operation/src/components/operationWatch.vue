<template>
    <div>

        <p>No Vue 2, a funcionalidade watch é usada para observar e reagir a mudanças em variáveis reativas do componente. 
            Diferente das propriedades computed, que são recalculadas automaticamente, os watchers permitem executar 
            lógica personalizada sempre que um dado for alterado.</p>

        <h3> Operation watch: </h3>

        <div>
            <p>Contador: {{ contador }}</p>
            <button @click="contador++">Incrementar</button>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WatchComponent',
    data() {
        return {
            contador: 0
        }
    },
    watch: {
        contador(novoValor, antigoValor) {
            alert(`O contador mudou de ${antigoValor} para ${novoValor}`)
        }
    }
  }
  </script>
    
<!-- 
Como funciona?
* Quando contador for alterado, o watch detecta a mudança e executa a função associada.
* Ele recebe dois parâmetros: o novo valor e o valor antigo.
  
  -->

<!--

 Quando usar watch?
✅ Para realizar operações assíncronas (como requisições API) quando um valor mudar.
✅ Para monitorar mudanças profundas em objetos e arrays.
✅ Para executar lógica específica ao detectar mudanças de estado.

-->