<template>
    <div>
        <ul>
            <li v-for="(tarefaLocal, index) in listaTarefasLocal" :key="index">
                {{ tarefaLocal }}
                <button @click="removerTarefa(index)">X</button>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'listaComponent',
        props: ['listaTarefasLocal'],
        methods: {
            removerTarefa(index){
                this.$emit('remover-Tarefas', index);
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