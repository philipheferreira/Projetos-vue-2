<template>
  <div>
    <h1>Minha To-Do List</h1>

    <div>
      <input type="text" v-model="novaTarefaTitulo" placeholder="Digite a tarefa..." />
      <button @click="criarTarefa">Adicionar</button>
    </div>

    <ul>
      <li v-for="tarefa in tarefas" :key="tarefa.id">
        {{ tarefa.titulo }} -
        <span v-if="tarefa.concluida">Concluída</span>
        <span v-else>Pendente</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

// ✅ rota completa
const apiURL = 'https://localhost:7088/api/tarefas';

export default {
  name: 'HelloWorld',
  data() {
    return {
      tarefas: [],
      novaTarefaTitulo: ''
    };
  },
  mounted() {
    this.buscarTarefas();
  },
  methods: {
    async buscarTarefas() {
      try {
        const response = await axios.get(apiURL);
        this.tarefas = response.data;
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    },
    async criarTarefa() {
      if (!this.novaTarefaTitulo.trim()) return;

      try {
        // ✅ o backend espera "titulo" e "concluida"
        const novaTarefa = {
          titulo: this.novaTarefaTitulo,
          concluida: false
        };

        await axios.post(apiURL, novaTarefa);

        this.novaTarefaTitulo = '';
        this.buscarTarefas();
      } catch (error) {
        console.error('Erro ao criar tarefa:', error);
      }
    }
  }
};
</script>