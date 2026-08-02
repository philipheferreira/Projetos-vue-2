<template>
  <div>
    <label>Seu nome: </label>
    <input type="text" v-model="nome" placeholder="Digite seu nome">
    
    <p>Olá, {{ nome }}!</p> <!-- Atualiza conforme você digita -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: '' // Começa vazio
    }
  }
}
</script>