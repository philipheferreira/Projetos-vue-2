/*

Por que você NÃO deveria fazer isso no Vue?
Embora funcione, quebrar o padrão de Props e Emits do Vue traz várias desvantagens:

1. Perda de Rastreabilidade (O maior problema): O Vue possui uma ferramenta incrível 
chamada Vue DevTools (uma extensão do navegador). Quando você usa $emit, o DevTools 
mostra claramente: "O filho emitiu o evento X com o valor Y". Se você usar callback, 
o DevTools não entende isso como uma comunicação entre componentes, ele apenas vê 
uma função sendo executada no escopo global. Isso torna debugar projetos grandes 
um pesadelo.

2. Mistura de Dados com Ações: O padrão do Vue dita que Props servem para 
passar DADOS (strings, arrays, objetos) e Events servem para passar AÇÕES 
(clicou, digitou, apagou). Quando você passa uma função via prop, você está 
quebrando essa regra clara de arquitetura.

3. Acoplamento Forte: O $emit é como se o filho gritasse para um quarto escuro: 
"Alguém apagou o item 1!". Ele não sabe e não se importa quem vai tratar isso. 
O callback obriga o filho a saber que existe uma função específica no pai e a 
chamá-la diretamente, criando um acoplamento forte entre eles.

*/


<template>
    <div class="container">
        <h2>To-Do List</h2>
        <componente-tela :adicionarTarefasLocalCallback="adicionarTarefas"></componente-tela> <!-- O component pai utiliza a callback para linkar a tarefa daqui com o callback no filho -->
        <lista-component :listaTarefasLocal="tarefas" :removerTarefaLocalCallback="removerTarefa"></lista-component>
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