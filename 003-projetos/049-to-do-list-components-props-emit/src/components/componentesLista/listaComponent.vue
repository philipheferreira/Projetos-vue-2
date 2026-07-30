/*
    Sobre o fluxo de props do lista tarefa:
    :listaTarefasLocal="tarefas": Está sendo colocado a variável tarefas 
    (que existe no pai) e empacotando ela para mandar pro filho. O filho 
    vai recebê-la com o nome de listaTarefasLocal. Isso é o Props 
    Down (dados descem).

    Sobre o removerTarefa (Pai) e removerTarefaLocal (Filho):

    No Vue, um componente filho NUNCA pode alterar o dado de um componente pai diretamente. O filho não pode fazer um splice no array do pai.

    Por causa dessa regra, o fluxo de remoção que você fez funciona assim, passo a passo:

    1-No Filho (listaComponent.vue): O usuário clica no botão "X". Esse botão chama o 
    método removerTarefaLocal.
    2-O grito do Filho: O que o método removerTarefaLocal faz? Ele não apaga nada! 
    Ele apenas usa o this.$emit('remover-tarefa-local', index). Ele está "gritando" 
    para o pai: "Ei pai, o usuário clicou para remover o item que está no índice X!". 
    Isso é o Events Up (eventos sobem).
    
    3-No Pai (lista.vue): O pai está escutando esse grito através do @remover-tarefa-local. 
    Quando ele ouve esse grito, ele diz: *"Opa, quando meu filho gritar isso, eu quero que 
    você execute o meu método chamado removerTarefa"*.

    4-A ação do Pai: Aí sim, o método removerTarefa (que está no pai e tem acesso à variável 
    tarefas) é executado, fazendo o this.tarefas.splice(index, 1) e deletando a tarefa de 
    verdade.
    
    */

<template>
    <div>
        <ul>
            <li v-for="(tarefaLocal, index) in listaTarefasLocal" :key="index">
                {{ tarefaLocal }}
                <button @click="removerTarefaLocal(index)">X</button>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'listaComponent',
        props: ['listaTarefasLocal'],
        methods: {
            removerTarefaLocal(index){
                this.$emit('remover-tarefa-local', index); /* Essa funcao repassa */
            }
        }
    }

</script>

<style scoped>

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