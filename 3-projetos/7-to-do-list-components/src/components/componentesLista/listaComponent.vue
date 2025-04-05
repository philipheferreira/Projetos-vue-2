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
                this.$emit('remover-tarefa-local', index);
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