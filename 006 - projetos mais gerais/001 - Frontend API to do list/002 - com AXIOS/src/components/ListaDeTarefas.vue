<template>
  <div class="container">
    <h1>📋 Lista de Tarefas</h1>

    <form @submit.prevent="adicionar">
      <input v-model="novaTarefa" type="text" placeholder="Nova tarefa..." />
      <button type="submit">Adicionar</button>
    </form>

    <p v-if="carregando">Carregando...</p>
    <p v-else-if="erro" class="erro">{{ erro }}</p>
    <p v-else-if="tarefas.length === 0">Nenhuma tarefa cadastrada.</p>

    <ul v-else>
      <li v-for="t in tarefas" :key="t.id" :class="{ concluida: t.concluida }">
        <input type="checkbox" :checked="t.concluida" @change="alternar(t)" />
        <span v-if="!t.emEdicao" @dblclick="editar(t)">{{ t.titulo }}</span>
        <input v-else v-model="t.tituloEditado"
               @keyup.enter="salvarEdicao(t)" @keyup.esc="cancelarEdicao(t)" />
        <button class="excluir" @click="deletar(t)">Excluir</button>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  name: 'App',
  data() {
    return {
      tarefas: [],
      novaTarefa: '',
      carregando: false,
      erro: ''
    };
  },
  methods: {
    async carregar() {
      this.carregando = true;
      this.erro = '';
      try {
        const { data } = await api.get('/tarefas');
        this.tarefas = data.map(t => ({ ...t, emEdicao: false, tituloEditado: t.titulo }));
      } catch (e) {
        this.erro = 'Falha ao carregar tarefas.';
      } finally {
        this.carregando = false;
      }
    },
    async adicionar() {
      const titulo = this.novaTarefa.trim();
      if (!titulo) return;
      await api.post('/tarefas', { titulo, concluida: false });
      this.novaTarefa = '';
      await this.carregar();
    },
    async alternar(t) {
      await api.put(`/tarefas/${t.id}`, { titulo: t.titulo, concluida: !t.concluida });
      await this.carregar();
    },
    editar(t) {
      t.tituloEditado = t.titulo;
      t.emEdicao = true;
    },
    cancelarEdicao(t) {
      t.emEdicao = false;
    },
    async salvarEdicao(t) {
      const titulo = t.tituloEditado.trim();
      if (!titulo) return;
      await api.put(`/tarefas/${t.id}`, { titulo, concluida: t.concluida });
      t.emEdicao = false;
      await this.carregar();
    },
    async deletar(t) {
      if (!confirm(`Excluir "${t.titulo}"?`)) return;
      await api.delete(`/tarefas/${t.id}`);
      await this.carregar();
    }
  },
  mounted() {
    this.carregar();
  }
};
</script>

<style>
  body { 
    font-family: system-ui, sans-serif; 
    background: #f4f5f7; 
  }

  .container { 
    max-width: 560px; 
    margin: 40px auto; 
    background: #fff; 
    padding: 24px;
    border-radius: 10px; 
    box-shadow: 0 2px 8px rgba(0,0,0,.08); 
  }
  h1 { 
    margin-top: 0; 
    font-size: 1.4rem; 
  }
  form { 
    display: flex; 
    gap: 8px; 
    margin-bottom: 16px; 
  }

  input[type=text] { 
    flex: 1; 
    padding: 8px 10px; 
    border: 1px solid #ccc; 
    border-radius: 6px; 
  }
  button { 
    cursor: pointer; 
    border: none; 
    border-radius: 6px; 
    padding: 8px 12px;
    background: #2f6fed; 
    color: #fff; 
  }
  button.excluir { 
    background: #e5484d; 
    margin-left: auto; 
  }
  ul { 
    list-style: none; 
    padding: 0; 
    margin: 0; 
  }
  li { 
    display: flex; 
    align-items: center; 
    gap: 10px; 
    padding: 10px 0;
    border-bottom: 1px solid #eee; 
  }
  .concluida span { 
    text-decoration: line-through; 
    color: #999; 
  }
  .erro { 
    color: #e5484d; 
  }
</style>