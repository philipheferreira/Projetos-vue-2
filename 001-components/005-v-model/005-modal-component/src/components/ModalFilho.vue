<template>
  <!-- O v-if garante que o modal só existe no DOM se 'value' for true -->
  <div v-if="value" class="modal-overlay" @click.self="fecharModal">
    
    <div class="modal-conteudo">
      <div class="modal-cabecalho">
        <h3>{{ titulo }}</h3>
        <button @click="fecharModal" class="botao-fechar">X</button>
      </div>
      
      <!-- O slot é onde o conteúdo de dentro do modal vai aparecer -->
      <div class="modal-corpo">
        <slot>Conteúdo padrão do modal.</slot>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  // No Vue 2, o v-model de um componente espera a prop 'value'
  props: {
    value: {
      type: Boolean,
      default: false
    },
    titulo: {
      type: String,
      default: 'Título do Modal'
    }
  },
  methods: {
    fecharModal() {
      // No Vue 2, para atualizar o v-model do pai, emitimos o evento 'input'
      this.$emit('input', false);
    }
  }
}
</script>

<style scoped>
/* Estilos básicos para o modal funcionar visualmente */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-conteudo {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.modal-cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.botao-fechar {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #666;
}
</style>