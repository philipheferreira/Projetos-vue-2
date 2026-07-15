<template>
    <div class="container">
        <h2>To-Do List</h2>
        <componente-tela @adicionar-tarefas-local="adicionarTarefas"></componente-tela> <!-- Link o valor da nova tarefa local repassando o valor da variavel para o metodo no componente pai -->
        <lista-component :listaTarefasLocal="tarefas" @remover-tarefa-local="removerTarefa"></lista-component>
    </div>
</template>
<script>
import ComponenteTela from './componentesLista/telaComponent.vue'
import ListaComponent from './componentesLista/listaComponent.vue'
    export default {
        name: 'ListaTarefas',
        components: {ComponenteTela, ListaComponent},
        data() {
            return{
                tarefas: ['Comprar Arroz', 'Estudar um pouco de vue', 'Correr 30 minutos']
            }
        },
        methods:{
            adicionarTarefas(novaTarefa){ // O metodo recebe a variavel novaTarefa que vem do componente filho
                this.tarefas.push(novaTarefa); // adiciona o componente filho para dentro da lista local tarefas
            },
            removerTarefa(index) {
                this.tarefas.splice(index, 1);
            }
        }
    };
</script>

<style scoped>

    body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f4f4f4;
    }

    .container {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        width: 300px;
    }

    .receberTarefa{
        margin-top: 10px;
    }

    .botaoMetodoAdicionarTarefas{
        background: red;
        color: white;
        border: none;
        cursor: pointer;
        padding: 3px 7px;
    }

    ul {
        list-style: none; /* Tira os pontos */
         padding: 0;
    }
    li {
        display: flex;
        justify-content: space-between;
        padding: 5px;
        border-bottom: 1px solid #ddd;
    }

</style>