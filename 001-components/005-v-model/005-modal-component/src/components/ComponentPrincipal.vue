<template>
  <div>
    <h1>Teste de Modal com v-model</h1>
    
    <button @click="modalAberto = true">Abrir Modal</button>

    <!-- 
      A mágica acontece aqui! 
      O v-model aqui vai passar a variável 'modalAberto' como a prop 'value' do Modal.
      E vai ficar escutando o evento 'input' para atualizar essa variável.
    -->
    <Modal v-model="modalAberto" titulo="Cadastro de Usuário">
      
      <!-- Tudo que está aqui dentro vai para o <slot> do componente Modal -->
      <!-- Repare que o v-model normal funciona perfeitamente aqui dentro! -->
      <form @submit.prevent="salvar">
        <label>Nome:</label>
        <input type="text" v-model="nomeDigitado" placeholder="Digite seu nome">
        
        <br><br>
        
        <button type="submit">Salvar</button>
      </form>
      
    </Modal>

  </div>
</template>

<script>
// Importe o componente Modal
import Modal from './ModalFilho.vue';

export default {
  components: {
    Modal
  },
  data() {
    return {
      modalAberto: false, // Controla a visibilidade
      nomeDigitado: ''    // O v-model do input lá de dentro
    }
  },
  methods: {
    salvar() {
      console.log("Salvando nome: ", this.nomeDigitado);
      alert(`Nome ${this.nomeDigitado} salvo com sucesso!`);
      this.modalAberto = false; // Fecha o modal após salvar
      this.nomeDigitado = '';   // Limpa o input
    }
  }
}
</script>