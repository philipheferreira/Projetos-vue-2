<template>
  <div>
    <h1>Minha To-Do List</h1>
    
    <div>
      <input type="text" v-model="novaTarefaTitle" placeholder="Digite a tarefa..." />
      <button @click="criarTarefa">Adicionar</button>
    </div>

    <ul>
      <li v-for="tarefa in tarefas" :key="tarefa.id">
        {{ tarefa.title }} - 
        <span v-if="tarefa.isCompleted">Concluída</span>
        <span v-else>Pendente</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

// A URL base do seu backend C#
const apiURL = 'https://localhost:7057/api/todoitems';

export default {
  data() {
    return {
      tarefas: [],
      novaTarefaTitle: ''
    };
  },
  mounted() {
    // Quando o componente carregar, busca as tarefas
    this.buscarTarefas();
  },
  methods: {
    async buscarTarefas() {
      try {
        // Faz o GET no seu backend C#
        const response = await axios.get(apiURL);
        this.tarefas = response.data;
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    },
    async criarTarefa() {
      if (!this.novaTarefaTitle) return;

      try {
        // O C# espera um objeto com "title" e "isCompleted"
        const novaTarefa = {
          title: this.novaTarefaTitle,
          isCompleted: false
        };

        // Faz o POST no seu backend C#
        await axios.post(apiURL, novaTarefa);
        
        // Limpa o input e atualiza a lista
        this.novaTarefaTitle = '';
        this.buscarTarefas();
      } catch (error) {
        console.error("Erro ao criar tarefa:", error);
      }
    }
  }
};
</script>