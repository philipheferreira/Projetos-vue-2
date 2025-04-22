<template>
    <div class="container">
        <h2>To-Do List</h2>
        <input class="receberTarefa" v-model="novaTarefa" @keyup.enter="adicionarTarefas" placeholder="Nova tarefa"/>
        <button class="botaoMetodoAdicionarTarefas" @click="adicionarTarefas">Adicionar tarefas</button>
        <ul>
            <li v-for="(tarefa, index) in tarefas" :key="tarefa.id">
                {{ index + 1 }} - {{ tarefa }}
                <button @click="removerTarefa(index)">X</button>
            </li>
        </ul>
        
        <component-tela :algoFn="adicionarTarefas" />
        <lista-component :algoFn="receberTarefa" />
    </div>
</template>

<script>
import ComponentTela from './componentsLista/telaComponent.vue'
import ListaComponent from './componentsLista/listaComponent.vue'
export default {
    name: "listComponent",
    components: {ComponentTela, ListaComponent},
    methods: {
        adicionarTarefas(){
            if(this.novaTarefa.trim() !== ''){
                this.tarefas.push(this.novaTarefa)
                this.novaTarefa = ''
            }else if(this.novaTarefa.trim() == ''){
                alert('Por favor digite uma tarefa para ser adicionada')
            }
        },
        removerTarefa(index){
            this.tarefas.splice(index, 1)
        }
    }
}
</script>

<style>

    
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