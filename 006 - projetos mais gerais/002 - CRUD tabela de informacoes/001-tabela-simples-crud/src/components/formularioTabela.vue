<template>
  <div id="app" class="container">
    <h1>CRUD de Pessoas</h1>

    <!-- FORMULÁRIO -->
    <div class="form-card">
      <h2>{{ editIndex === -1 ? 'Adicionar Nova Pessoa' : 'Editar Pessoa' }}</h2>
      <form @submit.prevent="salvar">
        <div class="form-grid">
          <div class="form-group">
            <label for="nome">Nome *</label>
            <input id="nome" v-model="pessoa.nome" type="text" required placeholder="Ex: João" />
          </div>
          
          <div class="form-group">
            <label for="sobrenome">Sobrenome *</label>
            <input id="sobrenome" v-model="pessoa.sobrenome" type="text" required placeholder="Ex: da Silva" />
          </div>

          <div class="form-group">
            <label for="idade">Idade</label>
            <input id="idade" v-model.number="pessoa.idade" type="number" min="0" placeholder="Ex: 25" />
          </div>

          <div class="form-group">
            <label for="telefone">Telefone</label>
            <input id="telefone" v-model="pessoa.telefone" type="text" placeholder="Ex: (11) 99999-9999" />
          </div>

          <div class="form-group form-full">
            <label for="profissao">Profissão</label>
            <input id="profissao" v-model="pessoa.profissao" type="text" placeholder="Ex: Desenvolvedor" />
          </div>

          <div class="form-group form-full">
            <label for="sobre">Sobre</label>
            <textarea id="sobre" v-model="pessoa.sobre" rows="3" placeholder="Escreva um pouco sobre a pessoa..."></textarea>
          </div>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn-save">
            {{ editIndex === -1 ? 'Salvar' : 'Atualizar' }}
          </button>
          <button v-if="editIndex !== -1" type="button" @click="cancelar" class="btn btn-cancel">
            Cancelar
          </button>
        </div>
      </form>
    </div>

    <!-- TABELA DE DADOS -->
    <div class="table-card">
      <h2>Lista de Pessoas</h2>
      
      <div v-if="pessoas.length === 0" class="empty-state">
        Nenhuma pessoa cadastrada ainda.
      </div>

      <table v-else>
        <thead>
          <tr>
            <th>Nome Completo</th>
            <th>Idade</th>
            <th>Telefone</th>
            <th>Profissão</th>
            <th>Sobre</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p, index) in pessoas" :key="p.id">
            <td>{{ p.nome }} {{ p.sobrenome }}</td>
            <td>{{ p.idade || '-' }}</td>
            <td>{{ p.telefone || '-' }}</td>
            <td>{{ p.profissao || '-' }}</td>
            <td class="td-sobre">{{ p.sobre || '-' }}</td>
            <td>
              <button @click="editar(index)" class="btn-icon edit">✏️ Editar</button>
              <button @click="excluir(index)" class="btn-icon delete">🗑️ Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CrudPessoas',
  data() {
    return {
      // Array que guarda as pessoas (faz o papel do banco de dados por enquanto)
      pessoas: [
        {nome: 'Philiphe', sobrenome: 'Fereira', idade: 25, telefone: 91983355994, profissao: 'Desenvolvedor'},
        {nome: 'Felipe', sobrenome: 'Wanzeller', idade: 25, telefone: 9198387551274, profissao: 'Escritor'}
      ],
      // Objeto que é vinculado ao formulário
      pessoa: {
        id: null,
        nome: '',
        sobrenome: '',
        idade: null,
        telefone: '',
        profissao: '',
        sobre: ''
      },
      // Variável para controlar se estamos criando (-1) ou editando (índice do array)
      editIndex: -1
    };
  },
  methods: {
    // CREATE e UPDATE
    salvar() {
      // Validação básica
      if (!this.pessoa.nome || !this.pessoa.sobrenome) {
        alert('Por favor, preencha o nome e o sobrenome.');
        return;
      }

      if (this.editIndex === -1) {
        // CREATE: Adiciona uma nova pessoa gerando um ID único
        this.pessoa.id = Date.now();
        this.pessoas.push({ ...this.pessoa });
      } else {
        // UPDATE: Atualiza a pessoa existente no array
        // O Vue 2 requer o $set ou splice para garantir a reatividade em índices específicos,
        // mas como estamos substituindo o objeto inteiro, o splice funciona perfeitamente.
        this.pessoas.splice(this.editIndex, 1, { ...this.pessoa });
      }

      this.limparFormulario();
    },

    // READ (Preparar para o UPDATE)
    editar(index) {
      // Pega a pessoa do array e joga no formulário
      // Usamos o spread operator (...) para criar uma cópia e não alterar o original direto
      this.pessoa = { ...this.pessoas[index] };
      this.editIndex = index;
      
      // Rola a tela para cima para o usuário ver o formulário
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    // DELETE
    excluir(index) {
      if (confirm(`Tem certeza que deseja excluir ${this.pessoas[index].nome}?`)) {
        this.pessoas.splice(index, 1);
        
        // Se a pessoa excluída era a que estava sendo editada, limpa o formulário
        if (this.editIndex === index) {
          this.limparFormulario();
        }
      }
    },

    // Utilitário para limpar o formulário e resetar o estado
    limparFormulario() {
      this.pessoa = {
        id: null,
        nome: '',
        sobrenome: '',
        idade: null,
        telefone: '',
        profissao: '',
        sobre: ''
      };
      this.editIndex = -1;
    },

    cancelar() {
      this.limparFormulario();
    }
  }
};
</script>

<style scoped>
/* Estilos básicos para deixar a interface bonitinha */
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}

h2 {
  color: #333;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.form-card, .table-card {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  margin-bottom: 30px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.form-full {
  grid-column: 1 / -1;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 0.9rem;
  color: #555;
}

.form-group input,
.form-group textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #42b983;
  outline: none;
}

.form-actions {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  color: #fff;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.8;
}

.btn-save {
  background-color: #42b983; /* Verde Vue */
}

.btn-cancel {
  background-color: #95a5a6;
}

/* Tabela */
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f8f9fa;
  font-size: 0.9rem;
  color: #555;
}

.td-sobre {
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.btn-icon {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  padding: 5px;
  border-radius: 4px;
  transition: background 0.2s;
}

.btn-icon.edit {
  color: #2980b9;
}

.btn-icon.delete {
  color: #e74c3c;
}

.btn-icon:hover {
  background: #f0f0f0;
}

.empty-state {
  text-align: center;
  color: #888;
  padding: 30px;
  font-style: italic;
}

/* Responsividade */
@media (max-width: 600px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>